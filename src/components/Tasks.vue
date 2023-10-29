<template lang="pug">
.container
  input(ref='custominput' )
  button(@click='InputFocus') submitData
</template>

<script setup>
import { ref } from 'vue';
import TestInput from '@/components/TestInput.vue';



const custominput = ref(null)

function InputFocus() {
  custominput.value.focus()
}



</script>

<style lang="scss" scoped></style>