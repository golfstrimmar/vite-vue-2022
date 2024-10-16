import { ref } from "vue";
import { defineStore } from "pinia";
import { useScss } from "./taskScss";
import { useJs } from "./taskJs";
import { useVue } from "./taskVue";

export const useTask = defineStore("taskLager", {
  state: () => {
    return {
      ...useScss,
      ...useJs,
      ...useVue,
    };
  },
});
