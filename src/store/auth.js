import { defineStore } from 'pinia';
import axios from 'axios'
import AuthService from '@/infra/services/auth.service'
import { useMeStore } from '@/store/me';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
  }),

  actions: {
    async login(email, password) {
      return await AuthService.auth({email, password}).then((response) => {
        localStorage.setItem(import.meta.env.VITE_APP_TOKEN_NAME, response.data.token)
        const meStore = useMeStore();
        meStore.user  = response.data.data
        this.user     = response.data.data;
      })
    },
    async register({ plan_id, name, email, password }) {
      return await AuthService.register({
        plan_id,
        name,
        email,
        password
      }).then((response) => {
        // Salve os dados do usuário após o registro
        const meStore = useMeStore();
        meStore.user  = response.data.data;
        this.user     = response.data.data; // Atualize o estado do usuário
        return response;
      });
    },
    logout() {
      return AuthService.logout().then((response) => {
        localStorage.removeItem(import.meta.env.VITE_APP_TOKEN_NAME)
        this.user = null;
        return response;
      })
    },
    verifyEmail(token) {
      return axios.post('api/verify-email', { token })
    },
    forgotPassword(email) {
      return axios.post('api/forgot-password', { email })
    },
    resetPassword(token, password) {
      return axios.post('api/reset-password', { token, password })
    }
  }
});