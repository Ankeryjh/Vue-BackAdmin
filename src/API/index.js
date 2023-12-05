import http from "@/tools/request";

export const getData = () => {
    return http.get('/home/getData')
}
export const  getUser = () =>{
    return http.get('/user/gerUser')
}
export const createUser = () =>{
    return http.post('/user/creat')
}
