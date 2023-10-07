<template lang="pug">

.container
  Text(:Nominativ='Nom')
    
</template>

<script setup>
import { ref } from 'vue';
import Text from '@/components/Text.vue';
const Nom = [
  ein, eine, ein, kein, der, die, das, die
]
</script>

<style lang="scss">
.hero {
  // 

}
</style>
