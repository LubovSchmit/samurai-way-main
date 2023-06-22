import axios from 'axios';


const baseUrl = 'https://social-network.samuraijs.com/api/1.0/'

const instance = axios.create({
    withCredentials: true,
    headers: {'API-KEY': '116aa66f-547d-453c-a922-c810691f6d50'}
})

export const getUsers = (currentPage = 1, pageSize = 10) => {
    return axios.get(baseUrl + `users?page=${currentPage}&count=${pageSize}`,
        {withCredentials: true})
        .then(response => response.data)
}

export const getProfile = (userId: string) => {
    return axios.get(baseUrl + `profile/` + userId,
        {withCredentials: true})
        .then(response => response.data)
}

export const authMe = () => {
    return axios.get(baseUrl + `auth/me`,
        {withCredentials: true})
        .then(response => response.data)
}


/*
axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${props.id}`,
    {withCredentials: true})*/


/*
axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${props.id}`,
    {},
    {withCredentials: true})*/
