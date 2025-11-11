"use client"
import React from 'react'
import { LOGIN_ROUTE } from '@/constants/routes'
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import { useState,useEffect } from 'react';
import { useSelector } from 'react-redux';

const AuthMenu = () => {
  const {user}=useSelector((state)=>state.auth);
     
     function logout(){     }


    if(user) return(
    <button className='text-sm text-secondary border-secondary border-2 rounded-3xl px-4 py-1 hover:bg-secondary hover:text-white transition' onClick={logout}>Log Out</button>
    );

  return (
            <Link href={LOGIN_ROUTE} className="text-sm text-secondary border-secondary border-2 rounded-3xl px-4 py-1 hover:bg-secondary hover:text-white transition">
          Login
        </Link>
  )
}

export default AuthMenu;