<template lang="pug">
div 
  Hero
  AboutBrand
  Loader(v-if="loading")
  Products(:products='popularProducts' v-else)
  Ideas
  Join
</template>


<script setup>
import { onMounted,ref} from "vue";
import api from "@/api.js";
import Hero from '@/components/Hero.vue'
import AboutBrand from '@/components/AboutBrand.vue'
import Products from '@/components/Products.vue'
import Ideas from '@/components/Ideas.vue'
import Join from '@/components/Join.vue'
import Loader from '@/components/Ui/Loader.vue'


const popularProducts = ref([]);
const loading = ref(true);

onMounted(async () => {
 popularProducts.value = await api.getPopularProducts();
 loading.value = false;
});
</script>

<style lang="scss" ></style>
