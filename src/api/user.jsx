import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { axiosInstance } from '../utility/axios';
export async function userLogin (data){
    return await axios.get(`users/login?name=${data.email}&password=${data.password}`)
    .then((response) => response.data)
    .catch((error) => error);
}

export function userProfile (){
    return axiosInstance.get(`users/${localStorage.getItem('_id')}`)
    .then((response) => response.data)
    .catch((error) => error)
}

// export async function useUserData (data){
//     return c
// }