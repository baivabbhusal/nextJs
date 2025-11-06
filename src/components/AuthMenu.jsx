"use client"
import React from 'react'
import { LOGIN_ROUTE } from '@/constants/routes'
import Link from 'next/link'
import { useRouter } from 'next/router'

const AuthMenu = () => {
    const authToken=localStorage.getItem("authToken");
     const router=useRouter();
     function logout(){
        localStorage.removeItem("authToken");
        router.push(LOGIN_ROUTE);

     }
    if(authToken) return(
    <button  onClick={logout} className='bg-secondary p-2 '>Log Out</button>
    );
  return (
            <Link href={LOGIN_ROUTE} className="text-sm text-secondary border-secondary border-2 rounded-3xl px-4 py-1 hover:bg-secondary hover:text-white transition">
          Login
        </Link>
  )
}

export default AuthMenu