
import { axiosInstance } from "../utility/axios"
export async function getAlljobs (){
    return axiosInstance.get(`job`)
    .then((response) => response.data)
    .catch((error) => error)
}

export async function addJob (param){
    var data = new FormData();
    for (const key in param) {
        if (param[key]) {
            data.append(key, param[key]);
            
        }
    }
    return axiosInstance.post(`job/add`, data)
    .then((response) => response.data)
    .catch((error) => error)
}
export async function updateJob (param){
    var data = new FormData();
    for (const key in param) {
        if (param[key]) {
            data.append(key, param[key]);
            
        }
    }
    return axiosInstance.put(`job/update`, data)
    .then((response) => response.data)
    .catch((error) => error)
}
export async function deleteJob (param){
    return axiosInstance.delete(`job/${param.id}`)
    .then((response) => response.data)
    .catch((error) => error)
}