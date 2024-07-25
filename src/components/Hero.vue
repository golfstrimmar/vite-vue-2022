<template lang="pug">
.container

  .hero 
    Button(buttonValue='Rücksetzen' @click='handelClean').hero__reset
    .hero__plaza
      .tempContent(v-for="item in Result" :key="item.id" @click = "delitTempItem(item.id)"  ref='some') {{ item.data }}
    .hero__body
      .hero__line
        TestInput( v-model="newItem" )
        Button(buttonValue='hinzufügen eines input value' @click='handelInput(newItem)')
      .hero__column
        Copy(:text="item.dataText"  @someEvent = "someEvent" v-for="item in copyDataCommon" :key="item.i").hero__column
      .hero__column
        Copy(:text="item.dataText"  @someEvent = "someEvent" v-for="item in copyDataName" :key="item.i").hero__column
      .hero__column
        Copy(:text="item.dataText"  @someEvent = "someEvent" v-for="item in copyDataLinks" :key="item.i").hero__column
</template>

<script setup>
import { ref, reactive, computed } from 'vue'
import TestInput from './TestInput.vue';
import Button from './Button.vue';
const newItem = ref(".");
import Copy from './Copy.vue';
var Result = reactive([{ id: 0, data: '' }]);
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
  { i: 9, dataText: 'svg use(xlink:href="#flag") ' },
  {
    i: 9, dataText: '.imgs img(src="./img/bg.webp" alt = "img")'
  },
  {
    i: 9, dataText: 'picture source(srcset = "" alt = "img" type = "image/webp" media = "(min-width: 768px)") source(srcset = "" alt = "img" type = "image/webp" media = "(min-width: 1000px) and (max-width: 1199px)") source(srcset = "" alt = "img" type = "image/webp" media = "(max-width: 767px)") img(: src = "./img/bg.webp" alt = "img") '
  }

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

const someEvent = (data) => {
  Result.push({ id: Result.length, data: data });

}
const delitTempItem = (id) => {
  Result.forEach((cell) => {
    if (cell.id == id) {
      var indexCell = Result.indexOf(cell);
      Result.splice(indexCell, 1);

    }
  });

  Result.map(function (el) {
    return el.id = Result.indexOf(el)
  });

}

const handelClean = () => {
  Result.splice(0, Result.length);
};

const handelInput = (newData) => {
  if (newItem.value !== '') {
    Result.push({ id: Result.length, data: newData });
    copyDataCommon.unshift({ i: copyDataCommon.length, dataText: newData });
    newItem.value = ''
  }

}

</script>


<style lang="scss">
.hero {
  display: grid;
  grid-template-columns: 400px 1fr;
  column-gap: 5px;
  row-gap: 50px;



  &__reset {
    position: absolute;
    transform: translate(0px, -32px);
    width: 400px;
  }

  &__plaza {
    outline: 2px solid $lime-8;
    padding: 2px;
  }

  &__body {
    display: grid;
    grid-template-columns: repeat(auto-fill, 300px);
    grid-template-rows: repeat(10, 30px);
    column-gap: 5px;
  }

  &__line {
    max-height: 30px;
    grid-column: 1/4;
    display: grid;
    grid-template-columns: 320px 1fr;
    column-gap: 5px;
  }

  .tempContent {
    outline: 1px solid $lime-3;
    @include transition;
    background-color: $lime-1;
    padding: 0 0 0 2px;

    &:hover {
      cursor: pointer;
      background-color: $pink-6;
      color: white;
    }
  }
}
</style>
