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
  Button(type="button" to='/' color="light" class='products__link') View collection
</template>



<script setup>
import { ref } from 'vue'
import Button from '@/components/Ui/button.vue'
import Product from '@/components/Product.vue'



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
  grid-template-columns: repeat(auto-fit, 300px) ;
  justify-content: center;
  gap: 20px;
  margin: 82px 0 0 0;

  &__link {
    margin: 48px auto 0;
  }
}
</style>