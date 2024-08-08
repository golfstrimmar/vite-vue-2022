<template lang="pug">
.hero
  .result-area
    textarea.result(v-copy :v-model="somethingPug" :value='somethingPug' )
    textarea.result(v-copy :v-model="somethingScss" :value='somethingScss' )
  .hero__canvas
    span
    span
    span
    span
    span
    span
    span
    span
    span
    span
    span
    span
    span
    span
    span
    button.button-Result(type='button' @click='handelResult') 
      p Result
    .drop-zone( @drop="onDrop" @dragover='dragoverHandler' @dragleave='leaveHandler' )
      .drop-linea(  v-for="item in dropLineas" :key="index" :style= "{ marginLeft: item.Offset*30 + 'px' }"  @click='clickHandler($event,item.id)' @wheel='mousewheel($event,item.id)') {{ item.value }}



  .stock(draggable="true" @dragstart="startDrag($event, canvasItem.id)" ) {{ canvasItem.value }}
    Button.hero__reset( @click='handelClean')
  .lager
    .lager__block
      .line(v-for="item in copyDataCommon" :key="index"  @click='clickLine($event,item.dataText)') {{ item.dataText }}
    .lager__block
      .line(v-for="item in copyDataName" :key="index"  @click='clickLine($event,item.dataText)') {{ item.dataText }}
    .lager__block
      .line(v-for="item in copyDataLinks" :key="index"  @click='clickLine($event,item.dataText)') {{ item.dataText }}

</template>


<script setup>
import { ref } from 'vue'
import Button from './Button.vue';
// =============================
var Index = 0;
var dropLineas = ref([]);
var canvasItem = ref(
  { id: '0', Offset: 0, value: '' },
);

let somethingPug = ref('');
let somethingScss = ref('');
const spase = '  ';
let lastElPug = ref('');
let lastElScss = ref('');
// =============================
const mousewheel = (e, id) => {
  var delta = e.deltaY || e.detail || e.wheelDelta;
  var el = dropLineas.value.find((item) => item.id == id)

  if (delta > 0) {
    el.Offset = el.Offset + 1
  } else {
    el.Offset = el.Offset - 1
    if (el.Offset < 0) {
      el.Offset = 0
    }
  }
}




document.addEventListener('keydown', (event) => {
  if (event.key == ' ') {
    dropLineas.value.push({ id: Index, Offset: 0, value: canvasItem.value.value })
    Index++
    canvasItem.value.value = ''
  }
});



const handelResult = (e) => {
  somethingPug.value = ''
  somethingScss.value = ''
  dropLineas.value.forEach((cell) => {
    lastElPug.value = spase.repeat(cell.Offset) + cell.value + "\n";
    somethingPug.value = somethingPug.value + lastElPug.value;
    lastElScss.value = cell.value + '{  }' + "\n";
    somethingScss.value = somethingScss.value + lastElScss.value;
  });
}
// const startDrag = (e, id) => {
//   e.dataTransfer.dropEffect = 'move'
//   e.dataTransfer.effectAllowed = 'move'
//   e.dataTransfer.setData('item', id)
// }

// const onDrop = (e) => {
//   if (e.stopPropagation)
//     e.stopPropagation();
//   var Data = e.dataTransfer.getData('item')
//   dropLineas.value.push({ id: Index, Offset: 0, value: canvasItem.value.value })
//   Index++
//   canvasItem.value.value = ''



// }

// const dragoverHandler = (e) => {
//   if (e.preventDefault)
//     e.preventDefault();
//   e.dataTransfer.dropEffect = "move";
//   return false;
// }


// const leaveHandler = (e) => {
//   if (e.preventDefault)
//     e.preventDefault();
// }

const clickLine = (e, Text) => {
  canvasItem.value.value = canvasItem.value.value + Text
  e.target.style.background = "#e57373"
  setTimeout(() => {
    e.target.style.background = '#f9fbe7';
  }, 200);
}


const handelClean = (e) => {
  canvasItem.value.value = ''
}

const clickHandler = (e, id) => {
  dropLineas.value.splice(id, 1);
  for (let i = 0; i < dropLineas.value.length; ++i) {
    dropLineas.value[i].id = i
  }
}
//   // console.log(canvasItems.value);

//   // var Index = 0;
//   // var Offset = 0;
//   // var spase = 30;

//   // if (e.stopPropagation)
//   //   e.stopPropagation();
//   // Offset = e.dataTransfer.getData("item")
//   // if (e.clientX < CanvasOffset + 30) {
//   //   Offset = 0;
//   //   canvasItems.
//   // }

//   // for (var i = 30; i <= 300; i = i + 30) {
//   //   if (CanvasOffset + i < e.clientX && e.clientX < CanvasOffset + i + 30) {
//   //     Offset = i / 30
//   //     canvasItems.push({ id: Index, Offset: Offset, value: Text.value })
//   //   }
//   // }

//   // console.log(canvasItems);

//   // e.target.style.marginLeft = `${spase * Offset}` + 'px';
//   // e.target.value = Text.value;

//   // Index++
//   // canvasItems.push({ id: '', Offset: '', value: '' })
// }
// =============================

// const Handlerdown = (e) => {

//   startX.value = e.clientX
//   startY.value = e.clientY
//   console.log(startX.value, startY.value);
// }
// =================================

// const startHandler = (e) => {
//   e.dataTransfer.effectAllowed = "move";
//   e.dataTransfer.setData("item", e.target.value);

//   return false;
// }
// =================================

// =============================
// const dragoverHandler = (e) => {
//   if (e.preventDefault)
//     e.preventDefault();
//   e.dataTransfer.dropEffect = "move";
//   return false;
// }

// =============================

// const dropHandler = (e) => {


//   if (e.stopPropagation)
//     e.stopPropagation();
//   Text.value = e.dataTransfer.getData("item")

//   // const CanvasOffset = Math.round(canvas.value.getBoundingClientRect().left)

//   var i;

//   if (e.clientX < CanvasOffset + 30) {
//     Offset = 0;
//     canvasItems.push({ id: Index, Offset: Offset, value: Text.value })
//   }

//   for (i = 30; i <= 300; i = i + 30) {
//     if (CanvasOffset + i < e.clientX && e.clientX < CanvasOffset + i + 30) {
//       Offset = i / 30
//       canvasItems.push({ id: Index, Offset: Offset, value: Text.value })
//     }
//   }

//   console.log(canvasItems);

//   e.target.style.marginLeft = `${spase * Offset}` + 'px';
//   e.target.value = Text.value;

//   Index++
//   canvasItems.push({ id: '', Offset: '', value: '' })
// }



//- import { ref, reactive, computed } from 'vue'
//- import DragDrop from './DragDrop.vue';
//- import Button from './Button.vue';
//- import Copy from './Copy.vue';
//- var Result = ref('');
// - var copyDataCommon = reactive([{ i: 0, dataText: '' }]);
// - var copyDataName = reactive([{ i: 0, dataText: '' }]);
// - var copyDataLinks = reactive([{ i: 0, dataText: '' }]);

const copyDataCommon = [
  { i: 1, dataText: 'section(id="best").best.rel' },
  { i: 2, dataText: '.container' },
  { i: 3, dataText: '.best__' },
  { i: 4, dataText: '.rel' },
  { i: 5, dataText: '.center' },
  { i: 6, dataText: 'h2' },
  { i: 7, dataText: 'h3' },
  { i: 8, dataText: 'h4' },
  { i: 9, dataText: 'h1' },
  { i: 10, dataText: 'p' },
  { i: 11, dataText: 'span' },
  { i: 12, dataText: 'nav' },
  { i: 13, dataText: 'ul' },
  { i: 14, dataText: 'li' },
  { i: 15, dataText: 'img' },
  { i: 16, dataText: 'svg' },
  { i: 17, dataText: 'use(xlink:href="#flag")' },
  { i: 18, dataText: '.imgs' },
  { i: 19, dataText: 'img(src="./img/bg.webp" alt = "img")' },

]

const copyDataName = [
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

const copyDataLinks = [
  { i: 11, dataText: 'a.btn-success.btn.but-wave( href="#!")' },
  { i: 11, dataText: 'a.popups-init-js.btn.btn-success.but-wave(rel="#popup1" href="#!")' },
  { i: 10, dataText: 'a.btn-empty.btn(href="#!")' },
  { i: 10, dataText: 'a.btn-blue.btn(href="#!")' },
  { i: 10, dataText: 'button.btn-success.but-wave.btn(type="text" name = "text")' },
  { i: 10, dataText: 'button.btn-success.but-wave.btn(type="submit" name = "submit")' },
  { i: 10, dataText: 'button.btn-empty.btn(type="button" name = "empty")' },
  { i: 10, dataText: 'button.btn-blue.btn(type = "button")' }
]
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
.hero {
  margin: 0 0 20px 0;
}



.drop-zone {
  min-height: 300px;
  border: 3px solid $orange-10;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 4;
  border-radius: 5px;
  background-color: #eceff121;
}

.drop-linea {
  height: 100%;
  height: 26px;
  background-color: $grey-4;
  border: 1px solid $grey-8;
  padding: 0 0 0 5px;
  cursor: pointer;
}

.result-area {
  display: grid;
  column-gap: 35px;
  grid-template-columns: repeat(2, 200px);
  margin: 10px 0 10px 30px;
  position: relative;

  &::after {
    content: "pug";
    position: absolute;
    background-color: $brown-3;
    display: flex;
    justify-content: center;
    width: 47px;
    height: 26px;
    top: 10px;
    left: -36px;
    z-index: 4;
    opacity: 0.5;
    transform: rotate(-90deg);
  }

  &::before {
    content: 'scss';
    position: absolute;
    background-color: $brown-3;
    display: flex;
    justify-content: center;
    width: 47px;
    height: 26px;
    top: 10px;
    left: 200px;
    z-index: 4;
    opacity: 0.5;
    transform: rotate(-90deg);
  }
}



/* ================================== */


.hero__canvas {
  position: relative;
  position: relative;
  margin: 0 0 0 40px;

  span {
    width: 1px;
    height: 100%;
    background: $blue-grey-2;
    position: absolute;
    top: 0;

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

    &:nth-child(11) {
      left: 330px;
    }

    &:nth-child(12) {
      left: 360px;
    }

    &:nth-child(13) {
      left: 390px;
    }

    &:nth-child(14) {
      left: 420px;
    }

    &:nth-child(15) {
      left: 450px;
    }
  }

}

.stock {
  width: 80%;
  background-color: $blue-grey-1;
  height: 30px;
  position: relative;
  opacity: .9;
  border: 1px solid $blue-grey-7;
  margin: 10px 0 0 40px;
  border-radius: 5px;
  padding: 0 0 0 5px;
}


.line {
  height: 26px;
  background-color: $blue-grey-2;
  border: 1px solid $grey-6;
  position: relative;
  cursor: pointer;
  padding: 0 0 0 5px;
  overflow: hidden;
  white-space: wrap;
  background-color: #f9fbe7;
  padding: 2px;
  outline: 1px solid #e6ee9c;

  &:hover {
    color: $orange-10;
    @include transition;
  }

  &._is-active {
    background-color: $red-4;
    color: $red-1;
  }
}

.lager {
  position: fixed;
  right: 0;
  top: 0;
  z-index: 10;
  display: grid;
  grid-template-columns: repeat(2, 150px) 500px;
}

.hero__reset {
  right: auto;
  left: -40px;
}

.button-Result {
  position: absolute;
  height: 100%;
  width: 30px;
  border-radius: 10px;
  cursor: pointer;
  background: white;
  z-index: 10;
  left: -40px;
  background-image: -webkit-linear-gradient(top, #f4f1ee, #fff);
  background-image: linear-gradient(top, #f4f1ee, #fff);
  box-shadow: 0px 8px 10px 0px rgba(0, 0, 0, .3), inset 0px 4px 1px 1px white, inset 0px -3px 1px 1px rgba(204, 198, 197, .5);
  transition: all .2s linear;

  &:hover p {
    color: #eb2f2f;
    transition: all .2s linear;
    text-shadow: 0px 0px 6px #eb2f2f;
  }

  p {
    transform: rotate(-90deg);
    // height: 100%;
  }
}
</style>
