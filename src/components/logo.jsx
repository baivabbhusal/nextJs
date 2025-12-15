import React from 'react'
import Link from 'next/link'
import logo from "@/assets/images/loginDesign/logo.png"
import config from '@/config';

const Logo = ({className}) => {
  const { appName }=config;
  const appNameParts=appName.split(" ");
  return (
          <Link href="#" className="text-xl">
        <div className={`flex items-center justify-start font-bold hover:font-extrabold w-40 ${className}`}>
          <span className="text-primary">{appNameParts[0]}</span>
          <span className="text-secondary">{appNameParts[1]}</span>
          
        </div>
      </Link>
  )
}

export default Logo