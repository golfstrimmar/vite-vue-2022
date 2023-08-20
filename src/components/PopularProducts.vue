<template lang="pug">
.popular-products
	Loader(v-if="loading")
	Products(:products='popularProducts' v-else)
</template>

<script setup>
import api from "@/api.js";
import Products from '@/components/Products.vue'
import Loader from '@/components/Ui/Loader.vue'
import { onMounted, ref } from "vue";

const popularProducts = ref([]);
const loading = ref(true);

onMounted(async () => {
	popularProducts.value = await api.getPopularProducts();
	loading.value = false;
});
</script>

<style scoped lang="scss"></style>
