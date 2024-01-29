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

    static storePlan(params) {
        return new Promise(async (resolve, reject) => {
            await this.request({ auth: true })
                .post('/plans', {...params, name: params.label.toLowerCase().trim()})
                .then(response => resolve(response))
                .catch(error => reject(error.response))
        })
    }

    static getPlan(id) {
        return new Promise(async (resolve, reject) => {
            await this.request({ auth: true })
                .get(`/plans/${id}`)
                .then(response => resolve(response))
                .catch(error => reject(error.response))
        })
    }

    static storePlan(params) {
        return new Promise(async (resolve, reject) => {
            await this.request({ auth: true })
                .post('/plans', {...params, name: params.label.toLowerCase().trim()})
                .then(response => resolve(response))
                .catch(error => reject(error.response))
        })
    }
}