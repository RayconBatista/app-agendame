import { TOKEN_NAME } from "../../config";
import BaseService from "./base.service";

export default class AuthService extends BaseService {
    static async auth(params) {
        return new Promise((resolve, reject) => {
            this.request()
                .post('/login', params)
                .then(response => {
                    localStorage.setItem(TOKEN_NAME, response.data.token)
                    resolve(response)
                })
                .catch(error => reject(error.response))
        })
    }

    static async register(params) {
        this.request()
            .post('/register', params)
            .then(response => {
                resolve(response)
            })
            .catch(error => reject(error.response))
    }

    static async getMe() {
        const token = localStorage.getItem(TOKEN_NAME)

        if (!token) {
            return Promise.reject('Token Not Found')
        }

        return new Promise((resolve, reject) => {
            this.request({ auth: true })
                .get('/me')
                .then(response => {
                    resolve(response.data)
                })
                .catch(error => {
                    localStorage.removeItem(TOKEN_NAME)
                    reject(error.response)
                })
        })
    }

    static async verifyEmailfromToken(token) {
        return new Promise((resolve, reject) => {
            this.request({ auth: true })
                .post('/verify-email', { token: token })
                .then(response => {
                    resolve(response.data)
                })
                .catch(error => {
                    localStorage.removeItem(TOKEN_NAME)
                    reject(error.response)
                })
        })
    }
}