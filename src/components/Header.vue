<template lang="pug">
header 
  .container
    .header__body
      .header__links
        router-link(v-for="link in links" :key="link.name" :to="link.href" )
          |{{ link.name }}
      //- router-link(to="/").rel
      //-   .imgs
      //-     img(src='/src/assets/logo.png'  alt='img')
</template>

<script setup>
import { ref } from 'vue';
import SvgIcon from '@/components/SvgIcon.vue'
import { useRouter } from 'vue-router'
const router = useRouter();
// =======================
const links = ref([
  { name: "JS", href: "/js" },
  { name: "Scss", href: "/scss" },
  { name: "Pug+Scss", href: "/" },
]);
</script>

<style lang="scss" scoped>
header {
  height: 33px;
  display: flex;
  align-items: center;
  background: #04286f;
  position: fixed;
  transform: rotate(-90deg);
  top: 434px;
  left: -437px;
  z-index: 5;
  width: 101vh;
}

.header__body {
  .rel {
    width: 30px;
    height: 30px;
  }

  padding: 10px 0;
  display: grid;
  column-gap: 10px;
  align-items: center;
  width: 100%;
}

.header__links {
  display: flex;
  column-gap: 10px;
  justify-content: flex-end;
  padding: 0 16px 0 0;

  a {
    text-transform: uppercase;
    color: $brown-1;

    &:hover {
      color: $amber-6;
    }

    &.router-link-active {
      color: $deep-orange-6;
    }
  }
}
</style>
