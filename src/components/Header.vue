<template lang="pug">
//- header 
//-   q-toolbar.bg-primary.text-white.q-my-md.shadow-2
//-     q-btn.q-mr-sm(flat='' round='' dense='' )
//-       SvgIcon(name='vite' )
//-       SvgIcon(name='vue' )
//-       q-space

//-         router-link.text-subtitle1(v-for="link in links" :key="link.name" :to="link.href")
//-           | {{ link.name }}

header
  .container
    router-link(to="/")
      SvgIcon(name='vite' )
      SvgIcon(name='vue' )

    router-link(v-for="link in links" :key="link.name" :to="link.href")
      |{{ link.name }}
    




</template>

<script setup>
import { ref } from 'vue';
import SvgIcon from '@/components/SvgIcon.vue'
const links = ref([
  { name: "Home", href: "/" },
  { name: "Artikel", href: "/artikel" },
]);
</script>

<style lang="scss" scoped>
header {
  background: $indigo-8;
  padding: 10px 0;

  svg {
    width: 30px;
    height: 30px;
    margin: 0 10px 0 0;
  }


  a {
    margin: 0 10px 0 0;
  }

  .router-link-active {}

}
</style>
