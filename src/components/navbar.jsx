"use client"
import React from 'react'
import Navlinks from '@/constants/navlinks'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const NavbarMenu = () => {
      const pathname=usePathname();

  return (
          <nav className="hidden md:flex gap-5">
            {
                Navlinks.map((navlink)=>{
                  const isActive= pathname==navlink.route ||
                  navlink.route!="/" && pathname.startsWith(navlink.route);
                  return(
                    <Link
                    key={navlink.route}
                    href={navlink.route} className={`text-sm hover:text-primary ${isActive?"text-secondary":""}`}>{navlink.label}</Link>
                  );              
})
            }

          </nav>
  )
}

export default NavbarMenu