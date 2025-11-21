import axios from "axios";
import config from "@/config";

async function getProducts(){
    return axios.get(`${config.apiUrl}/api/products`)
}

async function getProductById(id){
    return await axios.get(`${config.apiUrl}/api/products/${id}`)
}

async function createProduct(data,authToken){
    return await axios.post(`${config.apiUrl}/api/products/`,data,{
        headers:{
            Authorization:`Bearer ${authToken}`
        }
    })
}
export { getProducts,getProductById,createProduct };