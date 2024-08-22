import { defineStore } from "pinia";
import { getAuth, signOut } from "firebase/auth";
export const useAuthStore = defineStore("auth", {
  state: () => ({
    user: {
      email: "",
      name: "",
      password: "",
    },
  }),
  actions: {
    login(userData) {
      this.user = userData;
    },
    logout() {
      const auth = getAuth();
      signOut(auth)
        .then(() => {
          this.user = null;
        })
        .catch((error) => {
          console.error("Ошибка при выходе:", error);
        });
    },
    refresh(Data) {
      this.user.time = Data;
    },
  },
  getters: {
    isAuthenticated: (state) => !!state.user,
  },
});
