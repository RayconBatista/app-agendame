import BaseService from "./base.service";

export default class SubscriptionService extends BaseService {
    static async subscribe(params) {
        return new Promise((resolve, reject) => {
            this.request({ auth: true })
                .post('/subscribe', params)
                .then(response => {
                    resolve(response)
                })
                .catch(error => reject(error.response))
        })
    }
}