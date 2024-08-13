<template lang='pug'>
.akkord
  .akkord__nav 
    a.btn.nav-title( href="#!" v-for="item in props.titles" :key="index"  )  {{item.title}}
    //- a.btn.nav-title( href="#!" v-for="item in titles " :key="index" @click="clickHandler(item.id)" :class="[(item.isOpen == true) ? '_is-active' : '' ]")  {{props.title}}


  .akkord__items
    .block(v-for="Data in props.Data" :key="index" )
      .block__line(v-for="el in Data" :key="index" ) {{el.text}} 
        .el(v-for="content in el.content" :key="index")
          Input(:Antwort='el' @anwortPositiv="anwortPositiv" v-for="elInput in el" :key="index")
    //- .akkord__items
    //-   .block(v-for="item in props.Data" :key="index" )
    //-     p {{item.text}}
    //-     Input(:Antwort='el' @anwortPositiv="anwortPositiv" v-for="el in item.content" :key="index")
    //-   .block(v-for="item in contextLineas" :key="index" :class="[(item.isOpen == true) ? '_is-active' : '' ]")  
    //-     .el(v-for="el in item" :key="index"  :discription="el.discription"  :text="el.dataText"  @click = 'HendlerClick(el.dataText)')
    //-     textarea(v-copy) {{el.dataText }}
    //-     p {{el.discription}}

</template>

<script setup>
import { ref, onMounted, reactive } from 'vue';
import Input from '@/components/Input.vue';
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
const emit = defineEmits(['someEvent'])


// --------------------------
var contextLineas = reactive([]);
var titles = [];

// const clickHandler = (id) => {
//   var Ar = contextLineas.value
//   Ar.forEach(car => { car.isOpen = false; })
//   Ar[id].isOpen = true;
//   titles.value.forEach(car => { car.isOpen = false; })
//   titles.value[id].isOpen = true;
// };


// const HendlerClick = (dataText) => {
//   emit('someEvent', dataText)
// };

// props.Data = props.Data.map((car) => { return car.splice(1, car.length) });
// console.log(contextLineas);


onMounted(() => {


  // props.Data.forEach((cell) => { titles.value.push({ id: props.Data.indexOf(cell), title: cell.splice(0, 1).text }) });
  // for (let i = 0; i < props.Data.length; i++) {
  // props.Data[i].forEach(car => { console.log(car) })
  // contextLineas.push({ id: i, title: props.Data[i] })
  // }

  // contextLineas.forEach(car => { console.log(car.title[0]) })
  // contextLineas = contextLineas.map((car) => { return car = car.title });
  // contextLineas.forEach(car => { console.log(car) })
  // console.log(contextLineas);
})




// contextLineas = contextLineas.map((car) => { return car = car.splice(0, 1) });
// props.Data = props.Data.forEach(car => { return car.splice(0, 1) })
// console.log(props.Data)

// contextLineas = contextLineas.map((car) => { return car = car.content.splice(0, 1) });


// contextLineas.value = props.Data
// console.log(contextLineas.value);
// contextLineas.value.forEach(car => { titles.value.push({ id: contextLineas.value.indexOf(car), title: car.splice(0, 1).text }) })
// contextLineas.value.forEach(car => { car.splice(0, 1) })
// titles.value[0].isOpen = true;
// contextLineas.value[0].isOpen = true;

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
    // z-index: -1;
    // opacity: 0;
    // transform: translate(-100%, 0);
    // border: 1px solid #7AB764;
    border-radius: 5px;
    @include transition;
    // overflow: scroll;
    // max-height: 80vh;

    &._is-active {
      z-index: 1;
      opacity: 1;
      order: -1;
      transform: translate(0, 0);
    }
  }
}

.block__line {}

.el {

  background-color: $lime-1;
  padding: 2px;
  outline: 1px solid $lime-3;

  textarea {

    height: 26px;
  }

  &:hover {

    color: $blue-grey-10;
    @include transition;

    textarea {
      cursor: pointer;
      height: 26px;
      font-size: 18px;
    }
  }

  &._is-active {
    background-color: $red-4;
    color: $red-1;
  }
}
</style>
