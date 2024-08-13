<template lang="pug">
.container
  h2 der Artikel
  Tabs 
  Akkord(:titles="titles" :Data="[SlotBestimmte,SlotDataBestimmte]")

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
    titles.push({ id: 0, title: 'Unbestimmter Artikel', isOpen: true });
    SlotBestimmte.id = 0;
    SlotBestimmte.isOpen = true;
  });

  onSnapshot(DataBestimmte, (querySnapshot) => {
    querySnapshot.forEach((doc) => {
      SlotDataBestimmte.push({ text: doc.data().text, content: doc.data().content });
    });
    titles.push({ id: 1, title: 'Bestimmter Artikel', isOpen: false });
    SlotDataBestimmte.id = 1;
    SlotDataBestimmte.isOpen = false;
  });


});


</script>

<style lang="scss">
.plaza__line {
  padding: 5px 0 0 0;

  p {}
}
</style>