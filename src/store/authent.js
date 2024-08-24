import { defineStore } from "pinia";
import { useRouter } from "vue-router";
const router = useRouter();
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
      password: "",
      name: "",
      uid: "",
      Artikel: [],
      Personal: [],
      Interrogativ: [],
      Reflexiv: [],
      Possessiv: [],
    },
  }),
  actions: {
    login(userData) {
      const getUserData = async (userData) => {
        try {
          const docRef = doc(db, "users", userData.uid);
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            this.user = docSnap.data();
            console.log("Document data:", docSnap.data());
          }
        } catch (error) {
          console.log("No such document!");
        }
      };
      const saveUserData = async (userData) => {
        try {
          await setDoc(doc(db, "users", userData.uid), userData, {
            merge: true,
          });
          getUserData(userData);
          console.log("User data saved!");
        } catch (error) {
          console.error("Error saving user data:", error);
        }
      };
      saveUserData(userData);
    },

    logout() {
      // ===================
      const saveUserData = async (data) => {
        try {
          await setDoc(doc(db, "users", this.user.uid), data, { merge: true });
          console.log("User data saved!");
          signOut(auth)
            .then(() => {
              this.user = null;
            })
            .catch((error) => {
              console.error("Ошибка при выходе:", error);
            });
        } catch (error) {
          console.error("Error saving user data:", error);
        }
      };
      saveUserData(this.user);
      // ===================
    },
    refresh(Name, Data, count, countAll) {
      const date = new Date();
      const formattedDate = date.toLocaleString();
      this.user[Name].push({
        zeit: formattedDate,
        stoppuhr: Data,
        count: count,
        countAll: countAll,
      });
    },
  },

  getters: {
    isAuthenticated: (state) => {
      if (!!state.user && state.user.email !== "") {
        return true;
      } else {
        return false;
      }
    },
  },
});
