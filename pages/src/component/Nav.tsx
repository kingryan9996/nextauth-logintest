import React from 'react'
import {useRouter} from 'next/router'

const Nav = () => {
    const router = useRouter();
  return (
    <div>
        네비게이션바
        <button onClick={()=>{router.push('/')}}>Home</button>
        <button onClick={()=>{router.push('/sub01')}}>서브01</button>
        <button onClick={()=>{router.push('/sub02')}}>02서브</button>
    </div>
  )
}

export default Nav