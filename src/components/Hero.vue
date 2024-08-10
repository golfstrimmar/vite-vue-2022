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

    Button(buttonValue='Result'  @click='handelResult')
    .drop-zone(  )
      textarea.drop-linea(  v-for="item in dropLineas" :key="index" :style= "{ marginLeft: item.Offset*30 + 'px' }"  @click='clickHandler($event,item.id)' @wheel='mousewheel($event,item.id)') {{ item.value }}


  textarea.stock( ) {{ canvasItem.value }}
  Button.hero__reset( @click='handelClean')
  .lager
    .lager__block
      .line(v-for="item in copyDataCommon" :key="index"  @click='clickLine($event,item.dataText)') {{ item.dataText }}
    .lager__block
      .line(v-for="item in copyDataName" :key="index"  @click='clickLine($event,item.dataText)') {{ item.dataText }}
    .lager__block
      textarea.line(v-for="item in copyDataLinks" :key="index"  @click='clickLine($event,item.dataText)') {{ item.dataText }}




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
  var re = /\n/g;
  var newstr
  if (delta > 0) {
    el.Offset = el.Offset + 1
    newstr = el.value.replace(re, '\n' + spase);
    el.value = newstr
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

  const cleanPug = (cell) => {
    lastElPug.value = spase.repeat(cell.Offset) + cell.value + "\n";
    somethingPug.value = somethingPug.value + lastElPug.value;
  };

  const cleanScss = (cell) => {
    let chars = cell.value.split("\n");
    let temp
    chars = chars.map((car) => {
      temp = car.substring(car.indexOf('('), car.indexOf(')') + 1);
      car = car.replace(temp, '');
      return car = car + '{  }';
    });

    lastElScss.value = chars.join("\n") + "\n";
    somethingScss.value = somethingScss.value + lastElScss.value;
  };

  dropLineas.value.forEach((cell) => {
    cleanPug(cell)
    cleanScss(cell)
    e.target.classList.add("_is-active");
    setTimeout(() => {
      e.target.classList.remove("_is-active");
    }, 100);
  });

}

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

  // if (somethingPug.value !== '') {
  //   var newstrPug = dropLineas.value[id].value + "\n"
  //   var newstrScss = dropLineas.value[id].value + '{  }' + "\n"
  //   somethingPug.value = somethingPug.value.replace(newstrPug, '');
  //   somethingScss.value = somethingScss.value.replace(newstrScss, '');
  // }

  dropLineas.value.splice(id, 1);

  for (let i = 0; i < dropLineas.value.length; ++i) {
    dropLineas.value[i].id = i
  }
}





const copyDataCommon = [
  { i: 1, dataText: 'section(id="best").best.rel' },
  { i: 2, dataText: '.container' },
  { i: 3, dataText: '.best__' },
  { i: 4, dataText: '.rel' },
  { i: 5, dataText: '.center' },
  { i: 5, dataText: '.' },
  { i: 6, dataText: 'h2' },
  { i: 7, dataText: 'h3' },
  { i: 8, dataText: 'h4' },
  { i: 9, dataText: 'h1' },
  { i: 10, dataText: 'p' },
  { i: 11, dataText: 'span' },
  { i: 12, dataText: 'nav' },
  { i: 13, dataText: 'ul' },
  { i: 14, dataText: 'li' },
  { i: 14, dataText: 'form' },
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
  { i: 17, dataText: 'column' },
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
  { i: 10, dataText: 'button.btn-blue.btn(type = "button")' },
  { i: 10, dataText: 'form(action="#" name="send-form").send#send-form' },
  { i: 10, dataText: '.input-field\n  input#text1(type = "text" name = "text1" value = "" placeholder = "Denzel Washington")\n  label.text-field__label(for= "text1")' },
  {
    i: 10, dataText: 'form.search-field\n  input#search1(type = "text" placeholder = "search" name = "")\n  label(for= "search1")\n  .search-field__submit\n    input(type = "submit")\n    svg\n      use(xlink: href = "#search") '
  },
  {
    i: 10, dataText: ".textarea-field\n  textarea#textarea4(name='textarea4' row='20' placeholder='Введите текст' )\n  label(for='textarea4')"
  },
  {
    i: 10, dataText: ".fildset-checkbox\n  .form-check\n    input#5(type='checkbox' name='')\n    label(for='5')\n  .form-check\n    input#6(type='checkbox' name='')\n    label(for='6') "
  },
  {
    i: 10, dataText: "fildset.fildset-radio\n  .form-check\n    input(type='radio' id='10' name='a' value='16-25' checked)\n    label(for='10')"
  },
  {
    i: 10, dataText: "fildset.fildset-radio.fildset-radio--sex\n  .form-check\n    input(type='radio' id='14' name='s' value='man' checked)\n    label(for='14')\n      svg\n        use(xlink:href='#Union')"
  },
  {
    i: 10, dataText: '.fildset-radio.fildset-radio--tiers\n  input(type="radio" id="tieresyes" name="tieres" value="yes" checked)\n    label(for="tieresyes")\n    span /\n    input(type="radio" id="tieresnot" name="tieres" value="not")\n    label(for="tieresnot")'
  },
  { i: 10, dataText: "fildset.fildset-rating\n  .fildset-rating__items\n    input(type='radio' id='rating5' name='rating' value='5' )\n    label(for='rating5')\n      svg\n        use(xlink:href='#Star-1')\n    input(type='radio' id='rating4' name='rating' value='4' )\n    label(for='rating4')\n      svg\n        use(xlink:href='#Star-1')\n    input(type='radio' id='rating3' name='rating' value='3' )\n    label(for='rating3')\n      svg\n        use(xlink:href='#Star-1')\n    input(type='radio' id='rating2' name='rating' value='2' )\n    label(for='rating2')\n      svg\n        use(xlink:href='#Star-1')\n    input(type='radio' id='rating1' name='rating' value='1' )\n    label(for='rating1')\n      svg\n        use(xlink:href='#Star-1')" },
  { i: 10, dataText: "._range-wrap-js\n  .rangeValue\n  input.myRange(type='range' name='myRange' min='0' max='100' value='0' step='1') " },
  {
    i: 10, dataText: ".select\n  input(type='hidden')\n  button.dropdown-button\n    span custom select\n    svg.icon\n      use(xlink:href='#down')\n  ul.dropdown-list\n    .dropdown-list-wrap\n      li.dropdown-list__item(data-value='Notes') Notes\n      li.dropdown-list__item(data-value='Photo') Photo\n      li.dropdown-list__item(data-value='Dictionary') Dictionary"
  },
  { i: 10, dataText: "-\n  var blocks = [\n    {\n      src: './img/sprite.svg#ban-1',\n      title: 'Title slide 1 ',\n      text: 'text	text	text'\n    },\n  ];\neach block in blocks\n  .bunner__block.bunner-block\n    .bunner-block__icon\n      svg\n        use(xlink:href=block.src)\n    .bunner-block__title.Text-Style-10=block.title\n    .bunner-block__text.Text-Style-11=block.text" },
  { i: 10, dataText: " " },

]

</script>





<style lang="scss" scoped>
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
  height: 23px;
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
  min-height: 26px;
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

.hero__button {
  height: 100%;
  border-radius: 5px;
  left: -39px;

  &::after {
    font-size: 0px;
    height: 0px;
    width: 0px;
  }
}

.hero__reset {
  width: 30px;
  height: 30px;
  border-radius: 100%;
  left: 3px;
  top: 96%;

  &::after {
    font-size: 15px;
    height: 20px;
    width: 20px;
  }
}
</style>
