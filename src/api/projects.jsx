
import { axiosInstance } from "../utility/axios"
export async function getAlljobs (){
    return axiosInstance.get(`job`)
    .then((response) => response.data)
    .catch((error) => error)
}