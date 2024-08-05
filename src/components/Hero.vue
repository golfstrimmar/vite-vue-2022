<template lang="pug">
.container

  .hero 
    DragDrop
    .hero__head
      .hero__temp
        .tempContent(draggable="true" @dragstart='startHandler') {{ Result }}
        img(src='/src/assets/ex.png'  alt='img')
        Button.hero__reset( @click='handelClean')
      input.hero__line(type = 'text'  v-model='Result' )
    .hero__body
      .hero__column
        Copy(:text="item.dataText"  @someEvent = "someEvent(item.dataText)" v-for="item in copyDataCommon" :key="item.i").hero__column
      .hero__column
        Copy(:text="item.dataText"  @someEvent = "someEvent" v-for="item in copyDataName" :key="item.i").hero__column
      .hero__column
        Copy(:text="item.dataText"  @someEvent = "someEvent" v-for="item in copyDataLinks" :key="item.i").hero__column
</template>

<script setup>
import { ref, reactive, computed } from 'vue'
import DragDrop from './DragDrop.vue';
import Button from './Button.vue';
const newItem = ref("");
import Copy from './Copy.vue';
var Result = ref('');
var copyDataCommon = reactive([{ i: 0, dataText: '' }]);
var copyDataName = reactive([{ i: 0, dataText: '' }]);
var copyDataLinks = reactive([{ i: 0, dataText: '' }]);
var activePlaza = ref('');
const Plaza = ref(null);
const temp = ref(null)

copyDataCommon = [
  { i: 1, dataText: 'section(id="best").best.rel' },
  { i: 2, dataText: '.best__' },
  { i: 12, dataText: '.container' },
  { i: 17, dataText: '.rel' },
  { i: 17, dataText: '.center' },
  { i: 2, dataText: 'h2' },
  { i: 2, dataText: 'h3' },
  { i: 2, dataText: 'h4' },
  { i: 2, dataText: 'h1' },
  { i: 3, dataText: 'p' },
  { i: 4, dataText: 'span' },
  { i: 6, dataText: 'nav' },
  { i: 7, dataText: 'ul' },
  { i: 8, dataText: 'li' },
  { i: 8, dataText: 'img' },
  { i: 9, dataText: 'svg' },
  { i: 9, dataText: 'use(xlink:href="#flag")' },
  { i: 9, dataText: '.imgs' },
  { i: 9, dataText: 'img(src="./img/bg.webp" alt = "img")' },

]

copyDataName = [
  { i: 15, dataText: 'body' },
  { i: 18, dataText: 'blocks' },
  { i: 18, dataText: 'block' },
  { i: 17, dataText: 'button' },
  { i: 17, dataText: 'content' },
  { i: 17, dataText: 'email' },
  { i: 17, dataText: 'img' },
  { i: 17, dataText: 'info' },
  { i: 17, dataText: 'hidden' },
  { i: 19, dataText: 'items' },
  { i: 20, dataText: 'item' },
  { i: 17, dataText: 'line' },
  { i: 20, dataText: 'logo' },
  { i: 17, dataText: 'plaza' },
  { i: 17, dataText: 'phone' },
  { i: 16, dataText: 'title' },
  { i: 17, dataText: 'text' },
]

copyDataLinks = [
  { i: 11, dataText: 'a.btn.btn-success.but-wave( href="#!")  ' },
  { i: 11, dataText: 'a.btn.btn-success.but-wave.popups-init-js(rel="#popup1" href="#!")  ' },
  { i: 10, dataText: 'a.btn.btn-empty(href="#!") empty' },
  { i: 10, dataText: 'a.btn.btn-blue(href="#!") blue' },
  { i: 10, dataText: 'button.btn.btn-success.but-wave(type="text" name = "text") text' },
  { i: 10, dataText: 'button.btn.btn-success.but-wave(type="submit" name = "submit") submit' },
  { i: 10, dataText: 'button.btn.btn-empty(type="button" name = "empty") empty' },
  { i: 10, dataText: 'button.btn.btn-blue(type = "button") blue' }
]
// ----------------------------------------

// ----------------------------------------
const handelClean = () => {
  Result.value = '';
}
// ----------------------------------------
const someEvent = (data) => {
  Result.value = Result.value + data;
}
// ----------------------------------------
const startHandler = (e) => {
  e.dataTransfer.effectAllowed = "move";
  e.dataTransfer.setData("item", e.target.innerText);
  Result.value = '';
}

</script>


<style lang="scss">
.hero {

  &__plaza {
    width: 100%;
    min-height: 200px;
    outline: 2px solid $lime-8;
    margin: 20px 0;
  }




  &__body {
    display: grid;
    grid-template-columns: repeat(4, 322px);
    grid-template-rows: 45px repeat(9, 30px);
    column-gap: 5px;
  }



  &__temp {
    width: 160px;
    min-height: 30px;
    position: relative;

    img {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 20px;
      height: 20px;
      @include transition;
    }

  }

  .tempContent {
    overflow: hidden;
    @include transition;
    padding: 0 0 0 2px;
    min-height: 30px;
    color: transparent;
    box-shadow: 0 -0.25em 0.5em $blue-grey-7 inset;
    border-radius: 0.5em;
    display: block;
    perspective: 20em;
    inset: 0.25em;


    &:hover {
      cursor: pointer;
      box-shadow: 0 -0.125em 0.25em $blue-grey-7 inset;

    }

    &:hover~img {
      width: 18px;
      height: 18px;
    }
  }
}

.hero__head {
  display: grid;
  grid-template-columns: 160px 1fr;
  margin: 10px 0;
  column-gap: 43px;
}

input.hero__line {
  height: 30px;
  border-radius: 0.75em;
  background-color: $orange-1;
  box-shadow: 0 0.0625em 0.0625em #f6ad70 inset, 0 -0.0625em 0.0625em #f6ddbe inset, 0 0.25em 0.25em #fbdaaa inset;
  padding: 0 0 0 10px;
  color: $orange-10;

  &:focus {


    background-color: $orange-3;
  }
}
</style>
