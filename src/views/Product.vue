<template lang="pug">
.productPage
	ProductDtl(:product='currentProduct')
	AboutBrand
	Join
</template>

<script setup>

import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import api from "@/api.js";
import ProductDtl from "@/components/ProductDtl.vue";
import AboutBrand from '@/components/AboutBrand.vue';
import Join from '@/components/Join.vue';
const route = useRoute()
const router = useRouter()
var productId = ref('')
var currentProduct = ref({})

onMounted(async () => {
	productId.value = route.params.id
	currentProduct.value = await api.getProduct(productId.value)
})

</script>

<style scoped lang="scss"></style>
