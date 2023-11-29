<template lang="pug">
.container
  .page-title 
    h2 der Artikel


  Tabs(:items= 'Bestimmte' title='Bestimmte Artikel' icons='icons')
  Tabs(:items= 'Unbestimmte' title='Unbestimmte Artikel' icons='icons')
  Tabs(:items= 'UnbestimmteNegativ' title='Unbestimmte negativ Artikel' icons='icons')

  Tabs(:items= 'der' title='Beispiele für den männlichen Artikel „der“')
  Tabs(:items= 'die' title='Beispiele für den feminine Article “die”')
  Tabs(:items= 'das' title='Beispiele für den neuter Article “das”')

  .page-title--small
    h2 Training
  TabsTraining( title='Bestimmte Artikel' :SlotData='SlotDataBestimmte' )
  TabsTraining( title='Unbestimmte Artikel' :SlotData='SlotDataUnbestimmte' )
  TabsTraining( title='Unbestimmte Negativ Artikel ' :SlotData='SlotDataNegativ' )


</template>



<script setup>
// import Content from '@/components/Content.vue';
import Tabs from '@/components/Tabs.vue';
import TabsTraining from '@/components/TabsTraining.vue';
import Plaza from '@/components/Plaza.vue';
import Slot from '@/components/Slot.vue'




// onMounted(() => {
//   // if (focusActiv) {
//   //   myInputs[0].value.focus();
//   // }

// });

// const handlerInput = () => {
//   if (inputValue.value == 'wir') {
//     for (let i = 0; i < myInputs.length; ++i) {
//       myInputs[i + 1].value.focus()
//     }
//   }
// }

const der = [

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

]
const die = [
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

]
const das = [
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

]
const Bestimmte = [

  {
    title: 'Nominativ',
    text1: 'der',
    text2: 'die',
    text3: 'das',
    text4: 'die',
    svg1: 'man',
    svg2: 'frau',
    svg3: 'das',
    svg4: 'group',
  },
  {
    title: 'Dativ',
    text1: 'dem',
    text2: 'der',
    text3: 'dem',
    text4: 'den + n', svg1: 'man',
    svg2: 'frau',
    svg3: 'das',
    svg4: 'group',
  },
  {
    title: 'Akkusativ',
    text1: 'den',
    text2: 'die',
    text3: 'das',
    text4: 'die', svg1: 'man',
    svg2: 'frau',
    svg3: 'das',
    svg4: 'group',
  },
  {
    title: 'Genitiv',
    text1: 'des + s/es',
    text2: 'der',
    text3: 'des + s/es',
    text4: 'der', svg1: 'man',
    svg2: 'frau',
    svg3: 'das',
    svg4: 'group',
  },
]
const Unbestimmte = [
  {
    title: 'Nominativ',
    text1: 'ein',
    text2: 'eine',
    text3: 'ein', svg1: 'man',
    svg2: 'frau',
    svg3: 'das',
    svg4: 'group',
  },
  {
    title: 'Dativ',
    text1: 'einem',
    text2: 'einer',
    text3: 'einem', svg1: 'man',
    svg2: 'frau',
    svg3: 'das',
    svg4: 'group',
  },
  {
    title: 'Akkusativ',
    text1: 'einen',
    text2: 'eine',
    text3: 'ein', svg1: 'man',
    svg2: 'frau',
    svg3: 'das',
    svg4: 'group',
  },
  {
    title: 'Genitiv',
    text1: 'eines + s/es',
    text2: 'einer',
    text3: 'eines + s/es', svg1: 'man',
    svg2: 'frau',
    svg3: 'das',
    svg4: 'group',
  },
]
const UnbestimmteNegativ = [

  {
    title: 'Nominativ',
    text1: 'kein',
    text2: 'keine',
    text3: 'kein',
    text4: 'keine', svg1: 'man',
    svg2: 'frau',
    svg3: 'das',
    svg4: 'group',
  },
  {
    title: 'Dativ',
    text1: 'keinem',
    text2: 'keiner',
    text3: 'keinem',
    text4: 'keinen + n', svg1: 'man',
    svg2: 'frau',
    svg3: 'das',
    svg4: 'group',
  },
  {
    title: 'Akkusativ',
    text1: 'keinen',
    text2: 'keine',
    text3: 'kein',
    text4: 'keine', svg1: 'man',
    svg2: 'frau',
    svg3: 'das',
    svg4: 'group',
  },
  {
    title: 'Genitiv',
    text1: 'keines + s / es',
    text2: 'keiner',
    text3: 'keines + s / es',
    text4: 'keiner', svg1: 'man',
    svg2: 'frau',
    svg3: 'das',
    svg4: 'group',
  },
]
const SlotDataBestimmte = [
  {
    t0: 'Балкон у гостинной большой. (Balkon Wohnzimmer groß)',
    t1: 'Der',
    t2: 'Balkon',
    t3: 'des',
    t4: 'Wohnzimmers',
    t5: 'ist',
    t6: 'groß',
    t7: '.',
  },

  {
    t0: 'Мы расказываем детям историю. (erzählen Kinder Geschichte)',
    t1: 'Wir',
    t2: 'erzählen',
    t3: 'den',
    t4: 'Kindern',
    t5: 'die',
    t6: 'Geschichte',
    t7: '.',
  },
  {
    t0: 'Но весна лучше всего. (Frühling allerbesten)',
    t1: 'Aber',
    t2: 'der',
    t3: 'Frühling',
    t4: 'ist',
    t5: 'am',
    t6: 'allerbesten',
    t7: '.',
  },

  {
    t0: 'Туризм приносит в город деньги. (Tourismus Geld Stadt)',
    t1: 'Der',
    t2: 'Tourismus',
    t3: 'bringt',
    t4: 'Geld',
    t5: 'in',
    t6: 'die',
    t7: 'Stadt',
    t8: '.',
  },
  {
    t0: 'У водителя возникли проблемы с въездом в парковочную зону. (Fahrer Probleme Parkplatz betreten)',
    t1: 'Der',
    t2: 'Fahrer',
    t3: 'hatte',
    t4: 'Probleme',
    t5: ',',
    t6: 'den',
    t7: 'Parkplatz',
    t8: 'zu',
    t9: 'betreten',
    t10: '.',
  },

  {
    t0: 'Бен был лучшим журналистом из всех. (Journalist allen)',
    t1: 'Ben',
    t2: 'war',
    t3: 'der',
    t4: 'beste',
    t5: 'Journalist',
    t6: 'von',
    t7: 'allen',
    t8: '.',

  },



  {
    t0: 'Это полицейский, которого мы ищем. (Polizist suchen)',
    t1: 'Das',
    t2: 'ist',
    t3: 'der',
    t4: 'Polizist',
    t5: ',',
    t6: 'nach',
    t7: 'dem',
    t8: 'wir',
    t9: 'suchen',
    t10: '.',
  },



  {
    t0: 'Техник, проводивший анализ, был найден мертвым.(Techniker Analyse tot aufgefunden)',
    t1: 'Der',
    t2: 'Techniker',
    t3: ',',
    t4: 'der',
    t5: 'die',
    t6: 'Analyse',
    t7: 'machte',
    t8: ',',
    t9: 'wurde',
    t10: 'tot',
    t11: 'aufgefunden',
    t12: '.',

  },


  {
    t0: 'Какой была бы жизнь без возможности принимать глупые решения?(wäre Leben Möglichkeit dumme Entscheidung treffen)',
    t1: 'Was',
    t2: 'wäre',
    t3: 'das',
    t4: 'Leben',
    t5: 'ohne',
    t6: 'die',
    t7: 'Möglichkeit',
    t8: 'dumme',
    t9: 'Entscheidungen',
    t10: 'zu',
    t11: 'treffen',
    t12: '?',
  },


  {
    t0: 'О качестве мы подумаем позже.(Über Qualität später nachdenken)',
    t1: 'Über',
    t2: 'die',
    t3: 'Qualität',
    t4: 'werden',
    t5: 'wir',
    t6: 'später',
    t7: 'nachdenken',
    t8: '.',

  },

  {
    t0: 'Я не играю в команде вашего сына.(spiele Mannschaft ihres Sohnes)',
    t1: 'Ich',
    t2: 'spiele',
    t3: 'nicht',
    t4: 'in',
    t5: 'der',
    t6: 'Mannschaft',
    t7: 'ihres',
    t8: 'Sohnes',
    t9: '.',
  },
  {
    t0: 'Есть ли на курице лимон?(Zitrone Hähnchen)',
    t1: 'Ist',
    t2: 'da',
    t3: 'Zitrone',
    t4: 'auf',
    t5: 'dem',
    t6: 'Hähnchen',
    t7: '?',
  },
  {
    t0: 'Мне нужно попасть в квартиру(Apartment)',
    t1: 'Ich',
    t2: 'muss',
    t3: 'in',
    t4: 'das',
    t5: 'Apartment',
    t6: '.',

  },


  {
    t0: 'Каков был результат?(Ergebnis)',
    t1: 'Wie',
    t2: 'war',
    t3: 'das',
    t4: 'Ergebnis',
    t5: '?',

  },

  {
    t0: 'лежа на спине(Rücken)',
    t1: 'auf',
    t2: 'dem',
    t3: 'Rücken',
    t4: 'liegen',

  },

  {
    t0: 'выходить из дома(Haus)',
    t1: 'aus',
    t2: 'dem',
    t3: 'Haus',
    t4: 'gehen',

  },

  {
    t0: 'спрятать голову в песок(Kopf Sand stecken)',
    t1: 'den',
    t2: 'Kopf',
    t3: 'in',
    t4: 'den',
    t5: 'Sand',
    t6: 'stecken',

  },

  {
    t0: 'топать ногами по земле(Füßen Boden stampfen)',
    t1: 'mit',
    t2: 'den',
    t3: 'Füßen',
    t4: 'auf',
    t5: 'den',
    t6: 'Boden',
    t7: 'stampfen',

  },

  {
    t0: 'хозяин дома(Herr Hauses)',
    t1: 'der',
    t2: 'Herr',
    t3: 'des',
    t4: 'Hauses',

  },


  {
    t0: 'из-за плохой погоды(schlechten Wetters)',
    t1: 'wegen',
    t2: 'des',
    t3: 'schlechten',
    t4: 'Wetters',

  },


  {
    t0: 'перенасыщение рынка(Übersättigung Marktes)',
    t1: 'die',
    t2: 'Übersättigung',
    t3: 'des',
    t4: 'Marktes',

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

const SlotDataUnbestimmte = [
  {
    t0: 'найти отличный ответ(Echo finden)',
    t1: 'ein',
    t2: 'großes',
    t3: 'Echo',
    t4: 'finden',

  },


  {
    t0: 'Я живу в маленькой квартире.( Wohnung)',
    t1: 'Ich',
    t2: 'wohne',
    t3: 'in',
    t4: 'einer',
    t5: 'kleinen',
    t6: 'Wohnung',
    t7: '.',

  },

  {
    t0: 'Внести деньги на счет (Geld Konto einzahlen)',
    t1: 'Geld',
    t2: 'auf',
    t3: 'ein',
    t4: 'Konto',
    t5: 'einzahlen',

  },

  {
    t0: 'У тебя есть брат? (Bruder)',
    t1: 'Hast',
    t2: 'du',
    t3: 'einen',
    t4: 'Bruder',
    t5: '?',

  },

  {
    t0: 'Не хочешь пойти со мной в кафе? (Lust Cafe gehen)',
    t1: 'Hast',
    t2: 'du',
    t3: 'Lust',
    t4: 'mit',
    t5: 'mir',
    t6: 'in',
    t7: 'ein',
    t8: 'Cafe',
    t9: 'zu',
    t10: 'gehen',
    t11: '?',

  },

  {
    t0: 'Я живу в маленькой деревне. (lebe kleinen Dorf)',
    t1: 'Ich',
    t2: 'lebe',
    t3: 'in',
    t4: 'einem',
    t5: 'kleinen',
    t6: 'Dorf',
    t7: '.',

  },

  {
    t0: 'У вас есть еще вопрос? (Frage)',
    t1: 'Haben',
    t2: 'Sie',
    t3: 'noch',
    t4: 'eine',
    t5: 'Frage',
    t6: '?',

  },

  {
    t0: 'Я ждал час. (Stunde lang gewartet)',
    t1: 'Ich',
    t2: 'habe',
    t3: 'eine',
    t4: 'Stunde',
    t5: 'lang',
    t6: 'gewartet',
    t7: '.',

  },


  {
    t0: 'Я учу немецкий уже год.  (lerne Jahr Deutsch)',
    t1: 'Ich',
    t2: 'lerne',
    t3: 'seit',
    t4: 'einem',
    t5: 'Jahr',
    t6: 'Deutsch',
    t7: '.',

  },

  {
    t0: 'Я остаюсь в Берлине на месяц. (bleibe Monat Berlin)',
    t1: 'Ich',
    t2: 'bleibe',
    t3: 'einen',
    t4: 'Monat',
    t5: 'in',
    t6: 'Berlin',
    t7: '.',

  },

  {
    t0: 'У тебя есть любимая песня? (Lieblingslied)',
    t1: 'Hast',
    t2: 'du',
    t3: 'ein',
    t4: 'Lieblingslied',
    t5: '?',

  },

  {
    t0: 'У меня есть информация от соседа. (Information Nachbarn)',
    t1: 'Ich',
    t2: 'habe',
    t3: 'die',
    t4: 'Information',
    t5: 'von',
    t6: 'einem',
    t7: 'Nachbarn',
    t8: '.',

  },


  {
    t0: 'полезность продукта (Nutzen Produkts)',
    t1: 'der',
    t2: 'Nutzen',
    t3: 'eines',
    t4: 'Produkts',

  },


  {
    t0: 'Я написал текст на немецком языке. (Text Deutsch geschrieben)',
    t1: 'Ich',
    t2: 'habe',
    t3: 'einen',
    t4: 'Text',
    t5: 'auf',
    t6: 'Deutsch',
    t7: 'geschrieben',
    t8: '.',

  },


  {
    t0: 'уйти из бизнеса  (Geschäft aussteigen)',
    t1: 'aus',
    t2: 'einem',
    t3: 'Geschäft',
    t4: 'aussteigen',

  },

  {
    t0: 'заплатить чеком  (Scheck bezahlen)',
    t1: 'mit',
    t2: 'einem',
    t3: 'Scheck',
    t4: 'bezahlen',

  },

]
const SlotDataNegativ = [
  {
    t0: 'Я не думаю, что это хорошая книга. (gutes Buch)',
    t1: 'Ich',
    t2: 'finde',
    t3: ',',
    t4: 'das',
    t5: 'ist',
    t6: 'kein',
    t7: 'gutes',
    t8: 'Buch',
    t9: '.',

  },

  {
    t0: 'Я ни за что не собираюсь этого делать. (werde Fall machen)',
    t1: 'Ich',
    t2: 'werde',
    t3: 'das',
    t4: 'auf',
    t5: 'keinen',
    t6: 'Fall',
    t7: 'machen',
    t8: '.',

  },

  {

    t0: 'К сожалению, здесь, в моей деревне, нет супермаркета. (Hier Dorf leider Supermarkt)',
    t1: 'Hier',
    t2: 'in',
    t3: 'meinem',
    t4: 'Dorf',
    t5: 'gibt',
    t6: 'es',
    t7: 'leider',
    t8: 'keinen',
    t9: 'Supermarkt',
    t10: '.',

  },

  {
    t0: 'Он не встретился ни с одним другом. (sich Freund getroffen)',
    t1: 'Er',
    t2: 'hat',
    t3: 'sich',
    t4: 'mit',
    t5: 'keinem',
    t6: 'Freund',
    t7: 'getroffen',
    t8: '.',

  },


  {
    t0: 'К счастью, грозы не было. (Glück Gewitter gegeben)',
    t1: 'Zum',
    t2: 'Glück',
    t3: 'hat',
    t4: 'es',
    t5: 'kein',
    t6: 'Gewitter',
    t7: 'gegeben',
    t8: '.',

  },

  {
    t0: 'Он не хочет фотографировать. (will Fotos machen)',
    t1: 'Er',
    t2: 'will',
    t3: 'keine',
    t4: 'Fotos',
    t5: 'machen',
    t6: '.',

  },

  {
    t0: 'Она не ест мяса. Она вегетарианка. (isst Fleisch Vegetarierin)',
    t1: 'Sie',
    t2: 'isst',
    t3: 'kein',
    t4: 'Fleisch',
    t5: '.',
    t6: 'Sie',
    t7: 'ist',
    t8: 'Vegetarierin',
    t9: '.',

  },

  {
    t0: 'Спасибо, но мне не нужна помощь. (brauche Hilfe)',
    t1: 'Danke',
    t2: ',',
    t3: 'aber',
    t4: 'ich',
    t5: 'brauche',
    t6: 'keine',
    t7: 'Hilfe',
    t8: '.',

  },

  {
    t0: 'Я не играю ни на одном инструменте. (spiele Instrument)',
    t1: 'Ich',
    t2: 'spiele',
    t3: 'kein',
    t4: 'Instrument',
    t5: '.',

  },

  {
    t0: 'Я хотел бы выучить больше немецкого, но у меня нет времени. (Deutsch lernen Zeit)',
    t1: 'Ich',
    t2: 'möchte',
    t3: 'mehr',
    t4: 'Deutsch',
    t5: 'lernen',
    t6: ',',
    t7: 'aber',
    t8: 'ich',
    t9: 'habe',
    t10: 'keine',
    t11: 'Zeit',
    t12: '.',

  },

  {
    t0: 'Я не люблю рисовый пудинг. (Milchreis)',
    t1: 'Ich',
    t2: 'mag',
    t3: 'keinen',
    t4: 'Milchreis',
    t5: '.',
  },

  {
    t0: 'Сегодня у меня нет желания заниматься спортом. (Heute Lust Sport)',
    t1: 'Heute',
    t2: 'habe',
    t3: 'ich',
    t4: 'keine',
    t5: 'Lust',
    t6: 'auf',
    t7: 'Sport',
    t8: '.',
  },

  {
    t0: 'понятия не имею! (Ahnung)',
    t1: 'keine',
    t2: 'Ahnung',
    t3: '!',

  },


  {
    t0: 'Ни при каких условиях я этого не сделаю. (Unter Bedingung werde tun)',
    t1: 'Unter',
    t2: 'keiner',
    t3: 'Bedingung',
    t4: 'werde',
    t5: 'ich',
    t6: 'das',
    t7: 'tun',
    t8: '.',
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





</script>

<style lang="scss" ></style>