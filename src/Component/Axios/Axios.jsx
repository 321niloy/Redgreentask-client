import axios from "axios";



const Axios =axios.create({
    baseURL:"http://localhost:5000"
})

export default Axios;
// Axios.interceptors.request.use((request)=>{
//     request.headers.Authorization = "bearer niloy" // `bearer ${localstorage.getItem("token")}`;
//     request.headers["email"]="niloyn670@gmail.com"
//     console.log("from main .jsx request",request)
//     return request
// })
Axios.interceptors.response.use((response)=>{
// console.log("from response jsx ",response); 
return response.data
},
(error)=>{
    console.log(error)
    error.response.data['data pai nye']
    return Promise.reject(error)
}
)