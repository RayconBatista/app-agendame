import BaseService from "./base.service";

export default class PlansService extends BaseService {
    static async plans(params) {
        return new Promise((resolve, reject) => {
            this.request({ auth: true })
                .get('api/plans', params)
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
                .post('api/admin/plans', {...params, name: params.label.toLowerCase().trim()})
                .then(response => resolve(response))
                .catch(error => reject(error.response))
        })
    }

    static async getPlan(id) {
        return new Promise(async (resolve, reject) => {
            await this.request({ auth: true })
                .get(`api/admin/plans/${id}`)
                .then(response => resolve(response))
                .catch(error => reject(error.response))
        })
    }

    static async updatePlan(id, payload) {
        return new Promise(async (resolve, reject) => {
            await this.request({ auth: true })
                .put(`api/admin/plans/${id}`, {...payload, name: payload.label.toLowerCase().trim()})
                .then(response => resolve(response))
                .catch(error => reject(error.response))
        })
    }

    static async destroy(id) {
        return new Promise(async (resolve, reject) => {
            await this.request({ auth: true })
                .delete(`api/admin/plans/${id}`)
                .then(response => resolve(response))
                .catch(error => reject(error.response))
        })
    }
}