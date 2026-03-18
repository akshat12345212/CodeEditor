import  Github  from "next-auth/providers/github"
import Google from "next-auth/providers/google"
import type {NextAuthConfig} from "next-auth"
export default {
    providers:[
        Github({
            clientId:process.env.AUTH_GITHUB_CLIENT_ID,
            clientSecret:process.env.AUTH_GITHUB_CLIENT_SECRET,
        }),
        Google({
            clientId:process.env.AUTH_GOOGLE_CLIENT_ID,
            clientSecret:process.env.AUTH_GOOGLE_CLIENT_SECRET,
        }),
    ]
} satisfies NextAuthConfig;

