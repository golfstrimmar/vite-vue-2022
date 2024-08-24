<template lang="pug">
.container
  h2 Reflexivpronomen
  Plaza(:Slot='SlotReflexiv')
  Akkord(:titles="titles" :Data="[SlotDataReflexiv]" @addTime ='addTime')
</template>


<script setup>
import { ref, onMounted, reactive } from 'vue'
import Akkord from "@/components/Akkord.vue";
import Plaza from "@/components/Plaza.vue";

// ---------db-----------------
import { db } from "@/firebase/config.ts";
import { collection, query, onSnapshot } from "firebase/firestore";
var SlotReflexiv = reactive([]);
var SlotDataReflexiv = reactive([]);

var titles = reactive([]);
const Reflexiv = query(collection(db, "Reflex-tabel"));
const ReflexivlSlot = query(collection(db, "ReflexSlot"));


onMounted(async () => {
  onSnapshot(Reflexiv, (querySnapshot) => {
    querySnapshot.forEach((doc) => {
      SlotReflexiv.push(doc.data());
    });

  });
  onSnapshot(ReflexivlSlot, (querySnapshot) => {
    querySnapshot.forEach((doc) => {
      SlotDataReflexiv.push(doc.data());
    });
    titles.push({ id: 0, title: 'Personal', isOpen: true });
    SlotDataReflexiv.id = 0;
    SlotDataReflexiv.isOpen = true;
  });
});
// ------------pinia-------------
import { useAuthStore } from '@/store/authent';
const authStore = useAuthStore();
const addTime = (formattedTime, count, countAll) => {
  authStore.refresh('Reflexiv', formattedTime, count, countAll)
};
// --------------------------
</script>
