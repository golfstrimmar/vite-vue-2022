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
    .lager__block
      Copy(@click='clickLine($event,item.dataText)'  v-for="item in copyDataTable" :key="index" :item='item')









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
  if (Text) {
    canvasItem.value.value = canvasItem.value.value + Text
  }

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
// {
//   description:'',
//   dataText:
//   `
//     `,
//     link: "",
//     img: ''
// },


const copyDataCommon = [
  { i: 1, dataText: 'section(id="best").best.rel', },
  { i: 2, dataText: '.container' },
  { i: 3, dataText: '.best__' },
  { i: 15, dataText: 'img' },

  {
    i: 18, dataText:
      `.imgs
  img(src = "./img/bg.webp" alt = "img")` },
  {
    description: '',
    dataText:
      `svg
  use(xlink: href = "#flag")`
    ,

  },

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
  {
    title: "table",
  },
  {
    dataText: "table",
    description: "",
  },
  {
    dataText: "thead",
    description:
      " инкапсулирует набор строк таблицы ( элементов), указывая, что они составляют заголовок таблицы с информацией о столбцах таблицы.",
  },
  {
    dataText: "tr",
    description:
      "Table Row  определяет строку ячеек в таблице. Ячейки строки затем могут быть установлены с помощью сочетания элементов (ячейка данных) и (ячейка заголовка).<tr> <td><th>",
  },
  {
    dataText: "th",
    description:
      "The Table Header определяет ячейку как заголовок группы ячеек таблицы и может использоваться как дочерний элемент элемента . Точная природа этой группы определяется атрибутами и .<th> <tr>scopeheaders",
  },
  {
    dataText: "td",
    description:
      "Наименьший контейнер   определяет ячейку таблицы, содержащую данные, и может использоваться как дочерний элемент элемента .<td> <tr>",
  },
  {
    dataText: "tfoot",
    description:
      "The Table Foot  инкапсулирует набор строк таблицы ( элементов), указывая, что они составляют основание таблицы с информацией о столбцах таблицы.",
  },
]

const copyDataName = [
  { i: 15, dataText: 'body' },
  { i: 16, dataText: 'title' },
  { i: 17, dataText: 'text' },
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
  { i: 17, dataText: 'unit' },
  { i: 17, dataText: 'plaza' },
  { i: 17, dataText: 'line' },
  { i: 19, dataText: 'items' },
  { i: 20, dataText: 'item' },
  { i: 17, dataText: 'hidden' },
  { i: 17, dataText: 'low' },
  { i: 20, dataText: 'logo' },
  { i: 17, dataText: 'phone' },
  { i: 17, dataText: 'soc' },
  { title: "colgroup", },
  {
    dataText: "colgroup",
    description:
      "определяет группу столбцов в таблице. должен располагаться внутри тега <table>, после любого <caption>элемента (если он используется), но перед любыми элементами <thead>, <tbody>, <tfoot>, и <tr>."
  },
  {
    dataText: "span=''",
    description: 'Указывает количество последовательных столбцов, < colgroup > которые охватывает элемент.Значение должно быть положительным целым числом больше нуля.Если отсутствует, его значение по умолчанию — 1.'
  },
  {
    dataText: "rowspan='' colspan='' colspan='' scope='row' caption",
  },
]

const copyDataLinks = [
  { i: 11, dataText: 'a( href="#!")' },
  { i: 11, dataText: 'a.btn-success.btn.but-wave( href="#!")' },
  { i: 11, dataText: 'a.popups-init-js.btn.btn-success.but-wave(rel="#popup1" href="#!")' },
  { i: 10, dataText: 'a.btn-empty.btn(href="#!")' },
  { i: 10, dataText: 'a.btn-blue.btn(href="#!")' },
  { i: 10, dataText: 'button(type = "button")' },
  { i: 10, dataText: 'button.btn-success.but-wave.btn(type="text" name = "text")' },
  { i: 10, dataText: 'button.btn-success.but-wave.btn(type="submit" name = "submit")' },
  { i: 10, dataText: 'button.btn-empty.btn(type="button" name = "empty")' },
  { i: 10, dataText: 'button.btn-blue.btn(type = "button")' },
  { i: 10, dataText: 'form(action="#" name="send-form").send#send-form' },
  {
    link: "https://codepen.io/viktor-yushin/pen/abgqbGy",
    dataText: `.input-field
  input#text1(type='text' name='text1' value='' placeholder=' Denzel Washington')
  label.text-field__label(for='text1') обычный инпут text`
  },
  {
    dataText: `form.search-field
  input#search1(type='text' placeholder='search' name='' )
  label(for='search1') search
  .search-field__submit
    input(type='submit')
    svg
      use(xlink:href='#search')`
  },
  {
    link: "https://codepen.io/viktor-yushin/pen/BagYaqX",

    dataText: `.textarea-field
  textarea#textarea4(name="textarea4" row='20' placeholder="Введите текст" )
  label(for='textarea4') textarea`
  },
  {
    link: "https://codepen.io/viktor-yushin/pen/JjQpjaM",

    dataText: `.fildset-checkbox
  .form-check
    input#5(type='checkbox' name="")
    label(for='5') Любимое место
  .form-check
    input#6(type='checkbox' name="")
    label(for='6') Месторасположение
  .form-check
    input#7(type='checkbox' name="")
    label(for='7') Гость торжественного события
  .form-check
    input#8(type='checkbox' name="")
    label(for='8') Корпоративные мероприятия
  .form-check
    input#9(type='checkbox' name="")
    label(for='9') СПА комплекс`
  },
  {
    link: "https://codepen.io/viktor-yushin/pen/JjQpjxL",
    dataText: `fildset.fildset-radio
  .form-check
    input(type="radio" id="10" name='a' value='16-25' checked)
    label(for="10")  от 16-25
  .form-check
    input(type="radio" id="11" name='a' value='26-35')
    label(for="11")  от 26-35
  .form-check
    input(type="radio" id="12" name='a' value='36-45')
    label(for="12")  36-45
  .form-check
    input(type="radio" id="13" name='a' value='55')
    label(for="13")  от 45 и старше`

  },
  {
    link: "https://codepen.io/viktor-yushin/pen/JjQpjxL",
    dataText: `fildset.fildset-radio.fildset-radio--sex
  .form-check
    input(type="radio" id="14" name='s' value='man' checked)
    label(for="14")  Мужчина
      svg
        use(xlink:href='#Union')
  .form-check
    input(type="radio" id="15" name='s' value='frau')
    label(for="15")  Женщина
      svg
        use(xlink:href='#Union')`
  },
  {
    link: "https://codepen.io/viktor-yushin/pen/JjQpjxL",
    dataText: `.fildset-radio.fildset-radio--tiers
  input(type="radio" id="tieresyes" name='tieres' value='yes' checked)
  label(for="tieresyes")  Да
  span /
  input(type="radio" id="tieresnot" name='tieres' value='not')
  label(for="tieresnot")  Нет`
  },
  {
    link: "",
    dataText: `fildset.fildset-rating
  .fildset-rating__items
    input(type="radio" id="rating5" name='rating' value='5' )
    label(for="rating5")
      svg
        use(xlink:href='#Star-1')  
    input(type="radio" id="rating4" name='rating' value='4' )
    label(for="rating4")
      svg
        use(xlink:href='#Star-1') 
    input(type="radio" id="rating3" name='rating' value='3' )
    label(for="rating3") 
      svg
        use(xlink:href='#Star-1') 
    input(type="radio" id="rating2" name='rating' value='2' )
    label(for="rating2") 
      svg
        use(xlink:href='#Star-1') 
    input(type="radio" id="rating1" name='rating' value='1' )
    label(for="rating1") 
      svg
        use(xlink:href='#Star-1')`
  },
  {
    link: "https://codepen.io/viktor-yushin/pen/abgqbME",
    dataText: `._range-wrap-js
  .rangeValue 0
  input.myRange(type='range' name='myRange' min='0' max='100' value='0' step='1')`
  },
  // {
  //   description: '',
  //   dataText: `

  //   ` },

  {
    description: 'select js',
    dataText:
      `.select
  input(type = "hidden")
  button.dropdown - button
    span custom select
    svg.icon
      use(xlink: href = '#down')
  ul.dropdown - list
    .dropdown - list - wrap
      li.dropdown - list__item(data - value='Notes') Notes
      li.dropdown - list__item(data - value='Photo') Photo
      li.dropdown - list__item(data - value='Dictionary') Dictionary`,
    link: "https://codepen.io/viktor-yushin/pen/VwJyJoq",
  },
  {
    description: 'forEach pug',
    dataText:
      `-
  var blocks = [
  {
    src: './img/sprite.svg#ban-1',
    title: 'Title slide 1 ',
    text: 'text	text	text'
  },
];
each block in blocks
  .bunner__block.bunner - block
    .bunner - block__icon
svg
use(xlink: href = block.src)
  .bunner - block__title.Text - Style - 10=block.title
    .bunner - block__text.Text - Style - 11=block.text`

  },




  {
    title: "example",
  },

  {
    dataText:
      `.plaza
  table
    thead
      tr
        th(rowspan='2')
        th.no-border(colspan='5') Singular
        th.no-border(colspan='3') Plural
      tr
        th 1. Pers.
        th 2. Pers.
        th(colspan='3')
          span.num2 3.
          |  Person
        th 1. Pers.
        th 2. Pers.
        th 3. Pers.
    tbody
      tr
        td(valign='top')
          b Nominativ
        td(valign='top') ich
        td(valign='top') du
        td(valign='top') er
        td(valign='top') sie
        td(valign='top') es
        td(valign='top') wir
        td(valign='top') ihr
        td(valign='top') sie
      tr
        td(valign='top')
          b Genitiv
        td(valign='top') meiner
        td(valign='top') deiner
        td(valign='top') seiner
        td(valign='top') ihrer
        td(valign='top') seiner
        td(valign='top') unser
        td(valign='top') euer
        td(valign='top') ihrer
      tr
        td(valign='top')
          b Dativ
        td(valign='top') mir
        td(valign='top') dir
        td(valign='top') ihm
        td(valign='top') ihr
        td(valign='top') ihm
        td(valign='top') uns
        td(valign='top') euch
        td(valign='top') ihnen
      tr
        td(valign='top')
          b Akkusativ
        td(valign='top') mich
        td(valign='top') dich
        td(valign='top') ihn
        td(valign='top') sie
        td(valign='top') es
        td(valign='top') uns
        td(valign='top') euch
        td(valign='top') sie`,

    link: "https://codepen.io/viktor-yushin/pen/gONvmPV",
    img: '2'
  },
  {
    dataText:
      `table
caption
  | Superheros and sidekicks
colgroup
col
col.batman(span = "2")
col.flash(span = "2")
tr
td
th(scope = "col") Batman
th(scope = "col") Robin
th(scope = "col") The Flash
th(scope = "col") Kid Flash
tr
th(scope = "row") Skill
          td Smarts, strong
          td Dex, acrobat
          td Super speed
          td Super speed
    `,

    link: "https://codepen.io/viktor-yushin/pen/ZEdvZwj",
    img: '0'
  },
  {
    dataText:
      `table
caption
  | Personal weekly activities
colgroup.weekdays(span = "5")
colgroup.weekend(span = "2")
tr
    th Mon
    th Tue
    th Wed
    th Thu
    th Fri
    th Sat
    th Sun
tr
    td Clean room
    td Football training
    td Dance Course
    td History Class
    td Buy drinks
    td Study hour
    td Free time
tr
    td Yoga
    td Chess Club
    td Meet friends
    td Gymnastics
    td Birthday party
    td Fishing trip
    td Free time`,


    link: "https://codepen.io/viktor-yushin/pen/wvLpZoG",
    img: '1'
  },

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
