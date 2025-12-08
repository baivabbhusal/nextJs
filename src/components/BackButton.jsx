"use client"
import { useRouter } from 'next/navigation'
import React from 'react'
import { IoArrowBackOutline } from "react-icons/io5";

const BackButton = () => {
    const router=useRouter();
    function back(){
        router.back();
    }

  return (

<button onClick={back}>
<IoArrowBackOutline />
    </button>
  )
}

export default BackButton
