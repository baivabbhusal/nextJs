import React from 'react'
import Link from 'next/link'
import Logo from './logo'
import NavbarMenu from './navbar'
import { LOGIN_ROUTE } from '@/constants/routes'
import { BsCart3 } from "react-icons/bs";

const Header = () => {
  return (
     <header className="shadow sticky top-0 bg-white z-50">
  <div className="container mx-auto p-4">
    <div className="flex justify-between items-center">
        <Logo />
        <NavbarMenu />

      <div className="flex items-center gap-3">
        <div className="text-sm">
        <BsCart3 />
         
        </div>
        <Link href={LOGIN_ROUTE} className="text-sm text-secondary border-secondary border-2 rounded-3xl px-4 py-1 hover:bg-secondary hover:text-white transition">
          Login
        </Link>
      </div>
    </div>
  </div>
</header>

  )
}

export default Header