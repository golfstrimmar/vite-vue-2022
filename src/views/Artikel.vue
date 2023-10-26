<template lang="pug">
.container
  .page-title 
    h2 der Artikel


  Content(:items='der' :headers='Headersder')

  //- .page-block
  //-   .page-title--small 
  //-     h3 Feminine Article “die”
  //-   Content(:items='die' :headers='Headersdie')
  //- .page-block
  //-   .page-title--small 
  //-     h3 Neuter Article “das”
  //-   Content(:items='das' :headers='Headersdas')
  .page-block
    .page-title--small 
      h3 Bestimmte Artikel
    Content(:items='Bestimmte' :headers='Headers')
    Plaza
    Slot(:SlotData='SlotDataBestimmte')

  .page-block
    .page-title--small 
      h3 Unbestimmte Artikel
    Content(:items='Unbestimmte' :headers='Headers')
    Plaza
    Slot(:SlotData='SlotDataUnbestimmte')


  .page-block
    .page-title--small 
      h3 Unbestimmte Negativartikel
    Content(:items='UnbestimmteNegativ' :headers='Headers')
    Plaza
    Slot(:SlotData='SlotDataNegativ')



</template>


<script setup>
import { ref, computed } from 'vue';
import Content from '@/components/Content.vue';

import Plaza from '@/components/Plaza.vue';
import Slot from '@/components/Slot.vue'


// setup(props) {
// const SlotDataMod = computed(
//   () => {
//     var temp = SlotData.value.sort((a, b) => Math.random() - 0.5);
//     return temp;
//   }

// )


// return { symbolId }
// },
const SlotDataBestimmte = ref([
  {
    t0: '',
    t1: 'Der',
    t2: 'Balkon',
    t3: 'des',
    t4: 'Wohnzimmers ist groß. ',
  },
  {
    t0: 'Wir erzählen  ',
    t1: 'den',
    t2: 'Kindern ',
    t3: 'die',
    t4: 'Geschichte.',
  },
  {
    t0: 'Aber ',
    t1: 'der',
    t2: 'Frühling ist am allerbesten. ',
  },
  {
    t0: '',
    t1: 'Der',
    t2: 'Tourismus bringt Geld in',
    t3: 'die',
    t4: 'Stadt.',
  },
  {
    t0: '',
    t1: 'Der',
    t2: 'Fahrer hat Probleme, in ',
    t3: 'den',
    t4: 'Parkbereich zu gelangen. ',
  },
  {
    t0: 'Ben war',
    t1: 'der',
    t2: 'beste investigative Journalist von allen.',

  },
  {
    t0: 'Es ist',
    t1: 'der',
    t2: 'Bereich meines Lebens, wo ich mich als Teil',
    t3: 'der',
    t4: 'Menge fühle. ',
  },
  {
    t0: '',
    t1: 'Der',
    t2: 'Neuling bleibt mit',
    t3: 'dem',
    t4: 'Mädchen draußen.',

  },
  {
    t0: '',
    t1: 'Der',
    t2: 'Körper beginnt zu verwesen und füllt sich mit Gas.',
  },
  {
    t0: 'Das ist',
    t1: 'der',
    t2: 'Polizist, nach',
    t3: 'dem',
    t4: 'wir suchen. ',
  },
  {
    t0: 'Und',
    t1: 'die',
    t2: 'Farbe',
    t3: 'des',
    t4: 'Teppichs passt zu ',
    t5: 'den',
    t6: 'Fasern,',
    t7: 'die',
    t8: 'wir fanden.',
  },
  {
    t0: '',
    t1: 'Der',
    t2: 'Techniker,',
    t3: 'der',
    t4: '',
    t5: 'die',
    t6: 'Analyse machte, wurde tot aufgefunden.',
  },
  {
    t0: 'Ich habe lediglich',
    t1: 'den',
    t2: 'Lichtschalter und',
    t3: 'die',
    t4: 'Abdeckung',
    t5: 'des',
    t6: 'Luftkanals angefasst.',
  },
  {
    t0: 'Was wäre',
    t1: 'das',
    t2: 'Leben ohne',
    t3: 'die',
    t4: 'Möglichkeit dumme Entscheidungen zu treffen?',
  },
  {
    t0: '',
    t1: 'Die',
    t2: 'Einheit wird aktiviert werden. ',
  },
  {
    t0: 'Er hat Briefe an',
    t1: 'die',
    t2: 'Verbeamtungs-Kommission geschrieben. ',
  },
  {
    t0: 'Was meint',
    t1: 'die',
    t2: 'Dichterin mit "wir gewöhnen uns"?',
  },
  {
    t0: 'Um',
    t1: 'die',
    t2: 'Qualität machen wir uns später Gedanken.',
  },
  {
    t0: 'Ich spiele nicht in',
    t1: 'der',
    t2: 'Mannschaft ihres Sohnes. ',
  },
  {
    t0: 'Sie sehen heute noch schlechter aus als bei ',
    t1: 'der',
    t2: 'Konferenz.',
  },
  {
    t0: 'Da Vinci hat Gräber geplündert, um',
    t1: 'die',
    t2: 'Anatomie zu studieren.',
  },
  {
    t0: 'Ist da Zitrone auf ',
    t1: 'dem',
    t2: 'Hähnchen?',
  },
  {
    t0: 'In',
    t1: 'dem',
    t2: 'Büchlein steht ',
    t3: 'der',
    t4: 'Name ',
    t5: 'des',
    t6: 'Kunden,',
    t7: 'den',
    t8: 'er eingestellt hat.',
  },
  {
    t0: 'Ich brauche',
    t1: 'das',
    t2: 'Apartment.',
  },
  {
    t0: 'Es trägt',
    t1: 'das',
    t2: 'Datum',
    t3: 'des',
    t4: '5. November.',
  },
  {
    t0: 'Wie war ',
    t1: 'das',
    t2: 'Ergebnis?',
  },
  {
    t0: 'auf',
    t1: 'dem',
    t2: 'Rücken \ auf',
    t3: 'dem',
    t4: 'Bauch liegen ',
  },
  {
    t0: 'aus',
    t1: 'dem',
    t2: 'Haus gehen',
  },
  {
    t0: '',
    t1: 'den',
    t2: 'Kopf in',
    t3: 'den',
    t4: 'Sand stecken ',
  },
  {
    t0: 'mit',
    t1: 'den',
    t2: 'Füßen auf',
    t3: 'den',
    t4: 'Boden stampfen',
  },
  {
    t0: '',
    t1: 'der',
    t2: 'Herr',
    t3: 'des',
    t4: 'Hauses',
  },
  {
    t0: 'wegen',
    t1: 'des',
    t2: 'schlechten Wetters',
  },
  {
    t0: 'an',
    t1: 'der',
    t2: 'Spitze',
    t3: 'der',
    t4: 'Kolonne',
  },
  {
    t0: '',
    t1: 'die',
    t2: 'Übersättigung',
    t3: 'des',
    t4: 'Marktes',
  }
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
const SlotDataUnbestimmte = ref([
  {
    t0: 'Wir waren gestern auf',
    t1: 'einem',
    t2: 'fantastischen Konzert.',
  },
  {
    t0: '',
    t1: 'ein',
    t2: 'großes/nur',
    t3: 'ein',
    t4: 'geringes Echo finden',
  },
  {
    t0: '',
    t1: 'ein',
    t2: 'Elternteil',

  },
  {
    t0: 'jdm unterläuft ',
    t1: 'ein',
    t2: 'Fehler/',
    t3: 'ein',
    t4: 'Irrtum',

  },
  {
    t0: 'Ich wohne in',
    t1: 'einer',
    t2: 'kleinen Wohnung.',
  },
  {
    t0: 'Geld auf',
    t1: 'ein',
    t2: 'Konto einzahlen',

  },

  {
    t0: 'Hast du ',
    t1: 'einen',
    t2: 'Bruder ?',

  },
  {
    t0: 'Hast du Lust, mit mir in',
    t1: 'ein',
    t2: 'Café zu gehen?',

  },
  {
    t0: 'Ich lebe in',
    t1: 'einem',
    t2: 'kleinen Dorf auf dem Land.',

  },
  {
    t0: 'Haben Sie noch ',
    t1: 'eine',
    t2: 'Frage ? ',

  },
  {
    t0: 'Ich habe ',
    t1: 'eine',
    t2: 'Stunde lang gewartet.',

  },
  {
    t0: 'Nächstes Wochenende bin ich zu',
    t1: 'einer',
    t2: 'Hochzeitsfeier eingeladen.',

  },
  {
    t0: 'Ich lerne seit ',
    t1: 'einem',
    t2: 'Jahr Deutsch.',

  },
  {
    t0: 'Ich bleibe',
    t1: 'einen',
    t2: 'Monat in Berlin.',

  },
  {
    t0: 'Hast du',
    t1: 'ein',
    t2: 'Lieblingslied ?',

  },
  {
    t0: 'Ich habe die Information von ',
    t1: 'einem',
    t2: 'Nachbarn.',

  },
  {
    t0: 'die Übernahme  ',
    t1: 'eines',
    t2: 'Auftrages',

  },
  {
    t0: 'der Nutzen  ',
    t1: 'eines',
    t2: 'Produkts',

  },
  {
    t0: 'Einstellung  ',
    t1: 'eines',
    t2: 'neuen Mitarbeiters',

  },
  {
    t0: 'mit  ',
    t1: 'einer',
    t2: 'Geschwindigkeit von ...',

  },
  {
    t0: 'Ich habe',
    t1: 'einen',
    t2: 'Text auf Deutsch geschrieben.',

  },
  {
    t0: 'zu  ',
    t1: 'einer',
    t2: 'Einigung kommen',

  },
  {
    t0: 'in  ',
    t1: 'einer',
    t2: 'Wohngemeinschaft leben',

  },
  {
    t0: 'wie aus  ',
    t1: 'einem',
    t2: 'Munde',

  },
  {
    t0: 'aus  ',
    t1: 'einem',
    t2: 'Geschäft aussteigen',

  },
  {
    t0: 'mit  ',
    t1: 'einem',
    t2: 'Scheck bezahlen',

  },
]
)

const SlotDataNegativ = ref([
  {
    t0: 'Ich finde, das ist ',
    t1: 'kein',
    t2: 'gutes Buch.',
  },
  {
    t0: 'Ich werde das auf ',
    t1: 'keinen',
    t2: 'Fall machen.',
  },
  {
    t0: 'Hier in meinem Dorf gibt es leider ',
    t1: 'keinen',
    t2: 'Supermarkt.',
  },
  {
    t0: 'Er hat sich mit ',
    t1: 'keinem',
    t2: 'Freund getroffen.',
  },
  {
    t0: 'Zum Glück hat es ',
    t1: 'kein',
    t2: 'Gewitter gegeben.',
  },
  {
    t0: 'Er will',
    t1: 'keine',
    t2: 'Fotos machen.',

  },
  {
    t0: 'Sie isst ',
    t1: 'kein',
    t2: 'Fleisch.Sie ist Vegetarierin.',
  },
  {
    t0: 'Danke, aber ich brauche',
    t1: 'keine',
    t2: 'Hilfe.',

  },
  {
    t0: 'Ich spiele ',
    t1: 'kein',
    t2: 'Instrument. ',
  },
  {
    t0: 'Ich möchte mehr Deutsch lernen, aber ich habe',
    t1: 'keine',
    t2: 'Zeit.',
  },
  {
    t0: 'Ich mag ',
    t1: 'keinen',
    t2: 'Milchreis.',

  },
  {
    t0: 'Heute habe ich',
    t1: 'keine',
    t2: 'Lust auf Sport.',
  },
  {
    t0: '',
    t1: 'keine',
    t2: 'Ahnung!',
  },
  {
    t0: 'Er verträgt',
    t1: 'keine',
    t2: 'Kritik.',
  },
  {
    t0: 'Sie hat mich  ',
    t1: 'keines',
    t2: 'Blickes gewürdigt.',
  },
  {
    t0: 'Er tut  ',
    t1: 'keiner',
    t2: 'Fliege was zuleide.',
  },
  {
    t0: 'Ich bin mir  ',
    t1: 'keiner',
    t2: 'Schuld bewusst.',
  },
  {
    t0: 'Unter  ',
    t1: 'keiner',
    t2: 'Bedingung werde ich das tun.',
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