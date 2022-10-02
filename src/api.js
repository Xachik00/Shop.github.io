import { API_URL } from "./config";

const getAllCategiries=async()=>{
    const response=await fetch(API_URL + 'categories');
    return response.json();
}

const getFilteredCategory=async(name)=>{
    const response=await fetch(API_URL + name);
    return response.json();
}

const getMillById=async(name,id)=>{
    const response=await fetch(API_URL + name+'/'+id);
    return response.json();
}

export {getAllCategiries,getFilteredCategory,getMillById}