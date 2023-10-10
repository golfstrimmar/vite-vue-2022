<template lang="pug">
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
  { name: "Personal", href: "/personal" },
  { name: "Interrogativ", href: "/interrogativ" },
  { name: "Reflexiv", href: "/reflexiv" },
  { name: "Possesiv", href: "/possesiv" },
  { name: "Zeige", href: "/zeigepron" },
  { name: "Modal", href: "/modal" },
  { name: "Passiv", href: "/passiv" },
  { name: "Konjunktiv-II", href: "/konjunktiv" },
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

  .router-link-active {
    color: $deep-orange-4;
  }

}
</style>
