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
    t0: 'Karl, wie heißt',
    t1: 'dein',
    t2: 'Cousin ?',


  },

  {
    t0: '',
    t1: 'Meine',
    t2: 'Mutter kocht in',
    t3: 'ihrer',
    t4: 'Freizeit.',


  },

  {
    t0: 'Wir treffen',
    t1: 'unsere',
    t2: 'Freunde im Kino.',


  },

  {
    t0: 'Sind das die Brüder von Markus ? - Ja, das sind ',
    t1: 'seine',
    t2: 'Brüder.',

  },

  {
    t0: 'Ich spreche mit ',
    t1: 'meinem',
    t2: ' Vater.',


  },

  {
    t0: 'Hannes und Martin, habt ',
    t1: 'ihr',
    t2: '',
    t3: 'eure',
    t4: ' Sachen ?',


  },

  {
    t0: 'Das sind Christina und',
    t1: 'ihre',
    t2: ' Schwester.',

  },

  {
    t0: 'Du hast',
    t1: 'deine',
    t2: ' Tasche vergessen.',


  },

  {
    t0: 'Sie spricht mit ',
    t1: 'ihrer',
    t2: ' Lehrerin.',

  },
  {
    t0: 'Gibst du',
    t1: 'deiner',
    t2: ' Freundin auch ein Stück Kuchen ?',

  },

  {
    t0: 'Ich danke',
    t1: 'unserem',
    t2: ' Deutschlehrer!',
  },

  {
    t0: 'Wir gratulieren',
    t1: 'unserer',
    t2: ' Mutter zum Muttertag.',

  },

  {
    t0: 'Julian hilft',
    t1: 'seinem',
    t2: ' Freund Andreas.',

  },

  {
    t0: 'Katrin hilft',
    t1: 'ihrer',
    t2: ' Freundin Sarah.',

  },

  {
    t0: 'Die Schüler geben',
    t1: 'ihrer',
    t2: ' Deutschlehrer',
    t3: 'ihre',
    t4: ' Hausaufgaben.',

  },
  {
    t0: 'Frau Koch gibt',
    t1: 'ihren',
    t2: 'Kindern zu viele Süßigkeiten.',
  },
  {
    t0: 'Wem vertraust du mehr ?',
    t1: 'Seinen',
    t2: '(er) oder',
    t3: 'ihren',
    t4: '(sie) Worten ?',

  },
  {
    t0: '',
    t1: 'Ihr',
    t2: 'solltet',
    t3: 'euren',
    t4: '(ihr) Kindern bessere Manieren beibringen.',

  },
  {
    t0: 'Sie hat',
    t1: 'ihrem',
    t2: 'Mann immer wieder verziehen.',

  },
  {
    t0: '',
    t1: 'Seinem',
    t2: '(er) Wort vertraue ich nicht.',

  },
  {
    t0: 'Könntest du bitte',
    t1: 'deine',
    t2: '(du) Hände waschen ?',

  },
  {
    t0: 'Denjenigen,',
    t1: 'dessen',
    t2: 'Arbeit ich nicht morgen auf ',
    t3: 'meinem',
    t4: 'Schreibtisch finde, entlasse ich.',

  },
  {
    t0: '',
    t1: 'Seinem',
    t2: ' (er) Hund würde er niemals etwas antun.',

  },
  {
    t0: 'Tu das nicht! Das Auto gehört',
    t1: 'meinem',
    t2: '(ich) Arbeitgeber.',

  },
  {
    t0: '',
    t1: '',
    t2: '',
    t3: '',
    t4: '',
    t5: '',
    t6: '',

  },
  {
    t0: '',
    t1: '',
    t2: '',
    t3: '',
    t4: '',
    t5: '',
    t6: '',

  },
  {
    t0: '',
    t1: '',
    t2: '',
    t3: '',
    t4: '',
    t5: '',
    t6: '',

  },
  {
    t0: '',
    t1: '',
    t2: '',
    t3: '',
    t4: '',
    t5: '',
    t6: '',

  },
  {
    t0: '',
    t1: '',
    t2: '',
    t3: '',
    t4: '',
    t5: '',
    t6: '',

  },
  {
    t0: '',
    t1: '',
    t2: '',
    t3: '',
    t4: '',
    t5: '',
    t6: '',

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
  //   t12: '',+
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