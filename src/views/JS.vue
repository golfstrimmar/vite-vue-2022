<template lang="pug">
.container 
  HeroSome(:content='store.dataJs')
</template>


<script setup>
import HeroSome from "@/components/HeroSome.vue";
import { useTask } from "@/store/taskLager"
const store = useTask();

</script>