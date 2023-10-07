<template lang="pug">
header 
  SvgIcon(name='vite' )
  SvgIcon(name='vue' )

  router-link(v-for="link in links" :key="link.name" :to="link.href")
    | {{ link.name }}

</template>

<script setup>
import { ref } from 'vue';
import SvgIcon from '@/components/SvgIcon.vue'
const links = ref([
  { name: "Home", href: "/" },
  // { name: "KitTest", href: "/kit-test" },
]);
</script>

<style lang="scss" scoped>
header {
  @include flex-aligne-center;
  padding: 20px 10px;
  background: rgb(143, 189, 250);

  svg {
    width: 30px;
    height: 30px;
    margin: 0 10px 0 0;
  }

  .router-link {
    color: $greyish-brown;
  }

  // .router-link-active {
  //   color: red;
  // }
}
</style>
