<template lang="pug">
.header
  .container
    .header__body
      SvgIcon(name='vite' )
      h2 component Header

</template>

<script setup>
import { ref } from 'vue';
import SvgIcon from '@/components/SvgIcon.vue'
</script>

<style lang="scss" scoped>
body{

}
.header {
  &__body {
    @include flex-center;padding: 20px 0;
    column-gap: 40px;
    svg{
      width: 30px;
      height: 30px;
    }
  }

}
</style>
