import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';
import allowSingleSession from 'nx';

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID || '',
      clientSecret: process.env.GITHUB_SECRET || '',
    }),
  ],

  // add callbacks
  callbacks: {
    async jwt({ token, account }: { token: any; account?: any }) {
      token = allowSingleSession(token, account, 10000);
      return token;
    },

    async session({ session, token }: { session: any; token: any }) {
      session.authenticated = token.authenticated;
      return session;
    },
  },
};

export default NextAuth(authOptions);
