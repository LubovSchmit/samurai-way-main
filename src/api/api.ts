import axios from 'axios';


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {'API-KEY': '116aa66f-547d-453c-a922-c810691f6d50'}
})


export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    }
}

export const profileAPI = {
    getProfile(userId: string) {
        return instance.get(`profile/` + userId)
            .then(response => response.data)
    }
}

export const followAPI = {
    deleteFollow(userId: string) {
        return instance.delete(`follow/${userId}`)
            .then(response => response.data)
    },
    postFollow(userId: string) {
        return instance.post(`follow/${userId}`, {})
            .then(response => response.data)
    }
}

export const authAPI = {
    authMe() {
        return instance.get(`auth/me`)
            .then(response => response.data)
    }
}


