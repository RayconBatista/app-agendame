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

    static async storePlan(params) {
        return new Promise(async (resolve, reject) => {
            await this.request({ auth: true })
                .post('/admin/plans', {...params, name: params.label.toLowerCase().trim()})
                .then(response => resolve(response))
                .catch(error => reject(error.response))
        })
    }

    static async getPlan(id) {
        return new Promise(async (resolve, reject) => {
            await this.request({ auth: true })
                .get(`/admin/plans/${id}`)
                .then(response => resolve(response))
                .catch(error => reject(error.response))
        })
    }

    static async updatePlan(id, payload) {
        return new Promise(async (resolve, reject) => {
            await this.request({ auth: true })
                .put(`/admin/plans/${id}`, {...payload, name: payload.label.toLowerCase().trim()})
                .then(response => resolve(response))
                .catch(error => reject(error.response))
        })
    }

    static async destroy(id) {
        return new Promise(async (resolve, reject) => {
            await this.request({ auth: true })
                .delete(`/admin/plans/${id}`)
                .then(response => resolve(response))
                .catch(error => reject(error.response))
        })
    }
}