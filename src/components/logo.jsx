import React from 'react'
import Link from 'next/link'
import logo from "@/assets/images/loginDesign/logo.png"
import config from '@/config';

const Logo = () => {
  const { appName }=config;
  const appNameParts=appName.split(" ");
  return (
          <Link href="#" className="text-xl">
        <div className="flex items-center justify-start font-semibold hover:font-bold w-40">
          <span className="text-primary">{appNameParts[0]}</span>
          <span className="text-secondary">{appNameParts[1]}</span>
          
        </div>
      </Link>
  )
}

export default Logo