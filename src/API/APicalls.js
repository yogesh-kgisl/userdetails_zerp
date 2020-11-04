import Axios from "axios"

export const getdata = ()=>{
    return Axios.get("https://jsonplaceholder.typicode.com/users")
}

export const getdataforid = (value)=>{
    return Axios.get("https://jsonplaceholder.typicode.com/posts/"+value)
}