<template lang="pug">
.container
  .page-title 
    h2 Personalpronomen
  Tabs(:items= 'Personal' title='Personal' )
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
import { ref, computed } from 'vue';
// import Content from '@/components/Content.vue';
import Tabs from '@/components/Tabs.vue';

import Plaza from '@/components/Plaza.vue';
import Slot from '@/components/Slot.vue'

const Personal = ref([

  {
    title: 'Nominativ',
    text1: 'ich',
    text2: 'du',
    text3: 'er',
    text4: 'sie',
    text5: 'es',
    text6: 'wir',
    text7: 'ihr',
    text8: 'sie',
    text9: 'Sie',
    svg3: 'man',
    svg4: 'frau',
    svg5: 'das',
    svg6: 'group',
    svg7: 'group',
    svg8: 'group',
    svg9: 'respect',

  },
  {
    title: 'Dativ',
    text1: 'mir',
    text2: 'dir',
    text3: 'ihm',
    text4: 'ihr',
    text5: 'ihm',
    text6: 'uns',
    text7: 'euch',
    text8: 'ihnen',
    text9: 'Ihnen',
    svg3: 'man',
    svg4: 'frau',
    svg5: 'das',
    svg6: 'group',
    svg7: 'group',
    svg8: 'group',
    svg9: 'respect',
  },
  {
    title: 'Akkusativ',
    text1: 'mich',
    text2: 'dich',
    text3: 'ihn',
    text4: 'sie',
    text5: 'es',
    text6: 'uns',
    text7: 'euch',
    text8: 'sie',
    text9: 'Sie',
    svg3: 'man',
    svg4: 'frau',
    svg5: 'das',
    svg6: 'group',
    svg7: 'group',
    svg8: 'group',
    svg9: 'respect',
  },
  {
    title: 'Genitiv',
    text1: 'meiner',
    text2: 'deiner',
    text3: 'seiner',
    text4: 'ihrer',
    text5: 'seiner',
    text6: 'unser',
    text7: 'eurer',
    text8: 'ihrer',
    text9: 'Ihrer',
    svg3: 'man',
    svg4: 'frau',
    svg5: 'das',
    svg6: 'group',
    svg7: 'group',
    svg8: 'group',
    svg9: 'respect',
  },
])

const SlotDataPersonal = ref([
  {
    t0: 'Hast',
    t1: 'du',
    t2: 'Pauli schon gebeten, sein Spielzeug aufzuräumen?',
  },
  {
    t0: '',
    t1: 'Ich',
    t2: 'habe',
    t3: 'es',
    t4: '',
    t5: 'ihm',
    t6: 'schon zehn Mal gesagt, aber',
    t7: 'er',
    t8: 'gehorcht',
    t9: 'mir',
    t10: 'nicht!',

  },
  {
    t0: 'Marion und ich,',
    t1: 'wir',
    t2: 'wollen am Wochenende an den See. Kannst',
    t3: 'du',
    t4: '',
    t5: 'uns',
    t6: 'deine große Picknickdecke borgen, damit',
    t7: 'wir',
    t8: 'nicht auf dem nassen Gras sitzen müssen? - Ja, gerne, ich kann',
    t9: 'sie',
    t10: '',
    t11: 'euch',
    t12: 'borgen.',

  },
  {
    t0: 'Paulchen möchte gern Chinesisch lernen.',
    t1: 'Ich',
    t2: 'kenne eine gute Lehrerin, die',
    t3: 'ich',
    t4: '',
    t5: 'ihm',
    t6: 'vermitteln könnte.',
    t7: 'Du',
    t8: 'hast doch ihre neue Nummer. Hilfst',
    t9: 'du',
    t10: '',
    t11: 'mir',
    t12: '',
    t13: 'sie',
    t14: 'zu kontaktieren?',
  },
  {
    t0: 'Maria ist heute schnell aus dem Haus gegangen.',
    t1: 'Sie',
    t2: 'hat dabei ihre Schlüssel verloren. Hast ',
    t3: 'du',
    t4: '',
    t5: 'sie',
    t6: 'vielleicht wo gesehen?',
  },
  {
    t0: 'Gestern hatte',
    t1: 'ich',
    t2: 'noch einen Kalender auf dem Tisch. Hat',
    t3: 'ihn',
    t4: 'wer genommen? Dann möge man',
    t5: 'ihn',
    t6: '',
    t7: 'mir',
    t8: 'bitte wieder bringen!',

  },
  {
    t0: 'Wann bekomme',
    t1: 'ich',
    t2: 'denn endlich mein Essen? - Keine Sorge, Herr Monte, unser Koch bereitet',
    t3: 'es',
    t4: 'gerade zu und',
    t5: 'wir',
    t6: 'bringen',
    t7: 'es',
    t8: '',
    t9: 'Ihnen',
    t10: 'gleich.',

  },
  {
    t0: 'Hallo,',
    t1: 'ihr',
    t2: 'zwei. Können',
    t3: 'wir',
    t4: 'vielleicht tauschen?',
    t5: 'Ich',
    t6: 'gebe',
    t7: 'euch',
    t8: 'meine Sticker und',
    t9: 'ihr',
    t10: 'gebt',
    t11: 'mir',
    t12: 'im Gegenzug eure Glasmurmeln. - Okay, machen',
    t13: 'wir',
    t14: '!',
  },
  {
    t0: 'Kommst',
    t1: 'du',
    t2: 'morgen? - Weißt',
    t3: 'du',
    t4: ', morgen geht',
    t5: 'es',
    t6: 'nicht. Ich treffe morgen Klara, ',
    t7: 'sie',
    t8: 'will',
    t9: 'mir',
    t10: 'etwas zeigen,',
    t11: 'ich',
    t12: 'habe morgen daher leider keine Zeit.',

  },
  {
    t0: '',
    t1: ' Wem',
    t2: 'gehört diese Katze?-',
    t3: 'Sie',
    t4: 'gehört dem Nachbarn.',
    t5: 'Ihm',
    t6: 'gehören auch noch zwei Hunde.Ich sehe',
    t7: 'ihn',
    t8: 'immerzu mit seinen Hunden spazieren.',
    t9: 'Er',
    t10: 'mag Tiere sehr und hält',
    t11: 'sie',
    t12: 'gut.',
  },
  {
    t0: 'Entschuldigen',
    t1: 'Sie',
    t2: ', mein Herr,',
    t3: 'ich',
    t4: 'kann die Bahnhofsstraße nicht finden. Kennen',
    t5: 'Sie',
    t6: '',
    t7: 'sie',
    t8: '? Können',
    t9: 'Sie',
    t10: '',
    t11: 'mir',
    t12: 'helfen,',
    t13: 'sie',
    t14: 'zu finden? Das wäre sehr aufmerksam von',
    t15: 'Ihnen',
    t16: '.',
  },
  {
    t0: 'Wenn',
    t1: 'sie',
    t2: 'die Schuld trägt, wird',
    t3: 'sie',
    t4: '',
    t5: 'ihrer',
    t6: 'überführt.',

  },
  {
    t0: '',
    t1: 'Die',
    t2: 'Debatte ist kompliziert.',
    t3: 'Er',
    t4: 'möchte sich',
    t5: 'ihrer',
    t6: 'enthalten.',
  },
  {
    t0: 'Du warst großartig. Man wird sich',
    t1: 'deiner',
    t2: 'erinnern.',
  },
  {

    t0: '',
    t1: 'Sie',
    t2: 'schämen sich',
    t3: 'ihrer',
    t4: '.',
  },
  {
    t0: 'Wenn     ',
    t1: 'ich',
    t2: 'tot bin, werden',
    t3: 'sie',
    t4: '',
    t5: 'meiner ',
    t6: 'gedenken.',
  },
  {
    t0: 'Er wurde ausgelacht. Alle spotteten ',
    t1: 'seiner',
    t2: '.',
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