export const STRAPI_URL = process.env.NEXT_PUBLIC_API_URL;

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
