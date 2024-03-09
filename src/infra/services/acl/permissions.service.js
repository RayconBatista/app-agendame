import BaseService from "../base.service";

export default class PermissionsService extends BaseService {
    static async permissions(params) {
        return new Promise((resolve, reject) => {
            this.request({ auth: true })
                .get('api/admin/permissions', params)
                .then(response => {
                    resolve(response)
                })
                .catch(error => {
                    reject(error.response)
                })
        })
    }
}