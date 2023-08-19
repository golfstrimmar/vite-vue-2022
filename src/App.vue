<template lang="pug">
.wrapper
  Header
  div.main
    p main
</template>

<script setup>
import Header from '@/components/Header.vue'
</script>

<style lang="scss" >
.wrapper {
  overflow: hidden;
  min-height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
}
</style>
