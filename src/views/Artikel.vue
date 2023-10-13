<template lang="pug">
.container
  .page-title 
    h2 der Artikel
  Plaza



  Slot(v-for="item in SlotData " :key="index")
    template(#s1)
      span {{ item.t0 }}
      Input(Antwort = item.t1 ) 
      span  {{ item.t2 }}
    template(#s2)  
      span {{ item.t3 }} 
      //- Input(Antwort= 'item.t4'  )  
      span  {{ item.t5 }}
    template(#s3)
      span {{ item.t6 }}
      //- Input(Antwort='item.t7' )
      span {{ item.t8 }}
    template(#s4) 
      span {{ item.t9 }}
      //- Input(Antwort='item.t10' )
      span {{ item.t11 }}
    template(#s5)
      span  {{ item.t12 }}
      //- Input(Antwort='item.t13' )
      span {{ item.t14 }}
    template(#s6) 
      span {{ item.t15 }}
      //- Input(Antwort='item.t16' )
      span {{ item.t17 }}


  .page-block
    .page-title--small 
      h3 Masculine Article “der”
    Content(:items='der' :headers='Headersder')
  .page-block
    .page-title--small 
      h3 Feminine Article “die”
    Content(:items='die' :headers='Headersdie')
  .page-block
    .page-title--small 
      h3 Neuter Article “das”
    Content(:items='das' :headers='Headersdas')
  .page-block
    .page-title--small 
      h3 Bestimmte Artikel
    Content(:items='Bestimmte' :headers='Headers')
  .page-block
    .page-title--small 
      h3 Unbestimmte Artikel
    Content(:items='Unbestimmte' :headers='Headers')
  .page-block
    .page-title--small 
      h3 Unbestimmte Negativartikel
    Content(:items='UnbestimmteNegativ' :headers='Headers')

</template>


<script setup>
import { ref } from 'vue';
import Content from '@/components/Content.vue';
import Plaza from '@/components/Plaza.vue';
import PlazaArtikel from '@/components/PlazaArtikel.vue';
import Slot from '@/components/Slot.vue'
import Input from '@/components/Input.vue';

const SlotData = ref(

  [
    { t0: '' },
    { t1: 'Der' },
    { t2: 'Balkon' },
    { t3: '' },
    { t4: 'des' },
    { t5: 'Wohnzimmers ist groß. ' },
    { t6: '' },
    { t7: '' },
    { t8: '' },
    { t9: '' },
    { t10: '' },
    { t11: '' },
    { t12: '' },
    { t13: '' },
    { t14: '' },
    { t15: '' },
    { t16: '' },
    { t17: '' },
  ]

)

const Headersdas = ref([
  { title: '-chen' },
  { title: '- lein' },
  { title: '- ment' },
  { title: '- um' },
  { title: '- nis' },
])
const das = ref([
  [
    { id: 1, text: 'das Hähnchen' },
    { id: 2, text: 'das Bäumchen' },
  ],
  [
    { id: 1, text: 'das Fräulein' },
    { id: 2, text: 'das Büchlein' },
  ],
  [
    { id: 1, text: 'das Apartment' },
    { id: 2, text: 'das Parlament' },
  ],
  [
    { id: 1, text: 'das Studium ' },
    { id: 2, text: 'das Datum' },
  ],
  [
    { id: 1, text: 'das Ergebnis' },
    { id: 2, text: 'das Zeugnis' },
  ]
])
const Headersdie = ref([
  { title: '-ung' },
  { title: '-keit' },
  { title: '-heit' },
  { title: '-ion' },
  { title: '-in' },
  { title: '-tät' },
  { title: '-schaft' },
  { title: '-enz' },
  { title: '-ie' },
])
const die = ref([
  [
    { id: 1, text: 'die Abdeckung' },
    { id: 2, text: 'die Bildung' },
  ],
  [
    { id: 1, text: 'die Möglichkeit' },
    { id: 2, text: 'die Tätigkeit' },
  ],
  [
    { id: 1, text: 'die Einheit' },
    { id: 2, text: 'die Gewohnheit' },
  ],
  [
    { id: 1, text: 'die Kommission ' },
    { id: 2, text: 'die Position' },
  ],
  [
    { id: 1, text: 'die Bäckerin' },
    { id: 2, text: 'die Dichterin' },
  ],
  [
    { id: 1, text: 'die Identität ' },
    { id: 2, text: 'die Qualität' },
  ],
  [
    { id: 1, text: 'die Mannschaft ' },
    { id: 2, text: 'die Landschaft' },
  ],
  [
    { id: 1, text: 'die Effizienz' },
    { id: 2, text: 'die Konferenz' },
  ],
  [
    { id: 1, text: 'die Anatomie ' },
    { id: 2, text: 'die Biologie' },
  ]
])
const Headersder = ref([
  { title: '-ling' },
  { title: '-ismus' },
  { title: '-er' },
  { title: '-ist' },
  { title: '-ich' },
  { title: '-ant' },
])
const der = ref([
  [
    { id: 1, text: 'der Frühling' },
    { id: 2, text: 'der Neuling' },
  ],
  [
    { id: 1, text: 'der Tourismus' },
    { id: 2, text: 'der Optimismus' },
  ],
  [
    { id: 1, text: 'der Fahrer' },
    { id: 2, text: 'der Körper' },
  ],
  [
    { id: 1, text: 'der Journalist ' },
    { id: 2, text: 'der Polizist' },
  ],
  [
    { id: 1, text: 'der Bereich' },
    { id: 2, text: 'der Teppich' },
  ],
  [
    { id: 1, text: 'der Laborant ' },
    { id: 2, text: 'der Diamant' },
  ],
])

const Headers = ref([
  { title: 'Nominativ' },
  { title: 'Dativ' },
  { title: 'Akkusativ' },
  { title: 'Genitiv' },
])
const Bestimmte = ref([
  [
    { id: 1, marker: 'M', text: 'der' },
    { id: 2, marker: 'F', text: 'die' },
    { id: 3, marker: 'N', text: 'das' },
    { id: 4, marker: 'P', text: 'die' },
  ],
  [
    { id: 1, marker: 'M', text: 'dem' },
    { id: 2, marker: 'F', text: 'der' },
    { id: 3, marker: 'N', text: 'dem' },
    { id: 4, marker: 'P', text: 'den + n' },
  ],
  [
    { id: 1, marker: 'M', text: 'den' },
    { id: 2, marker: 'F', text: 'die' },
    { id: 3, marker: 'N', text: 'das' },
    { id: 4, marker: 'P', text: 'die' },
  ],
  [
    { id: 1, marker: 'M', text: 'des + s/es' },
    { id: 2, marker: 'F', text: 'der' },
    { id: 3, marker: 'N', text: 'des + s/es' },
    { id: 4, marker: 'P', text: 'der' },
  ],
]
)
const Unbestimmte = ref([
  [
    { id: 1, marker: 'M', text: 'ein' },
    { id: 2, marker: 'F', text: 'eine' },
    { id: 3, marker: 'N', text: 'ein' },
  ],
  [
    { id: 1, marker: 'M', text: 'einem' },
    { id: 2, marker: 'F', text: 'einer' },
    { id: 3, marker: 'N', text: 'einem' },
  ],
  [
    { id: 1, marker: 'M', text: 'einen' },
    { id: 2, marker: 'F', text: 'eine' },
    { id: 3, marker: 'N', text: 'ein' },
  ],
  [
    { id: 1, marker: 'M', text: 'eines + s/es' },
    { id: 2, marker: 'F', text: 'einer' },
    { id: 3, marker: 'N', text: 'eines + s/es' },
  ]
]
)
const UnbestimmteNegativ = ref([
  [
    { id: 1, marker: 'M', text: 'kein' },
    { id: 2, marker: 'F', text: 'keine' },
    { id: 3, marker: 'N', text: 'kein' },
    { id: 4, marker: 'P', text: 'keine' },
  ],
  [
    { id: 1, marker: 'M', text: 'keinem' },
    { id: 2, marker: 'F', text: 'keiner' },
    { id: 3, marker: 'N', text: 'keinem' },
    { id: 4, marker: 'P', text: 'keinen + n' },
  ],
  [
    { id: 1, marker: 'M', text: 'keinen' },
    { id: 2, marker: 'F', text: 'keine' },
    { id: 3, marker: 'N', text: 'kein' },
    { id: 4, marker: 'P', text: 'keine' },
  ],
  [
    { id: 1, marker: 'M', text: 'keines + s / es' },
    { id: 2, marker: 'F', text: 'keiner' },
    { id: 3, marker: 'N', text: 'keines + s / es' },
    { id: 4, marker: 'P', text: 'keiner' },
  ],
]
)
</script>

<style lang="scss" ></style>