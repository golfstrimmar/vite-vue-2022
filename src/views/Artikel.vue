<template lang="pug">
.container
  h2 der Artikel
  Tabs 
  Akkord(:titles="titles" :Data="[SlotBestimmte,SlotDataBestimmte]")
  //- .plaza__line(v-for="line in SlotBestimmte" :key="index" )
  //-   p {{ line.text }}
  //-   Input(:Antwort='el' @anwortPositiv="anwortPositiv" v-for="el in line.content" :key="index")

  //- .plaza__line(v-for="line in SlotDataBestimmte" :key="index" )
  //-   p {{ line.text }}
  //-   Input(:Antwort='el' @anwortPositiv="anwortPositiv" v-for="el in line.content" :key="index")
  //- .page-block.blue-grey-4
  //-   Tabs(:items= 'Bestimmte' title='Bestimmte Artikel' icons='icons')
  //-   Tabs(:items= 'Unbestimmte' title='Unbestimmte Artikel' icons='icons')
  //-   Tabs(:items= 'UnbestimmteNegativ' title='Unbestimmte negativ Artikel' icons='icons')
  //- .page-block.blue-grey-4
  //-   Tabs(:items= 'der' title='Beispiele für den männlichen Artikel „der“')
  //-   Tabs(:items= 'die' title='Beispiele für den feminine Article “die”')
  //-   Tabs(:items= 'das' title='Beispiele für den neuter Article “das”')
  //- .page-block.blue-grey-4
  //-   .page-title--small
  //-     h2(v-for="item in derData" :key="index") {{item.text2}},  {{ item.title }} , {{item.text1}}
  //-   TabsTraining( title='Bestimmte Artikel' :SlotData='SlotDataBestimmte' )
  //-   TabsTraining( title='Unbestimmte Artikel' :SlotData='SlotDataUnbestimmte' )
  //-   TabsTraining( title='Unbestimmte Negativ Artikel ' :SlotData='SlotDataNegativ' )


</template>


<script setup>
import Tabs from '@/components/Tabs.vue';

import Akkord from "@/components/Akkord.vue";

import { ref, onMounted, reactive } from 'vue'
const count = ref(0)
const currentLine = ref(null)

// ==============anwortPositiv======================
const anwortPositiv = (data) => {
  count.value++
  let lineCurrent = [...data.closest('.plaza__line').querySelectorAll("input")];

  if (count.value == lineCurrent.length) {
    var inputCurrent = data.closest('.plaza__line').nextElementSibling.querySelector("input")
    inputCurrent.focus();
    inputCurrent.classList.add("_is-light");
    count.value = 0;
  }
}

// ---------db-----------------
import { db } from "@/firebase/config.ts";
import { collection, query, onSnapshot } from "firebase/firestore";
var SlotBestimmte = reactive([]);
var SlotDataBestimmte = reactive([]);
var titles = reactive([]);
const Bestimmte = query(collection(db, "bestimmte"));
const DataBestimmte = query(collection(db, "DataBestimmte"));


onMounted(async () => {
  onSnapshot(Bestimmte, (querySnapshot) => {
    querySnapshot.forEach((doc) => {
      SlotBestimmte.push({ text: doc.data().text, content: doc.data().content });
    });
    titles.push({ title: 'Bestimmter Artikel' });
  });
  onSnapshot(DataBestimmte, (querySnapshot) => {
    querySnapshot.forEach((doc) => {
      SlotDataBestimmte.push({ text: doc.data().text, content: doc.data().content });
    });
    titles.push({ title: 'Unbestimmter Artikel' });
  });
});
// ====================================


// const Bestimmte = [

//   {
//     title: 'Nominativ',
//     text1: 'der',
//     text2: 'die',
//     text3: 'das',
//     text4: 'die',
//     svg1: 'man',
//     svg2: 'frau',
//     svg3: 'das',
//     svg4: 'group',
//   },
//   {
//     title: 'Dativ',
//     text1: 'dem',
//     text2: 'der',
//     text3: 'dem',
//     text4: 'den + n', svg1: 'man',
//     svg2: 'frau',
//     svg3: 'das',
//     svg4: 'group',
//   },
//   {
//     title: 'Akkusativ',
//     text1: 'den',
//     text2: 'die',
//     text3: 'das',
//     text4: 'die', svg1: 'man',
//     svg2: 'frau',
//     svg3: 'das',
//     svg4: 'group',
//   },
//   {
//     title: 'Genitiv',
//     text1: 'des + s/es',
//     text2: 'der',
//     text3: 'des + s/es',
//     text4: 'der', svg1: 'man',
//     svg2: 'frau',
//     svg3: 'das',
//     svg4: 'group',
//   },
// ]
const Unbestimmte = [
  {
    title: 'Nominativ',
    text1: 'ein',
    text2: 'eine',
    text3: 'ein', svg1: 'man',
    svg2: 'frau',
    svg3: 'das',
    svg4: 'group',
  },
  {
    title: 'Dativ',
    text1: 'einem',
    text2: 'einer',
    text3: 'einem', svg1: 'man',
    svg2: 'frau',
    svg3: 'das',
    svg4: 'group',
  },
  {
    title: 'Akkusativ',
    text1: 'einen',
    text2: 'eine',
    text3: 'ein', svg1: 'man',
    svg2: 'frau',
    svg3: 'das',
    svg4: 'group',
  },
  {
    title: 'Genitiv',
    text1: 'eines + s/es',
    text2: 'einer',
    text3: 'eines + s/es', svg1: 'man',
    svg2: 'frau',
    svg3: 'das',
    svg4: 'group',
  },
]
const UnbestimmteNegativ = [

  {
    title: 'Nominativ',
    text1: 'kein',
    text2: 'keine',
    text3: 'kein',
    text4: 'keine', svg1: 'man',
    svg2: 'frau',
    svg3: 'das',
    svg4: 'group',
  },
  {
    title: 'Dativ',
    text1: 'keinem',
    text2: 'keiner',
    text3: 'keinem',
    text4: 'keinen + n', svg1: 'man',
    svg2: 'frau',
    svg3: 'das',
    svg4: 'group',
  },
  {
    title: 'Akkusativ',
    text1: 'keinen',
    text2: 'keine',
    text3: 'kein',
    text4: 'keine', svg1: 'man',
    svg2: 'frau',
    svg3: 'das',
    svg4: 'group',
  },
  {
    title: 'Genitiv',
    text1: 'keines + s / es',
    text2: 'keiner',
    text3: 'keines + s / es',
    text4: 'keiner', svg1: 'man',
    svg2: 'frau',
    svg3: 'das',
    svg4: 'group',
  },
]




</script>

<style lang="scss">
h2 {
  font-family: "RR", sans-serif;
  font-size: 20px;
  font-weight: 800;
  color: $brown-8;
  text-transform: uppercase;
  line-height: 1.5;
  text-shadow: 0 0 5px white;
}

.plaza__line {
  padding: 5px 0 0 0;

  p {}
}
</style>