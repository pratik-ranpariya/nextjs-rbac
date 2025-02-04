import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import axios from "axios";

const STRAPI_URL = process.env.NEXT_PUBLIC_API_URL;

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Strapi",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Please provide both email and password");
        }

        try {
          const response = await axios.post(
            `${STRAPI_URL}/api/auth/local`,
            {
              identifier: credentials.email,
              password: credentials.password,
            },
            {
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
              },
            }
          );

          const data = response.data;

          if (data?.jwt && data?.user) {
            return {
              id: String(data.user.id),
              name: data.user.username,
              email: data.user.email,
              jwt: data.jwt,
            };
          }

          return null;
        } catch (error) {
          if (axios.isAxiosError(error)) {
            const errorMessage =
              error.response?.data?.error?.message || "Invalid credentials";
            throw new Error(errorMessage);
          }
          throw new Error("Authentication failed");
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        // Type assertion since we know our user object includes jwt from credentials
        token.jwt = (user as any).jwt;
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      session.jwt = token.jwt as string | undefined;
      if (session.user) {
        session.user.id = token.id as string;
      }
      return session;
    },
  },
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  pages: {
    signIn: "/auth/signin",
    error: "/auth/error",
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
