import * as axios from 'axios';

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': '4339ccb9-79fc-4b4c-8d15-52d8194ecc51'
    }
})

const api = {
    // Get Users
    getUsers(count, page) {
        console.log('im here');
        return instance.get(`users?count=${count}&page=${page}`)
            .then(res => {
                return new Promise((resolve) => {
                        resolve(res.data)
                })
            });
    },

    getUserDetails(userId) {
        return instance.get(`profile/${userId}`)
            .then( res => {
                return new Promise (resolve => resolve(res.data));
            })
    },

    // Follow - Unfollow
    follow(id) {
        return instance
            .post(`follow/${id}`);
    },

    unfollow(id) {
        return instance
            .delete(`follow/${id}`);
    },
    
    // Auth
    checkLogin() {
        return instance.get(`auth/me`)
            .then( res => {
                if (res.data.resultCode === 0) {
                    return new Promise( (resolve) => {
                        resolve(res.data.data);
                    })
                } else {
                    throw new Error(res.data.messages[0])
                }
            })
    }
}

export default api;