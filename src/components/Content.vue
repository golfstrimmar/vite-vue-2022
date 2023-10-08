<template lang="pug">

section#artikel.info
  .info-section
    h3 Nominativ
    ul.text
      Text( v-for="item in items[0]" :key="id" :item='item') 
  .info-section
    h3 Dativ
    ul.text
      Text( v-for="item in items[1]" :key="id" :item='item')  
  .info-section
    h3 Akkusativ
    ul.text
      Text( v-for="item in items[2]" :key="id" :item='item')  
  .info-section
    h3 Genitiv
    ul.text
      Text( v-for="item in items[3]" :key="id" :item='item') 

</template>

<script setup>
import { ref } from 'vue';
import Text from '@/components/Text.vue';
const props = defineProps({
  items: {
    type: Object,
    required: false
  }
})	
</script>

<style lang="scss">
// .col-section {
//   display: grid;
//   grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
//   column-gap: 20px;
// }
.info {
  display: grid;
  grid-template-columns: repeat(4, max-content);
  column-gap: 20px;
  margin: 40px 0 0 0;
}

.info-section {
  border-radius: 5px;
  overflow: hidden;
  background: $blue-13;
  padding: 0 3px 5px;
}

h3 {
  font-weight: bold;
  color: $blue-5;
  background: $blue-2;
  width: 100%;
  border-radius: 5px;
  text-align: center;
  padding: 5px;
  margin: 3px 0;
}
</style>
