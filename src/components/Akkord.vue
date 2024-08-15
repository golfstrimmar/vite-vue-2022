<template lang='pug'>
.akkord
  .akkord__nav 
    a.btn.nav-title( href="#!" v-for="item in titles " :key="index" @click="clickHandler(item.id)" :class="[(item.isOpen == true) ? '_is-active' : '' ]")  {{item.title}}
  .akkord__items
    .block(v-for="item in contextLineas" :key="index" :class="[(item.isOpen == true) ? '_is-active' : '' ]")  

      Copy(:item="item"  @clickcopy='clickcopy' v-for="el in item"  :key="index" )
</template>

<script setup>
import { ref, onMounted } from 'vue';
const props = defineProps({
  title: {
    type: String,
    required: false
  },
  Data: {
    type: Array,
    required: false
  }
})
const emit = defineEmits(['someEvent'])


// --------------------------
var contextLineas = ref(props.Data);


const clickHandler = (id) => {
  var Ar = contextLineas.value
  Ar.forEach(car => { car.isOpen = false; })
  Ar[id].isOpen = true;
  titles.value.forEach(car => { car.isOpen = false; })
  titles.value[id].isOpen = true;
};


const HendlerClick = (dataText) => {
  emit('someEvent', dataText)
};

var titles = ref([]);
onMounted(() => {
  contextLineas.value.forEach(car => { titles.value.push({ id: contextLineas.value.indexOf(car), title: car[0].title }) })
  contextLineas.value.forEach(car => { car.splice(0, 1) })
  titles.value[0].isOpen = true;
  contextLineas.value[0].isOpen = true;
})
</script>
<style lang='scss' scoped>
.akkord {
  display: grid;
  grid-template-columns: 100px 1fr;
  column-gap: 5px;
}

.akkord__nav {
  display: flex;
  flex-direction: column;
}

.nav-title {
  font-size: 15px;
  color: #666565;
  text-shadow: 0px -1px 1px #bdb5b4, 1px 1px 1px white;
  cursor: pointer;
  border: 1px solid #7AB764;
  border-radius: 5px;
  margin: 0 0 5px 0;
  padding: 3px;
  @include flex-center;
  background-image: -webkit-linear-gradient(top, #f4f1ee, #fff);
  background-image: linear-gradient(top, #f4f1ee, #fff);
  border-radius: 5px;
  box-shadow: 0px 8px 10px 0px rgba(0, 0, 0, 0.3), inset 0px 4px 1px 1px white, inset 0px -3px 1px 1px rgba(204, 198, 197, 0.5);

  &._is-active {
    color: #eb2f2f;
    text-shadow: 0px 0px 6px #eb2f2f;
  }
}

.akkord__items {
  display: flex;
  flex-direction: column;
  overflow: hidden;

  .block {
    position: relative;
    z-index: -1;
    opacity: 0;
    transform: translate(-100%, 0);
    border: 1px solid #7AB764;
    border-radius: 5px;
    @include transition;
    overflow: scroll;
    max-height: 80vh;

    &._is-active {
      z-index: 1;
      opacity: 1;
      order: -1;
      transform: translate(0, 0);
    }
  }
}
</style>
