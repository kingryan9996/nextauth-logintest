import { NextApiHandler } from 'next';
import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

//초기화
const authHandler: NextApiHandler = (req, res) => NextAuth(req, res, options);
export default authHandler;

// interface GoogleProfile {
//     clientID:any;
//     clientSecret:any;
// }

const options = {
  providers: [
  	//구글 provider 정의    
    GoogleProvider({
      clientId: "637819733718-t3ollho02peav1rg8hgals750rejaill.apps.googleusercontent.com",
      clientSecret: "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",
    }),
  ],
};