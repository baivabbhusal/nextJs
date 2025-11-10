"use client"
import { toggleTheme } from "@/redux/userPreferences/userPreferenceSlice"
import { useState } from "react"
import { RxSun } from "react-icons/rx";
import { BsMoonStars } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux"
import { LIGHT_THEME } from "@/constants/theme";

const ToggleTheme = () => {
    const dispatch=useDispatch();
    const {theme}=useSelector((state)=>state.userPreferences);
    
  return (
    <button onClick={()=>{
        dispatch(toggleTheme());
    }}>
        {theme ==LIGHT_THEME?<RxSun />:<BsMoonStars />}
       
    </button>
  )
}

export default ToggleTheme
