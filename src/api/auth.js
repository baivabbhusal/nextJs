import axios from "axios";
import config from "../config";

async function login({email,password}){
    return await axios.post(`${config.apiUrl}/api/auth/login`,{
        email,
        password,
    })
}
export { login };