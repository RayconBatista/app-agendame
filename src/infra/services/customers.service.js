import BaseService from "./base.service";

export default class CustomersService extends BaseService {
    static async customers(params) {
        return new Promise((resolve, reject) => {
            this.request({ auth: true })
                .get('api/admin/customers', params)
                .then(response => {
                    resolve(response)
                })
                .catch(error => {
                    reject(error.response)
                })
        })
    }

    static async storeCustomer(params) {
        return new Promise((resolve, reject) => {
            this.request({ auth: true })
                .post('api/admin/customers', params)
                .then(response => {
                    resolve(response)
                })
                .catch(error => {
                    reject(error.response)
                })
        })
    }
}