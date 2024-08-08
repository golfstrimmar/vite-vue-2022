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
    .drop-zone( @drop="onDrop" @dragover='dragoverHandler' @dragleave='leaveHandler' )
      .drop-linea(  v-for="item in dropLineas" :key="index" :style= "{ marginLeft: item.Offset*30 + 'px' }"  @wheel='mousewheel($event,item.id)') {{ item.value }}



  .stock(draggable="true"    @dragstart="startDrag($event, canvasItem.id)" ) {{ canvasItem.value }}
  .lager
    .line(v-for="item in copyDataCommon" :key="index"  @click='clickLine($event,item.dataText)') {{ item.dataText }}
</template>


<script setup>
import { ref } from 'vue'
// =============================
var Index = 0;
var dropLineas = ref([]);
var canvasItem = ref(
  { id: '0', Offset: 0, value: '' },
);
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


const startDrag = (e, id) => {
  e.dataTransfer.dropEffect = 'move'
  e.dataTransfer.effectAllowed = 'move'
  e.dataTransfer.setData('item', id)
}

const onDrop = (e) => {
  if (e.stopPropagation)
    e.stopPropagation();
  var Data = e.dataTransfer.getData('item')
  dropLineas.value.push({ id: Index, Offset: 0, value: canvasItem.value.value })
  Index++
  canvasItem.value.value = ''
}

const dragoverHandler = (e) => {
  if (e.preventDefault)
    e.preventDefault();
  e.dataTransfer.dropEffect = "move";
  return false;
}


const leaveHandler = (e) => {
  if (e.preventDefault)
    e.preventDefault();
}

const clickLine = (e, Text) => {
  canvasItem.value.value = canvasItem.value.value + Text
  e.target.style.background = "rgb(144,154,164)"
  setTimeout(() => {
    e.target.style.background = '#e0e0e0';
  }, 200);
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
  { i: 11, dataText: 'a.btn.btn-success.but-wave( href="#!")  ' },
  { i: 11, dataText: 'a.btn.btn-success.but-wave.popups-init-js(rel="#popup1" href="#!")  ' },
  { i: 10, dataText: 'a.btn.btn-empty(href="#!") empty' },
  { i: 10, dataText: 'a.btn.btn-blue(href="#!") blue' },
  { i: 10, dataText: 'button.btn.btn-success.but-wave(type="text" name = "text") text' },
  { i: 10, dataText: 'button.btn.btn-success.but-wave(type="submit" name = "submit") submit' },
  { i: 10, dataText: 'button.btn.btn-empty(type="button" name = "empty") empty' },
  { i: 10, dataText: 'button.btn.btn-blue(type = "button") blue' }
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

.result-area {
  display: grid;
  column-gap: 10px;
  grid-template-columns: repeat(2, 1fr);
  margin: 10px 0;

}

.drop-zone {
  min-height: 300px;
  border: 1px solid darkblue;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 4;

}

.drop-linea {
  height: 26px;
  background-color: $grey-4;
  border: 1px solid $grey-8;
  padding: 0 0 0 5px;
}

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
}

/* ================================== */


.hero__canvas {
  position: relative;
  border: 1px solid $deep-orange-8;
  overflow: hidden;
  position: relative;

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
  }

}

.stock {
  width: 100%;
  background-color: $blue-grey-1;
  height: 30px;
  position: relative;
  opacity: .9;
  border: 1px solid $deep-orange-8;
  margin: 10px 0;


}


.line {
  height: 26px;
  background-color: $grey-4;
  border: 1px solid $grey-6;
  position: relative;
  cursor: pointer;
  padding: 0 0 0 5px;

  // &._is-active {
  //   background-color: $grey-2;
  //   outline: 1px solid $grey-6;
  // }

  /* &._is-bestzt {

    background-color: darksalmon;
    border: 1px solid darkgoldenrod;
  } */
}

.lager {
  position: fixed;
  right: 0;
  top: 0;
  z-index: 10;
}
</style>
