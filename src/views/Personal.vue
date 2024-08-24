<template lang="pug">
.container
  h2 Personalpronomen
  Plaza(:Slot='SlotPersonal')
  Akkord(:titles="titles" :Data="[SlotDataPersonal]" @addTime ='addTime')
</template>

<script setup>
import Akkord from "@/components/Akkord.vue";
import { ref, onMounted, reactive } from 'vue'

import Plaza from "@/components/Plaza.vue";
// ---------db-----------------
import { db } from "@/firebase/config.ts";
import { collection, query, onSnapshot } from "firebase/firestore";
var SlotPersonal = reactive([]);
var SlotDataPersonal = reactive([]);

var titles = reactive([]);
const Personal = query(collection(db, "Personal-table"));
const PersonalSlot = query(collection(db, "PersonalSlot"));


onMounted(async () => {
  onSnapshot(Personal, (querySnapshot) => {
    querySnapshot.forEach((doc) => {
      SlotPersonal.push(doc.data());
    });

  });
  onSnapshot(PersonalSlot, (querySnapshot) => {
    querySnapshot.forEach((doc) => {
      SlotDataPersonal.push(doc.data());
    });
    titles.push({ id: 0, title: 'Personal', isOpen: true });
    SlotDataPersonal.id = 0;
    SlotDataPersonal.isOpen = true;
  });
});
// ---------
// ------------pinia-------------
import { useAuthStore } from '@/store/authent';
const authStore = useAuthStore();
const addTime = (formattedTime, count, countAll) => { authStore.refresh('Personal', formattedTime, count, countAll) };
// --------------------------
</script>
