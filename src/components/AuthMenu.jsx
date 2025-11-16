"use client"
import React from 'react'
import { LOGIN_ROUTE } from '@/constants/routes'
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import { useState,useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '@/redux/auth/authslice';

const AuthMenu = () => {
  const {user}=useSelector((state)=>state.auth);
  const dispatch=useDispatch();
  const router=useRouter();

  function logoutUser(){
    dispatch(logout());
    router.push(LOGIN_ROUTE)
  }
    if(user) return(
    <button className='text-sm text-secondary border-secondary border-2 rounded-3xl px-4 py-1 hover:bg-secondary hover:text-white transition' onClick={logoutUser }>Log Out</button>
    );

  return (
            <Link href={LOGIN_ROUTE} className="text-sm text-secondary border-secondary border-2 rounded-3xl px-4 py-1 hover:bg-secondary hover:text-white transition">
          Login
        </Link>
  )
}

export default AuthMenu;