<template lang="pug">
.container
  h2 Possessivpronomen
  Plaza(:Slot='SlotPossessiv')
  Akkord(:titles="titles" :Data="[SlotDataPossessiv,SlotDataPossessivErsatz]")
</template>


<script setup>
import Akkord from "@/components/Akkord.vue";
import { ref, onMounted, reactive } from 'vue'

import Plaza from "@/components/Plaza.vue";
// ---------db-----------------
import { db } from "@/firebase/config.ts";
import { collection, query, onSnapshot } from "firebase/firestore";
var SlotPossessiv = reactive([]);
var SlotDataPossessiv = reactive([]);
var SlotDataPossessivErsatz = reactive([]);

var titles = reactive([]);
const Possessiv = query(collection(db, "Possessiv-tabel"));
const PossessivSlot = query(collection(db, "PossessivSlot"));
const PossessivSlotErsatz = query(collection(db, "PossessivSlotErsatz"));


onMounted(async () => {
  onSnapshot(Possessiv, (querySnapshot) => {
    querySnapshot.forEach((doc) => {
      SlotPossessiv.push(doc.data());
    });

  });
  onSnapshot(PossessivSlot, (querySnapshot) => {
    querySnapshot.forEach((doc) => {
      SlotDataPossessiv.push(doc.data());

    });
    titles.push({ id: 0, title: 'Possessiv', isOpen: true });
    SlotDataPossessiv.id = 0;
    SlotDataPossessiv.isOpen = true;

  });
  onSnapshot(PossessivSlotErsatz, (querySnapshot) => {
    querySnapshot.forEach((doc) => {
      SlotDataPossessivErsatz.push(doc.data());

    });
    titles.push({ id: 1, title: 'Possessiv Ersatz', });
    SlotDataPossessivErsatz.id = 1;
    SlotDataPossessivErsatz.isOpen = true;

  });
});
// ---------

</script>
