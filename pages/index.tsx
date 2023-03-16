import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { signIn,signOut,useSession } from 'next-auth/react';
import { useRouter } from 'next/router';

const inter = Inter({ subsets: ['latin'] })

type img = {
  src:string;
}

export default function Home() {
  const {data,status} = useSession();

  const router = useRouter();
  console.log(router);

console.log(data,"데이타")
console.log(status,'스테이터스')

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <p>status: {status}</p>
        <p>{data?.user?.name}</p>
        <img src={data?.user?.image}/>
        {data?.user ? (
          <button type="button" onClick={() => signOut()}>            
            Google Logout
          </button>
        ) : (
          <button type="button" onClick={() => signIn("google")}>
            Google Login
          </button>
        )}
      </main>
    </>
  )
}
