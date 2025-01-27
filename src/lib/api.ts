const STRAPI_URL = process.env.NEXT_PUBLIC_API_URL;

export interface BlogData {
  title: string;
  content: string;
}

export interface LoginResponse {
  jwt: string;
  user: {
    id: number;
    username: string;
    email: string;
  };
}

export const loginUser = async (identifier: string, password: string): Promise<LoginResponse> => {
  const res = await fetch(`${STRAPI_URL}/api/auth/local`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ identifier, password }),
  });
  if (!res.ok) throw new Error('Invalid credentials');
  return res.json();
};


//for logout user
export const logoutUser =  () => {
  console.log("Here ")
  try {
    // Remove JWT from localStorage or cookies
    localStorage.removeItem("token");
    sessionStorage.removeItem("userData");

    // Redirect to login page
    window.location.href = "/";
  } catch (error) {
    console.error("Error logging out:", error);
  }
}

