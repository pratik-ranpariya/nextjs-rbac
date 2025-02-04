import "next-auth";

declare module "next-auth" {
  interface Session {
    jwt?: string;
    user: {
      id: string;
      name?: string | null;
      email?: string | null;
      image?: string | null;
    };
  }
}
