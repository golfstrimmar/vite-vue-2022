<template lang="pug">
.wrapper
  Header
  main
    //- img.salut.salut1(src='/src/assets/svg/salut.gif' ref = 'some1')
    //- img.salut.salut2(src='/src/assets/svg/salut.gif' ref = 'some2')
    //- img.salut.salut3(src='/src/assets/svg/salut.gif' ref = 'some3')
    //- img.salut.salut4(src='/src/assets/svg/salut.gif' ref = 'some4')
    //- img.salut.salut5(src='/src/assets/svg/salut.gif' ref = 'some5')

    router-view

  //- Footer
</template>

<script setup>

import Header from '@/components/Header.vue'
// import Footer from '@/components/Footer.vue'


// import { ref, watch } from 'vue';
// import { useTaskSalut } from "./store/taskSalut"
// import { storeToRefs } from 'pinia'
// const store = useTaskSalut();
// const { isActiveSalut } = storeToRefs(store)
// const some1 = ref(null)
// const some2 = ref(null)
// const some3 = ref(null)
// const some4 = ref(null)
// const some5 = ref(null)



// watch(() => isActiveSalut.value, (newvalue, oldvalue) => {
//   console.log(isActiveSalut.value);
//   if (isActiveSalut.value == 'isActive') {
//     some1.value.classList.add('_is-active')
//     // some2.value.classList.add('_is-active')
//     // some3.value.classList.add('_is-active')
//     // some4.value.classList.add('_is-active')
//     // some5.value.classList.add('_is-active')
//   }
// });

</script>

<style lang="scss" scoped>
// .salut {
//   position: absolute;
//   z-index: -1;
//   opacity: 0;
//   transition: all .2s;

//   &._is-active {
//     z-index: 5;
//     opacity: 1;
//   }
// }

// .salut1 {
//   left: 50%;
//   top: 50%;
// }

// .salut2 {
//   top: 96%;
//   left: 9%;
// }

// .salut3 {
//   top: -78%;
//   left: 19%;
// }

// .salut4 {
//   top: 60%;
//   left: 34%;
// }

// .salut5 {
//   top: 30%;
//   left: 50%;
// }
</style>
