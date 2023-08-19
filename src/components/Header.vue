<template lang="pug">
header 
  SvgIcon(name='vite' )
  h2 My favorit movies

</template>

<script setup>
import { ref } from 'vue';
import SvgIcon from '@/components/SvgIcon.vue'
</script>

<style lang="scss" scoped>
header {
  @include flex-aligne-center;
  svg {
    width: 30px;
    height: 30px;
  }
}
</style>
