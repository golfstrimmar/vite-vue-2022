<template lang="pug">
.wrapper
  Header
  main
    //- img.salut.salut1(src='/src/assets/svg/salut.gif' )
    //- img.salut.salut2(src='/src/assets/svg/salut.gif' )
    //- img.salut.salut3(src='/src/assets/svg/salut.gif' )
    //- img.salut.salut4(src='/src/assets/svg/salut.gif' )
    //- img.salut.salut5(src='/src/assets/svg/salut.gif' )

    router-view

  //- Footer
</template>

<script setup>
import Header from '@/components/Header.vue'
// import Footer from '@/components/Footer.vue'

</script>

<style lang="scss" scoped>
.salut {
  position: absolute;
  // transform: translate(-50%, -50%);
  // top: 50%;
  // left: 50%;
  z-index: 5;
}

.salut1 {
  left: 10%;
  top: 26%;
}

.salut2 {
  top: 80%;
  left: 20%;
}

.salut3 {
  top: 30%;
  left: 30%;
}

.salut4 {
  top: 60%;
  left: 40%;
}

.salut5 {
  top: 30%;
  left: 50%;
}
</style>
