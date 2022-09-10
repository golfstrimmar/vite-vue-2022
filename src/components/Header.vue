<script setup>
import { ref } from "vue";

// const props = defineProps({
//   openSidebar: {
//     type: Boolean,
//     required: true,
//   },
// });

const links = ref([
  { name: "Home", href: "/" },
  { name: "KitTest", href: "/kit-test" },
]);
</script>

<template>
  <header>
    <div class="container">
      <div class="header__body">
        <div class="header__logo logo">
        <img src="./../assets/vue.svg" alt="logo">
        </div>
       
        <div class="header__menu menu">
          <router-link
            class="menu__link"
            v-for="link in links"
            :key="link.name"
            :to="link.href"
            >{{ link.name }}
          </router-link>
        </div>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
header {
  z-index: 50;
  transition: all 0.2s ease-in-out;
  position: fixed;
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  top: 0;
  background-color: rgba(0, 0, 0, 0.7);
  border: 1px solid transparent;
  // background-image: url("/dist/img/img-1.png")

  .header__body {
    position: relative;
    height: 100%;
    display: grid;
    grid-template-columns: 100px 1fr;
    width: 100%;
    justify-content: space-between;
    column-gap: 20px;
    align-items: center;
  }

  // .header__burger {
  //   display: none;
  // }

  // .icon:hover {
  //   cursor: pointer;
  // }

  // .header__close {
  //   display: none;
  // }
    .header__logo img{
width: 30px;
height: 30px;
    }
}

.menu {
  display: flex;
  column-gap: 20px;

  &__link {
    text-transform: uppercase;
    color: var(--primary);
    transition: all 0.2s;
    font-size: 16px;
  }
  &__link.router-link-active {
    color: var(--white);
  }
}
</style>
