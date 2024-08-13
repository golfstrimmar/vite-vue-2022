<template lang='pug'>
.tabs
  Tab( :id='item.title' v-for="item in titles" :key="item.id")
  


</template>
<script setup>
import { reactive, ref, onMounted } from 'vue';
import Tab from '@/components/Tab.vue';
var titles = reactive([]);


// --------------------------
import { db } from "@/firebase/config.ts";
import { collection, query, onSnapshot } from "firebase/firestore";
var der = reactive([])
var die = reactive([])
var das = reactive([])
var SlotDataBestimmteKasus = reactive([]);
var SlotDataUnbestimmteKasus = reactive([]);
var SlotDataUnbestimmteNegativKasus = reactive([]);
const derArtikel = query(collection(db, "der"));
const dieArtikel = query(collection(db, "die"));
const dasArtikel = query(collection(db, "das"));
const DataBestimmteKasus = query(collection(db, "BestimmteKasus"));
const UnbestimmteKasus = query(collection(db, "UnbestimmteKasus"));
const UnbestimmteNegativKasus = query(collection(db, "UnbestimmteNegativKasus"));

onMounted(async () => {
  onSnapshot(derArtikel, (querySnapshot) => {
    querySnapshot.forEach((doc) => {
      der.push(doc.data());
    });
    titles.push({ id: 0, title: 'der', isOpen: false });
  });
  onSnapshot(dieArtikel, (querySnapshot) => {
    querySnapshot.forEach((doc) => {
      die.push(doc.data());
    });
    titles.push({ id: 1, title: 'die', isOpen: false });
  });
  onSnapshot(dasArtikel, (querySnapshot) => {
    querySnapshot.forEach((doc) => {
      das.push(doc.data());
    });
    titles.push({ id: 2, title: 'das', isOpen: false });
  });
  onSnapshot(DataBestimmteKasus, (querySnapshot) => {
    querySnapshot.forEach((doc) => {
      SlotDataBestimmteKasus.push({ text: doc.data().text, content: doc.data().content });
    });
    titles.push({ id: 3, title: 'Bestimmte Kasus', isOpen: false });
    SlotDataBestimmteKasus.id = 2;
    SlotDataBestimmteKasus.isOpen = false;
  });

  onSnapshot(UnbestimmteKasus, (querySnapshot) => {
    querySnapshot.forEach((doc) => {
      SlotDataUnbestimmteKasus.push({ text: doc.data().text, content: doc.data().content });
    });
    titles.push({ id: 4, title: 'Unbestimmte Kasus', isOpen: false });
    SlotDataUnbestimmteKasus.id = 3;
    SlotDataUnbestimmteKasus.isOpen = false;
  });
  onSnapshot(UnbestimmteNegativKasus, (querySnapshot) => {
    querySnapshot.forEach((doc) => {
      SlotDataUnbestimmteNegativKasus.push({ text: doc.data().text, content: doc.data().content });
    });
    titles.push({ id: 5, title: 'Unbestimmte Kasus', isOpen: false });
    SlotDataUnbestimmteNegativKasus.id = 4;
    SlotDataUnbestimmteNegativKasus.isOpen = false;
  });
});

</script>
