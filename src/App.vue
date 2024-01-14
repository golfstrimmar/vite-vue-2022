<template lang="pug">
.wrapper.rel
  .imgs

    img(:src='images.urlFon' alt='img')
  Header
  main
    router-view
</template>

<script setup>
import * as images from '@/assets/img/img.js'
import Header from '@/components/Header.vue'
</script>

<style lang="scss" scoped></style>
