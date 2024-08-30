<template lang="pug">
.container
  h2 Deklination der Adjektive

  Akkord(:titles="titles" :Data="[SlotDataDeklination]" @addTime ='addTime')
</template>


<script setup>
import Akkord from "@/components/Akkord.vue";
import { ref, onMounted, reactive } from 'vue'

// ---------db-----------------
import { db } from "@/firebase/config.ts";
import { collection, query, onSnapshot } from "firebase/firestore";
var SlotDataDeklination = reactive([]);

var titles = reactive([]);
const DeklinationSlot = query(collection(db, "DeklinationAdjektiveSlot"));


onMounted(async () => {

  onSnapshot(DeklinationSlot, (querySnapshot) => {
    querySnapshot.forEach((doc) => {
      SlotDataDeklination.push(doc.data());
    });
    titles.push({ id: 0, title: 'Deklination der Adjektive', isOpen: true });
    SlotDataDeklination.id = 0;
    SlotDataDeklination.isOpen = true;
  });
});
// ---------
// ------------pinia-------------
import { useAuthStore } from '@/store/authent';
const authStore = useAuthStore();
const addTime = (formattedTime, count, countAll) => { authStore.refresh('PronominaleAdverbien', formattedTime, count, countAll) };
// --------------------------

const Pronominale = [

  {
    text1: 'sich interessieren für',
  },
  {
    text2: 'warten auf',
  },
  {
    text3: 'denken an',
  },
  {
    text4: 'sich kümmern um',
  },
  {
    text5: 'zufrieden sein mit',
  },
  {
    text7: 'reden über',
  },

]


</script>
