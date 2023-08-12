<template lang="pug">
.container
  .products
    Product(
      v-for='product of products'
      :key='product.id'
      :img='product.img'
      :title='product.title'
      :price='product.price'
    )
  Button(
    :text='button.text'
    )
</template>



<script setup>
import { ref } from 'vue'
import Button from '../components/ButtonEmpty.vue'
import Product from '../components/Product.vue'

const button = ref(
  {
    text: 'View collection',
  },
)

const products = ref([
  {
    id: 1,
    img: '../img/products/i-1.png',
    title: 'The Dandy chair',
    price: 250
  },
  {
    id: 1,
    img: '../img/products/i-2.png',
    title: 'Rustic Vase Set',
    price: 155
  },
  {
    id: 1,
    img: '../img/products/i-3.png',
    title: 'The Silky Vase',
    price: 125
  },
  {
    id: 1,
    img: '../img/products/i-4.png',
    title: 'The Lucy Lamp',
    price: 399
  }
])
</script >

<style lang="scss" scoped>
.products {
  display: grid;
  grid-template-columns: repeat(4, 305px);
  column-gap: 20px;
  margin: 82px 0 0 0;
}

.button-empty {
  margin: 48px auto 0;
}
</style>