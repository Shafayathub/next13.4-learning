import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import { connectToDB } from '@utils/database';
import User from '@models/user';

const handler = NextAuth({
  Providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  async session({ session }) {},
  async signIn({ profile }) {
    try {
      await connectToDB();
      //   Check if user is alreaddy signed in
      const userExists = await User.findOne({ email: profile.email });
      //   If no user create a new user
      if (!userExists) {
        await User.create({
          email: profile.email,
          username: profile.name.replace(' ', '').toLowerCase(),
          image: profile.picture,
        });
      }
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  },
});
export { handler as GET, handler as POST };
