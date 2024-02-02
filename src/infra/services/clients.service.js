import BaseService from "./base.service";

export default class ClientsService extends BaseService {
    static async clients(params) {
        return new Promise((resolve, reject) => {
            this.request({ auth: true })
                .get('admin/clients', params)
                .then(response => {
                    resolve(response)
                })
                .catch(error => {
                    reject(error.response)
                })
        })
    }

    static async storeClient(params) {
        return new Promise((resolve, reject) => {
            this.request({ auth: true })
                .post('admin/clients', params)
                .then(response => {
                    resolve(response)
                })
                .catch(error => {
                    reject(error.response)
                })
        })
    }
}