<template lang="pug">
.header
  .header__body
    SvgIcon(name='vite' )
    h2 My Favorite Muvies 

</template>

<script setup>
import { ref } from 'vue';
import SvgIcon from '@/components/SvgIcon.vue'
</script>

<style lang="scss" scoped>
.header {
  margin: 20px 0 0 0;

  &__body {
    @include flex-center;
    padding: 20px 0;
    column-gap: 40px;

    svg {
      width: 30px;
      height: 30px;
    }
  }

}
</style>
