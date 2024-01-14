<template lang="pug">
.container
  .page-title 
    h2 Modalverben
  .page-block.blue-grey-4
    Tabs(:items= 'müssen' title='müssen' )
    Tabs(:items= 'können' title='können' )
    Tabs(:items= 'dürfen' title='dürfen' )
    Tabs(:items= 'sollen' title='sollen' )
    Tabs(:items= 'wollen' title='wollen' )
    Tabs(:items= 'mögen' title='mögen' )
    Tabs(:items= 'möchten' title='möchten' )
  .page-block.blue-grey-4
    .page-title--small
      h2 Beispiele
    TabsTraining( title='müssen' :SlotData='SlotDatamüssen' )
    TabsTraining( title='können' :SlotData='SlotDatakönnen' )
    TabsTraining( title='dürfen' :SlotData='SlotDatadürfen' )
    TabsTraining( title='sollen' :SlotData='SlotDatasollen' )
    TabsTraining( title='wollen' :SlotData='SlotDatawollen' )
    TabsTraining( title='mögen' :SlotData='SlotDatamögen' )
    TabsTraining( title='möchten' :SlotData='SlotDatamöchten' )
</template>
<script setup>
// import Content from '@/components/Content.vue';
import Tabs from '@/components/Tabs.vue';
import TabsTraining from '@/components/TabsTraining.vue';

const müssen = [

  {
    title: 'Präsens',
    text1: 'ich,er,sie,es muss',
    text2: 'du musst',
    text3: 'ihr müsst',
    text4: 'wir,sie,Sie müssen',

  },
  {
    title: 'Präteritum',
    text1: 'ich,er,sie,es musste',
    text2: 'du musstest',
    text3: 'ihr musstet',
    text4: 'wir,sie,Sie mussten',

  },
  {
    title: 'Perfekt',
    text1: 'ich habe gemusst',
    text2: 'du hast gemusst',
    text3: 'er,sie,es hat gemusst',
    text4: 'ihr habt gemusst',
    text5: 'wir,sie,Sie haben gemusst',
  },
  {
    title: 'Plusquamperfekt',
    text1: 'ich,er,sie,es hatte gemusst',
    text2: 'du hattest gemusst',
    text3: 'ihr hattet gemusst',
    text4: 'wir,sie,Sie hatten gemusst',

  },
  {
    title: 'Futurum II',
    text1: 'ich werde gemusst haben',
    text2: 'du wirst gemusst haben',
    text3: 'er wird gemusst haben',
    text4: 'ihr werdet gemusst haben',
    text5: 'wir,sie,Sie werden gemusst haben',

  },
]
const können = [
  {
    title: 'Präsens',
    text1: 'ich,er,sie,es kann',
    text2: 'du kannst',
    text3: 'ihr könnt',
    text4: 'wir,sie,Sie können',

  },
  {
    title: 'Präteritum',
    text1: 'ich,er,sie,es konnte',
    text2: 'du konntest',
    text3: 'ihr konntet',
    text4: 'wir,sie,Sie konnten',

  },
  {
    title: 'Perfekt',
    text1: 'ich habe gekonnt',
    text2: 'du hast gekonnt',
    text3: 'er,sie,es hat gekonnt',
    text4: 'ihr habt gekonnt',
    text5: 'wir,sie,Sie haben gekonnt',
  },
  {
    title: 'Plusquamperfekt',
    text1: 'ich,er,sie,es hatte gekonnt',
    text2: 'du hattest gekonnt',
    text3: 'ihr hattet gekonnt',
    text4: 'wir,sie,Sie hatten gekonnt',

  },
  {
    title: 'Futurum II',
    text1: 'ich werde gekonnt haben',
    text2: 'du wirst gekonnt haben',
    text3: 'er wird gekonnt haben',
    text4: 'ihr werdet gekonnt haben',
    text5: 'wir,sie,Sie werden gekonnt haben',

  },
]
const dürfen = [
  {
    title: 'Präsens',
    text1: 'ich,er,sie,es darf',
    text2: 'du darfst',
    text3: 'ihr dürft',
    text4: 'wir,sie,Sie dürfen',

  },
  {
    title: 'Präteritum',
    text1: 'ich,er,sie,es durfte',
    text2: 'du durftest',
    text3: 'ihr durftet',
    text4: 'wir,sie,Sie durften',

  },
  {
    title: 'Perfekt',
    text1: 'ich habe gedurft',
    text2: 'du hast gedurft',
    text3: 'er,sie,es hat gedurft',
    text4: 'ihr habt gedurft',
    text5: 'wir,sie,Sie haben gedurft',
  },
  {
    title: 'Plusquamperfekt',
    text1: 'ich,er,sie,es hatte gedurft',
    text2: 'du hattest gedurft',
    text3: 'ihr hattet gedurft',
    text4: 'wir,sie,Sie hatten gedurft',

  },
  {
    title: 'Futurum II',
    text1: 'ich werde gedurft haben',
    text2: 'du wirst gedurft haben',
    text3: 'er wird gedurft haben',
    text4: 'ihr werdet gedurft haben',
    text5: 'wir,sie,Sie werden gedurft haben',

  },
]
const sollen = [

  {
    title: 'Präsens',
    text1: 'ich,er,sie,es soll',
    text2: 'du sollst',
    text3: 'ihr sollt',
    text4: 'wir,sie,Sie sollen',

  },
  {
    title: 'Präteritum',
    text1: 'ich,er,sie,es sollte',
    text2: 'du solltest',
    text3: 'ihr solltet',
    text4: 'wir,sie,Sie sollten',

  },
  {
    title: 'Perfekt',
    text1: 'ich habe gesollt',
    text2: 'du hast gesollt',
    text3: 'er,sie,es hat gesollt',
    text4: 'ihr habt gesollt',
    text5: 'wir,sie,Sie haben gesollt',
  },
  {
    title: 'Plusquamperfekt',
    text1: 'ich,er,sie,es hatte gesollt',
    text2: 'du hattest gesollt',
    text3: 'ihr hattet gesollt',
    text4: 'wir,sie,Sie hatten gesollt',

  },
  {
    title: 'Futurum II',
    text1: 'ich werde gesollt haben',
    text2: 'du wirst gesollt haben',
    text3: 'er wird gesollt haben',
    text4: 'ihr werdet gesollt haben',
    text5: 'wir,sie,Sie werden gesollt haben',

  },
]
const wollen = [

  {
    title: 'Präsens',
    text1: 'ich,er,sie,es will',
    text2: 'du willst',
    text3: 'ihr wollt',
    text4: 'wir,sie,Sie wollen',

  },
  {
    title: 'Präteritum',
    text1: 'ich,er,sie,es wollte',
    text2: 'du wolltest',
    text3: 'ihr wolltet',
    text4: 'wir,sie,Sie wollten',

  },
  {
    title: 'Perfekt',
    text1: 'ich habe gewollt',
    text2: 'du hast gewollt',
    text3: 'er,sie,es hat gewollt',
    text4: 'ihr habt gewollt',
    text5: 'wir,sie,Sie haben gewollt',
  },
  {
    title: 'Plusquamperfekt',
    text1: 'ich,er,sie,es hatte gewollt',
    text2: 'du hattest gewollt',
    text3: 'ihr hattet gewollt',
    text4: 'wir,sie,Sie hatten gewollt',

  },
  {
    title: 'Futurum II',
    text1: 'ich werde gewollt haben',
    text2: 'du wirst gewollt haben',
    text3: 'er wird gewollt haben',
    text4: 'ihr werdet gewollt haben',
    text5: 'wir,sie,Sie werden gewollt haben',

  },
]
const mögen = [
  {
    title: 'Präsens',
    text1: 'ich,er,sie,es mag',
    text2: 'du magst',
    text3: 'ihr mögt',
    text4: 'wir,sie,Sie mögen',

  },
  {
    title: 'Präteritum',
    text1: 'ich,er,sie,es mochte',
    text2: 'du mochtest',
    text3: 'ihr mochtet',
    text4: 'wir,sie,Sie mochten',

  },
  {
    title: 'Perfekt',
    text1: 'ich habe gemocht',
    text2: 'du hast gemocht',
    text3: 'er,sie,es hat gemocht',
    text4: 'ihr habt gemocht',
    text5: 'wir,sie,Sie haben gemocht',
  },
  {
    title: 'Plusquamperfekt',
    text1: 'ich,er,sie,es hatte gemocht',
    text2: 'du hattest gemocht',
    text3: 'ihr hattet gemocht',
    text4: 'wir,sie,Sie hatten gemocht',

  },
  {
    title: 'Futurum II',
    text1: 'ich werde gemocht haben',
    text2: 'du wirst gemocht haben',
    text3: 'er wird gemocht haben',
    text4: 'ihr werdet gemocht haben',
    text5: 'wir,sie,Sie werden gemocht haben',

  },
]
const möchten = [
  {
    title: 'Präsens',
    text1: 'ich,er,sie,es möcht(e)',
    text2: 'du möchtest',
    text3: 'ihr möchtet',
    text4: 'wir,sie,Sie möchten',

  },
  {
    title: 'Präteritum',
    text1: 'ich,er,sie,es möchtete',
    text2: 'du möchtetest',
    text3: 'ihr möchtetet',
    text4: 'wir,sie,Sie möchteten',

  },
  {
    title: 'Perfekt',
    text1: 'ich habe gemöchtet',
    text2: 'du hast gemöchtet',
    text3: 'er,sie,es hat gemöchtet',
    text4: 'ihr habt gemöchtet',
    text5: 'wir,sie,Sie haben gemöchtet',
  },
  {
    title: 'Plusquamperfekt',
    text1: 'ich,er,sie,es hatte gemöchtet',
    text2: 'du hattest gemöchtet',
    text3: 'ihr hattet gemöchtet',
    text4: 'wir,sie,Sie hatten gemöchtet',

  },
  {
    title: 'Futurum II',
    text1: 'ich werde gemöchtet haben',
    text2: 'du wirst gemöchtet haben',
    text3: 'er wird gemöchtet haben',
    text4: 'ihr werdet gemöchtet haben',
    text5: 'wir,sie,Sie werden gemöchtet haben',

  },
]

const SlotDatamüssen = [
  {
    t0: 'Мне нужно вернуться в офис.(zurück zum Büro)',
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
    t0: 'Должен быть порядок. (Ordnung)',
    t1: 'Ordnung',
    t2: 'muss',
    t3: 'sein',
    t4: '.',
  },
  {
    t0: 'Тебе нужно было это говорить? (sagen)',
    t1: 'Musstest',
    t2: 'du',
    t3: 'das',
    t4: 'sagen',
    t5: '?',

  },
  {
    t0: ' За это им пришлось сесть в тюрьму. (Dafür ins Gefängnis)',
    t1: 'Dafür',
    t2: 'mussten',
    t3: 'sie',
    t4: 'ins',
    t5: 'Gefängnis',
    t6: '.',

  },
  {
    t0: 'Вы должны были сделать все сами.(alles selbst)',
    t1: 'Ihr',
    t2: 'musstet',
    t3: 'alles',
    t4: 'selbst',
    t5: 'machen',

  },
  {
    t0: 'Нам пришлось вернуться к чертежной доске.(zurück ins Reißbrett)',
    t1: 'Wir',
    t2: 'mussten',
    t3: 'zurück',
    t4: 'ins',
    t5: 'Reißbrett',
    t6: '.',

  },
  {
    t0: 'Сотруднику банка пришлось сесть в тюрьму за мошенничество. (Bankkaufmann wegen Betrugs ins Gefängnis)',
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
    t0: 'Вам не нужно было все разрушать! (nicht alles zerstören)',
    t1: 'Ihr',
    t2: 'musstet',
    t3: 'nicht',
    t4: 'alles',
    t5: 'zerstören',
    t6: '!',

  },
  {
    t0: 'Я это понимаю, но вам не нужно было его убивать. (verstehe aber nicht töten)',
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
    t0: 'Этого ты никогда раньше не приходилось делать. (noch nie )',
    t1: 'Das',
    t2: 'hast',
    t3: 'du',
    t4: 'noch',
    t5: 'nie',
    t6: 'gemusst',
    t7: '.',

  },
  {
    t0: 'Этого вам не обязательно было делать. (ihr)',
    t1: 'Das',
    t2: 'hattet',
    t3: 'ihr',
    t4: 'nicht',
    t5: 'gemusst',
    t6: '.',

  },

  {
    t0: 'Вам придется открыть глаза. (Eure Augen öffnen)',
    t1: 'Ihr',
    t2: 'müsst',
    t3: 'eure',
    t4: 'Augen',
    t5: 'öffnen',
    t6: '.',

  },
  {
    t0: 'Мне не нужно было этого делать, но я все равно это сделал. (tat trotzdem)',
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
    t0: 'На скольких иностранных языках вы (ihr) говорите? (viele Fremdsprachen ihr)',
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
    t0: 'Я хочу, но не могу. (ja nicht)',
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
    t0: 'Она бегло говорила по-французски. (fließend Französisch)',
    t1: 'Sie',
    t2: 'konnte',
    t3: 'fließend',
    t4: 'Französisch',
    t5: '.',

  },

  {
    t0: 'Мы не могли сделать больше. (nicht mehr)',
    t1: 'Wir',
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
    t0: 'Ты сделал мне величайший подарок, на который никто другой не был способен. (mir größte Geschenk, was sonst niemand hätte)',
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
    t0: 'Бьюсь об заклад, вы бы тоже не смогли этого сделать.(wette Ihr hättet es auch)',
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
    t0: 'Что я тогда не мог сделать , я должен сделать сейчас. (damals nicht  jetzt tun)',
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
    t0: 'Поскольку мы не имеем права это хранить. (Da behalten)',
    t1: 'Da',
    t2: 'wir',
    t3: 'es',
    t4: 'nicht',
    t5: 'behalten',
    t6: 'dürfen',
    t7: '.',
  },
  {
    t0: 'Вам не следует оставаться здесь. (Hier nicht bleiben)',
    t1: 'Hier',
    t2: 'dürft',
    t3: 'ihr',
    t4: 'nicht',
    t5: 'bleiben',
    t6: '.',

  },
  {
    t0: 'Ты никогда не должен терять надежду. (Hoffnung nie aufgeben)',
    t1: 'Du',
    t2: 'darfst',
    t3: 'die',
    t4: 'Hoffnung',
    t5: 'nie',
    t6: 'aufgeben',
    t7: '.',

  },

  {
    t0: 'Нам обоим нельзя быть друзьями. (beide keine Freunde)',
    t1: 'Wir',
    t2: 'beide',
    t3: 'dürfen',
    t4: 'keine',
    t5: 'Freunde',
    t6: 'sein',
    t7: '.',

  },
  {
    t0: 'Ваши руки не должны касаться друг друга. (Eure Hände berühren)',
    t1: 'Eure',
    t2: 'Hände',
    t3: 'dürfen',
    t4: 'sich',
    t5: 'nicht',
    t6: 'berühren',
    t7: '.',

  },
  {
    t0: 'Могу я пожалуйста пройти? (bitte vorbei)',
    t1: 'Darf',
    t2: 'ich',
    t3: 'bitte',
    t4: 'vorbei',
    t5: '?',

  },
  {
    t0: 'Им не разрешено этого делать. (nicht)',
    t1: 'Das',
    t2: 'durften',
    t3: 'sie',
    t4: 'nicht',
    t5: '.',

  },
  {
    t0: 'Режиссеру не разрешили это сделать. (Regisseur nicht)',
    t1: 'Der',
    t2: 'Regisseur',
    t3: 'durfte',
    t4: 'das',
    t5: 'nicht',
    t6: 'tun',
    t7: '.',

  },
  {
    t0: 'Нам вообще нельзя терять времени. (überhaupt keine Zeit verlieren )',
    t1: 'Wir',
    t2: 'dürfen',
    t3: 'überhaupt',
    t4: 'keine',
    t5: 'Zeit',
    t6: 'verlieren',
    t7: '.',

  },
  {
    t0: 'Почему мне тоже не позволено это ? (Warum nicht auch)',
    t1: 'Warum',
    t2: 'darf',
    t3: 'ich',
    t4: 'das',
    t5: 'nicht',
    t6: 'auch',
    t7: '?',

  },
  {
    t0: 'без купальной шапочки ты не позволено в бассейн . (Ohne Badehaube ins Schwimmbecken)',
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
    t0: 'В чем все это дело? (Was alles)',
    t1: 'Was',
    t2: 'soll',
    t3: 'das',
    t4: 'alles',
    t5: '?',

  },
  {
    t0: ' Она должна сесть в тюрьму пожизненно. (lebenslang ins Gefängnis)',
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
    t0: 'Я же говорил тебе больше этого не делать. (dir doch gesagt mehr )',
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
    t0: 'Том должен проснуться. (wach sein)',
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
    t0: 'Тому уже пора этим заниматься. (Mittlerweile Tom eigentlich damit fertig)',
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
    t0: 'Тебе следует оставаться здесь до половины третьего. (halb drei hierbleiben)',
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
    t0: 'Стоит ли нам для разнообразия пойти на греческий? (Abwechslung mal Griechen)',
    t1: 'Sollen',
    t2: 'wir',
    t3: 'zur',
    t4: 'Abwechslung',
    t5: 'mal',
    t6: 'zum',
    t7: 'Griechen',
    t8: '?',

  }, {
    t0: 'Нам следует следить за этим.(ein Auge darauf )',
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
    t0: 'Ты хочешь детей? (Kinder)',
    t1: 'Willst',
    t2: 'du',
    t3: 'Kinder',
    t4: '?',

  },
  {
    t0: 'Я хотел больше. (mehr)',
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
    t0: 'Кому горячего шоколада? (Wer warme Schokolade)',
    t1: 'Wer',
    t2: 'will',
    t3: 'eine',
    t4: 'warme',
    t5: 'Schokolade',
    t6: '?',

  },
  {
    t0: 'Мои адвокаты не хотели, чтобы я давал показания. (Rechtsanwälte aussage)',
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
    t0: 'Хочешь знать, чего люди хотят больше обычного? (Leute mehr als sonst)',
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
    t0: 'Я просто подумал, что ты захочешь этого. (nur würdest)',
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
    t0: 'Запомни, ты сам этого хотел.(Vergiss nicht)',
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
    t0: 'Вы оба хотели, чтобы я оставался в стороне - и я остался. (beide mich raushalte)',
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
    t0: 'Почему вы от меня отказались? (Wieso ihr mich nicht)',
    t1: 'Wieso',
    t2: 'habt',
    t3: 'ihr',
    t4: 'mich',
    t5: 'nicht',
    t6: 'gewollt',
    t7: '?',

  },
  {
    t0: 'Не думаю, что я хотела кого-то так сильно. (nie jemanden sehr)',
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
    t0: 'Я это знаю, потому что однажды получил то, чего очень сильно хотел. (Einzige je wirklich )',
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
    t0: 'Я думал, тебе нравится, когда я так делаю. (mache)',
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
    t0: 'Можешь забрать их все, если хочешь. (Wenn du alle)',
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
    t0: 'Вы можете считать, что я слишком зол. (Ihr denken sei zu wütend)',
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
    t0: 'Надеюсь, тайская кухня вам нравится. (hoffe Thai)',
    t1: 'Ich',
    t2: 'hoffe',
    t3: ',',
    t4: 'ihr',
    t5: 'mögt',
    t6: 'Thai',
    t7: '.',

  },
  {
    t0: 'Я знаю, что вы любите. ()',
    t1: 'Ich',
    t2: 'weiß',
    t3: ',',
    t4: 'was',
    t5: 'ihr',
    t6: 'mögt',
    t7: '.',

  },
  {
    t0: 'Да, послушайте, она мне нравилась. (Ja hör zu )',
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
    t0: 'Меня саму это ужасно удивило, но мне нравились эти девчонки. (total überrascht diese Mädels)',
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
    t0: 'Да, но мне понравилась эта голубая рубашка. (blaue Hemd)',
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
    t0: 'Девушка, которая мне понравилась, издевается надо мной. (Mädchen schikaniert mich)',
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
    t0: 'Какая музыка вам нравится? (Art Musik Sie)',
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
    t0: 'Она спрашивает, не хотите ли вы пойти со мной. (fragt mitkommen)',
    t1: 'Sie     ',
    t2: 'fragt',
    t3: ',',
    t4: 'ob',
    t5: 'Sie',
    t6: 'mitkommen',
    t7: 'möchten',
    t8: '.',

  }, {
    t0: 'С Вашего разрешения мы хотели бы Вас угостить. (Eurer Erlaubnis Euch behandeln)',
    t1: 'Mit',
    t2: 'Eurer',
    t3: 'Erlaubnis',
    t4: 'möchten',
    t5: 'wir',
    t6: 'Euch',
    t7: 'behandeln',
    t8: '.',

  }, {
    t0: 'Ты занят и не хочешь, чтобы к тебе обращались в данный момент. (beschäftigt derzeit nicht gestört)',
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
    t0: 'Принесите все книги, какие захотите, к прилавку. (alle Bücher an die Theke)',
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
    t0: 'Вы можете идти, если хотите. (gehen)',
    t1: 'Ihr',
    t2: 'könnt',
    t3: 'gehen',
    t4: ',',
    t5: 'wenn',
    t6: 'ihr',
    t7: 'möchtet',
    t8: '.',

  },

  {
    t0: 'Если вы хотите, чтобы они следовали за вами, вы должны стать частью их мира. (ihr euch folgen Teil Welt)',
    t1: 'Wenn',
    t2: 'ihr',
    t3: 'möchtet',
    t4: 'das',
    t5: 'sie',
    t6: 'euch',
    t7: 'folgen',
    t8: ',',
    t9: 'müsst',
    t10: 'ihr',
    t11: 'Teil',
    t12: 'ihrer',
    t13: 'Welt',
    t14: 'werden',
    t15: '.',
  },

  {
    t0: 'После прошлой ночи, я уверен, вам не захочется задерживаться. (Nach letzter Nacht überzeugt Ihr verweilen)',
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
  },

  {
    t0: 'Господа, не могли бы вы поделиться чем-нибудь с классом? (Meine Herren Klasse mitteilen)',
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

  },

  {
    t0: 'Может быть, вы хотите, чтобы я думал именно так. (Vielleicht ihr genau denke)',
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