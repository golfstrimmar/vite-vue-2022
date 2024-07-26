<template lang="pug">
.wrapper
  h2(v-for="item in DataText" :key="index") {{ item.t1,item.t2}}
</template>

<script setup>
import Header from '@/components/Header.vue'
import { ref, onMounted, reactive } from 'vue'
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "@/firebase/config.ts";

const DataText = reactive([{ t1: 'fff', t2: 'ffffff' }])

console.log(DataText);

onMounted(async () => {
  const q = query(collection(db, "Article"));



  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    console.log(doc.id, " => ", doc.data());
    DataText.push(doc.data())

  });
})

</script>

<style lang="scss" scoped></style>
