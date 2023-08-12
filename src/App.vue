<script setup>
import Header from './components/Layout/Header.vue'
import Hero from './components/Layout/Hero.vue'
</script>

<template>
  <div class="container">
    <Header />
    <Hero />
  </div>
</template>

<style lang="scss" > @import url('https://fonts.cdnfonts.com/css/satoshi');
 @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

 html * {
   box-sizing: border-box;
 }

 body {
   font-family: 'Satoshi', sans-serif;
   //  font-family: 'Playfair Display', serif;
   font-size: 16px;
   margin: 0 0 0 0;
   padding: 0 0 0 0;
 }
img{
  max-width: 100%;
}
.imgs {
  overflow: hidden;
  position: relative;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}

.imgs img {
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: top;
  position: absolute;
  top: 0;
  left: 0;
}
 #app {
   .container {
     max-width: 1440px;
     margin: 0 auto;
   }
 }

 a {
   text-decoration: none;
   color: inherit;
   transition: all .2s;
 }
</style>
