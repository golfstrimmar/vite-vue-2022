<template lang="pug">
.container
  .page-title 
    h2 Interrogativpronomen
  Tabs(:items= 'Interrogativ' title='Interrogativ' )
  .page-block
    .page-title--small 
      h3 Training
    Plaza
    Slot(:SlotData='SlotDataInterrogativ')

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

const Interrogativ = ref([

  {
    title: 'Nominativ',
    text1: 'Wer',
    text2: 'Was',
    text3: 'Welcher',
    text4: 'Was für ein(er)',
    text5: 'Welche',
    text6: 'Was für eine',
    text7: 'Welches',
    text8: 'Was für ein',
    text9: 'Welche',
    text10: 'Was für Bücher',
    svg3: 'man',
    svg4: 'man',
    svg5: 'frau',
    svg6: 'frau',
    svg7: 'das',
    svg8: 'das',
    svg9: 'group',
    svg10: 'group',

  },
  {
    title: 'Dativ',
    text1: 'Wem',
    text2: 'Welchem',
    text3: 'Was für einem',
    text4: 'Welcher',
    text5: 'Was für einer',
    text6: 'Welchem',
    text7: 'Was für einem',
    text8: 'Welchen',
    text9: 'Was für welchen',
    svg2: 'man',
    svg3: 'man',
    svg4: 'frau',
    svg5: 'frau',
    svg6: 'das',
    svg7: 'das',
    svg8: 'group',
    svg9: 'group',
  },
  {
    title: 'Akkusativ',
    text1: 'Wen',
    text2: 'Was',
    text3: 'Welchen',
    text4: 'Was für einen',
    text5: 'Welche',
    text6: 'Was für eine',
    text7: 'Welches',
    text8: 'Was für ein(e)s',
    text9: 'Welche',
    text10: 'Was für welche',
    svg3: 'man',
    svg4: 'man',
    svg5: 'frau',
    svg6: 'frau',
    svg7: 'das',
    svg8: 'das',
    svg9: 'group',
    svg10: 'group',
  },
  {
    title: 'Genitiv',
    text1: 'Wessen',
    text2: 'Welches',
    text3: 'Was für eines',
    text4: 'Welcher',
    text5: 'Was für einer',
    text6: 'Welches',
    text7: 'Was für eines',
    text8: 'Welcher',
    text9: 'Was für welcher',
    svg2: 'man',
    svg3: 'man',
    svg4: 'frau',
    svg5: 'frau',
    svg6: 'das',
    svg7: 'das',
    svg8: 'group',
    svg9: 'group',
  },
])

const SlotDataInterrogativ = ref([

  {
    t0: '',
    t1: 'Wer',
    t2: 'hat das gesagt?',

  },
  {
    t0: '',
    t1: 'Wen',
    t2: 'habt ihr angerufen?',

  },
  {
    t0: '',
    t1: 'Was',
    t2: 'hast du gegessen?',

  },
  {
    t0: '',
    t1: 'Wem',
    t2: 'hast du das Buch gegeben?',

  },
  {
    t0: '',
    t1: 'Wessen',
    t2: 'Tasche ist das?',

  },
  {
    t0: 'Manuela hat einen Hund. Was ',
    t1: 'für einen',
    t2: 'Hund hat sie?',

  },
  {
    t0: '',
    t1: 'Welcher',
    t2: '(Hund) gehört Manuela, der große oder der kleine?',

  },
  {
    t0: 'Was',
    t1: 'für ein',
    t2: 'Auto fährst du?',

  },
  {
    t0: '',
    t1: 'Wer',
    t2: 'hat den Brief geschrieben?',

  },
  {
    t0: '',
    t1: 'Wessen',
    t2: 'Schuhe stehen vor der Tür?',

  },
  {
    t0: '',
    t1: 'Wen',
    t2: 'willst du anrufen?',

  },
  {
    t0: '',
    t1: 'Was',
    t2: 'esst ihr normalerweise zum Frühstück?',

  },
  {
    t0: '',
    t1: 'Wem',
    t2: 'sollen wir gratulieren?',
  },
  {
    t0: 'Olivia kennt den Kellner.',
    t1: 'Wen',
    t2: ' kennt Olivia?',

  },
  {
    t0: 'Er hat die Tür zugemacht.',
    t1: 'Was',
    t2: 'hat er zugemacht?',
  },
  {
    t0: 'Christinas Computer ist kaputt.',
    t1: 'Wessen',
    t2: ' Computer ist kaputt?',
  },
  {
    t0: 'Die Schüler antworten dem Lehrer.',
    t1: 'Wem',
    t2: 'antworten die Schüler?',

  },
  {
    t0: 'Meine Cousine besucht uns.',
    t1: 'Wer',
    t2: 'besucht uns?',

  },
  {
    t0: 'Das Wetter ist schön.',
    t1: 'Was',
    t2: 'ist schön?',

  },
  {
    t0: 'Sie haben Jens getroffen.',
    t1: 'Wen',
    t2: 'haben sie getroffen?',

  },
  {
    t0: 'Renate hat ein Gedicht gelernt.',
    t1: 'Was',
    t2: 'hat Renate gelernt?',

  },
  {
    t0: 'Wir können Ulrike vertrauen. ',
    t1: 'Wem',
    t2: 'können wir vertrauen?',
  },
  {
    t0: 'Meine Freunde sind nach Berlin gefahren. ',
    t1: 'Wer',
    t2: 'ist nach Berlin gefahren?',

  },
  {
    t0: 'Der Firmenboss fährt einen Sportwagen. Was',
    t1: 'für einen',
    t2: ' Wagen fährt der Firmenboss?',

  },
  {
    t0: 'Seiner Schwester gehört die grüne Tasche.',
    t1: 'Welche',
    t2: 'Tasche gehört seiner Schwester?',

  },
  {
    t0: 'Für  ',
    t1: 'wen',
    t2: 'kaufst du Zitroneneis?',

  },
  {
    t0: 'Mit  ',
    t1: 'wem',
    t2: 'fährst du in den Urlaub?',

  },
  {
    t0: 'Ohne  ',
    t1: 'wessen',
    t2: 'Hilfe konntest du die Aufgabe lösen?',

  },
  {
    t0: 'Für  ',
    t1: 'welchen',
    t2: 'Namen habt ihr euch entschieden?',

  },
  {
    t0: 'Mit  ',
    t1: 'was für einem',
    t2: 'Auto werdet ihr ans Meer fahren?',

  },
  {
    t0: '',
    t1: 'Welchen',
    t2: ' Bus nimmst du morgens?',

  },

  {
    t0: '',
    t1: 'Welcher',
    t2: ' Name gefällt',
    t3: 'dir',
    t4: 'für das Baby am besten?',

  },

  {
    t0: 'Mit  ',
    t1: 'wem',
    t2: 'möchtest du Tanzunterricht nehmen?',
  },

  {
    t0: 'Für  ',
    t1: 'wen',
    t2: 'hältst du mich überhaupt?',

  },

  {
    t0: 'Der Schulleiter möchte gerne wissen,  ',
    t1: 'wessen',
    t2: 'Fahrrad auf dem Schulhof liegt. ',

  },

  {
    t0: 'Sie ist sich noch nicht sicher,  ',
    t1: 'welche',
    t2: 'zweite Fremdsprache sie wählen möchte.',

  },

  {
    t0: 'Ich war schockiert, was  ',
    t1: 'für ein',
    t2: 'Chaos!',

  },

  {
    t0: 'Ich möchte vor allem    ',
    t1: 'dem',
    t2: 'Menschen danken, ohne',
    t3: 'dessen',
    t4: 'Hilfe dies unmöglich gewesen wäre.',

  },

  {
    t0: 'Sie hat sich wirklich dreimal überlegt,   ',
    t1: 'wem',
    t2: 'sie ',
    t3: 'dieses',
    t4: 'Geschenk zu Weihnachten geben soll.',

  },

  {
    t0: 'Ohne Zweifel war dem Detektiv von Anfang an klar,  ',
    t1: 'wessen',
    t2: 'Fußabdruck das war. ',

  },
  {
    t0: 'Meine Eltern fragen    ',
    t1: 'mich',
    t2: 'jeden Mittag, was',
    t3: 'für welche',
    t4: 'Hausaufgaben ich bis morgen erledigen muss. ',
  },
]

)



</script>

<style lang="scss" ></style>