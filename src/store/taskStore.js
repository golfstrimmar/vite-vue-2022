import { ref } from "vue";
import { defineStore } from "pinia";

export const useTaskStore = defineStore("taskStore", {
  state: () => ({
    name: "",
  }),
  getters: {
    newUser: (state) => {
      return (userEmail) => (state.name = userEmail);
    },
  },
});
