import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    user: null, // Здесь будет храниться информация о пользователе
  }),
  actions: {
    login(userData) {
      this.user = userData;
    },
    logout() {
      this.user = null;
    },
  },
  getters: {
    isAuthenticated: (state) => !!state.user,
  },
});
