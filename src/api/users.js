'use client'
import config from "@/config";
import axios from "axios";
 
const authToken=localStorage.getItem("authToken");
async function getAllUsers() {
    console.log(authToken)
   return await axios.get(`${config.apiUrl}/api/users`,{
    headers:{
        authorization:`Bearer ${authToken}`
    },
   });

}

export {getAllUsers}
