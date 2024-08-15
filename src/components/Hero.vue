<template lang="pug">
.hero
  .result-area
    Result(:v-model="somethingPug" :value='somethingPug')
    Result(:v-model="somethingScss" :value='somethingScss')
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
    .drop-zone( @mouseenter='handelmouseenter($event)'  @mouseleave='handelmouseleave($event)' )
      textarea.drop-linea(  v-for="item in dropLineas" :key="index" :style= "{ marginLeft: item.Offset*30 + 'px' }"  @click='clickHandler($event,item.id)' @wheel='mousewheel($event,item.id)') {{ item.value }}


  Stok(v-model="canvasItem.value"   @click='handelClean' )
  .lager
    .lager__block
      Copy(@click='clickLine($event,item.dataText)'  v-for="item in copyDataCommon" :key="index" :item='item')
    .lager__block
      Copy(@click='clickLine($event,item.dataText)'  v-for="item in copyDataName" :key="index" :item='item')
    .lager__block
      Copy(@click='clickLine($event,item.dataText)'  v-for="item in copyDataLinks" :key="index" :item='item')





</template>


<script setup>
import { ref } from 'vue'
import Button from './Button.vue';
import Result from './Result.vue';
import Copy from './Copy.vue';
import Stok from "@/components/Stok.vue";
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
const handelClean = (e) => {
  canvasItem.value.value = ''
}


const handelmouseenter = (e) => {
  let bodyquery = document.querySelector('body')
  bodyquery.style = "overflow: hidden;";
};
const handelmouseleave = (e) => {
  let bodyquery = document.querySelector('body')
  bodyquery.style = "overflow: visible;";
};



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
// =============================


document.addEventListener('keydown', (event) => {
  if (event.key == ' ') {

    dropLineas.value.push({ id: Index, Offset: 0, value: canvasItem.value.value })
    Index++
    canvasItem.value.value = ''
  }
});

// =============================

const handelResult = (e) => {
  somethingPug.value = ''
  somethingScss.value = ''
  // ==================
  const cleanPug = (cell) => {
    lastElPug.value = spase.repeat(cell.Offset) + cell.value + "\n";
    somethingPug.value = somethingPug.value + lastElPug.value;
  };
  dropLineas.value.forEach((cell) => { cleanPug(cell) });


  var newLineas = dropLineas.value.map((car) => { return { 'id': car.id, 'Offset': car.Offset, 'value': car.value } }).reverse();

  const sortnewLineas = () => {
    var count = 0
    var marker = '}'

    const ordnung = () => {
      for (let i = 0; i < newLineas.length; ++i) {
        newLineas[i].id = i
      }
    }
    ordnung();

    // ==================добавляем кавычку в начало
    const sortArr = () => {
      for (let i = 0; i < newLineas.length; ++i) {
        newLineas[i].value = newLineas[i].value + "{"
      }
    }
    sortArr()

    // ================== максимальный сдвиг
    for (let i = 0; i < newLineas.length; ++i) { count = Math.max.apply(null, newLineas.map((car) => { return car.Offset })) }
    // ================== 

    var temp = {}



    const findReplace = () => {

      for (let i = 0; i < newLineas.length; ++i) {
        if (newLineas[i].Offset == count) {
          var temp = newLineas.find((item) => item.id > newLineas[i].id && item.Offset === (count - 1));


          if (newLineas[i].value == '.container' ||
            newLineas[i].value == '.imgs' || newLineas[i].value == 'use(xlink:href="#flag")') {
            temp.value = temp.value
          } else {
            temp.value = temp.value + newLineas[i].value + '}';
          }

          newLineas = newLineas.filter((foo) => { return foo.id !== newLineas[i].id });
          ordnung();
        }
      }
      for (let i = 0; i < newLineas.length; ++i) {
        if (newLineas.find((item) => item.Offset === count)) {
          return findReplace()
        } else {
          count = count - 1
          if (count == 0) {
            return newLineas
          }
          return findReplace()
        }
      }
    }
    findReplace()

  };
  sortnewLineas();

  var res = newLineas[0].value + '}';
  somethingScss.value = somethingScss.value + res
};

// =============================


const clickLine = (e, Text) => {
  canvasItem.value.value = canvasItem.value.value + Text
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


// ===================================


const copyDataCommon = [
  { i: 1, dataText: 'section(id="best").best.rel', },
  { i: 2, dataText: '.container' },
  { i: 3, dataText: '.best__' },
  { i: 15, dataText: 'img' },
  { i: 16, dataText: 'svg\n  use(xlink:href="#flag")' },
  { i: 18, dataText: '.imgs\n  img(src="./img/bg.webp" alt = "img")' },
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
  { i: 4, dataText: '.rel' },
  { i: 5, dataText: '.center' },

]

const copyDataName = [
  { i: 15, dataText: 'body' },
  { i: 18, dataText: 'blocks' },
  { i: 18, dataText: 'block' },
  { i: 17, dataText: 'button' },
  { i: 17, dataText: 'bage' },
  { i: 17, dataText: 'content' },
  { i: 17, dataText: 'column' },
  { i: 17, dataText: 'decor' },
  { i: 17, dataText: 'email' },
  { i: 17, dataText: 'img' },
  { i: 17, dataText: 'info' },

  { i: 19, dataText: 'items' },
  { i: 20, dataText: 'item' },
  { i: 17, dataText: 'hidden' },
  { i: 17, dataText: 'low' },
  { i: 17, dataText: 'line' },
  { i: 20, dataText: 'logo' },
  { i: 17, dataText: 'plaza' },
  { i: 17, dataText: 'phone' },
  { i: 16, dataText: 'title' },
  { i: 17, dataText: 'text' },
  { i: 17, dataText: 'soc' },
]

const copyDataLinks = [
  { i: 11, dataText: 'a( href="#!")' },
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
.drop-zone {
  min-height: 300px;
  border: 3px solid $orange-10;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 4;
  border-radius: 5px;
  background-color: #8fc5e15c;
}

.drop-linea {
  height: 20px;
  background-color: $grey-4;
  border: 1px solid $grey-8;
  padding: 0 0 0 5px;
  cursor: pointer;
  overflow: hidden;
  font-weight: 400;
  font-size: 14px;
}



// ================================ */

.hero__canvas {
  position: relative;
  margin: 0 0 0 40px;

  span {
    width: 1px;
    height: 100%;
    background: $blue-grey-5;
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


.lager {
  position: fixed;
  right: 0;
  top: 0;
  z-index: 10;
  display: grid;
  grid-template-columns: repeat(2, 150px) 500px;
  font-size: 14px;
}

.button {
  height: 100%;
  border-radius: 5px;
  left: -39px;

  &::after {
    font-size: 0px;
    height: 0px;
    width: 0px;
  }
}

.stock {
  margin: 10px 0 0 40px;
}
</style>
