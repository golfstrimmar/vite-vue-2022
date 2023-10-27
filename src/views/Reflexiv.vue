<template lang="pug">
.container
  .page-title 
    h2 Reflexivpronomen
  Tabs(:items= 'Reflexiv' title='Reflexiv' )
  .page-block
    .page-title--small 
      h3 Training
    Plaza
    Slot(:SlotData='SlotDataReflexiv')

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

const Reflexiv = ref([

  {
    title: 'Dativ',
    text1: 'mir',
    text2: 'dir',
    text3: 'sich',
    text4: 'sich',
    text5: 'sich',
    text6: 'uns',
    text7: 'euch',
    text8: 'sich',
    text9: 'sich',
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
    text3: 'sich',
    text4: 'sich',
    text5: 'sich',
    text6: 'uns',
    text7: 'euch',
    text8: 'sich',
    text9: 'sich',
    svg3: 'man',
    svg4: 'frau',
    svg5: 'das',
    svg6: 'group',
    svg7: 'group',
    svg8: 'group',
    svg9: 'respect',
  },

])

const SlotDataReflexiv = ref([
  {
    t0: 'Ich dusche ',
    t1: 'mich',
    t2: '.',

  },
  {
    t0: 'Ich putze  ',
    t1: 'mir',
    t2: 'die Zähne.',
  },
  {
    t0: 'Tom und Albert streiten ',
    t1: 'sich',
    t2: '.',

  },
  {
    t0: 'Ihr habt',
    t1: 'euch',
    t2: 'bedankt.',

  },
  {
    t0: 'Ich beeile',
    t1: 'mich',
    t2: '.',

  },
  {
    t0: 'Wir grüßen',
    t1: 'uns',
    t2: '.',

  },
  {
    t0: 'Ich ziehe',
    t1: 'mir',
    t2: 'einen warmen Pullover an.',

  },
  {
    t0: 'Sie hat',
    t1: 'sich',
    t2: ' die Hände gewaschen.',

  },
  {
    t0: 'Ihr müsst',
    t1: 'euch',
    t2: 'noch die Zähne putzen!',

  },
  {
    t0: 'Als Kind habe ich ',
    t1: 'mich',
    t2: 'immer vor dem Weihnachtmann versteckt.',

  },
  {
    t0: 'Wann kannst du ',
    t1: 'dir',
    t2: '',
    t3: 'uns',
    t4: 'mal die Zahlen merken? Berno und ich wiederholen',
    t5: 'uns',
    t6: 'ständig.',

  },
  {
    t0: '- Kinder! Die ganze Wand ist voller Malfarbe! Was habt ihr',
    t1: 'euch',
    t2: 'bloß dabei gedacht? - Oh, wir entschuldigen',
    t3: 'uns',
    t4: ', Mama, wir nehmen',
    t5: 'uns',
    t6: 'vor, sauber zu machen, ok?',

  },
  {
    t0: '- Wie geht es denn Maxi nach der schweren Grippe? - Danke, gut, er hat ',
    t1: 'sich',
    t2: 'wieder erholt. - Das denke ich',
    t3: 'mir',
    t4: ', er war ja gesundheitlich immer sehr stark.',

  },
  {
    t0: 'Ich kann',
    t1: 'mich',
    t2: 'über manche Leute nur wundern, die',
    t3: 'sich',
    t4: 'verstellen, wenn man  ',
    t5: 'ihnen',
    t6: 'eine ehrliche Frage stellt.',

  },
  {
    t0: 'Kannst du ',
    t1: 'dir',
    t2: 'vorstellen, dass wir mal nur noch Autos ohne Fahrer auf den Straßen sehen werden? Also, ich kann es',
    t3: 'mir',
    t4: 'noch nicht wirklich vorstellen.',

  },
  {
    t0: '- Was hast du ',
    t1: 'dir',
    t2: 'denn für Nellys Geburtstag ausgedacht? - Ich habe ',
    t3: 'mir',
    t4: 'gedacht, wir könnten  ',
    t5: 'ihr',
    t6: 'eine schöne Ledertasche schenken. Ja, das spricht',
    t7: 'mich',
    t8: 'auch an.',
  },
  {
    t0: 'Für die Wandertour müssen wir',
    t1: 'uns',
    t2: 'warm anziehen. Es stellt',
    t3: 'sich',
    t4: 'langsam heraus, dass es ziemlich kalt werden wird.Wir müssen',
    t5: 'uns',
    t6: 'bald um passende Kleidung kümmern.',

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