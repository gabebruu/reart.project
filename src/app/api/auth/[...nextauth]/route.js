import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { connectDB } from "@/database/connection";
import User from "@/database/models/User";

const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),

        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                await connectDB();

                const user = await User.findOne({ email: credentials.email }).lean();
                if (!user) throw new Error("User not found");

                const match = await bcrypt.compare(credentials.password, user.password);
                if (!match) throw new Error("Incorrect password");

                return { id: user._id, email: user.email, name: user.name };
            },
        }),
    ],

    session: { strategy: "jwt" },

    callbacks: {
        async session({ session, token }) {
            session.user.id = token.sub;
            return session;
        },
    },

    pages: {
        signIn: "/",
    },
});

export { handler as GET, handler as POST };