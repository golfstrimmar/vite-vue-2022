<template lang="pug">
.container
  h2 Modalverben
  //- .page-block.blue-grey-4
  //-   Tabs(:items= 'müssen' title='müssen' )
  //-   Tabs(:items= 'können' title='können' )
  //-   Tabs(:items= 'dürfen' title='dürfen' )
  //-   Tabs(:items= 'sollen' title='sollen' )
  //-   Tabs(:items= 'wollen' title='wollen' )
  //-   Tabs(:items= 'mögen' title='mögen' )
  //-   Tabs(:items= 'möchten' title='möchten' )
  //- .page-block.blue-grey-4
  //-   .page-title--small
  //-     h2 Beispiele
  //-   TabsTraining( title='müssen' :SlotData='SlotDatamüssen' )
  //-   TabsTraining( title='können' :SlotData='SlotDatakönnen' )
  //-   TabsTraining( title='dürfen' :SlotData='SlotDatadürfen' )
  //-   TabsTraining( title='sollen' :SlotData='SlotDatasollen' )
  //-   TabsTraining( title='wollen' :SlotData='SlotDatawollen' )
  //-   TabsTraining( title='mögen' :SlotData='SlotDatamögen' )
  //-   TabsTraining( title='möchten' :SlotData='SlotDatamöchten' )

  Akkord(:titles="titles" :Data="[SlotDataMüssen,SlotDataKönnen,SlotDataDürfen,SlotDataSollen,SlotDataWollen,SlotDataMögen,SlotDataMöchten]"  @addTime ='addTime' )
</template>
<script setup>


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

import Akkord from "@/components/Akkord.vue";
import { ref, onMounted, reactive } from 'vue'

import Plaza from "@/components/Plaza.vue";
// ---------db-----------------
import { db } from "@/firebase/config.ts";
import { collection, query, onSnapshot } from "firebase/firestore";
// var SlotDeklination = reactive([]);
var SlotDataMüssen = reactive([]);
var SlotDataKönnen = reactive([]);
var SlotDataDürfen = reactive([]);
var SlotDataSollen = reactive([]);
var SlotDataWollen = reactive([]);
var SlotDataMögen = reactive([]);
var SlotDataMöchten = reactive([]);

var titles = reactive([]);
// const Deklination = query(collection(db, "Deklination-table"));
const MüssenSlot = query(collection(db, "MüssenSlot"));
const KönnenSlot = query(collection(db, "KönnenSlot"));
const DürfenSlot = query(collection(db, "SlotDataDürfen"));
const SollenSlot = query(collection(db, "SlotDataSollen"));
const WollenSlot = query(collection(db, "SlotDataWollen"));
const MögenSlot = query(collection(db, "SlotDataMögen"));
const MöchtenSlot = query(collection(db, "SlotDataMöchten"));


onMounted(async () => {
  // onSnapshot(Deklination, (querySnapshot) => {
  //   querySnapshot.forEach((doc) => {
  //     SlotDeklination.push(doc.data());
  //   });

  // });
  onSnapshot(MüssenSlot, (querySnapshot) => {
    querySnapshot.forEach((doc) => {
      SlotDataMüssen.push(doc.data());
    });
    titles.push({ id: 0, title: 'Müssen', isOpen: true });
    SlotDataMüssen.id = 0;
    SlotDataMüssen.isOpen = true;
  });
  onSnapshot(KönnenSlot, (querySnapshot) => {
    querySnapshot.forEach((doc) => {
      SlotDataKönnen.push(doc.data());
    });
    titles.push({ id: 1, title: 'Können', isOpen: false });
    SlotDataKönnen.id = 1;
    SlotDataKönnen.isOpen = false;
  });
  onSnapshot(DürfenSlot, (querySnapshot) => {
    querySnapshot.forEach((doc) => {
      SlotDataDürfen.push(doc.data());
    });
    titles.push({ id: 2, title: 'Dürfen', isOpen: false });
    SlotDataDürfen.id = 2;
    SlotDataDürfen.isOpen = false;
  });
  onSnapshot(SollenSlot, (querySnapshot) => {
    querySnapshot.forEach((doc) => {
      SlotDataSollen.push(doc.data());
    });
    titles.push({ id: 3, title: 'Sollen', isOpen: false });
    SlotDataSollen.id = 3;
    SlotDataSollen.isOpen = false;
  });
  onSnapshot(WollenSlot, (querySnapshot) => {
    querySnapshot.forEach((doc) => {
      SlotDataWollen.push(doc.data());
    });
    titles.push({ id: 4, title: 'Wollen', isOpen: false });
    SlotDataWollen.id = 4;
    SlotDataWollen.isOpen = false;
  });
  onSnapshot(MögenSlot, (querySnapshot) => {
    querySnapshot.forEach((doc) => {
      SlotDataMögen.push(doc.data());
    });
    titles.push({ id: 5, title: 'Mögen', isOpen: false });
    SlotDataMögen.id = 5;
    SlotDataMögen.isOpen = false;
  });
  onSnapshot(MöchtenSlot, (querySnapshot) => {
    querySnapshot.forEach((doc) => {
      SlotDataMöchten.push(doc.data());
    });
    titles.push({ id: 6, title: 'Möchten', isOpen: false });
    SlotDataMöchten.id = 6;
    SlotDataMöchten.isOpen = false;
  });
});
// ---------
// ------------pinia-------------
import { useAuthStore } from '@/store/authent';
const authStore = useAuthStore();
const addTime = (formattedTime, count, countAll) => { authStore.refresh('Modalverben', formattedTime, count, countAll) };
// --------------------------





// const SlotDatawollen = [
//   {
//     t0: 'Ты хочешь детей? (Kinder)',
//     t1: 'Willst',
//     t2: 'du',
//     t3: 'Kinder',
//     t4: '?',

//   },
//   {
//     t0: 'Я хотел больше. (mehr)',
//     t1: 'Ich',
//     t2: 'wollte',
//     t3: 'mehr',
//     t4: '.',

//   },
//   {
//     t0: 'Чего вы хотите?',
//     t1: 'Was',
//     t2: 'wollt',
//     t3: 'ihr',
//     t4: '?',

//   },
//   {
//     t0: 'Кому горячего шоколада? (Wer warme Schokolade)',
//     t1: 'Wer',
//     t2: 'will',
//     t3: 'eine',
//     t4: 'warme',
//     t5: 'Schokolade',
//     t6: '?',

//   },
//   {
//     t0: 'Мои адвокаты не хотели, чтобы я давал показания. (Rechtsanwälte aussage)',
//     t1: 'Meine',
//     t2: 'Rechtsanwälte',
//     t3: 'wollten',
//     t4: 'nicht',
//     t5: ',',
//     t6: 'dass',
//     t7: 'ich',
//     t8: 'aussage',
//     t9: '.',

//   },
//   {
//     t0: 'Хотите знать, чего люди хотят больше обычного? (Leute mehr als sonst)',
//     t1: 'Wollen',
//     t2: 'Sie',
//     t3: 'wissen',
//     t4: ',',
//     t5: 'was',
//     t6: 'Leute',
//     t7: 'mehr',
//     t8: 'als',
//     t9: 'sonst',
//     t10: 'wollen',
//     t11: '?',

//   },
//   {
//     t0: 'Я просто подумал, что ты захочешь этого. (nur würdest)',
//     t1: 'Ich',
//     t2: 'dachte',
//     t3: 'nur',
//     t4: ',',
//     t5: 'du',
//     t6: 'würdest',
//     t7: 'das',
//     t8: 'haben',
//     t9: 'wollen',
//     t10: '.',

//   },
//   {
//     t0: 'Ты не хотел, чтобы я приходил.(nie herkomme)',
//     t1: 'Du',
//     t2: 'hast',
//     t3: 'nie',
//     t4: 'gewollt',
//     t5: ',',
//     t6: 'dass',
//     t7: 'ich',
//     t8: 'herkomme',
//     t9: '.',

//   },
//   {
//     t0: 'Запомни, ты сам этого хотел.(Vergiss nicht)',
//     t1: 'Vergiss',
//     t2: 'nicht',
//     t3: ',',
//     t4: 'du',
//     t5: 'hast',
//     t6: 'es',
//     t7: 'so',
//     t8: 'gewollt',
//     t9: '.',

//   },
//   {
//     t0: 'Вы оба хотели, чтобы я оставался в стороне - и я остался. (beide mich raushalte)',
//     t1: 'Ihr',
//     t2: 'beide',
//     t3: 'habt',
//     t4: 'gewollt',
//     t5: ',',
//     t6: 'dass',
//     t7: 'ich',
//     t8: 'mich',
//     t9: 'da',
//     t10: 'raushalte',
//     t11: 'und',
//     t12: 'das',
//     t13: 'habe',
//     t14: 'ich',
//     t15: '.',

//   },
//   {
//     t0: 'Почему вы от меня отказались? (Wieso ihr mich nicht)',
//     t1: 'Wieso',
//     t2: 'habt',
//     t3: 'ihr',
//     t4: 'mich',
//     t5: 'nicht',
//     t6: 'gewollt',
//     t7: '?',

//   },
//   {
//     t0: 'Не думаю, что я хотела кого-то так сильно. (nie jemanden sehr)',
//     t1: 'Ich',
//     t2: 'glaube',
//     t3: ',',
//     t4: 'dass',
//     t5: 'ich',
//     t6: 'nie',
//     t7: 'jemanden',
//     t8: 'so',
//     t9: 'sehr',
//     t10: 'gewollt',
//     t11: 'habe',
//     t12: '.',

//   },
//   {
//     t0: 'Я это знаю, потому что однажды получил то, чего очень сильно хотел. (Einzige je wirklich )',
//     t1: 'Es',
//     t2: 'war',
//     t3: 'das',
//     t4: 'Einzige',
//     t5: ',',
//     t6: 'was',
//     t7: 'ich',
//     t8: 'je',
//     t9: 'wirklich',
//     t10: 'gewollt',
//     t11: 'habe',
//     t12: '.',

//   },

// ]
// const SlotDatamögen = [
//   {
//     t0: 'Я думал, тебе нравится, когда я так делаю. (mache)',
//     t1: 'Ich',
//     t2: 'dachte',
//     t3: 'du',
//     t4: 'magst',
//     t5: 'es',
//     t6: ',',
//     t7: 'wenn',
//     t8: 'ich',
//     t9: 'das',
//     t10: 'mache',
//     t11: '.',

//   },
//   {
//     t0: 'Можешь иметь их все, если хочешь. (Wenn du alle)',
//     t1: 'Wenn',
//     t2: 'du',
//     t3: 'magst',
//     t4: ',',
//     t5: 'kannst',
//     t6: 'du',
//     t7: 'sie',
//     t8: 'alle',
//     t9: 'haben',
//     t10: '.',

//   },
//   {
//     t0: 'Вы нравится считать, что я слишком зол. (Ihr denken sei zu wütend)',
//     t1: 'Ihr',
//     t2: 'mögt',
//     t3: 'denken',
//     t4: ',',
//     t5: 'ich',
//     t6: 'sei',
//     t7: 'zu',
//     t8: 'wütend',
//     t9: '.',

//   },
//   {
//     t0: 'Надеюсь, тайская кухня вам нравится. (hoffe Thai)',
//     t1: 'Ich',
//     t2: 'hoffe',
//     t3: ',',
//     t4: 'ihr',
//     t5: 'mögt',
//     t6: 'Thai',
//     t7: '.',

//   },
//   {
//     t0: 'Я знаю, что вы любите. ()',
//     t1: 'Ich',
//     t2: 'weiß',
//     t3: ',',
//     t4: 'was',
//     t5: 'ihr',
//     t6: 'mögt',
//     t7: '.',

//   },
//   {
//     t0: 'Да, послушайте, она мне нравилась. (Ja hör zu )',
//     t1: 'Ja',
//     t2: ',',
//     t3: 'hör',
//     t4: 'zu',
//     t5: ',',
//     t6: 'ich',
//     t7: 'mochte',
//     t8: 'sie',
//     t9: '.',

//   },
//   {
//     t0: 'Меня саму это ужасно удивило, но мне нравились эти девчонки. (total überrascht diese Mädels)',
//     t1: 'Es',
//     t2: 'hat',
//     t3: 'mich',
//     t4: 'total',
//     t5: 'überrascht',
//     t6: ',',
//     t7: 'aber',
//     t8: 'ich',
//     t9: 'mochte',
//     t10: 'diese',
//     t11: 'Mädels',
//     t12: '.',

//   },

//   {
//     t0: 'Да, но мне понравилась эта голубая рубашка. (blaue Hemd)',
//     t1: 'Ja',
//     t2: ',',
//     t3: 'aber',
//     t4: 'ich',
//     t5: 'mochte',
//     t6: 'dieses',
//     t7: 'blaue',
//     t8: 'Hemd',
//     t9: '.',

//   },

//   {
//     t0: 'Девушка, которая мне понравилась, издевается надо мной. (Mädchen schikaniert mich)',
//     t1: 'Ein',
//     t2: 'Mädchen',
//     t3: ',',
//     t4: 'das',
//     t5: 'ich',
//     t6: 'mochte',
//     t7: ',',
//     t8: 'schikaniert',
//     t9: 'mich',
//     t10: '.',

//   },
//   {
//     t0: 'Какая музыка вам нравится? (Art Musik Sie)',
//     t1: 'Welche',
//     t2: 'Art',
//     t3: 'von',
//     t4: 'Musik',
//     t5: 'mögen',
//     t6: 'Sie',
//     t7: '?',

//   }
// ]
// const SlotDatamöchten = [
//   {
//     t0: 'Она спрашивает, не хотите ли вы пойти со мной. (fragt mitkommen)',
//     t1: 'Sie',
//     t2: 'fragt',
//     t3: ',',
//     t4: 'ob',
//     t5: 'Sie',
//     t6: 'mitkommen',
//     t7: 'möchten',
//     t8: '.',

//   }, {
//     t0: 'С Вашего разрешения мы хотели бы Вас угостить. (Eurer Erlaubnis Euch behandeln)',
//     t1: 'Mit',
//     t2: 'Eurer',
//     t3: 'Erlaubnis',
//     t4: 'möchten',
//     t5: 'wir',
//     t6: 'Euch',
//     t7: 'behandeln',
//     t8: '.',

//   }, {
//     t0: 'Ты занят и не хочешь, чтобы к тебе обращались в данный момент. (beschäftigt derzeit nicht gestört)',
//     t1: 'Du',
//     t2: 'bist',
//     t3: 'beschäftigt',
//     t4: 'und',
//     t5: 'möchten',
//     t6: 'derzeit',
//     t7: 'nicht',
//     t8: 'gestört',
//     t9: 'werden',
//     t10: '.',

//   }, {
//     t0: 'Принесите все книги, какие захотите, к прилавку. (alle Bücher an die Theke)',
//     t1: 'Bringt',
//     t2: 'alle',
//     t3: 'Bücher',
//     t4: ',',
//     t5: 'die',
//     t6: 'ihr',
//     t7: 'möchtet',
//     t8: ',',
//     t9: 'an',
//     t10: 'die',
//     t11: 'Theke',
//     t12: '.',

//   }, {
//     t0: 'Вы можете идти, если хотите. (gehen)',
//     t1: 'Ihr',
//     t2: 'könnt',
//     t3: 'gehen',
//     t4: ',',
//     t5: 'wenn',
//     t6: 'ihr',
//     t7: 'möchtet',
//     t8: '.',

//   },

//   {
//     t0: 'Если вы хотите, чтобы они следовали за вами, вы должны стать частью их мира. (ihr euch folgen Teil Welt)',
//     t1: 'Wenn',
//     t2: 'ihr',
//     t3: 'möchtet',
//     t4: 'das',
//     t5: 'sie',
//     t6: 'euch',
//     t7: 'folgen',
//     t8: ',',
//     t9: 'müsst',
//     t10: 'ihr',
//     t11: 'Teil',
//     t12: 'ihrer',
//     t13: 'Welt',
//     t14: 'werden',
//     t15: '.',
//   },

//   {
//     t0: 'После прошлой ночи, я уверен, вам не захочется задерживаться. (Nach letzter Nacht überzeugt Ihr verweilen)',
//     t1: 'Nach',
//     t2: 'letzter',
//     t3: 'Nacht',
//     t4: ',',
//     t5: 'bin',
//     t6: 'ich',
//     t7: 'überzeugt',
//     t8: ',',
//     t9: 'Ihr',
//     t10: 'möchtet',
//     t11: 'nicht',
//     t12: 'verweilen',
//     t13: '.',
//   },

//   {
//     t0: 'Господа, не могли бы вы поделиться чем-нибудь с классом? (Meine Herren Klasse mitteilen)',
//     t1: 'Meine',
//     t2: 'Herren',
//     t3: ',',
//     t4: 'möchtet',
//     t5: 'ihr',
//     t6: 'der',
//     t7: 'Klasse',
//     t8: 'etwas',
//     t9: 'mitteilen',
//     t10: '?',

//   },

//   {
//     t0: 'Может быть, вы хотите, чтобы я думал именно так. (Vielleicht ihr genau denke)',
//     t1: 'Vielleicht',
//     t2: 'möchtet',
//     t3: 'ihr',
//     t4: ',',
//     t5: 'dass',
//     t6: 'ich',
//     t7: 'genau',
//     t8: 'das',
//     t9: 'denke',
//     t10: '.',

//   },
// ]

</script>

<style lang="scss"></style>