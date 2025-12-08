import axios from "axios";
import api from "./api";
import config from "@/config";

async function createProduct(data){
    return await api.post(`/api/products/`,data);
}

async function updateProduct(id,data){
    return await api.put(`/api/products/${id}`,data);
}

async function deleteProduct(id){
    return await api.delete(`/api/products/${id}`);
}

async function getProducts(searchParams){
    return await axios.get(`${config.apiUrl}/api/products?${searchParams}`);
}

async function getProductById(id){
    return await axios.get(`${config.apiUrl}/api/products/${id}`);
}


export { getProducts,getProductById,createProduct,updateProduct,deleteProduct };