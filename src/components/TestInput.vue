<template lang='pug'>
input(type = 'text'  :v-model='inputValue')
</template>
<script setup>
import { ref } from 'vue';
const props = defineProps({
  inputValue: {
    type: String,
    required: false
  }
})
</script>
<style lang='scss' scoped>
input {
  background-color: $lime-1;
  outline: 1px solid $lime-5;
  max-height: 30px;

  &:focus {
    color: $lime-2;
    background-color: $deep-purple-3;
  }
}
</style>
