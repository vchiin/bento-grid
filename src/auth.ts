import NextAuth, { AuthOptions, getServerSession } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { login } from "./actions/login";

const options: AuthOptions = {
  pages: {
    signIn: "/login",
  },
  providers: [
    Credentials({
      id: "credentials",
      credentials: {
        email: {
          label: "Email",
          type: "string",
        },
        password: {
          label: "Password",
          type: "string",
        },
      },
      authorize: async (credentials) => {
        if (!credentials) {
          throw new Error("wtf");
        }

        return login(credentials);
      },
    }),
  ],
};

export default NextAuth(options);
export const auth = () => getServerSession(options);
