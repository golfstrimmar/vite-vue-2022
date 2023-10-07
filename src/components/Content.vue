<template lang="pug">

section#artikel

  ul.text
    Text(title='Nominativ' :Items="Items") 
 
    
</template>

<script setup>
import { ref } from 'vue';
import Text from '@/components/Text.vue';
const props = defineProps({
  title: { type: String, required: false },
  Items: {
    type: Object,
    required: false
  }
})	
</script>

<style lang="scss">
#artikel {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  column-gap: 20px;


}

h2 {
  padding: 20px 0;
  font-family: 'MuseoSansCyrl-300', sans-serif;
  font-size: 50px;
  font-weight: 300;
}
</style>
