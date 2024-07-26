<template lang='pug'>
.tabs
  Tab(:item= "der" id='der')
  Tab(:item= "die" id='die')
  Tab(:item= "das" id='das')
//- .tabs(v-for="item in die" :key="index")
//-   Tab(:item='item' )
//- .tabs(v-for="item in das" :key="index")
//-   Tab(:item='item' )

</template>
<script setup>
import { reactive, ref, onMounted } from 'vue';
import Tab from '@/components/Tab.vue';



// --------------------------
import { db } from "@/firebase/config.ts";
import { collection, query, onSnapshot } from "firebase/firestore";
var der = reactive([])
var die = reactive([])
var das = reactive([])

const derArtikel = query(collection(db, "der"));
const dieArtikel = query(collection(db, "die"));
const dasArtikel = query(collection(db, "das"));


onMounted(async () => {
  onSnapshot(derArtikel, (querySnapshot) => {
    querySnapshot.forEach((doc) => {
      der.push(doc.data());
    });
  });
  onSnapshot(dieArtikel, (querySnapshot) => {
    querySnapshot.forEach((doc) => {
      die.push(doc.data());
    });
  });
  onSnapshot(dasArtikel, (querySnapshot) => {
    querySnapshot.forEach((doc) => {
      das.push(doc.data());
    });
  });
});

</script>
