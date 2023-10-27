<template lang="pug">
.container
  TestInput( v-model="age" )
  p age:{{ age }}
</template>

<script setup>
import { ref } from 'vue';
import TestInput from '@/components/TestInput.vue';

const age = ref("fff")


</script>

<style lang="scss" scoped></style>