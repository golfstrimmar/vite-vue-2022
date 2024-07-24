<template lang="pug">
.container
  .hero 
    button(type="button" @click='handelClean').hero__reset reset
    .hero__plaza
      .tempContent(v-for="item in Result" :key="item.id" @click = "delitTempItem(item.id)"  ref='some') {{ item.data }}
    .hero__body
      Copy(:text="item.dataText"  @someEvent = "someEvent" v-for="item in copyData" :key="item.i")
</template>

<script setup>
import { ref, reactive, computed } from 'vue'
import Copy from './Copy.vue';
var Result = reactive([{ id: 0, data: '' }]);
var activePlaza = ref('');
const Plaza = ref(null);
const temp = ref(null)
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
}

const handelClean = () => {
  Result.splice(0, Result.length);
}
const copyData = [
  { i: 1, dataText: 'section(id="hero").hero.rel' },
  { i: 2, dataText: '.best__' },
  { i: 3, dataText: 'p' },
  { i: 4, dataText: 'span' },
  { i: 5, dataText: 'header' },
  { i: 6, dataText: 'nav' },
  { i: 7, dataText: 'ul' },
  { i: 8, dataText: 'li' },
  { i: 9, dataText: 'svg use(xlink: href="#!" rel=" ") ' },
  { i: 10, dataText: 'a(href="#!")' },
  { i: 11, dataText: 'a.btn.btn-success.but-wave.popups-init-js(rel="#popup1" href="#!")  p' },
  { i: 12, dataText: '.container' },
  { i: 13, dataText: 'h2' },
  { i: 14, dataText: 'h3' },
  { i: 15, dataText: 'body' },
  { i: 16, dataText: 'title' },
  { i: 17, dataText: 'text' },
  { i: 18, dataText: 'blocks' },
  { i: 19, dataText: 'items' },
  { i: 20, dataText: 'item' },
]


// const copyPlaza = () => {
//   activePlaza.value = !activePlaza.value;
//   let add = document.createElement('textarea')
//   document.querySelector('body').appendChild(add)
//   add.innerHTML = Plaza.value.innerHTML
//   add.select();
//   document.execCommand('copy');
//   setTimeout(function () { add.remove(); activePlaza.value = !activePlaza.value; }, 300)
// }


// const myCopy = () => {
//   const copy = document.querySelectorAll('.copy')
//   let singles = Array.prototype.slice.call(copy);
//   singles.forEach((cell) => {
//     cell.addEventListener('click', copyAction)
//     function copyAction() {
//       let add = document.createElement('textarea')
//       let rez = document.createElement('div')
//       let $result = document.querySelector('.result');
//       add.innerHTML = cell.innerText;
//       rez.innerHTML = cell.innerText;
//       $result.appendChild(rez)
//       document.querySelector('body').appendChild(add)
//       document.querySelector('.result').appendChild(rez)
//       add.select();
//       document.execCommand('copy');
//       add.remove();
//       cell.classList.add('copy_active')
//       setTimeout(function () {
//         cell.classList.remove('copy_active')
//       }, 200)
//     }
//   })
//   const $s = document.querySelector('.reset__button');
//   const $result = document.querySelector('.result');
//   $s.addEventListener('click', (e) => {
//     $result.innerHTML = '';
//   });

// }
// myCopy();





</script>

<style lang="scss">
.hero {
  display: grid;
  grid-template-columns: 400px 1fr;
  column-gap: 5px;
  row-gap: 50px;

  &__reset {
    @include transition;
    position: absolute;
    transform: translate(0px, -31px);
    padding: 5px 182px;

    &:hover {
      background-color: $pink-6;
      color: white;
    }
  }

  .tempContent {
    &:hover {
      cursor: pointer;
      outline: 2px solid $yellow-10;
      background-color: $pink-6;
    }
  }

  &__plaza {
    border: 2px solid $indigo-13;
  }

  &__body {}
}
</style>
