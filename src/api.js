import * as axios from 'axios';

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': '27f5d91b-58f9-405b-b930-af2dc400cfc0'
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
                return new Promise( (resolve, reject) => {
                    if (res.data.resultCode === 0) {
                        resolve(res.data.data);
                    } else {
                        reject( (res.data.messages[0]) );
                    }
                })
                
            })
    },

    getStatus(id) {
        return instance.get(`/profile/status/${id}`)
            .then(res => {
                return new Promise((resolve) => {
                    resolve(res);
                })
            })
    },

    setStatus(status) {
        return instance.put('/profile/status', {
            status,
        }).then(res => {
            return new Promise((resolve) => {
                resolve(res);
            });
        }).catch(e => {
            console.error(e);
        })
    }
}

export default api;