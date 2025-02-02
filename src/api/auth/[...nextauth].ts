import NextAuth, { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import axios from "axios";
import { JWT } from "next-auth/jwt";
import { Session } from "next-auth";

interface User {
  jwt: string;
  id: string;
  name?: string;
  email?: string;
  image?: string;
}

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Strapi",
      credentials: {
        identifier: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        try {
          const response = await axios.post(
            `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/auth/local`,
            {
              identifier: credentials?.identifier,
              password: credentials?.password,
            }
          );
          const user = response.data;
          return user ? { ...user.user, jwt: user.jwt } : null;
        } catch (error) {
          return console.log(error);
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }: { token: JWT; user: User | null }) {
      if (user) {
        token.jwt = user.jwt;
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }: { session: Session; token: JWT }) {
      if (token) {
        session.user = {
          name: session.user?.name,
          email: session.user?.email,
          image: session.user?.image,
        };
      }
      return session;
    },
  },
  pages: {
    signIn: "/auth/signin",
  },
  secret: process.env.NEXTAUTH_SECRET,
};

export default NextAuth(authOptions as unknown as AuthOptions);
