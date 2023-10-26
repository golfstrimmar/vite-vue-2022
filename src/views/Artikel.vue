<template lang="pug">
.container
  .page-title 
    h2 der Artikel

  Tabs(:items= 'der' title='Masculine article “der”')
  Tabs(:items= 'die' title='Feminine Article “die”')
  Tabs(:items= 'das' title='Neuter Article “das”')
  Tabs(:items= 'Bestimmte' title='Bestimmte Artikel' icons='icons')
  Tabs(:items= 'Unbestimmte' title='Unbestimmte Artikel' icons='icons')
  Tabs(:items= 'UnbestimmteNegativ' title='Unbestimmte Negativ Artikel' icons='icons')

  .page-block
    .page-title--small 
      h3 Bestimmte Artikel
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
      h3 Unbestimmte Negativ Artikel
    Content(:items='UnbestimmteNegativ' :headers='Headers')
    Plaza
    Slot(:SlotData='SlotDataNegativ')



</template>


<script setup>
import { ref, computed } from 'vue';
// import Content from '@/components/Content.vue';
import Tabs from '@/components/Tabs.vue';

import Plaza from '@/components/Plaza.vue';
import Slot from '@/components/Slot.vue'
const icons = ref(true)
const der = ref([

  {
    title: '-ling',
    text1: 'der Frühling',
    text2: 'der Neuling'
  },
  {
    title: '-ismus',
    text1: 'der Tourismus',
    text2: 'der Optimismus'
  },
  {
    title: '-er',
    text1: 'der Fahrer',
    text2: 'der Körper'
  },
  {
    title: '-ist',
    text1: 'der Journalist ',
    text2: 'der Polizist'
  },
  {
    title: '-ich',
    text1: 'der Bereich',
    text2: 'der Teppich'
  },
  {
    title: '-ant',
    text1: 'der Laborant',
    text2: 'der Diamant'
  },

])
const die = ref([
  {
    title: '-ung',
    text1: 'die Abdeckung',
    text2: 'die Bildung',
  },
  {
    title: '-keit',
    text1: 'die Möglichkeit',
    text2: 'die Tätigkeit',
  },
  {
    title: '-heit',
    text1: 'die Einheit',
    text2: 'die Gewohnheit',
  },
  {
    title: '-ion',
    text1: 'die Kommission ',
    text2: 'die Position'
  },
  {
    title: '-in',
    text1: 'die Bäckerin',
    text2: 'die Dichterin'
  },

  {
    title: '-tät',
    text1: 'die Identität ',
    text2: 'die Qualität'
  },

  {
    title: '-schaft',
    text1: 'die Mannschaft ',
    text2: 'die Landschaft'
  },

  {
    title: '-enz',
    text1: 'die Effizienz',
    text2: 'die Konferenz'
  },

  {
    title: '-ie',
    text1: 'die Anatomie ',
    text2: 'die Biologie'
  },

])
const das = ref([
  {
    title: '-chen',
    text1: 'das Hähnchen',
    text2: 'das Bäumchen'
  },

  {
    title: '- lein',
    text1: 'das Fräulein',
    text2: 'das Büchlein'
  },

  {
    title: '- ment',
    text1: 'das Apartment',
    text2: 'das Parlament'
  },

  {
    title: '- um',
    text1: 'das Studium ',
    text2: 'das Datum'
  },

  {
    title: '- nis',
    text1: 'das Ergebnis',
    text2: 'das Zeugnis'
  },

])
const Bestimmte = ref([

  {
    title: 'Nominativ',
    text1: 'der',
    text2: 'die',
    text3: 'das',
    text4: 'die'
  },
  {
    title: 'Dativ',
    text1: 'dem',
    text2: 'der',
    text3: 'dem',
    text4: 'den + n'
  },
  {
    title: 'Akkusativ',
    text1: 'den',
    text2: 'die',
    text3: 'das',
    text4: 'die'
  },
  {
    title: 'Genitiv',
    text1: 'des + s/es',
    text2: 'der',
    text3: 'des + s/es',
    text4: 'der'
  },
])
const Unbestimmte = ref([
  {
    title: 'Nominativ',
    text1: 'ein',
    text2: 'eine',
    text3: 'ein',
  },
  {
    title: 'Dativ',
    text1: 'einem',
    text2: 'einer',
    text3: 'einem',
  },
  {
    title: 'Akkusativ',
    text1: 'einen',
    text2: 'eine',
    text3: 'ein',
  },
  {
    title: 'Genitiv',
    text1: 'eines + s/es',
    text2: 'einer',
    text3: 'eines + s/es',
  },
])
const UnbestimmteNegativ = ref([

  {
    title: 'Nominativ',
    text1: 'kein',
    text2: 'keine',
    text3: 'kein',
    text4: 'keine'
  },
  {
    title: 'Dativ',
    text1: 'keinem',
    text2: 'keiner',
    text3: 'keinem',
    text4: 'keinen + n'
  },
  {
    title: 'Akkusativ',
    text1: 'keinen',
    text2: 'keine',
    text3: 'kein',
    text4: 'keine'
  },
  {
    title: 'Genitiv',
    text1: 'keines + s / es',
    text2: 'keiner',
    text3: 'keines + s / es',
    text4: 'keiner'
  },
])
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




</script>

<style lang="scss" ></style>