import { defineStore } from 'pinia';
import AuthService from '@/infra/services/auth.service'

export const useMeStore = defineStore('me', {
  state: () => ({
    user: null,
  }),

  actions: {
    async getMe() {
      try {
        const response  = await AuthService.getMe();
        this.user       = await response.data
        return this.user;
      } catch (error) {
        // Lidar com erros ao obter informações do usuário
        throw error;
      }
    }
  },

  getters: {
    isLoggedIn: (state) => !!state.user
  }
})