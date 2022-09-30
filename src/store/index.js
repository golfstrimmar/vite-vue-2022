import { createStore } from "vuex";
import router from "./../router/index";
import { auth } from "./../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

export default createStore({
  state: {
    user: null,
  },
  mutations: {
    SET_USER(state, user) {
      state.user = user;
    },
    CLEAR_USER() {
      state.user = null;
    },
  },
  actions: {
    async login({ commit }, details) {
      const { email, password } = details;
      try {
        await signInWithEmailAndPassword(auth, email, password);
      } catch (error) {
        switch (error.code) {
          case "auth/user-not-faund":
            alert("User not faund");
            break;
          case "auth/wrong-password":
            alert("Wrong password");
            break;
          default:
            alert("Samthing went wrong");
        }
        return;
      }
      commit("SET_USER", auth.currentUser);
      router.push("/todo");
    },
    async register({ commit }, details) {
      const { email, password } = details;
      try {
        await createUserWithEmailAndPassword(auth, email, password);
      } catch (error) {
        switch (error.code) {
          case "auth/email-allready-in-use":
            alert("Email allready in use");
            break;

          case "auth/invalid-email":
            alert("Invalid email");
            break;

          case "auth/operation-not-allowed":
            alert("Operation not allowed");
            break;

          case "auth/weak-password":
            alert("Weak password");
            break;

          default:
            alert("Samthing went wrong");
        }
        return;
      }
      commit("SET_USER", auth.currentUser);
      router.push("/todo");
    },
    async logout({ commit }) {
      await signOut(auth);
      commit("CLEAR_USER");
      router.push("/");
    },
    fetchUser({ commit }) {
      auth.onAuthStateChanged(async (user) => {
        if (user === null) {
          commit("CLEAR_USER");
        } else {
          commit("SET_USER", user);
        }
        if (router.isReady() && router.currentRoute.value.path === "/login") {
          router.push("/todo");
        }
      });
    },
  },
});
