<template lang="pug">
header 
  .container
    .header__body
      router-link(to="/")
        SvgIcon(name='vite' )
      .header__links
        router-link(v-for="link in links" :key="link.name" :to="link.href" )
          |{{ link.name }}
      //- @click='clickBurger'
      //- ._burger( @click='clickBurger' :class="[burgerActive ? ' _is-active' : '']") 
      //-   span

</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import SvgIcon from '@/components/SvgIcon.vue'
import { useRouter } from 'vue-router'
const router = useRouter();
// =======================
const links = ref([
  { name: "Index", href: "/" },
  { name: "Something", href: "/something" },
]);
// =======================
// var burgerActive = ref(false);
// const clickBurger = () => {
//   // if (window.innerWidth <= 1200) {
//   burgerActive.value = !burgerActive.value;
//   if (burgerActive.value) {
//     document.querySelector('body').classList.add("lock")
//   } else {
//     document.querySelector('body').classList.remove("lock")
//   }
//   // }

// }
// const handleWindowScroll = () => {
//   const header = document.querySelector('.header')
//   if (window.pageYOffset > 60) {
//     header.classList.add("responciveHeader");
//   } else {
//     header.classList.remove("responciveHeader");
//   }
// };

// =============================
// const handleWindowSizeChange = () => {
//   if (window.innerWidth >= 1200) {
//     burgerActive.value = false
//   } else {
//   }
// };
// onUnmounted(() => {
//   window.removeEventListener("resize", handleWindowSizeChange);
// });

</script>

<style lang="scss" scoped>
header {
  background: rgb(143, 189, 250);
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
