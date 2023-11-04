<template lang="pug">
.container
  .page-title 
    h2 Possessivpronomen
  Tabs(:items= 'Possessivmännlich' title='Possessiv männlichen' )
  Tabs(:items= 'Possessivweiblichen' title='Possessiv weiblichen' )
  Tabs(:items= 'Possessivneutrum' title='Possessiv neutrum' )
  Tabs(:items= 'Possessivplural' title='Possessiv plural' )
  .page-block
    .page-title--small 
      h3 Training
    Plaza
    Slot(:SlotData='SlotDataPersonal')

  //- .page-block
  //-   .page-title--small 
  //-     h3 Unbestimmte Artikel
  //-   Content(:items='Unbestimmte' :headers='Headers')
  //-   Plaza
  //-   Slot(:SlotData='SlotDataUnbestimmte')


  //- .page-block
  //-   .page-title--small 
  //-     h3 Unbestimmte Negativ Artikel
  //-   Content(:items='UnbestimmteNegativ' :headers='Headers')
  //-   Plaza
  //-   Slot(:SlotData='SlotDataNegativ')



</template>


<script setup>
import { ref } from 'vue';
// import Content from '@/components/Content.vue';
import Tabs from '@/components/Tabs.vue';

import Plaza from '@/components/Plaza.vue';
import Slot from '@/components/Slot.vue'

const Possessivmännlich = ref([

  {
    title: 'Nominativ ',
    text1: 'mein',
    text2: 'dein',
    text3: 'sein',
    text4: 'ihr',
    text5: 'unser',
    text6: 'euer',
    text7: 'ihr',

    svg1: 'man',
    svg2: 'man',
    svg3: 'man',
    svg4: 'man',
    svg5: 'man',
    svg6: 'man',
    svg7: 'man',

  },
  {
    title: 'Dativ ',
    text1: 'meinem',
    text2: 'deinem',
    text3: 'seinem',
    text4: 'ihrem',
    text5: 'unserem',
    text6: 'euerem',
    text7: 'ihrem',
    svg1: 'man',
    svg2: 'man',
    svg3: 'man',
    svg4: 'man',
    svg5: 'man',
    svg6: 'man',
    svg7: 'man',
  },
  {
    title: 'Akkusativ ',
    text1: 'meinen',
    text2: 'deinen',
    text3: 'seinen',
    text4: 'ihren',
    text5: 'unseren',
    text6: 'eueren',
    text7: 'ihren',
    svg1: 'man',
    svg2: 'man',
    svg3: 'man',
    svg4: 'man',
    svg5: 'man',
    svg6: 'man',
    svg7: 'man',
  },
  {
    title: 'Genitiv ',
    text1: 'meines',
    text2: 'deines',
    text3: 'seines',
    text4: 'ihres',
    text5: 'unseres',
    text6: 'eueres',
    text7: 'ihres',
    svg1: 'man',
    svg2: 'man',
    svg3: 'man',
    svg4: 'man',
    svg5: 'man',
    svg6: 'man',
    svg7: 'man',
  },
])
const Possessivweiblichen = ref([

  {
    title: 'Nominativ ',
    text1: 'meine',
    text2: 'deine',
    text3: 'seine',
    text4: 'ihre',
    text5: 'unsere',
    text6: 'euere',
    text7: 'ihre',

    svg1: 'frau',
    svg2: 'frau',
    svg3: 'frau',
    svg4: 'frau',
    svg5: 'frau',
    svg6: 'frau',
    svg7: 'frau',

  },
  {
    title: 'Dativ ',
    text1: 'meiner',
    text2: 'deiner',
    text3: 'seiner',
    text4: 'ihrer',
    text5: 'unserer',
    text6: 'euerer',
    text7: 'ihrer',
    svg1: 'frau',
    svg2: 'frau',
    svg3: 'frau',
    svg4: 'frau',
    svg5: 'frau',
    svg6: 'frau',
    svg7: 'frau',
  },
  {
    title: 'Akkusativ ',
    text1: 'meine',
    text2: 'deine',
    text3: 'seine',
    text4: 'ihre',
    text5: 'unsere',
    text6: 'euere',
    text7: 'ihre',
    svg1: 'frau',
    svg2: 'frau',
    svg3: 'frau',
    svg4: 'frau',
    svg5: 'frau',
    svg6: 'frau',
    svg7: 'frau',
  },
  {
    title: 'Genitiv ',
    text1: 'meiner',
    text2: 'deiner',
    text3: 'seiner',
    text4: 'ihrer',
    text5: 'unserer',
    text6: 'euerer',
    text7: 'ihrer',
    svg1: 'frau',
    svg2: 'frau',
    svg3: 'frau',
    svg4: 'frau',
    svg5: 'frau',
    svg6: 'frau',
    svg7: 'frau',
  },
])
const Possessivneutrum = ref([

  {
    title: 'Nominativ ',
    text1: 'mein',
    text2: 'dein',
    text3: 'sein',
    text4: 'ihr',
    text5: 'unser',
    text6: 'euer',
    text7: 'ihr',

    svg1: 'das',
    svg2: 'das',
    svg3: 'das',
    svg4: 'das',
    svg5: 'das',
    svg6: 'das',
    svg7: 'das',

  },
  {
    title: 'Dativ ',
    text1: 'meinem',
    text2: 'deinem',
    text3: 'seinem',
    text4: 'ihrem',
    text5: 'unserem',
    text6: 'euerem',
    text7: 'ihrem',
    svg1: 'das',
    svg2: 'das',
    svg3: 'das',
    svg4: 'das',
    svg5: 'das',
    svg6: 'das',
    svg7: 'das',
  },
  {
    title: 'Akkusativ ',
    text1: 'mein',
    text2: 'dein',
    text3: 'sein',
    text4: 'ihr',
    text5: 'unser',
    text6: 'euer',
    text7: 'ihr',
    svg1: 'das',
    svg2: 'das',
    svg3: 'das',
    svg4: 'das',
    svg5: 'das',
    svg6: 'das',
    svg7: 'das',
  },
  {
    title: 'Genitiv ',
    text1: 'meines',
    text2: 'deines',
    text3: 'seines',
    text4: 'ihres',
    text5: 'unseres',
    text6: 'eueres',
    text7: 'ihres',
    svg1: 'das',
    svg2: 'das',
    svg3: 'das',
    svg4: 'das',
    svg5: 'das',
    svg6: 'das',
    svg7: 'das',
  },
])


const Possessivplural = ref([

  {
    title: 'Nominativ ',
    text1: 'meine',
    text2: 'deine',
    text3: 'seine',
    text4: 'ihre',
    text5: 'unsere',
    text6: 'euere',
    text7: 'ihre',

    svg1: 'group',
    svg2: 'group',
    svg3: 'group',
    svg4: 'group',
    svg5: 'group',
    svg6: 'group',
    svg7: 'group',

  },
  {
    title: 'Dativ ',
    text1: 'meinen',
    text2: 'deinen',
    text3: 'seinen',
    text4: 'ihren',
    text5: 'unseren',
    text6: 'eueren',
    text7: 'ihren',
    svg1: 'group',
    svg2: 'group',
    svg3: 'group',
    svg4: 'group',
    svg5: 'group',
    svg6: 'group',
    svg7: 'group',
  },
  {
    title: 'Akkusativ ',
    text1: 'meine',
    text2: 'deine',
    text3: 'seine',
    text4: 'ihre',
    text5: 'unsere',
    text6: 'euere',
    text7: 'ihre',
    svg1: 'group',
    svg2: 'group',
    svg3: 'group',
    svg4: 'group',
    svg5: 'group',
    svg6: 'group',
    svg7: 'group',
  },
  {
    title: 'Genitiv ',
    text1: 'meiner',
    text2: 'deiner',
    text3: 'seiner',
    text4: 'ihrer',
    text5: 'unserer',
    text6: 'euerer',
    text7: 'ihrer',
    svg1: 'group',
    svg2: 'group',
    svg3: 'group',
    svg4: 'group',
    svg5: 'group',
    svg6: 'group',
    svg7: 'group',
  },
])



const SlotDataPersonal = ref([
  {
    t0: 'Карл, как зовут твоего кузена ?(Karl heißt Cousin)',
    t1: 'Karl',
    t2: ',',
    t3: 'wie',
    t4: 'heißt',
    t5: 'dein',
    t6: 'Cousin',
    t7: '?',

  },

  {
    t0: 'Моя мама готовит в свободное время.(Mutter kocht Freizeit)',
    t1: 'Meine',
    t2: 'Mutter',
    t3: 'kocht',
    t4: 'in',
    t5: 'ihrer',
    t6: 'Freizeit',
    t7: '.',

  },

  {
    t0: 'Мы встречаемся с нашими друзьями в кино.(treffen Freunde)',
    t1: 'Wir',
    t2: 'treffen',
    t3: 'unsere',
    t4: 'Freunde',
    t5: 'im',
    t6: 'Kino',
    t7: '.',
  },

  {
    t0: 'Это братья Маркуса ?  Да, это его братья.(Brüder Markus )',
    t1: 'Sind',
    t2: 'das',
    t3: 'die',
    t4: 'Brüder',
    t5: 'von',
    t6: 'Markus',
    t7: '?',
    t8: 'Ja',
    t9: ',',
    t10: 'das',
    t11: 'sind',
    t12: 'seine',
    t13: 'Brüder',
    t14: '.',

  },

  {
    t0: 'Я разговариваю со своим отцом.()',
    t1: 'Ich',
    t2: 'spreche',
    t3: 'mit',
    t4: 'meinem',
    t5: 'Vater',
    t6: '.',

  },

  {
    t0: 'Ханнес и Мартин, у вас есть ваши вещи ?(Hannes Martin Sachen)',
    t1: 'Hannes',
    t2: 'und',
    t3: 'Martin',
    t4: ',',
    t5: 'habt',
    t6: 'ihr',
    t7: 'eure',
    t8: 'Sachen',
    t9: '?',

  },

  {
    t0: 'Это Кристина и ее сестра.(Christina Schwester)',
    t1: 'Das',
    t2: 'sind',
    t3: 'Christina',
    t4: 'und',
    t5: 'ihre',
    t6: 'Schwester',
    t7: '.',

  },

  {
    t0: 'Ты забыл свою сумку.()',
    t1: 'Du',
    t2: 'hast',
    t3: 'deine',
    t4: 'Tasche',
    t5: 'vergessen',
    t6: '.',

  },

  {
    t0: 'Она разговаривает со своей учительницей.(Lehrerin )',
    t1: 'Sie',
    t2: 'spricht',
    t3: 'mit',
    t4: 'ihrer',
    t5: 'Lehrerin',
    t6: '.',

  },


  {
    t0: 'Ты тоже даришь своей девушке кусочек торта ?(Gibst Stück Kuchen)',
    t1: 'Gibst',
    t2: 'du',
    t3: 'deiner',
    t4: 'Freundin',
    t5: 'auch',
    t6: 'ein',
    t7: 'Stück',
    t8: 'Kuchen',
    t9: '?',

  },

  {
    t0: 'Я благодарю нашего учителя немецкого языка!(Deutschlehrer)',
    t1: 'Ich',
    t2: 'danke',
    t3: 'unserem',
    t4: 'Deutschlehrer',
    t5: '!',

  },

  {
    t0: 'Мы поздравляем нашу маму с Днем матери.(gratulieren Muttertag)',
    t1: 'Wir',
    t2: 'gratulieren',
    t3: 'unserer',
    t4: 'Mutter',
    t5: 'zum',
    t6: 'Muttertag',
    t7: '.',

  },

  {
    t0: 'Джулиан помогает своему другу Андреасу.(Julian hilft Andreas)',
    t1: 'Julian',
    t2: 'hilft',
    t3: 'seinem',
    t4: 'Freund',
    t5: 'Andreas',
    t6: '.',

  },

  {
    t0: 'Катрин помогает своей подруге Саре.(Katrin Sarah)',
    t1: 'Katrin',
    t2: 'hilft',
    t3: 'ihrer',
    t4: 'Freundin',
    t5: 'Sarah',
    t6: '.',

  },

  {
    t0: 'Студенты дают домашнее задание своим учителям немецкого языка.(Schüler Deutschlehrer Hausaufgaben)',
    t1: 'Die',
    t2: 'Schüler',
    t3: 'geben',
    t4: 'ihrer',
    t5: 'Deutschlehrer',
    t6: 'ihre',
    t7: 'Hausaufgaben',
    t8: '.',

  },

  {
    t0: 'Миссис Кох дает своим детям слишком много сладостей.(Koch Süßigkeiten)',
    t1: 'Frau',
    t2: 'Koch',
    t3: 'gibt',
    t4: 'ihren',
    t5: 'Kindern',
    t6: 'zu',
    t7: 'viele',
    t8: 'Süßigkeiten',
    t9: '.',

  },


  {
    t0: 'Кому ты доверяешь больше ? Его (его) или ее (ее) слова ?(vertraust mehr Worten)',
    t1: 'Wem',
    t2: 'vertraust',
    t3: 'du',
    t4: 'mehr',
    t5: '?',
    t6: 'Seinen',
    t7: '(er)',
    t8: 'oder',
    t9: 'ihren',
    t10: '(sie)',
    t11: 'Worten',
    t12: '?',

  },

  {
    t0: 'Вы должны научить своих детей лучшим манерам.(solltet Manieren beibringen)',
    t1: 'Ihr',
    t2: 'solltet',
    t3: 'euren',
    t4: 'Kindern',
    t5: 'bessere',
    t6: 'Manieren',
    t7: 'beibringen',
    t8: '.',

  },

  {
    t0: 'Она снова и снова прощала своего мужа.(verziehen)',
    t1: 'Sie',
    t2: 'hat',
    t3: 'ihrem',
    t4: 'Mann',
    t5: 'immer',
    t6: 'wieder',
    t7: 'verziehen',
    t8: '.',

  },

  {
    t0: 'Я не верю ни одному Его слову.(vertraue )',
    t1: 'Seinem',
    t2: 'Wort',
    t3: 'vertraue',
    t4: 'ich',
    t5: 'nicht',
    t6: '.',

  },

  {
    t0: 'Не мог бы ты, пожалуйста, вымыть руки ?(Könntest Hände waschen)',
    t1: 'Könntest',
    t2: 'du',
    t3: 'bitte',
    t4: 'deine',
    t5: 'Hände',
    t6: 'waschen',
    t7: '?',

  },

  {
    t0: 'Я увольняю человека, чью работу завтра не найду на своем столе.(Schreibtisch finde entlasse)',
    t1: 'Denjenigen',
    t2: ',',
    t3: 'dessen',
    t4: 'Arbeit',
    t5: 'ich',
    t6: 'nicht',
    t7: 'morgen',
    t8: 'auf',
    t9: 'meinem',
    t10: 'Schreibtisch',
    t11: 'finde',
    t12: ',',
    t13: 'entlasse',
    t14: 'ich',
    t15: '.',

  },

  {
    t0: 'Он никогда бы ничего не сделал со своей собакой.(Hund antun)',
    t1: 'Seinem',
    t2: 'Hund',
    t3: 'würde',
    t4: 'er',
    t5: 'niemals',
    t6: 'etwas',
    t7: 'antun',
    t8: '.',

  },

  {
    t0: 'Не делай этого! Машина принадлежит моему работодателю.(Tu Auto Arbeitgeber)',
    t1: 'Tu',
    t2: 'das',
    t3: 'nicht',
    t4: '!',
    t5: 'Das',
    t6: 'Auto',
    t7: 'gehört',
    t8: 'meinem',
    t9: 'Arbeitgeber',
    t10: '.',

  },

  {
    t0: 'Ваш брат действительно работает в Японии?(Arbeitet Japan)',
    t1: 'Arbeitet',
    t2: 'ihr',
    t3: 'Bruder',
    t4: 'wirklich',
    t5: 'in',
    t6: 'Japan',
    t7: '?',

  },

  {
    t0: 'Где на самом деле работает Ваш брат?(eigentlich)',
    t1: 'Wo',
    t2: 'arbeitet',
    t3: 'Ihr',
    t4: 'Bruder',
    t5: 'eigentlich',
    t6: '?',

  },

  {
    t0: 'Чья это сумка? Марк, это твоя?(Mark )',
    t1: 'Wessen',
    t2: 'Tasche',
    t3: 'ist',
    t4: 'das',
    t5: '?',
    t6: 'Mark',
    t7: ',',
    t8: 'ist',
    t9: 'das',
    t10: 'deine',
    t11: '?',

  },

  {
    t0: 'Моя машина до завтра в мастерской.Не мог бы ты одолжить мне сегодня вечером?(Werkstatt Könntest leihen)',
    t1: 'Mein',
    t2: 'Auto',
    t3: 'ist',
    t4: 'bis',
    t5: 'morgen',
    t6: 'in',
    t7: 'der',
    t8: 'Werkstatt',
    t9: '.',
    t10: 'Könntest',
    t11: 'du',
    t12: 'mir',
    t13: 'heute',
    t14: 'Abend',
    t15: 'deins',
    t16: 'leihen',
    t17: '?',
  },

  {
    t0: 'Ты видел мой наполнитель? Это мое . Твоего я не видел.(Füller gesehen )',
    t1: 'Hast',
    t2: 'du',
    t3: 'meinen',
    t4: 'Füller',
    t5: 'gesehen',
    t6: '?',
    t7: 'Das',
    t8: 'hier',
    t9: 'ist',
    t10: 'meiner',
    t11: '.',
    t12: 'Deinen',
    t13: 'habe',
    t14: 'ich',
    t15: 'nicht',
    t16: 'gesehen',
    t17: '.',
  },

  {
    t0: 'Это требует его мастерства, а не моего .(bedarf Könnens )',
    t1: 'Es',
    t2: 'bedarf',
    t3: 'seines',
    t4: 'Könnens',
    t5: ',',
    t6: 'nicht',
    t7: 'meines',
    t8: '.',

  },

  {
    t0: 'Это книга вашего брата.(Bruders)',
    t1: 'Das',
    t2: 'ist',
    t3: 'das',
    t4: 'Buch',
    t5: 'eures',
    t6: 'Bruders',
    t7: '.',

  },
  {
    t0: 'У наших друзей есть для тебя сюрприз.(Überraschung)',
    t1: 'Unsere',
    t2: 'Freunde',
    t3: 'haben',
    t4: 'eine',
    t5: 'Überraschung',
    t6: 'für',
    t7: 'dich',
    t8: '.',
  },

  {
    t0: 'Ты имеешь в виду его отца? - Нет, я говорю о своем .(rede)',
    t1: 'Meinst',
    t2: 'du',
    t3: 'seinen',
    t4: 'Vater',
    t5: '?',
    t6: 'Nein',
    t7: ',',
    t8: 'ich',
    t9: 'rede',
    t10: 'von',
    t11: 'meinem',
    t12: '.',

  },
  {
    t0: 'Здесь лежит мобильный телефон. Это твое?()',
    t1: 'Hier',
    t2: 'liegt',
    t3: 'ein',
    t4: 'Handy',
    t5: '.',
    t6: 'Ist',
    t7: 'das',
    t8: 'deins',
    t9: '?',
  },

  {
    t0: 'Там есть ручка. Разве это не ваше ? (Stift )',
    t1: 'Da',
    t2: 'ist',
    t3: 'ein',
    t4: 'Stift',
    t5: '.',
    t6: 'Ist',
    t7: 'das',
    t8: 'nicht',
    t9: 'eurer',
    t10: '?',
  },

  // {
  //   t0: '',
  //   t1: '',
  //   t2: '',
  //   t3: '',
  //   t4: '',
  //   t5: '',
  //   t6: '',
  //   t7: '',
  //   t8: '',
  //   t9: '',
  //   t10: '',
  //   t11: '',
  //   t12: '',
  //   t13: '',
  //   t14: '',
  //   t15: '',
  //   t16: '',
  //   t17: '',
  //   t18: '',
  // },
]

)



</script>

<style lang="scss" ></style>