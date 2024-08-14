<template lang='pug'>
.tabs
  p {{ hero }}
  Tab(id='der' :item='der' )
  Tab(id='die' :item='die' )
  Tab(id='das' :item='das' )
  Tab(id='Bestimmte Kasus' :item='SlotDataBestimmteKasus' )
  Tab(id='Unbestimmte Kasus' :item='SlotDataUnbestimmteKasus' )
  Tab(id='Unbestimmte negativ Kasus' :item='SlotDataUnbestimmteNegativKasus' )
  


</template>
<script setup>
import { reactive, ref, onMounted } from 'vue';
import Tab from '@/components/Tab.vue';
var some = ref('');
var foo = reactive([]);


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
      if (doc.data().deutsch) {
        der.push(doc.data().deutsch.split("/"));
      }
    });
  });
  onSnapshot(dieArtikel, (querySnapshot) => {
    querySnapshot.forEach((doc) => {
      if (doc.data().deutsch) {
        die.push(doc.data().deutsch.split("/"));
      }
    });
  });
  onSnapshot(dasArtikel, (querySnapshot) => {
    querySnapshot.forEach((doc) => {
      if (doc.data().deutsch) {
        das.push(doc.data().deutsch.split("/"));
      }
    });
  });

  onSnapshot(DataBestimmteKasus, (querySnapshot) => {
    querySnapshot.forEach((doc) => {
      if (doc.data().deutsch) {
        SlotDataBestimmteKasus.push(doc.data().deutsch.split("/"));
      }
    });
  });
  onSnapshot(UnbestimmteKasus, (querySnapshot) => {
    querySnapshot.forEach((doc) => {
      if (doc.data().deutsch) {
        SlotDataUnbestimmteKasus.push(doc.data().deutsch.split("/"));
      }
    });
  });
  onSnapshot(UnbestimmteNegativKasus, (querySnapshot) => {
    querySnapshot.forEach((doc) => {
      if (doc.data().deutsch) {
        SlotDataUnbestimmteNegativKasus.push(doc.data().deutsch.split("/"));
      }
    });
  });

  // onSnapshot(UnbestimmteKasus, (querySnapshot) => {
  //   querySnapshot.forEach((doc) => {
  //     SlotDataUnbestimmteKasus.push({ text: doc.data().text, content: doc.data().content });
  //   });
  //   titles.push({ id: 4, title: 'Unbestimmte Kasus', isOpen: false });
  //   SlotDataUnbestimmteKasus.id = 3;
  //   SlotDataUnbestimmteKasus.isOpen = false;
  // });
  // onSnapshot(UnbestimmteNegativKasus, (querySnapshot) => {
  //   querySnapshot.forEach((doc) => {
  //     SlotDataUnbestimmteNegativKasus.push({ text: doc.data().text, content: doc.data().content });
  //   });
  //   titles.push({ id: 5, title: 'Unbestimmte Kasus', isOpen: false });
  //   SlotDataUnbestimmteNegativKasus.id = 4;
  //   SlotDataUnbestimmteNegativKasus.isOpen = false;
  // });
});

</script>
