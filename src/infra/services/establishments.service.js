import BaseService from "./base.service";

export default class EstablishmentsService extends BaseService {
    static async establishments(params) {
        return new Promise((resolve, reject) => {
            this.request({ auth: true })
                .get('admin/establishments', params)
                .then(response => {
                    resolve(response)
                })
                .catch(error => {
                    reject(error.response)
                })
        })
    }
    static async storeEstablishment(params) {
        return new Promise((resolve, reject) => {

        })
    }
}