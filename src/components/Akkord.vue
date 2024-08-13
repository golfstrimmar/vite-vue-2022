<template lang='pug'>
.akkord
  .akkord__nav 

    Button(v-for="item in props.titles" :key="index" :item='item' @click='ButtonHandler(item.id) ')
  .akkord__items
    .block(v-for="Data in props.Data" :key="index" :class="(Data.isOpen == true) ? '_is-active' : '' "  )
      .block__line(v-for="el in Data" :key="index" ) 
        h4 {{el.text}}

        Input(:Antwort='content'  :content='el.content' v-for="content in el.content" :key="index" @anwortPositiv="anwortPositiv" @lineFertig="lineFertig")


</template>

<script setup>
import { ref, onMounted, computed, reactive } from 'vue';
import Input from '@/components/Input.vue';
import Button from '@/components/Button.vue';
const props = defineProps({
  titles: {
    type: Array,
    required: false
  },
  Data: {
    type: Array,
    required: false
  }
})

// --------------------------
const ButtonHandler = (id) => {
  props.titles.forEach(car => {
    car.id == id ? car.isOpen = true :
      car.isOpen = false
  })
  props.Data.forEach(car => {
    car.id == id ? car.isOpen = true :
      car.isOpen = false
  })
};

// const anwortPositiv = (data) => {
//   foc.value = data
// };
const lineFertig = (some) => {
  var x
  do {
    x = some.parentElement.nextElementSibling.querySelector('input');
  }
  while (x && !(/text/.test(x.type)));
  x.focus();
}



</script>
<style lang='scss' scoped>
.akkord {
  display: grid;
  grid-template-columns: 150px 1fr;
  column-gap: 5px;
  margin: 20px 0 0 0;
}

.akkord__nav {
  display: flex;
  flex-direction: column;
  gap: 5px 0;
}

.nav-title {}

.akkord__items {
  display: flex;
  flex-direction: column;
  overflow: hidden;


  .block {
    position: relative;
    z-index: -1;
    opacity: 0;
    transform: translate(-100%, 0);
    transition: all .3s;
    // overflow: scroll;
    // max-height: 80vh;

    &._is-active {
      transition: all .3s;
      z-index: 1;
      opacity: 1;
      order: -1;
      transform: translate(0, 0);
    }
  }
}

.block__line {
  margin: 0 0 6px 0;

  h4 {
    margin: 0 0 3px 0;
  }

  input:not([type="range"]) {
    height: 22px;
    border-radius: 3px;

    margin: 0 3px 0 0;

    &:last-of-type {
      margin: 0 0 0 0;
    }
  }
}
</style>
