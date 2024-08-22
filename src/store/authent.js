import { defineStore } from "pinia";
import { getAuth, signOut } from "firebase/auth";
import { db } from "@/firebase/config.ts";
const auth = getAuth();
import {
  getFirestore,
  doc,
  setDoc,
  getDoc,
  onSnapshot,
} from "firebase/firestore";
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
      // ===================
      const saveUserData = async (uid, data) => {
        try {
          await setDoc(doc(db, "users", uid), data, { merge: true });
          console.log("User data saved!");
        } catch (error) {
          console.error("Error saving user data:", error);
        }
      };
      saveUserData(this.user.uid, this.user);
      // ===================

      signOut(auth)
        .then(() => {
          this.user = null;
        })
        .catch((error) => {
          console.error("Ошибка при выходе:", error);
        });
    },
    refresh(Name, Data) {
      this.user[Name] = Data;
    },
  },
  getters: {
    isAuthenticated: (state) => !!state.user,
  },
});
