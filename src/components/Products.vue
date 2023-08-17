<template lang="pug">

section#products
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





//- .container
//-   .products
//-     Product(
//-       v-for='product of products'
//-       :key='product.id'
//-       :img='product.img'
//-       :title='product.title'
//-       :price='product.price'
//-     )
//-   Button(type="button" to='/' color="light" class='products__link') View collection
</template>



<script setup>
import { ref } from 'vue'
import Button from '@/components/Ui/button.vue'
import Product from '@/components/Product.vue'



const products = ref([
  {
    id: 1,
    img: 'src/assets/img/products/i-1.webp',
    title: 'The Dandy chair',
    price: 250
  },
  {
    id: 2,
    img: 'src/assets/img/products/i-2.webp',
    title: 'Rustic Vase Set',
    price: 155
  },
  {
    id: 3,
    img: 'src/assets/img/products/i-3.webp',
    title: 'The Silky Vase',
    price: 125
  },
  {
    id: 4,
    img: 'src/assets/img/products/i-4.webp',
    title: 'The Lucy Lamp',
    price: 399
  }
])
</script >

<style lang="scss" scoped>
.products {
  display: grid;
  grid-template-columns: repeat(auto-fit, 300px);
  justify-content: center;
  gap: 20px;
  margin: 110px 0 0 0;

  &__link {
    margin: 48px auto 0;
  }
}




@media (min-width: 768px) and (max-width: 1340px) {
  .products {
    grid-template-columns: repeat(2, 300px);
  }
}


@media (max-width: 767px) {
  .products {
    grid-template-columns: repeat(2, 163px);
    justify-content: center;
    gap: 20px 16px;
    margin: 74px 0 0 0;

    &__link {
      margin: 40px auto 0;
    }
  }
}
</style>