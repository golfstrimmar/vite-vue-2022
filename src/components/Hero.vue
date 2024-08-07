<template lang="pug">
.hero

  //- .result-area
  //-   textarea.result(v-copy :v-model="somethingPug" :value='somethingPug' )
  //-   textarea.result(v-copy :v-model="somethingScss" :value='somethingScss' )
  //- .hero__canvas
  //-   span
  //-   span
  //-   span
  //-   span
  //-   span
  //-   span
  //-   span
  //-   span
  //-   span

    //- 
  textarea.canvas(draggable="true" v-for="item in canvasItems" :key="index" :value = 'item.id ' :style= "{ marginLeft: item.Offset*30 + 'px' }" @dragstart='canvasStart' @drop='canvasDrop')

  //- .lager
  //-   textarea.line(draggable="true" @dragstart='startHandler' value='Lirem1' )
</template>


<script setup>
import { ref, reactive, computed } from 'vue'
import draggable from 'vuedraggable';
// =============================
const canvas = ref(null)
const Text = ref('')
var spase = 30;
var ball = ref({})
var canvasOffset = 0;
let newX = ref(0);
let newY = ref(0);
let startX = ref(0);
let startY = ref(0);
const CanvasOffset = 30

var Index = 0;
var Offset = 0;
var spase = 30;


var canvasItems = ref([
  { id: '0', Offset: '0', value: 'value' },
  { id: '1', Offset: '1', value: 'value1' },
  { id: '2', Offset: '2', value: 'value2' },
  { id: '3', Offset: '2', value: 'value3' },
  { id: '4', Offset: '2', value: 'value4' },
]);


const canvasStart = (e) => {
  e.dataTransfer.effectAllowed = "move";
  e.dataTransfer.setData("item", e.target.value);
  return false;

}

const canvasDrop = (e) => {


  console.log(canvasItems.value);

  // var Index = 0;
  // var Offset = 0;
  // var spase = 30;

  // if (e.stopPropagation)
  //   e.stopPropagation();
  // Offset = e.dataTransfer.getData("item")
  // if (e.clientX < CanvasOffset + 30) {
  //   Offset = 0;
  //   canvasItems.
  // }

  // for (var i = 30; i <= 300; i = i + 30) {
  //   if (CanvasOffset + i < e.clientX && e.clientX < CanvasOffset + i + 30) {
  //     Offset = i / 30
  //     canvasItems.push({ id: Index, Offset: Offset, value: Text.value })
  //   }
  // }

  // console.log(canvasItems);

  // e.target.style.marginLeft = `${spase * Offset}` + 'px';
  // e.target.value = Text.value;

  // Index++
  // canvasItems.push({ id: '', Offset: '', value: '' })
}
// =============================

const Handlerdown = (e) => {

  startX.value = e.clientX
  startY.value = e.clientY
  console.log(startX.value, startY.value);
}
// =================================

const startHandler = (e) => {
  e.dataTransfer.effectAllowed = "move";
  e.dataTransfer.setData("item", e.target.value);

  return false;
}
// =================================

// =============================
const dragoverHandler = (e) => {
  if (e.preventDefault)
    e.preventDefault();
  e.dataTransfer.dropEffect = "move";
  return false;
}

// =============================

const dropHandler = (e) => {


  if (e.stopPropagation)
    e.stopPropagation();
  Text.value = e.dataTransfer.getData("item")

  // const CanvasOffset = Math.round(canvas.value.getBoundingClientRect().left)

  var i;

  if (e.clientX < CanvasOffset + 30) {
    Offset = 0;
    canvasItems.push({ id: Index, Offset: Offset, value: Text.value })
  }

  for (i = 30; i <= 300; i = i + 30) {
    if (CanvasOffset + i < e.clientX && e.clientX < CanvasOffset + i + 30) {
      Offset = i / 30
      canvasItems.push({ id: Index, Offset: Offset, value: Text.value })
    }
  }

  console.log(canvasItems);

  e.target.style.marginLeft = `${spase * Offset}` + 'px';
  e.target.value = Text.value;

  Index++
  canvasItems.push({ id: '', Offset: '', value: '' })
}



//- import { ref, reactive, computed } from 'vue'
//- import DragDrop from './DragDrop.vue';
//- import Button from './Button.vue';
//- import Copy from './Copy.vue';
//- var Result = ref('');
//- var copyDataCommon = reactive([{ i: 0, dataText: '' }]);
//- var copyDataName = reactive([{ i: 0, dataText: '' }]);
//- var copyDataLinks = reactive([{ i: 0, dataText: '' }]);

//- copyDataCommon = [
//-   { i: 1, dataText: 'section(id="best").best.rel' },
//-   { i: 2, dataText: '.container' },
//-   { i: 12, dataText: '.best__' },
//-   { i: 17, dataText: '.rel' },
//-   { i: 17, dataText: '.center' },
//-   { i: 2, dataText: 'h2' },
//-   { i: 2, dataText: 'h3' },
//-   { i: 2, dataText: 'h4' },
//-   { i: 2, dataText: 'h1' },
//-   { i: 3, dataText: 'p' },
//-   { i: 4, dataText: 'span' },
//-   { i: 6, dataText: 'nav' },
//-   { i: 7, dataText: 'ul' },
//-   { i: 8, dataText: 'li' },
//-   { i: 8, dataText: 'img' },
//-   { i: 9, dataText: 'svg' },
//-   { i: 9, dataText: 'use(xlink:href="#flag")' },
//-   { i: 9, dataText: '.imgs' },
//-   { i: 9, dataText: 'img(src="./img/bg.webp" alt = "img")' },

//- ]

//- copyDataName = [
//-   { i: 15, dataText: 'body' },
//-   { i: 18, dataText: 'blocks' },
//-   { i: 18, dataText: 'block' },
//-   { i: 17, dataText: 'button' },
//-   { i: 17, dataText: 'content' },
//-   { i: 17, dataText: 'email' },
//-   { i: 17, dataText: 'img' },
//-   { i: 17, dataText: 'info' },
//-   { i: 17, dataText: 'hidden' },
//-   { i: 19, dataText: 'items' },
//-   { i: 20, dataText: 'item' },
//-   { i: 17, dataText: 'line' },
//-   { i: 20, dataText: 'logo' },
//-   { i: 17, dataText: 'plaza' },
//-   { i: 17, dataText: 'phone' },
//-   { i: 16, dataText: 'title' },
//-   { i: 17, dataText: 'text' },
//- ]

//- copyDataLinks = [
//-   { i: 11, dataText: 'a.btn.btn-success.but-wave( href="#!")  ' },
//-   { i: 11, dataText: 'a.btn.btn-success.but-wave.popups-init-js(rel="#popup1" href="#!")  ' },
//-   { i: 10, dataText: 'a.btn.btn-empty(href="#!") empty' },
//-   { i: 10, dataText: 'a.btn.btn-blue(href="#!") blue' },
//-   { i: 10, dataText: 'button.btn.btn-success.but-wave(type="text" name = "text") text' },
//-   { i: 10, dataText: 'button.btn.btn-success.but-wave(type="submit" name = "submit") submit' },
//-   { i: 10, dataText: 'button.btn.btn-empty(type="button" name = "empty") empty' },
//-   { i: 10, dataText: 'button.btn.btn-blue(type = "button") blue' }
//- ]
//- // ----------------------------------------

//- // ----------------------------------------
//- const handelClean = () => {
//-   Result.value = '';
//- }
//- // ----------------------------------------
//- const someEvent = (data) => {
//-   Result.value = Result.value + data;
//- }
//- // ----------------------------------------


</script>



<style lang="scss">
.result-area {
  display: grid;
  column-gap: 10px;
  grid-template-columns: repeat(2, 1fr);
  margin: 10px 0;

}

/* 
.result {
  border: 1px solid darkblue;
  min-height: 45px;
  white-space: pre-wrap;
  cursor: pointer;

  &._is-copied {
    border: 1px solid $deep-orange-8;
    background-color: $deep-orange-4;
    color: #fff;
  }
} */

/* ================================== */


.hero__canvas {
  position: relative;
  border: 1px solid $deep-orange-8;
  overflow: hidden;

  span {
    width: 1px;
    height: 100%;
    background: gray;
    position: absolute;

    &:nth-child(1) {
      left: 30px;
    }

    &:nth-child(2) {
      left: 60px;
    }

    &:nth-child(3) {
      left: 90px;
    }

    &:nth-child(4) {
      left: 120px;
    }

    &:nth-child(5) {
      left: 150px;
    }

    &:nth-child(6) {
      left: 180px;
    }

    &:nth-child(7) {
      left: 210px;
    }

    &:nth-child(8) {
      left: 240px;
    }

    &:nth-child(9) {
      left: 270px;
    }

    &:nth-child(10) {
      left: 300px;
    }
  }
}

.canvas {
  width: 100%;
  background-color: $blue-grey-1;
  height: 30px;
  position: relative;
  opacity: .9;
  border: 1px solid $deep-orange-8;
}


.line {
  height: 30px;
  background-color: $grey-4;
  outline: 1px solid $grey-6;
  position: relative;
  cursor: pointer;

  &._is-active {
    opacity: 0.7;
    background-color: $grey-2;
    outline: 1px solid $grey-6;
  }

  /* &._is-bestzt {

    background-color: darksalmon;
    border: 1px solid darkgoldenrod;
  } */
}
</style>
