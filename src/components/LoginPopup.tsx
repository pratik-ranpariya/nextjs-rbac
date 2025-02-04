"use client";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import axios from "axios";

interface LoginPopupProps {
  isOpen: boolean;
  onClose: () => void;
  mode: "login" | "signup";
}

interface ErrorResponse {
  error: string;
  status: number;
}

export default function LoginPopup({ isOpen, onClose, mode }: LoginPopupProps) {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    username: "", // Add for signup
  });
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (mode === "signup" && formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      if (mode === "login") {
        const result = await signIn("credentials", {
          email: formData.email,
          password: formData.password,
          redirect: false,
        });

        if (result?.error) {
          setError(result.error);
          return;
        }

        if (result?.ok) {
          router.push("/dashboard");
          router.refresh();
          onClose();
        }
      } else {
        // For signup, using axios
        try {
          const response = await axios.post(
            `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/auth/local/register`,
            {
              username: formData.username,
              email: formData.email,
              password: formData.password,
            },
            {
              headers: {
                "Content-Type": "application/json",
              },
            }
          );

          // After successful registration, sign in automatically
          const result = await signIn("credentials", {
            email: formData.email,
            password: formData.password,
            redirect: false,
          });

          if (result?.ok) {
            router.push("/dashboard");
            router.refresh();
            onClose();
          }
        } catch (error) {
          if (axios.isAxiosError(error)) {
            setError(
              error.response?.data?.error?.message || "Registration failed"
            );
          } else {
            setError("An unexpected error occurred");
          }
        }
      }
    } catch (err) {
      if (axios.isAxiosError(err)) {
        setError(err.response?.data?.error?.message || "Authentication failed");
      } else {
        setError("An unexpected error occurred");
      }
    }
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-300 ${
        isOpen ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
    >
      {/* Background Overlay */}
      <div
        className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
        onClick={onClose}
      />
      {/* Login Panel */}
      <div
        className={`relative bg-white w-full max-w-md mx-4 shadow-2xl transform transition-all duration-300 ${
          isOpen ? "scale-100 translate-y-0" : "scale-95 translate-y-8"
        }`}
      >
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900">
              {mode === "login" ? "Login" : "Sign Up"}
            </h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-red-600 transition-colors"
            >
              <FaTimes className="w-6 h-6" />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {mode === "signup" && (
              <div>
                <label
                  htmlFor="username"
                  className="block text-sm font-medium text-gray-700"
                >
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  value={formData.username}
                  onChange={(e) =>
                    setFormData({ ...formData, username: e.target.value })
                  }
                  className="mt-1 w-full px-4 py-3 bg-gray-50 text-gray-900 focus:outline-none focus:ring-2 focus:ring-red-500"
                  required
                />
              </div>
            )}

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="mt-1 w-full px-4 py-3 bg-gray-50 text-gray-900 focus:outline-none focus:ring-2 focus:ring-red-500"
                required
                autoFocus
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
                className="mt-1 w-full px-4 py-3 bg-gray-50 text-gray-900 focus:outline-none focus:ring-2 focus:ring-red-500"
                required
              />
            </div>

            {mode === "signup" && (
              <div>
                <label
                  htmlFor="confirmPassword"
                  className="block text-sm font-medium text-gray-700"
                >
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      confirmPassword: e.target.value,
                    })
                  }
                  className="mt-1 w-full px-4 py-3 bg-gray-50 text-gray-900 focus:outline-none focus:ring-2 focus:ring-red-500"
                  required
                />
              </div>
            )}

            <button
              type="submit"
              className="w-full px-8 py-4 bg-red-600 text-white hover:bg-red-700 transition-colors text-lg font-semibold"
            >
              {mode === "login" ? "Login" : "Sign Up"}
            </button>
          </form>

          {error && (
            <div className="mt-4 text-sm text-red-600 text-center">{error}</div>
          )}
        </div>
      </div>
    </div>
  );
}
