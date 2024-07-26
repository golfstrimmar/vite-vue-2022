<template lang='pug'>
.tabs(v-for="item in Rubriks" :key="index")
  Tab(:item='item' )

</template>
<script setup>
import { reactive, ref } from 'vue';
import Tab from '@/components/Tab.vue';

import { useTaskArtikle } from "@/store/taskStore"
const stateArtikle = useTaskArtikle();
var Rubriks = reactive([])
Rubriks = stateArtikle.Artikle



</script>
