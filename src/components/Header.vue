<template lang="pug">
header 
  .container
    .header__body
      router-link(to="/").rel
        .imgs
          img(src='/src/assets/logo.png'  alt='img')
      .header__links
        router-link(v-for="link in links" :key="link.name" :to="link.href" )
          |{{ link.name }}
</template>

<script setup>
import { ref } from 'vue';
import SvgIcon from '@/components/SvgIcon.vue'
import { useRouter } from 'vue-router'
const router = useRouter();
// =======================
const links = ref([
  { name: "Pug+Scss", href: "/" },
  { name: "Scss", href: "/scss" },
  { name: "JS", href: "/js" },
]);
</script>

<style lang="scss" scoped>
header {
  min-height: 30px;
  @include flex-aligne-center;
  background: $brown-4;

}

.header__body {
  .rel {
    width: 30px;
    height: 30px;
  }

  padding: 10px 0;
  display: grid;
  grid-template-columns: 100px 1fr;
  column-gap: 10px;
  align-items: center;
  width: 100%;
}

.header__links {
  display: grid;
  grid-template-columns: repeat(auto-fill, 100px);
  column-gap: 10px;
  justify-items: center;

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
