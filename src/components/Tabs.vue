<template lang="pug">
.tabs 
  .tabs__item 
    .tabs__title(@click="tabopen=!tabopen") 
      h3 title
    transition(mode='easy-in-out' name='o'  )
      .tabs__hidden(v-if="tabopen") 
        .tabs__wrap
          p Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta at quam ab. Doloribus id debitis necessitatibus cupiditate esse corporis vitae tempore in ducimus possimus nam architecto placeat voluptatum, numquam fugiat dicta quas nihil? Maiores quasi quam magnam delectus porro at voluptatibus alias dolorem sed quisquam? Veniam vel consequatur harum rerum?
          p Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta at quam ab. Doloribus id debitis necessitatibus cupiditate esse corporis vitae tempore in ducimus possimus nam architecto placeat voluptatum, numquam fugiat dicta quas nihil? Maiores quasi quam magnam delectus porro at voluptatibus alias dolorem sed quisquam? Veniam vel consequatur harum rerum?
          p Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta at quam ab. Doloribus id debitis necessitatibus cupiditate esse corporis vitae tempore in ducimus possimus nam architecto placeat voluptatum, numquam fugiat dicta quas nihil? Maiores quasi quam magnam delectus porro at voluptatibus alias dolorem sed quisquam? Veniam vel consequatur harum rerum?
          p Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta at quam ab. Doloribus id debitis necessitatibus cupiditate esse corporis vitae tempore in ducimus possimus nam architecto placeat voluptatum, numquam fugiat dicta quas nihil? Maiores quasi quam magnam delectus porro at voluptatibus alias dolorem sed quisquam? Veniam vel consequatur harum rerum?

</template>

<script setup>
import { ref } from 'vue';
const tabopen = ref(false);
</script>

<style lang="scss" scoped>
.tabs {
  &__item {
    overflow: hidden;
  }

  &__title {
    padding: 5px;
    border-radius: 5px;
    background: $brown-4;
    z-index: 4;
    cursor: pointer;
    position: relative;

    h3 {}
  }

  &__hidden {
    position: relative;
    z-index: 2;
    display: grid;
    grid-template-rows: 0fr;

  }

  &__wrap {
    min-height: 0px;
  }
}



.o-enter-from {
  transition: .2s all;
  grid-template-rows: 0fr;
}

// .v-enter-active,
.o-enter-to {
  transition: 2s all;
  grid-template-rows: 1fr;
}

.o-leave-from {
  transition: 2s all;
  grid-template-rows: 1fr;
}

.o-leave-to {
  transition: 2s all;
  grid-template-rows: 0fr;
}
</style>