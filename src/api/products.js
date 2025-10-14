import axios from "axios";
import config from "@/config";
async function getProducts(){
    return axios.get(`${config.apiUrl}/api/products`)
}

async function getProductById(id){
    return await axios.get(`${config.apiUrl}/api/products/${id}`)
}
export { getProducts,getProductById };