import { ref } from "vue";
import { defineStore } from "pinia";

export const useTaskStore = defineStore("taskStore", {
  state: () => ({
    users: [{ id: 1, name: "John" }],
  }),
  getters: {
    getUserById: (state) => {
      return (userId) => state.users.find((user) => user.id === userId);
    },
  },
});
