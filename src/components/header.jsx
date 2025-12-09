"use client"
import React from 'react'
import Logo from './logo'
import NavbarMenu from './navbar'
import { BsCart3 } from "react-icons/bs";
import AuthMenu from './AuthMenu';
import ToggleTheme from './ToggleTheme'

const Header = () => {
  return (
     <header className="shadow sticky top-0 bg-white z-50 dark:bg-slate-800 dark:text-white">
  <div className='w-full bg-primary h-4'></div>
  <div className="container mx-auto p-2">
    <div className="flex justify-between items-center">
        <Logo/>
        <NavbarMenu />

      <div className="flex items-center gap-3">
        <div className="text-sm">
        <BsCart3 />
        
        </div>
         <ToggleTheme />
        <AuthMenu />
      </div>
    </div>
  </div>
</header>

  )
}

export default Header