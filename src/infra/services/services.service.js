import BaseService from "./base.service";

export default class ServicesService extends BaseService {
    static async services(params) {
        return new Promise((resolve, reject) => {
            this.request({ auth: true })
                .get('api/admin/services', params)
                .then(response => {
                    resolve(response)
                })
                .catch(error => {
                    reject(error.response)
                })
        })
    }
}