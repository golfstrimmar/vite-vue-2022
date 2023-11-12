<template lang="pug">
.container
  .page-title 
    h2 Konjunktiv II
  .page-block
    .page-title--small
      h3 Bildung des Konjunktivs II.
    Tabs(:items= 'Gegenwart' title='Konjunktivs II der Gegenwart ' )
    Tabs(:items= 'Vergangenheit' title='Konjunktiv II der Vergangenheit.' )
    Tabs(:items= 'GegenwartPassiv' title='Konjunktiv II der Gegenwart plus Passiv. ' )
    Tabs(:items= 'VergangenheitPassiv' title='Konjunktiv II der Vergangenheit plus Passiv' )
  .page-block
    .page-title--small
      h3 Bildung des Konjunktivs II mit den Verbformen. 
    p Zu den wenigen Verben, die <span>IMMER</span> den Konjunktiv II in der Originalform verwenden, gehören:
    Tabs(:items= 'Verbformen' title='Konjunktivs II mit den Verbformen' )
  .page-block
    .page-title--small 
      h3 Bildung des Konjunktivs II mit Modalverben. 
    Tabs(:items= 'Modalverben' title='Konjunktivs II mit Modalverben' )
    Tabs(:items= 'VergangenheitModalverben' title='Konjunktiv II der Vergangenheit mit Modalverben.' )


  TabsTraining( title='müssen Training' :SlotData='SlotDatamüssen' )
  TabsTraining( title='können Training' :SlotData='SlotDatakönnen' )
  TabsTraining( title='dürfen Training' :SlotData='SlotDatadürfen' )
  TabsTraining( title='sollen Training' :SlotData='SlotDatasollen' )
  TabsTraining( title='wollen Training' :SlotData='SlotDatawollen' )
  TabsTraining( title='mögen Training' :SlotData='SlotDatamögen' )
  TabsTraining( title='möchten Training' :SlotData='SlotDatamöchten' )
</template>
<script setup>
import Tabs from '@/components/Tabs.vue';
import TabsTraining from '@/components/TabsTraining.vue';
import Plaza from '@/components/Plaza.vue';
import Slot from '@/components/Slot.vue'

const Gegenwart = [
  {
    title: 'würden + Infinitiv',
    text1: 'ich,er,sie,es würde + Infinitiv',
    text2: 'du würdest + Infinitiv',
    text3: 'ihr würdet + Infinitiv',
    text4: 'wir,sie,Sie würden + Infinitiv',

  },
]
const Vergangenheit = [
  {
    title: 'wären / hätten  + Partizip II',
    text1: 'ich,er,sie,es wäre/hätte + Partizip II ',
    text2: 'du wärest/hättest + Partizip II',
    text3: 'ihr wäret/hättet + Partizip II',
    text4: 'wir,sie,Sie wären/hätten + Partizip II',
  },
]
const GegenwartPassiv = [
  {
    title: 'würden + Partizip II+ werden',
    text1: 'ich,er,sie,es würde + Partizip II + werden',
    text2: 'du würdest + Partizip II + werden',
    text3: 'ihr würdet + Partizip II + werden',
    text4: 'wir,sie,Sie würden + Partizip II + werden',
  },
]

const VergangenheitPassiv = [
  {
    title: 'wären + Partizip II + worden',
    text1: 'ich,er,sie,es wäre + Partizip II + worden ',
    text2: 'du wärest + Partizip II + worden',
    text3: 'ihr wäret + Partizip II + worden',
    text4: 'wir,sie,Sie wären + Partizip II + worden',
  },
]


const Verbformen = [
  {
    title: 'sein',
    text1: 'ich,er,sie,es wäre ',
    text2: 'du wärest',
    text3: 'ihr wäret',
    text4: 'wir,sie,Sie wären ',
  },
  {
    title: 'haben',
    text1: 'ich,er,sie,es hätte',
    text2: 'du hättest',
    text3: 'ihr hättet',
    text4: 'wir,sie,Sie hätten',
  },
  {
    title: 'werden',
    text1: 'ich,er,sie,es würde',
    text2: 'du würdest',
    text3: 'ihr würdet',
    text4: 'wir,sie,Sie würden',
  },
  {
    title: 'finden',
    text1: 'ich,er,sie,es fände',
    text2: 'du fändest',
    text3: 'ihr fändet',
    text4: 'wir,sie,Sie fänden',
  },
  {
    title: 'gehen',
    text1: 'ich,er,sie,es ginge',
    text2: 'du gingest',
    text3: 'ihr ginget',
    text4: 'wir,sie,Sie gingen',
  },
  {
    title: 'kommen',
    text1: 'ich,er,sie,es käme',
    text2: 'du kämest',
    text3: 'ihr kämet',
    text4: 'wir,sie,Sie kämen',
  },
  {
    title: 'lassen',
    text1: 'ich,er,sie,es ließe',
    text2: 'du ließest',
    text3: 'ihr ließet',
    text4: 'wir,sie,Sie ließen',
  },
  {
    title: 'schlafen',
    text1: 'ich,er,sie,es schliefe',
    text2: 'du schliefest',
    text3: 'ihr schliefet',
    text4: 'wir,sie,Sie schliefen',
  },
  {
    title: 'wissen',
    text1: 'ich,er,sie,es wüsste',
    text2: 'du wüsstest',
    text3: 'ihr wüsstet',
    text4: 'wir,sie,Sie wüssten',
  },
]

const Modalverben = [
  {
    title: 'dürfen',
    text1: 'ich,er,sie,es dürfte + Infinitiv  ',
    text2: 'du dürftest + Infinitiv',
    text3: 'ihr dürftet + Infinitiv',
    text4: 'wir,sie,Sie dürften  + Infinitiv',
  },
  {
    title: 'können',
    text1: 'ich,er,sie,es könnte + Infinitiv  ',
    text2: 'du könntest + Infinitiv',
    text3: 'ihr könntet + Infinitiv',
    text4: 'wir,sie,Sie könnten  + Infinitiv',
  },
  {
    title: 'mögen',
    text1: 'ich,er,sie,es möchte + Infinitiv  ',
    text2: 'du möchtest + Infinitiv',
    text3: 'ihr möchtet + Infinitivn',
    text4: 'wir,sie,Sie möchten  + Infinitiv',
  },
  {
    title: 'müssen',
    text1: 'ich,er,sie,es müsste + Infinitiv  ',
    text2: 'du müsstest + Infinitiv',
    text3: 'ihr müsstet + Infinitiv',
    text4: 'wir,sie,Sie müssten  + Infinitiv',
  },
  {
    title: 'sollen',
    text1: 'ich,er,sie,es sollte + Infinitiv  ',
    text2: 'du solltest + Infinitiv',
    text3: 'ihr solltet + Infinitiv',
    text4: 'wir,sie,Sie sollten  + Infinitiv',
  },
  {
    title: 'wollen',
    text1: 'ich,er,sie,es wollte + Infinitiv  ',
    text2: 'du wolltest + Infinitiv',
    text3: 'ihr wolltet + Infinitiv',
    text4: 'wir,sie,Sie wollten  + Infinitiv',
  },
]
const VergangenheitModalverben = [
  {
    title: 'dürfen',
    text1: 'ich,er,sie,es hätte + Infinitiv + dürfen',
    text2: 'du hättest + Infinitiv + dürfen',
    text3: 'ihr ihr hättet + Infinitiv + dürfen',
    text4: 'wir,sie,Sie hätten + Infinitiv + dürfen',
  },
  {
    title: 'können',
    text1: 'ich,er,sie,es hätte + Infinitiv + können',
    text2: 'du hättest + Infinitiv + können',
    text3: 'ihr ihr hättet + Infinitiv + können',
    text4: 'wir,sie,Sie hätten + Infinitiv + können',
  },

  {
    title: 'mögen',
    text1: 'ich,er,sie,es hätte + Infinitiv + mögen',
    text2: 'du hättest + Infinitiv + mögen',
    text3: 'ihr ihr hättet + Infinitiv + mögen',
    text4: 'wir,sie,Sie hätten + Infinitiv + mögen',
  },
  {
    title: 'müssen',
    text1: 'ich,er,sie,es hätte + Infinitiv + müssen',
    text2: 'du hättest + Infinitiv + müssen',
    text3: 'ihr ihr hättet + Infinitiv + müssen',
    text4: 'wir,sie,Sie hätten + Infinitiv + müssen',
  },

  {
    title: 'sollen',
    text1: 'ich,er,sie,es hätte + Infinitiv + sollen',
    text2: 'du hättest + Infinitiv + sollen',
    text3: 'ihr ihr hättet + Infinitiv + sollen',
    text4: 'wir,sie,Sie hätten + Infinitiv + sollen',
  },
  {
    title: 'wollen',
    text1: 'ich,er,sie,es hätte + Infinitiv + wollen',
    text2: 'du hättest + Infinitiv + wollen',
    text3: 'ihr ihr hättet + Infinitiv + wollen',
    text4: 'wir,sie,Sie hätten + Infinitiv + wollen',
  },

]






const SlotDatamüssen = [
  {
    t0: 'Мне нужно вернуться в офис.(zurück Büro)',
    t1: 'Ich',
    t2: 'muss',
    t3: 'zurück',
    t4: 'zum',
    t5: 'Büro',
    t6: '.',

  },
  {
    t0: 'Куда тебе нужно пойти?',
    t1: 'Wohin',
    t2: 'musst',
    t3: 'du',
    t4: '?',

  },
  {
    t0: 'Должен быть порядок.(Ordnung)',
    t1: 'Ordnung',
    t2: 'muss',
    t3: 'sein',
    t4: '.',
  },
  {
    t0: 'Тебе нужно было это говорить?()',
    t1: 'Musstest',
    t2: 'du',
    t3: 'das',
    t4: 'sagen',
    t5: '?',

  },
  {
    t0: ' За это им пришлось сесть в тюрьму.(Dafür Gefängnis)',
    t1: 'Dafür',
    t2: 'mussten',
    t3: 'sie',
    t4: 'ins',
    t5: 'Gefängnis',
    t6: '.',

  },
  {
    t0: 'Вы должны были сделать все сами.(selbst)',
    t1: 'Ihr',
    t2: 'musstet',
    t3: 'alles',
    t4: 'selbst',
    t5: 'machen',

  },
  {
    t0: 'Нам пришлось вернуться к чертежной доске.(zurück Reißbrett)',
    t1: 'Wir',
    t2: 'mussten',
    t3: 'zurück',
    t4: 'ins',
    t5: 'Reißbrett',
    t6: '.',

  },
  {
    t0: 'Сотруднику банка пришлось сесть в тюрьму за мошенничество.(Bankkaufmann Betrugs Gefängnis)',
    t1: 'Der',
    t2: 'Bankkaufmann',
    t3: 'musste',
    t4: 'wegen',
    t5: 'Betrugs',
    t6: 'ins',
    t7: 'Gefängnis',
    t8: '.',

  },
  {
    t0: 'Вам не нужно было все разрушать!(zerstören)',
    t1: 'Ihr',
    t2: 'musstet',
    t3: 'nicht',
    t4: 'alles',
    t5: 'zerstören',
    t6: '!',

  },
  {
    t0: 'Я это понимаю, но вам не нужно было его убивать.(verstehe töten)',
    t1: 'Ich',
    t2: 'verstehe',
    t3: 'das',
    t4: ',',
    t5: 'aber',
    t6: 'ihr',
    t7: 'musstet',
    t8: 'ihn',
    t9: 'nicht',
    t10: 'töten',
    t11: '.',

  },
  {
    t0: 'Вам никогда не приходилось делать этого раньше. (noch nie)',
    t1: 'Das',
    t2: 'hast',
    t3: 'du',
    t4: 'noch',
    t5: 'nie',
    t6: 'gemusst',
    t7: '.',

  },
  {
    t0: 'Вам не обязательно было этого делать.',
    t1: 'Das',
    t2: 'hattet',
    t3: 'ihr',
    t4: 'nicht',
    t5: 'gemusst',
    t6: '.',

  },
  {
    t0: 'Ей бы пришлось это сделать, но... ()',
    t1: 'Sie',
    t2: 'wird',
    t3: 'gemusst',
    t4: 'haben',
    t5: ',',
    t6: 'aber',
    t7: '...',

  },
  {
    t0: 'И вам придется открыть глаза.(Augen öffnen)',
    t1: 'Und',
    t2: 'ihr',
    t3: 'müsst',
    t4: 'Eure',
    t5: 'Augen',
    t6: 'öffnen',
    t7: '.',

  },
  {
    t0: 'Мне не нужно было этого делать, но я все равно это сделал.(tat trotzdem)',
    t1: 'Ich',
    t2: 'musste',
    t3: 'nicht',
    t4: ',',
    t5: 'aber',
    t6: 'tat',
    t7: 'es',
    t8: 'trotzdem',
    t9: '.',

  },

]
const SlotDatakönnen = [
  {
    t0: 'Том знает французский? (Tom französisch)',
    t1: 'Kann',
    t2: 'Tom',
    t3: 'französisch',
    t4: '?',

  },
  {
    t0: 'Я ничего не могу с собой поделать. (anders)',
    t1: 'Ich',
    t2: 'kann',
    t3: 'nicht',
    t4: 'anders',
    t5: '.',

  },
  {
    t0: 'На скольких иностранных языках вы (ihr) говорите? (Fremdsprachen ihr)',
    t1: 'Wie',
    t2: 'viele',
    t3: 'Fremdsprachen',
    t4: 'könnt',
    t5: 'ihr',
    t6: '?',

  },
  {
    t0: 'Каждый делает, что может. (Jeder tut)',
    t1: 'Jeder',
    t2: 'tut',
    t3: ',',
    t4: 'was',
    t5: 'er',
    t6: 'kann',
    t7: '.',

  },
  {
    t0: 'Я хочу, но не могу.(ja nicht)',
    t1: 'Ich',
    t2: 'möchte',
    t3: 'ja',
    t4: ',',
    t5: 'aber',
    t6: 'ich',
    t7: 'kann',
    t8: 'nicht',
    t9: '.',

  },

  {
    t0: 'Том мог делать все, что угодно.(Tom alles)',
    t1: 'Tom',
    t2: 'konnte',
    t3: 'alles',

  },

  {
    t0: 'Она бегло говорила по-французски.(fließend Französisch)',
    t1: 'Sie',
    t2: 'konnte',
    t3: 'fließend',
    t4: 'Französisch',
    t5: '.',

  },

  {
    t0: 'Мы не могли сделать больше. (mehr)',
    t1: 'Wir   ',
    t2: 'konnten',
    t3: 'nicht',
    t4: 'mehr',
    t5: '.',

  },

  {
    t0: 'Ян бежал так быстро, как мог. (Jan rannte schnell)',
    t1: 'Jan',
    t2: 'rannte',
    t3: 'so',
    t4: 'schnell',
    t5: ',',
    t6: 'wie',
    t7: 'er',
    t8: 'konnte',
    t9: '.',

  },

  {
    t0: 'Марафонец больше не мог и сдался на полпути. (Marathonläufer gab halber Strecke auf)',
    t1: 'Der',
    t2: 'Marathonläufer',
    t3: 'konnte',
    t4: 'nicht',
    t5: 'mehr',
    t6: 'und',
    t7: 'gab',
    t8: 'auf',
    t9: 'halber',
    t10: 'Strecke',
    t11: 'auf',
    t12: '.',

  },

  {
    t0: 'В прошлый раз ты не смог. (zuvor)',
    t1: 'Du',
    t2: 'hast',
    t3: 'es',
    t4: 'zuvor',
    t5: 'nicht',
    t6: 'gekonnt',
    t7: '.',

  },

  {
    t0: 'Ты сделал мне величайший подарок, на который никто другой не был способен.(größte Geschenk sonst niemand hätte)',
    t1: 'Du',
    t2: 'hast',
    t3: 'mir',
    t4: 'das',
    t5: 'größte',
    t6: 'Geschenk',
    t7: 'gemacht',
    t8: ',',
    t9: 'was',
    t10: 'sonst',
    t11: 'niemand',
    t12: 'gekonnt',
    t13: 'hätte',
    t14: '.',

  },

  {
    t0: 'Бьюсь об заклад, вы бы тоже не смогли этого сделать.(wette Ihr hättet)',
    t1: 'Ich',
    t2: 'wette',
    t3: 'Ihr',
    t4: 'hättet',
    t5: 'es',
    t6: 'auch',
    t7: 'nicht',
    t8: 'gekonnt',
    t9: '.',

  },

  {
    t0: 'То, что я не мог сделать тогда, я должен сделать сейчас. (damals jetzt)',
    t1: 'Was',
    t2: 'ich',
    t3: 'damals',
    t4: 'nicht',
    t5: 'gekonnt',
    t6: 'habe',
    t7: ',',
    t8: 'muss',
    t9: 'ich',
    t10: 'jetzt',
    t11: 'tun',
    t12: '.',
  },



]
const SlotDatadürfen = [
  {
    t0: 'Поскольку мы не имеем права это хранить.(Da behalten)',
    t1: 'Da',
    t2: 'wir',
    t3: 'es',
    t4: 'nicht',
    t5: 'behalten',
    t6: 'dürfen',
    t7: '.',
  },
  {
    t0: 'Вам не следует оставаться здесь.(bleiben)',
    t1: 'Hier',
    t2: 'dürft',
    t3: 'ihr',
    t4: 'nicht',
    t5: 'bleiben',
    t6: '.',

  },
  {
    t0: 'Ты никогда не должен терять надежду.(Hoffnung aufgeben)',
    t1: 'Du',
    t2: 'darfst',
    t3: 'die',
    t4: 'Hoffnung',
    t5: 'nie',
    t6: 'aufgeben',
    t7: '.',

  },
  {
    t0: 'Может ли у вашего спального мешка появиться новый владелец?(Schlafsack Besitzer)',
    t1: 'Darf',
    t2: 'dein',
    t3: 'Schlafsack',
    t4: 'einen',
    t5: 'neuen',
    t6: 'Besitzer',
    t7: 'haben',
    t8: '?',

  },
  {
    t0: 'Нам обоим нельзя быть друзьями. (beide Freunde)',
    t1: 'Wir',
    t2: 'beide',
    t3: 'dürfen',
    t4: 'keine',
    t5: 'Freunde',
    t6: 'sein',
    t7: '.',

  },
  {
    t0: 'Ваши руки не должны касаться друг друга. (Hände berühren)',
    t1: 'Eure',
    t2: 'Hände',
    t3: 'dürfen',
    t4: 'sich',
    t5: 'nicht',
    t6: 'berühren',
    t7: '.',

  },
  {
    t0: 'Могу я пройти? (vorbei)',
    t1: 'Darf',
    t2: 'ich',
    t3: 'bitte',
    t4: 'vorbei',
    t5: '?',

  },
  {
    t0: 'Им не разрешено этого делать.()',
    t1: 'Das',
    t2: 'durften',
    t3: 'sie',
    t4: 'nicht',
    t5: '.',

  },
  {
    t0: 'Режиссеру не разрешили это сделать. (Regisseur)',
    t1: 'Das',
    t2: 'durfte',
    t3: 'der',
    t4: 'Regisseur',
    t5: 'nicht',
    t6: '.',

  },
  {
    t0: 'Нам вообще нельзя терять времени.(überhaupt verlieren)',
    t1: 'Wir',
    t2: 'dürfen',
    t3: 'überhaupt',
    t4: 'keine',
    t5: 'Zeit',
    t6: 'verlieren',
    t7: '.',

  },
  {
    t0: 'Почему я тоже не могу этого сделать? ()',
    t1: 'Warum',
    t2: 'darf',
    t3: 'ich',
    t4: 'das',
    t5: 'nicht',
    t6: 'auch',
    t7: '?',

  },
  {
    t0: 'В бассейн без купальной шапочки вход запрещен. (Badehaube Schwimmbecken)',
    t1: 'Ohne',
    t2: 'Badehaube',
    t3: 'darfst',
    t4: 'du',
    t5: 'nicht',
    t6: 'ins',
    t7: 'Schwimmbecken',
    t8: '.',

  },
  {
    t0: 'Вам позволено попрощаться. (Ihr Abschied nehmen)',
    t1: 'Ihr',
    t2: 'durftet',
    t3: 'Abschied',
    t4: 'nehmen',
    t5: '.',

  },

]
const SlotDatasollen = [
  {
    t0: 'В чем все это дело?(alles)',
    t1: 'Was',
    t2: 'soll',
    t3: 'das',
    t4: 'alles',
    t5: '?',

  },
  {
    t0: ' Она должна сесть в тюрьму пожизненно.(lebenslang Gefängnis)',
    t1: 'Sie',
    t2: 'soll',
    t3: 'lebenslang',
    t4: 'ins',
    t5: 'Gefängnis',
    t6: '.',

  }, {
    t0: 'Куда поставить пианино? (Klavier hin)',
    t1: 'Wo',
    t2: 'soll',
    t3: 'das',
    t4: 'Klavier',
    t5: 'hin',
    t6: '?',

  }, {
    t0: 'Я же говорил тебе больше этого не делать.(doch gesagt mehr )',
    t1: 'Ich',
    t2: 'habe',
    t3: 'dir',
    t4: 'doch',
    t5: 'gesagt',
    t6: ',',
    t7: 'dass',
    t8: 'du',
    t9: 'das',
    t10: 'nicht',
    t11: 'mehr',
    t12: 'sollst',
    t13: '.',

  },
  {
    t0: 'Том должен проснуться.(wach sein)',
    t1: 'Tom',
    t2: 'sollte',
    t3: 'wach',
    t4: 'sein',
    t5: '.',

  },
  {
    t0: 'Люди должны иметь реалистичные ожидания. (Menschen realistische Erwartungen)',
    t1: 'Die',
    t2: 'Menschen',
    t3: 'sollten',
    t4: 'realistische',
    t5: 'Erwartungen',
    t6: 'haben',
    t7: '.',

  },
  {
    t0: 'Тому уже пора этим заниматься. (Mittlerweile Tom eigentlich fertig)',
    t1: 'Mittlerweile',
    t2: 'sollte',
    t3: 'Tom',
    t4: 'eigentlich',
    t5: 'damit',
    t6: 'fertig',
    t7: 'sein',
    t8: '.',

  },
  {
    t0: 'Тебе следует оставаться здесь до половины третьего. (halb hierbleiben)',
    t1: 'Du',
    t2: 'sollst',
    t3: 'bis',
    t4: 'halb',
    t5: 'drei',
    t6: 'hierbleiben',
    t7: '.',

  },
  {
    t0: 'У каждого должно быть хотя бы одно хобби. (Jeder mindestens Hobby )',
    t1: 'Jeder',
    t2: 'sollte',
    t3: 'mindestens',
    t4: 'ein',
    t5: 'Hobby',
    t6: 'haben',
    t7: '.',

  },
  {
    t0: 'Стоит ли нам для разнообразия пойти на греческий? (Abwechslung mal  Griechen)',
    t1: 'Sollen',
    t2: 'wir',
    t3: 'zur',
    t4: 'Abwechslung',
    t5: 'mal',
    t6: 'zum',
    t7: 'Griechen',
    t8: '?',

  }, {
    t0: 'Нам следует следить за этим.(Auge darauf )',
    t1: 'Wir',
    t2: 'sollten',
    t3: 'ein',
    t4: 'Auge',
    t5: 'darauf',
    t6: 'haben',
    t7: '.',

  }
]
const SlotDatawollen = [
  {
    t0: 'Ты хочешь детей?(Kinder)',
    t1: 'Willst',
    t2: 'du',
    t3: 'Kinder',
    t4: '?',

  },
  {
    t0: 'Я хотел больше.(mehr)',
    t1: 'Ich',
    t2: 'wollte',
    t3: 'mehr',
    t4: '.',

  },
  {
    t0: 'Чего вы хотите?',
    t1: 'Was',
    t2: 'wollt',
    t3: 'ihr',
    t4: '?',

  },
  {
    t0: 'Кому горячего шоколада?(Schokolade)',
    t1: 'Wer',
    t2: 'will',
    t3: 'eine',
    t4: 'warme',
    t5: 'Schokolade',
    t6: '?',

  },
  {
    t0: 'Мои адвокаты не хотели, чтобы я давал показания.(Rechtsanwälte aussage)',
    t1: 'Meine',
    t2: 'Rechtsanwälte',
    t3: 'wollten',
    t4: 'nicht',
    t5: ',',
    t6: 'dass',
    t7: 'ich',
    t8: 'aussage',
    t9: '.',

  },
  {
    t0: 'Хочешь знать, чего люди хотят больше обычного?(Leute sonst)',
    t1: 'Wollen',
    t2: 'Sie',
    t3: 'wissen',
    t4: ',',
    t5: 'was',
    t6: 'Leute',
    t7: 'mehr',
    t8: 'als',
    t9: 'sonst',
    t10: 'wollen',
    t11: '?',

  },
  {
    t0: 'Я просто подумал, что ты захочешь этого.(würdest)',
    t1: 'Ich',
    t2: 'dachte',
    t3: 'nur',
    t4: ',',
    t5: 'du',
    t6: 'würdest',
    t7: 'das',
    t8: 'haben',
    t9: 'wollen',
    t10: '.',

  },
  {
    t0: 'Ты не хотел, чтобы я приходил.(nie herkomme)',
    t1: 'Du',
    t2: 'hast',
    t3: 'nie',
    t4: 'gewollt',
    t5: ',',
    t6: 'dass',
    t7: 'ich',
    t8: 'herkomme',
    t9: '.',

  },
  {
    t0: 'Запомни, ты сам этого хотел.(Vergiss )',
    t1: 'Vergiss',
    t2: 'nicht',
    t3: ',',
    t4: 'du',
    t5: 'hast',
    t6: 'es',
    t7: 'so',
    t8: 'gewollt',
    t9: '.',

  },
  {
    t0: 'Вы оба хотели, чтобы я оставался в стороне - и я остался. (raushalte)',
    t1: 'Ihr ',
    t2: 'beide',
    t3: 'habt',
    t4: 'gewollt',
    t5: ',',
    t6: 'dass',
    t7: 'ich',
    t8: 'mich',
    t9: 'da',
    t10: 'raushalte',
    t11: 'und',
    t12: 'das',
    t13: 'habe',
    t14: 'ich',
    t15: '.',

  },
  {
    t0: 'Почему вы от меня отказались?(Wieso ihr)',
    t1: 'Wieso',
    t2: 'habt',
    t3: 'ihr',
    t4: 'mich',
    t5: 'nicht',
    t6: 'gewollt',
    t7: '?',

  },
  {
    t0: 'Не думаю, что я хотела кого-то так сильно.(jemanden sehr)',
    t1: 'Ich',
    t2: 'glaube',
    t3: ',',
    t4: 'dass',
    t5: 'ich',
    t6: 'nie',
    t7: 'jemanden',
    t8: 'so',
    t9: 'sehr',
    t10: 'gewollt',
    t11: 'habe',
    t12: '.',

  },
  {
    t0: 'Я это знаю, потому что однажды получил то, чего очень сильно хотел.(Einzige wirklich )',
    t1: 'Es',
    t2: 'war',
    t3: 'das',
    t4: 'Einzige',
    t5: ',',
    t6: 'was',
    t7: 'ich',
    t8: 'je',
    t9: 'wirklich',
    t10: 'gewollt',
    t11: 'habe',
    t12: '.',

  },

]
const SlotDatamögen = [
  {
    t0: 'Я думал, тебе нравится, когда я так делаю.(mache)',
    t1: 'Ich',
    t2: 'dachte',
    t3: 'du',
    t4: 'magst',
    t5: 'es',
    t6: ',',
    t7: 'wenn',
    t8: 'ich',
    t9: 'das',
    t10: 'mache',
    t11: '.',

  },
  {
    t0: 'Можешь забрать их все, если хочешь.(alle)',
    t1: 'Wenn',
    t2: 'du',
    t3: 'magst',
    t4: ',',
    t5: 'kannst',
    t6: 'du',
    t7: 'sie',
    t8: 'alle',
    t9: 'haben',
    t10: '.',

  },
  {
    t0: 'Вы можете считать, что я слишком зол.(denken wütend)',
    t1: 'Ihr',
    t2: 'mögt',
    t3: 'denken',
    t4: ',',
    t5: 'ich',
    t6: 'sei',
    t7: 'zu',
    t8: 'wütend',
    t9: '.',

  },
  {
    t0: 'Надеюсь, тайская кухня вам нравится.(hoffe Thai)',
    t1: 'Ich',
    t2: 'hoffe',
    t3: ',',
    t4: 'ihr',
    t5: 'mögt',
    t6: 'Thai',
    t7: '.',

  },
  {
    t0: 'Я знаю, что вы любите.()',
    t1: 'Ich',
    t2: 'weiß',
    t3: ',',
    t4: 'was',
    t5: 'ihr',
    t6: 'mögt',
    t7: '.',

  },
  {
    t0: 'Да, послушайте, она мне нравилась.(zu )',
    t1: 'Ja',
    t2: ',',
    t3: 'hör',
    t4: 'zu',
    t5: ',',
    t6: 'ich',
    t7: 'mochte',
    t8: 'sie',
    t9: '.',

  },
  {
    t0: 'Меня саму это ужасно удивило, но мне нравились эти девчонки.(total überrascht Mädels)',
    t1: 'Es',
    t2: 'hat',
    t3: 'mich',
    t4: 'total',
    t5: 'überrascht',
    t6: ',',
    t7: 'aber',
    t8: 'ich',
    t9: 'mochte',
    t10: 'diese',
    t11: 'Mädels',
    t12: '.',

  },

  {
    t0: 'Да, но мне понравилась эта голубая рубашка.(Hemd)',
    t1: 'Ja',
    t2: ',',
    t3: 'aber',
    t4: 'ich',
    t5: 'mochte',
    t6: 'dieses',
    t7: 'blaue',
    t8: 'Hemd',
    t9: '.',

  },

  {
    t0: 'Девушка, которая мне понравилась, издевается надо мной.(Mädchen schikaniert mich)',
    t1: 'Ein',
    t2: 'Mädchen',
    t3: ',',
    t4: 'das',
    t5: 'ich',
    t6: 'mochte',
    t7: ',',
    t8: 'schikaniert',
    t9: 'mich',
    t10: '.',

  },
  {
    t0: 'Какая музыка вам нравится?(Art Musik Sie)',
    t1: 'Welche',
    t2: 'Art',
    t3: 'von',
    t4: 'Musik',
    t5: 'mögen',
    t6: 'Sie',
    t7: '?',

  }
]
const SlotDatamöchten = [
  {
    t0: 'Она спрашивает, не хотите ли вы пойти со мной.(fragt mitkommen)',
    t1: 'Sie     ',
    t2: 'fragt',
    t3: ',',
    t4: 'ob',
    t5: 'Sie',
    t6: 'mitkommen',
    t7: 'möchten',
    t8: '.',

  }, {
    t0: 'С Вашего разрешения мы хотели бы Вас угостить.(Erlaubnis behandeln)',
    t1: 'Mit',
    t2: 'Eurer',
    t3: 'Erlaubnis',
    t4: 'möchten',
    t5: 'wir',
    t6: 'Euch',
    t7: 'behandeln',
    t8: '.',

  }, {
    t0: 'Ты занят и не хочешь, чтобы к тебе обращались в данный момент.(beschäftigt derzeit gestört)',
    t1: 'Du',
    t2: 'bist',
    t3: 'beschäftigt',
    t4: 'und',
    t5: 'möchten',
    t6: 'derzeit',
    t7: 'nicht',
    t8: 'gestört',
    t9: 'werden',
    t10: '.',

  }, {
    t0: 'Принесите все книги, какие захотите, к прилавку.(Bücher Theke)',
    t1: 'Bringt',
    t2: 'alle',
    t3: 'Bücher',
    t4: ',',
    t5: 'die',
    t6: 'ihr',
    t7: 'möchtet',
    t8: ',',
    t9: 'an',
    t10: 'die',
    t11: 'Theke',
    t12: '.',

  }, {
    t0: 'Вы можете идти, если хотите.()',
    t1: 'Ihr',
    t2: 'könnt',
    t3: 'gehen',
    t4: ',',
    t5: 'wenn',
    t6: 'ihr',
    t7: 'möchtet',
    t8: '.',

  }, {
    t0: 'Если вы хотите, чтобы они следовали за вами, вы должны стать частью их мира.(ihr folgen Teil Welt)',
    t1: 'Wenn',
    t2: 'ihr',
    t3: 'möchtet',
    t4: 'das',
    t5: 'sie',
    t6: 'euch',
    t7: 'folgen',
    t8: ',',
    t9: 'müsst',
    t10: 'Ihr',
    t11: 'Teil',
    t12: 'ihrer',
    t13: 'Welt',
    t14: 'werden',
    t15: '.',
  }, {
    t0: 'После прошлой ночи, я уверен, вам не захочется задерживаться. (Nach Nacht überzeugt verweilen)',
    t1: 'Nach',
    t2: 'letzter',
    t3: 'Nacht',
    t4: ',',
    t5: 'bin',
    t6: 'ich',
    t7: 'überzeugt',
    t8: ',',
    t9: 'Ihr',
    t10: 'möchtet',
    t11: 'nicht',
    t12: 'verweilen',
    t13: '.',
  }, {
    t0: 'Господа, не могли бы вы поделиться чем-нибудь с классом?(Herren Klasse)',
    t1: 'Meine',
    t2: 'Herren',
    t3: ',',
    t4: 'möchtet',
    t5: 'ihr',
    t6: 'der',
    t7: 'Klasse',
    t8: 'etwas',
    t9: 'mitteilen',
    t10: '?',

  }, {
    t0: 'Может быть, вы хотите, чтобы я думал именно так.(Vielleicht ihr genau denke)',
    t1: 'Vielleicht',
    t2: 'möchtet',
    t3: 'ihr',
    t4: ',',
    t5: 'dass',
    t6: 'ich',
    t7: 'genau',
    t8: 'das',
    t9: 'denke',
    t10: '.',

  },
]

</script>

<style lang="scss" ></style>