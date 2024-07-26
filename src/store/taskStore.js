import { defineStore } from "pinia";
import { ref } from "vue";

export const useTaskArtikle = defineStore("taskArtikle", {
  state: () => [
    {
      rubrik: "der",
      title: "-ant ",
      text1: "der Laborant",
      text2: "der Diamant",
    },

    // {
    //   rubrik: "die",
    //   title: "-ung",
    //   text1: "die Abdeckung",
    //   text2: "die Bildung",
    // },
    // {
    //   rubrik: "das",
    //   title: "-chen",
    //   text1: "das Hähnchen",
    //   text2: "das Bäumchen",
    // },
  ],
});
