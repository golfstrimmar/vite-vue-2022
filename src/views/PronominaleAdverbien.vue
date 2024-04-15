<template lang="pug">
.container
  .page-title 
    h2 Pronominale Adverbien
  .page-block.deep-orange-2
    p(style="color: red;font-weight: 800;") Местоименные наречия употребляются только тогда, когда речь идет о неодушевленных предметах.
    p(style="color: red;font-weight: 800;") Pronominale Adverbien werden nur verwendet, wenn es um unbelebte Objekte geht.
  Tabs(:items= 'Pronominale' title='Verben mit Präpositionen' )

  .page-block.blue-grey-4
    .page-title--small
      h2 Beispiele
    TabsTraining( title='' :SlotData='SlotDataPersonal' )
</template>


<script setup>
import TabsTraining from '@/components/TabsTraining.vue';
import Tabs from '@/components/Tabs.vue';

const Pronominale = [

  {
    text1: 'sich interessieren für',
  },
  {
    text2: 'warten auf',
  },
  {
    text3: 'denken an',
  },
  {
    text4: 'sich kümmern um',
  },
  {
    text5: 'zufrieden sein mit',
  },
  {
    text7: 'reden über',
  },

]


const SlotDataPersonal = [

  {
    t0: 'Чем она довольна?',
    t1: 'Womit',
    t2: 'ist',
    t3: 'sie',
    t4: 'zufrieden',
    t5: '?',
  },
  {
    t0: 'Она довольна новой машиной.',
    t1: 'Sie',
    t2: 'ist',
    t3: 'mit',
    t4: 'dem',
    t5: 'neuen',
    t6: 'Auto',
    t7: 'zufrieden',
    t8: '.',

  },
  {
    t0: 'Я бы тоже была этим довольна.',
    t1: 'Damit',
    t2: 'wäre',
    t3: 'ich',
    t4: 'auch',
    t5: 'zufrieden',
    t6: '.',

  },
  {
    t0: 'О ком вы говорите? (redet)',
    t1: 'Über',
    t2: 'wen',
    t3: 'redet',
    t4: 'ihr',
    t5: '?',
  },
  {
    t0: 'Мы говорим о наших учителях.',
    t1: 'Wir',
    t2: 'reden',
    t3: 'über',
    t4: 'unsere',
    t5: 'Lehrer',
    t6: '.',

  },
  {
    t0: 'Чего Вы ждете?',
    t1: 'Worauf',
    t2: 'warten',
    t3: 'Sie',
    t4: '?',

  },
  {
    t0: 'Я жду автобус, который едет на вокзал. (fährt)',
    t1: 'Ich',
    t2: 'warte',
    t3: 'auf',
    t4: 'einen',
    t5: 'Bus',
    t6: ',',
    t7: 'der',
    t8: 'zum',
    t9: 'Bahnhof',
    t10: 'fährt',
    t11: '.',

  },
  {
    t0: 'Я его тоже жду.',
    t1: 'Ich',
    t2: 'warte',
    t3: 'auch',
    t4: 'darauf',
    t5: '.',

  },
  {
    t0: 'О ком ты думаешь?',
    t1: 'An',
    t2: 'wen',
    t3: 'denkst',
    t4: 'du',
    t5: '?',

  },
  {
    t0: 'Я думаю о своем брате.',
    t1: 'Ich',
    t2: 'denke',
    t3: 'an',
    t4: 'meinen',
    t5: 'Bruder',
    t6: '.',

  },
  {
    t0: 'А о чем думаешь ты?',
    t1: 'Und',
    t2: 'woran',
    t3: 'denkst',
    t4: 'du',
    t5: '?',

  },
  {
    t0: 'Наконец начитается чемпионат мира по футболу. Я его так долго ждал. (beginnt Fußball-Weltmeisterschaft)',
    t1: 'Endlich',
    t2: 'beginnt',
    t3: 'die',
    t4: 'Fußball-Weltmeisterschaft',
    t5: '.',
    t6: 'Ich',
    t7: 'habe',
    t8: 'so',
    t9: 'lange',
    t10: 'darauf',
    t11: 'gewartet',
    t12: '.',
  },
  {
    t0: 'Вы им (чемпионатом) тоже интересуетесь?',
    t1: 'Interessiert',
    t2: 'ihr',
    t3: 'euch',
    t4: 'auch',
    t5: 'dafür',
    t6: '?',

  },
  {
    t0: 'Почему вы все время говорите об этом?',
    t1: 'Warum',
    t2: 'redet',
    t3: 'ihr',
    t4: 'immer',
    t5: 'wieder',
    t6: 'darüber',
    t7: '?',

  },
  {
    t0: 'О чем?',
    t1: 'Worüber',
    t2: '?',

  },
  {
    t0: 'О подготовке к экзамену. (Vorbereitung)',
    t1: 'Über',
    t2: 'die',
    t3: 'Vorbereitung',
    t4: 'auf',
    t5: 'die',
    t6: 'Prüfung',
    t7: '.',

  },
  {
    t0: 'Они не довольны своим новым учителем.',
    t1: 'Sie',
    t2: 'sind',
    t3: 'mit',
    t4: 'ihrem',
    t5: 'neuen',
    t6: 'Lehrer',
    t7: 'nicht',
    t8: 'zufrieden',
    t9: '.',

  },
  {
    t0: 'Я им тоже недоволен.',
    t1: 'Ich',
    t2: 'bin',
    t3: 'mit',
    t4: 'ihm',
    t5: 'auch',
    t6: 'nicht',
    t7: 'zufrieden',
    t8: '.',

  },
  {
    t0: 'А ты чем недоволен?',
    t1: 'Und',
    t2: 'womit',
    t3: 'bist',
    t4: 'du',
    t5: 'unzufrieden',
    t6: '?',

  },
  {
    t0: 'Ты тоже думаешь об экзамене?',
    t1: 'Denkst',
    t2: 'du',
    t3: 'auch',
    t4: 'an',
    t5: 'die',
    t6: 'Prüfung',
    t7: '?',

  },
  {
    t0: 'Нет, об этом я не думаю.',
    t1: 'Nein',
    t2: ',',
    t3: 'daran',
    t4: 'denke',
    t5: 'ich',
    t6: 'nicht',
    t7: '.',

  },
  {
    t0: 'О чем он заботится (беспокоиться)?',
    t1: 'Worum',
    t2: 'kümmert',
    t3: 'er',
    t4: 'sich',
    t5: '?',

  },
  {
    t0: 'О своем доме.',
    t1: 'Um',
    t2: 'sein',
    t3: 'Haus',
    t4: '.',

  },
  {
    t0: 'О нем он заботится (беспокоиться) больше всего.',
    t1: 'Darum',
    t2: 'kümmert',
    t3: 'er',
    t4: 'sich',
    t5: 'am',
    t6: 'meisten',
    t7: '.',

  },
  {
    t0: 'Никогда этим особо не интересовался.',
    t1: 'Darüber',
    t2: 'habe',
    t3: 'ich',
    t4: 'mich',
    t5: 'nie',
    t6: 'richtig',
    t7: 'interessiert',
    t8: '.',

  },
  {
    t0: 'Чем?',
    t1: 'Wofür',
    t2: '?',

  },
  {
    t0: 'Защитой окружающей среды. (Umweltschutz)',
    t1: 'Für',
    t2: 'den',
    t3: 'Umweltschutz',
    t4: '.',

  },
  {
    t0: 'Я совсем об этом не подумал.',
    t1: 'Daran',
    t2: 'habe',
    t3: 'ich',
    t4: 'gar',
    t5: 'nicht',
    t6: 'gedacht',
    t7: '.',

  },
  {
    t0: 'Нам стоит об этом чаще говорить.',
    t1: 'Wir',
    t2: 'sollten',
    t3: 'öfter',
    t4: 'darüber',
    t5: 'reden',
    t6: '.',

  },
  {
    t0: 'О ком она сейчас заботится? (derzeit)',
    t1: 'Um',
    t2: 'wen',
    t3: 'kümmert',
    t4: 'sie',
    t5: 'sich',
    t6: 'derzeit',
    t7: '?',

  },
  {
    t0: 'О своем ребенке.',
    t1: 'Um',
    t2: 'ihr',
    t3: 'Kind',
    t4: '.',

  },

]
</script>
