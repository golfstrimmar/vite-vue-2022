<template lang="pug">
header 
    SvgIcon(name='vite' )
    h2 component Header

</template>

<script setup>
import { ref } from 'vue';
import SvgIcon from '@/components/SvgIcon.vue'
</script>

<style lang="scss" scoped>
header {
  @include flex-aligne-center;
  background: rgb(143, 189, 250);
}
</style>
