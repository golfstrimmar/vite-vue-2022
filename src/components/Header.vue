<template lang="pug">
header 

  .header__body
    .header__links
      router-link(v-for="link in links" :key="link.name" :to="link.href" )
        |{{ link.name }}
    //- router-link(to="/").rel
    //-   .imgs
    //-     img(src='/src/assets/logo.png'  alt='img')
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import SvgIcon from '@/components/SvgIcon.vue'
import { useRouter } from 'vue-router'
const router = useRouter();
// =======================
const links = ref([
  { name: "VUE", href: "/pvue" },
  { name: "JS", href: "/js" },
  { name: "Scss", href: "/scss" },
  { name: "Pug+Scss", href: "/" },
]);
</script>

<style lang="scss" scoped>
header {
  display: flex;
  align-items: flex-start;
  background: #04286f;
  // transform: rotate(-90deg);
  z-index: 5;
  width: 30px;
  height: 101vh;
  position: relative;
  position: fixed;


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
  transform: rotate(-90deg);
  width: 100vh;
  margin: 0 auto;
  position: relative;
  left: -94px;
  top: 80px;
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

.header__body {
  display: grid;
  grid-template-columns: 200px 1fr;
  column-gap: 20px;
  align-items: center;

  svg {
    width: 30px;
    height: 30px;
  }
}

.header__links {
  background-color: rgb(250, 224, 82);
  display: grid;
  grid-template-columns: repeat(auto-fill, 200px);
  column-gap: 20px;
  align-items: center;
}
</style>
