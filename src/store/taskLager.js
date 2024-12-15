import { defineStore } from "pinia";
import { useScss } from "./taskScss";
import { useJs } from "./taskJs";
import { useVue } from "./taskVue";
import { useReact } from "./taskReact";
import { useWordpress } from "./taskWordpress";
import { useNode } from "./taskNode";

export const useTask = defineStore("taskLager", {
  state: () => {
    return {
      ...useScss,
      ...useJs,
      ...useVue,
      ...useReact,
      ...useWordpress,
      ...useNode,
    };
  },
});
