import BaseService from "./base.service";

export default class PlansService extends BaseService {
    static async plans(params) {
        return new Promise((resolve, reject) => {
            this.request({ auth: true })
                .get('/plans', params)
                .then(response => {
                    resolve(response)
                })
                .catch(error => {
                    reject(error.response)
                })
        })
    }
}