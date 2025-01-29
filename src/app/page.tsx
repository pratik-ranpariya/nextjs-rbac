"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { STRAPI_URL } from "@/lib/api";
import axios from "axios";
import BlogPage from "./blog/page";

const Home = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    // Check if token exists and redirect if true
    const token = localStorage.getItem("token");
    if (token) {
      router.push("/dashboard/articles");
    }
  }, [router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `${STRAPI_URL}/api/auth/local`,
        {
          identifier: email,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.data.jwt) {
        localStorage.setItem("token", response.data.jwt);
        router.push("/dashboard/articles");
      }
    } catch {
      setError("Login failed. Please try again.");
    }
  };

  return (
    <>
    <BlogPage />
    </>
    // <div className="flex items-center justify-center min-h-screen bg-gray-100">
    //   <div className="w-full max-w-sm p-6 bg-white shadow-md rounded-lg">
    //     <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
    //       Login
    //     </h1>
    //     {error && (
    //       <div className="mb-4 text-sm text-center text-red-600">{error}</div>
    //     )}
    //     <form onSubmit={handleSubmit}>
    //       <div className="mb-4">
    //         <label
    //           htmlFor="email"
    //           className="block text-sm font-medium text-gray-700"
    //         >
    //           Email
    //         </label>
    //         <input
    //           id="email"
    //           type="email"
    //           value={email}
    //           onChange={(e) => setEmail(e.target.value)}
    //           required
    //           className="w-full px-3 py-2 mt-1 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
    //         />
    //       </div>
    //       <div className="mb-4">
    //         <label
    //           htmlFor="password"
    //           className="block text-sm font-medium text-gray-700"
    //         >
    //           Password
    //         </label>
    //         <input
    //           id="password"
    //           type="password"
    //           value={password}
    //           onChange={(e) => setPassword(e.target.value)}
    //           required
    //           className="w-full px-3 py-2 mt-1 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
    //         />
    //       </div>
    //       <button
    //         type="submit"
    //         className="w-full px-4 py-2 text-sm font-semibold text-white bg-green-500 rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
    //       >
    //         Login
    //       </button>
    //     </form>
    //   </div>
    // </div>
  );
};

export default Home;
