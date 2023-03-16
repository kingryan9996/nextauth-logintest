import React from 'react'
import { signIn, useSession } from 'next-auth/react';
import { signOut } from "next-auth/react"
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const Login = () => {

  const { status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/login');
    }
  }, [status]);
  
  return (
    <>Login
    
    <button onClick={() => signOut(
			{
                callbackUrl: `/login`,
            }
		)}
	>
    로그아웃
</button>



    
    </>
  )
}

export default Login