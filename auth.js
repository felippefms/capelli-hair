import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
import Facebook from "next-auth/providers/facebook"

import SpringbootAdapter from './adapters/springboot'

export const {
  handlers: { GET, POST },
  auth, useSession,
} = NextAuth({
  // adapter: SpringbootAdapter,
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    }),
    Facebook],
})