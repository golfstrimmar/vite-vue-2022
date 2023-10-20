import { ref } from "vue";
import { defineStore } from "pinia";

export const useTaskStore = defineStore("taskStore", {
  state: () => ({
    name: "John",
  }),
  getters: {
    newUser: (state) => {
      return (userEmail) => (state.name = userEmail);
    },
  },
});
