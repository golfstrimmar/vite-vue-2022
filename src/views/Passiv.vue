<template lang="pug">
.container

  .page-title 
    h2 Passiv
  .page-block
    p Существует в 2 формах: 
    p ✔️ несовершенный пассив или по-другому его называют пассив действия (Vorgangspassiv)
    p 👌 Это значит, что действие, которое совершается над объектом не было завершено, мы не знаем его результат.
    p Das Vorgangspassiv stellt den Vorgang, die Handlung oder das Geschehen in den Vordergrund.
    p ✔️ совершенный пассив или по-другому пассив состояния (Zustandspassiv)
    p 👌Это значит, что у нас уже есть результат какого-либо действия. Мы просто констатируем как факт, то что произошло.
    p Das Zustandspassiv drückt ein Ergebnis bzw. einen Zustand aus.
    p Некоторые формы пассивного состояния очень похожи на активные формы.
    p Чтобы узнать, находится ли предложение в пассивном состоянии или в активном состоянии, установите его в пассивное состояние. 
    p Если это возможно, то речь идет о пассиве состояния. Если это невозможно, предложение остается в активе.

    p Manche Formen des Zustandspassivs ähneln sehr den Aktivformen.
    p Um herauszufinden, ob ein Satz im Zustandspassiv oder im Aktiv steht, setzt du ihn ins Vorgangspassiv. Ist das möglich, 
    p handelt es sich um das Zustandspassiv. Ist dies nicht möglich, steht der Satz im Aktiv.
    p(style="color: red;font-weight: 800;") Многие формы пассива не преводятся дословно на русский или звучат некорректно!
    p(style="color: red;font-weight: 800;") Viele Formen des Passivs werden nicht wörtlich ins Russische übersetzt oder klingen falsch!
  Tabs(:items= 'Vorgangs' title='Das Vorgangspassiv' )
  Tabs(:items= 'Zustand' title='Das Zustandspassiv' )
  Tabs(:items= 'VorgangsModalmüssen' title='Passiv mit Modalverb müssen' )
  Tabs(:items= 'VorgangsModalkönnen' title='Passiv mit Modalverb können' )
  Tabs(:items= 'VorgangsModaldürfen' title='Passiv mit Modalverb dürfen' )
  Tabs(:items= 'VorgangsModalsollen' title='Passiv mit Modalverb sollen' )
  Tabs(:items= 'VorgangsModalwollen' title='Passiv mit Modalverb wollen' )
  Tabs(:items= 'VorgangsModalmögen' title='Passiv mit Modalverb mögen' )
  Tabs(:items= 'VorgangsModalmöchten' title='Passiv mit Modalverb möchten' )
  .page-title--small 
    h2 Training Vorgangspassivs
  TabsTraining( title='Vorgangspassivs Präsens' :SlotData='SlotVorgangspassivsPräsens' )
  TabsTraining( title='Vorgangspassivs Präteritum' :SlotData='SlotVorgangspassivsPräteritum' )
  TabsTraining( title='Vorgangspassivs Perfekt' :SlotData='SlotVorgangspassivsPerfekt' )
  TabsTraining( title='Vorgangspassivs Plusquamperfekt' :SlotData='SlotVorgangspassivsPlusquamperfekt' )
  TabsTraining( title='Vorgangspassivs Futurum ' :SlotData='SlotVorgangspassivsFuturum' )
  .page-title--small 
    h2 Training Zustandspassivs
  TabsTraining( title='Zustandspassivs Präsens' :SlotData='SlotZustandspassivsPräsens' )
  TabsTraining( title='Zustandspassivs Präteritum' :SlotData='SlotZustandspassivsPräteritum' )
  TabsTraining( title='Zustandspassivs Perfekt' :SlotData='SlotZustandspassivsPerfekt' )
  TabsTraining( title='Zustandspassivs Plusquamperfekt' :SlotData='SlotZustandspassivsPlusquamperfekt' )
  TabsTraining( title='Zustandspassivs Futurum ' :SlotData='SlotZustandspassivsFuturum' )

  .page-title--small 
    h2 Training Passiv mit Modalverben
  TabsTraining( title='müssen' :SlotData='Slotmüssen' )

 
 



</template>


<script setup>
import Tabs from '@/components/Tabs.vue';
import TabsTraining from '@/components/TabsTraining.vue';



const Slotmüssen = [
  {
    t0: 'Мужчина должен быть прооперирован.',
    t1: 'Der',
    t2: 'Mann',
    t3: 'muss',
    t4: 'operiert',
    t5: 'werden',
    t6: '.',
  },
  {
    t0: 'Я должен быть прооперирован.',
    t1: 'Ich',
    t2: 'muss',
    t3: 'operiert',
    t4: 'werden',
    t5: '.',
  },
  {
    t0: 'Ты должен быть прооперирован.',
    t1: 'Du',
    t2: 'musst',
    t3: 'operiert',
    t4: 'werden',
    t5: '.',
  },
  {
    t0: 'Мы должны быть прооперированы.',
    t1: 'Wir',
    t2: 'müssen',
    t3: 'operiert',
    t4: 'werden',
    t5: '.',
  },
  {
    t0: 'Вы должны быть прооперированы. (ihr)',
    t1: 'Ihr',
    t2: 'müsst',
    t3: 'operiert',
    t4: 'werden',
    t5: '.',
  },
  {
    t0: 'Вы должны были быть прооперированы. (ihr)',
    t1: 'Ihr',
    t2: 'musstet',
    t3: 'operiert',
    t4: 'werden',
    t5: '.',
  },
  {
    t0: 'Вы должны были быть прооперированы. (sie)',
    t1: 'Sie',
    t2: 'mussten',
    t3: 'operiert',
    t4: 'werden',
    t5: '.',
  },
  {
    t0: 'Ты должен был быть прооперирован.',
    t1: 'Du',
    t2: 'musstest',
    t3: 'operiert',
    t4: 'werden',
    t5: '.',
  },
  {
    t0: 'Я должен был быть законченно прооперирован.',
    t1: 'Ich',
    t2: 'habe',
    t3: 'operiert',
    t4: 'werden',
    t5: 'müssen',
    t6: '.',
  },
  {
    t0: 'Ты должен был быть законченно прооперирован.',
    t1: 'Du',
    t2: 'hast',
    t3: 'operiert',
    t4: 'werden',
    t5: 'müssen',
    t6: '.',
  },
  {
    t0: 'Вы должны были быть законченно прооперирован. (Ihr)',
    t1: 'Ihr',
    t2: 'habt',
    t3: 'operiert',
    t4: 'werden',
    t5: 'müssen',
    t6: '.',
  },
  {
    t0: 'Вчера тебе пришлось сделать законченно операцию.',
    t1: 'Du',
    t2: 'hattest',
    t3: 'gestern',
    t4: 'schon',
    t5: 'operiert',
    t6: 'werden',
    t7: 'müssen',
    t8: '.',
  },
  {
    t0: 'Мужчине пришлось сделать операцию.',
    t1: 'Der',
    t2: 'Mann',
    t3: 'hatte',
    t4: 'operiert',
    t5: 'werden',
    t6: 'müssen',
    t7: '.',
  },
  {
    t0: 'Мужчина должен будет быть прооперирован.',
    t1: 'Der',
    t2: 'Mann',
    t3: 'wird',
    t4: 'operiert',
    t5: 'werden',
    t6: 'müssen',
    t7: '.',
  },
]




const VorgangsModalmöchten = [

  {
    title: 'Präsens',
    text1: 'ich,er,sie,es möchte Pt2 werden',
    text2: 'du möchtest Pt2 werden',
    text3: 'ihr möchtet Pt2 werden',
    text4: 'wir,sie,Sie möchten Pt2 werden',

  },
  {
    title: 'Präteritum',
    text1: 'ich,er,sie,es möchtete Pt2 werden',
    text2: 'du möchtetest Pt2 werden',
    text3: 'ihr möchtetet Pt2 werden',
    text4: 'wir,sie,Sie möchteten Pt2 werden',

  },
  {
    title: 'Perfekt',
    text1: 'ich habe Pt2 werden möchten',
    text2: 'du hast Pt2 werden möchten',
    text3: 'er,sie,es hat Pt2 werden möchten',
    text4: 'ihr habt Pt2 werden möchten',
    text5: 'wir,sie,Sie haben Pt2 werden möchten'
  },
  {
    title: 'Plusquamperfekt',
    text1: 'ich,er,sie,es hatte Pt2 werden möchten',
    text2: 'du hattest Pt2 werden möchten',
    text3: 'ihr hattet Pt2 werden möchten',
    text4: 'wir,sie,Sie hatten Pt2 werden möchten'
  },
  {
    title: 'Futur I',
    text1: 'ich werde Pt2 werden möchten',
    text2: 'du wirst Pt2 werden möchten',
    text3: 'er,sie,es wird Pt2 werden möchten',
    text4: 'ihr werdet Pt2 werden möchten',
    text5: 'wir,sie,Sie werden Pt2 werden möchten'
  },

]
const VorgangsModalmögen = [

  {
    title: 'Präsens',
    text1: 'ich,er,sie,es mag Pt2 werden',
    text2: 'du magst Pt2 werden',
    text3: 'ihr mögt Pt2 werden',
    text4: 'wir,sie,Sie mögen Pt2 werden',

  },
  {
    title: 'Präteritum',
    text1: 'ich,er,sie,es mochte Pt2 werden',
    text2: 'du mochtest Pt2 werden',
    text3: 'ihr mochtet Pt2 werden',
    text4: 'wir,sie,Sie mochten Pt2 werden',

  },
  {
    title: 'Perfekt',
    text1: 'ich habe Pt2 werden mögen',
    text2: 'du hast Pt2 werden mögen',
    text3: 'er,sie,es hat Pt2 werden mögen',
    text4: 'ihr habt Pt2 werden mögen',
    text5: 'wir,sie,Sie haben Pt2 werden mögen'
  },
  {
    title: 'Plusquamperfekt',
    text1: 'ich,er,sie,es hatte Pt2 werden mögen',
    text2: 'du hattest Pt2 werden mögen',
    text3: 'ihr hattet Pt2 werden mögen',
    text4: 'wir,sie,Sie hatten Pt2 werden mögen'
  },
  {
    title: 'Futur I',
    text1: 'ich werde Pt2 werden mögen',
    text2: 'du wirst Pt2 werden mögen',
    text3: 'er,sie,es wird Pt2 werden mögen',
    text4: 'ihr werdet Pt2 werden mögen',
    text5: 'wir,sie,Sie werden Pt2 werden mögen'
  },

]
const VorgangsModalwollen = [

  {
    title: 'Präsens',
    text1: 'ich,er,sie,es will Pt2 werden',
    text2: 'du willst Pt2 werden',
    text3: 'ihr wollt Pt2 werden',
    text4: 'wir,sie,Sie wollen Pt2 werden',

  },
  {
    title: 'Präteritum',
    text1: 'ich,er,sie,es wollte Pt2 werden',
    text2: 'du wolltest Pt2 werden',
    text3: 'ihr wolltet Pt2 werden',
    text4: 'wir,sie,Sie wollten Pt2 werden',

  },
  {
    title: 'Perfekt',
    text1: 'ich habe Pt2 werden wollen',
    text2: 'du hast Pt2 werden wollen',
    text3: 'er,sie,es hat Pt2 werden wollen',
    text4: 'ihr habt Pt2 werden wollen',
    text5: 'wir,sie,Sie haben Pt2 werden wollen'
  },
  {
    title: 'Plusquamperfekt',
    text1: 'ich,er,sie,es hatte Pt2 werden wollen',
    text2: 'du hattest Pt2 werden wollen',
    text3: 'ihr hattet Pt2 werden wollen',
    text4: 'wir,sie,Sie hatten Pt2 werden wollen'
  },
  {
    title: 'Futur I',
    text1: 'ich werde Pt2 werden wollen',
    text2: 'du wirst Pt2 werden wollen',
    text3: 'er,sie,es wird Pt2 werden wollen',
    text4: 'ihr werdet Pt2 werden wollen',
    text5: 'wir,sie,Sie werden Pt2 werden wollen'
  },

]
const VorgangsModalsollen = [

  {
    title: 'Präsens',
    text1: 'ich,er,sie,es soll Pt2 werden',
    text2: 'du sollst Pt2 werden',
    text3: 'ihr sollt Pt2 werden',
    text4: 'wir,sie,Sie sollen Pt2 werden',

  },
  {
    title: 'Präteritum',
    text1: 'ich,er,sie,es sollte Pt2 werden',
    text2: 'du solltest Pt2 werden',
    text3: 'ihr solltet Pt2 werden',
    text4: 'wir,sie,Sie sollten Pt2 werden',

  },
  {
    title: 'Perfekt',
    text1: 'ich habe Pt2 werden sollen',
    text2: 'du hast Pt2 werden sollen',
    text3: 'er,sie,es hat Pt2 werden sollen',
    text4: 'ihr habt Pt2 werden sollen',
    text5: 'wir,sie,Sie haben Pt2 werden sollen'
  },
  {
    title: 'Plusquamperfekt',
    text1: 'ich,er,sie,es hatte Pt2 werden sollen',
    text2: 'du hattest Pt2 werden sollen',
    text3: 'ihr hattet Pt2 werden sollen',
    text4: 'wir,sie,Sie hatten Pt2 werden sollen'
  },
  {
    title: 'Futur I',
    text1: 'ich werde Pt2 werden sollen',
    text2: 'du wirst Pt2 werden sollen',
    text3: 'er,sie,es wird Pt2 werden sollen',
    text4: 'ihr werdet Pt2 werden sollen',
    text5: 'wir,sie,Sie werden Pt2 werden sollen'
  },

]
const VorgangsModaldürfen = [

  {
    title: 'Präsens',
    text1: 'ich,er,sie,es darf Pt2 werden',
    text2: 'du darfst Pt2 werden',
    text3: 'ihr dürft Pt2 werden',
    text4: 'wir,sie,Sie dürfen Pt2 werden',

  },
  {
    title: 'Präteritum',
    text1: 'ich,er,sie,es durfte Pt2 werden',
    text2: 'du durftest Pt2 werden',
    text3: 'ihr durftet Pt2 werden',
    text4: 'wir,sie,Sie durften Pt2 werden',

  },
  {
    title: 'Perfekt',
    text1: 'ich habe Pt2 werden dürfen',
    text2: 'du hast Pt2 werden dürfen',
    text3: 'er,sie,es hat Pt2 werden dürfen',
    text4: 'ihr habt Pt2 werden dürfen',
    text5: 'wir,sie,Sie haben Pt2 werden dürfen'
  },
  {
    title: 'Plusquamperfekt',
    text1: 'ich,er,sie,es hatte Pt2 werden dürfen',
    text2: 'du hattest Pt2 werden dürfen',
    text3: 'ihr hattet Pt2 werden dürfen',
    text4: 'wir,sie,Sie hatten Pt2 werden dürfen'
  },
  {
    title: 'Futur I',
    text1: 'ich werde Pt2 werden dürfen',
    text2: 'du wirst Pt2 werden dürfen',
    text3: 'er,sie,es wird Pt2 werden dürfen',
    text4: 'ihr werdet Pt2 werden dürfen',
    text5: 'wir,sie,Sie werden Pt2 werden dürfen'
  },
]
const VorgangsModalkönnen = [

  {
    title: 'Präsens',
    text1: 'ich,er,sie,es kann Pt2 werden',
    text2: 'du kannst Pt2 werden',
    text3: 'ihr könnt Pt2 werden',
    text4: 'wir,sie,Sie können Pt2 werden',

  },
  {
    title: 'Präteritum',
    text1: 'ich,er,sie,es konnte Pt2 werden',
    text2: 'du konntest Pt2 werden',
    text3: 'ihr konntet Pt2 werden',
    text4: 'wir,sie,Sie konnten Pt2 werden',

  },
  {
    title: 'Perfekt',
    text1: 'ich habe Pt2 werden können',
    text2: 'du hast Pt2 werden können',
    text3: 'er,sie,es hat Pt2 werden können',
    text4: 'ihr habt Pt2 werden können',
    text5: 'wir,sie,Sie haben Pt2 werden können'
  },
  {
    title: 'Plusquamperfekt',
    text1: 'ich,er,sie,es hatte Pt2 werden können',
    text2: 'du hattest Pt2 werden können',
    text3: 'ihr hattet Pt2 werden können',
    text4: 'wir,sie,Sie hatten Pt2 werden können'
  },
  {
    title: 'Futur I',
    text1: 'ich werde Pt2 werden können',
    text2: 'du wirst Pt2 werden können',
    text3: 'er,sie,es wird Pt2 werden können',
    text4: 'ihr werdet Pt2 werden können',
    text5: 'wir,sie,Sie werden Pt2 werden können'
  },

]
const VorgangsModalmüssen = [

  {
    title: 'Präsens',
    text1: 'ich,er,sie,es muss Pt2 werden',
    text2: 'du musst Pt2 werden',
    text3: 'ihr müsst Pt2 werden',
    text4: 'wir,sie,Sie müssen Pt2 werden',

  },
  {
    title: 'Präteritum',
    text1: 'ich,er,sie,es musste Pt2 werden',
    text2: 'du musstest Pt2 werden',
    text3: 'ihr musstet Pt2 werden',
    text4: 'wir,sie,Sie mussten Pt2 werden',

  },
  {
    title: 'Perfekt',
    text1: 'ich habe Pt2 werden müssen',
    text2: 'du hast Pt2 werden müssen',
    text3: 'er,sie,es hat Pt2 werden müssen',
    text4: 'ihr habt Pt2 werden müssen',
    text5: 'wir,sie,Sie haben Pt2 werden müssen'
  },
  {
    title: 'Plusquamperfekt',
    text1: 'ich,er,sie,es hatte Pt2 werden müssen',
    text2: 'du hattest Pt2 werden müssen',
    text3: 'ihr hattet Pt2 werden müssen',
    text4: 'wir,sie,Sie hatten Pt2 werden müssen'
  },
  {
    title: 'Futur I',
    text1: 'ich werde Pt2 werden müssen',
    text2: 'du wirst Pt2 werden müssen',
    text3: 'er,sie,es wird Pt2 werden müssen',
    text4: 'ihr werdet Pt2 werden müssen',
    text5: 'wir,sie,Sie werden Pt2 werden müssen'
  },

]
const Vorgangs = [

  {
    title: 'Präsens',
    text1: 'ich werde Pt2',
    text2: 'du wirst Pt2',
    text3: 'er,sie,es wird Pt2',
    text4: 'ihr werdet Pt2',
    text5: 'wir,sie,Sie werden Pt2',

  },
  {
    title: 'Präteritum',
    text1: 'ich wurde Pt2',
    text2: 'du wurdest Pt2',
    text3: 'er,sie,es wurde Pt2',
    text4: 'ihr wurdet Pt2',
    text5: 'wir,sie,Sie wurden Pt2',

  },
  {
    title: 'Perfekt',
    text1: 'ich bin Pt2 worden',
    text2: 'du bist Pt2 worden',
    text3: 'er,sie,es ist Pt2 worden',
    text4: 'ihr seid Pt2 worden',
    text5: 'wir,sie,Sie sind Pt2 worden',
  },
  {
    title: 'Plusquamperfekt',
    text1: 'ich war Pt2 worden',
    text2: 'du warst Pt2 worden',
    text3: 'er,sie,es ist war Pt2 worden',
    text4: 'ihr wart Pt2 worden',
    text5: 'wir,sie,Sie waren Pt2 worden',

  },
  {
    title: 'Futur',
    text1: 'ich werde Pt2 werden',
    text2: 'du wirst Pt2 werden',
    text3: 'er,sie,es wird Pt2 werden',
    text4: 'ihr werdet Pt2 werden',
    text5: 'wir,sie,Sie werden Pt2 werden',
  },
]
const Zustand = [

  {
    title: 'Präsens',
    text1: 'ich bin Pt2',
    text2: 'du bist Pt2',
    text3: 'er,sie,es ist Pt2',
    text4: 'ihr seid Pt2',
    text5: 'wir,sie,Sie sind Pt2',

  },
  {
    title: 'Präteritum',
    text1: 'ich war Pt2',
    text2: 'du warst Pt2',
    text3: 'er,sie,es war Pt2',
    text4: 'ihr wart Pt2',
    text5: 'wir,sie,Sie waren Pt2',

  },
  {
    title: 'Perfekt',
    text1: 'ich bin Pt2 gewesen',
    text2: 'du bist Pt2 gewesen',
    text3: 'er,sie,es ist Pt2 gewesen',
    text4: 'ihr seid Pt2 gewesen',
    text5: 'wir,sie,Sie sind Pt2 gewesen',
  },
  {
    title: 'Plusquamperfekt',
    text1: 'ich war Pt2 gewesen',
    text2: 'du warst Pt2 gewesen',
    text3: 'er,sie,es ist war Pt2 gewesen',
    text4: 'ihr wart Pt2 gewesen',
    text5: 'wir,sie,Sie waren Pt2 gewesen',

  },
  {
    title: 'Futur',
    text1: 'ich werde Pt2 sein',
    text2: 'du wirst Pt2 sein',
    text3: 'er,sie,es wird Pt2 sein',
    text4: 'ihr werdet Pt2 sein',
    text5: 'wir,sie,Sie werden Pt2 sein',
  },
]



const SlotVorgangspassivsPräsens = [
  {
    t0: 'Он пострадаем. (verletzt)',
    t1: 'Er',
    t2: 'wird',
    t3: 'verletzt',
    t4: '.',

  },
  {
    t0: 'Экзамен пишется. (Prüfung)',
    t1: 'Die',
    t2: 'Prüfung',
    t3: 'wird',
    t4: 'geschrieben',
    t5: '.',

  },
  {
    t0: 'Велосипед заблокироваем. (Fahrrad abgeschlossen)',
    t1: 'Das',
    t2: 'Fahrrad',
    t3: 'wird',
    t4: 'abgeschlossen',
    t5: '.',

  },
  {
    t0: 'Картофель нарезается поваром.(Kartoffeln Koch geschnitten)',
    t1: 'Kartoffeln',
    t2: 'werden',
    t3: 'vom',
    t4: 'Koch',
    t5: 'geschnitten',
    t6: '.',

  },
  {
    t0: 'Сейчас десерт приносим.(Gleich Nachtisch gebracht)',
    t1: 'Gleich',
    t2: 'wird',
    t3: 'der',
    t4: 'Nachtisch',
    t5: 'gebracht',
    t6: '.',

  },
  {
    t0: 'Ведется борьба с бедностью.(Armut gekämpft)',
    t1: 'Es',
    t2: 'wird',
    t3: 'gegen',
    t4: 'die',
    t5: 'Armut',
    t6: 'gekämpft',
    t7: '.',

  },
  {
    t0: 'Ожидается хорошая погода.(Wetter gewartet)',
    t1: 'Es',
    t2: 'wird',
    t3: 'auf',
    t4: 'gutes',
    t5: 'Wetter',
    t6: 'gewartet',
    t7: '.',

  },
  {
    t0: 'Билеты проверяются кондуктором.(Fahrkarten Schaffner geprüft)',
    t1: 'Die',
    t2: 'Fahrkarten',
    t3: 'werden',
    t4: 'vom',
    t5: 'Schaffner',
    t6: 'geprüft',
    t7: '.',

  },
  {
    t0: 'Здесь не курят.(Hier geraucht)',
    t1: 'Hier',
    t2: 'wird',
    t3: 'nicht',
    t4: 'geraucht',
    t5: '.',

  },
  {
    t0: 'А теперь - спать!(Jetzt geschlafen)',
    t1: 'Jetzt',
    t2: 'wird',
    t3: 'aber',
    t4: 'geschlafen',
    t5: '!',

  },
  {
    t0: 'Цветы поливаются бабушкой.(Blumen Oma gegossen)',
    t1: 'Die',
    t2: 'Blumen',
    t3: 'werden',
    t4: 'von',
    t5: 'der',
    t6: 'Oma',
    t7: 'gegossen',
    t8: '.',

  },

]
const SlotVorgangspassivsPräteritum = [
  {
    t0: 'Вы были создаваемы очень красивыми. (schön gemacht)',
    t1: 'Ihr',
    t2: 'wurdet',
    t3: 'sehr',
    t4: 'schön',
    t5: 'gemacht',
    t6: '.',

  },
  {
    t0: 'Альпинисты были застигаемы врасплох грозой. (Bergsteiger Gewitter überrascht)',
    t1: 'Die',
    t2: 'Bergsteiger',
    t3: 'wurden',
    t4: 'von',
    t5: 'einem',
    t6: 'Gewitter',
    t7: 'überrascht',
    t8: '.',

  },
  {
    t0: 'Мне ничего не подаривали. (geschenkt)',
    t1: 'Mir',
    t2: 'wurde',
    t3: 'nichts',
    t4: 'geschenkt',
    t5: '.',

  },
  {
    t0: 'Я был вчера осмотрен врачем.(Arzt untersucht)',
    t1: 'Ich',
    t2: 'wurde',
    t3: 'gestern',
    t4: 'vom',
    t5: 'Arzt',
    t6: 'untersucht',
    t7: '.',

  },
  {
    t0: 'В Кельне шумели о карнавале.(Köln Karneval geschunkelt)',
    t1: 'In',
    t2: 'Köln',
    t3: 'wurde',
    t4: 'über',
    t5: 'Karneval',
    t6: 'geschunkelt',
    t7: '.',

  },
  {
    t0: 'В сентябре в Баварии был открываем Октоберфест.(Bayern Oktoberfest eröffnet)',
    t1: 'In',
    t2: 'Bayern',
    t3: 'wurde',
    t4: 'das',
    t5: 'Oktoberfest',
    t6: 'eröffnet',
    t7: '.',

  },
  {
    t0: 'Осенью был картофель собираем.(Herbst Kartoffeln geerntet)',
    t1: 'Im',
    t2: 'Herbst',
    t3: 'wurden',
    t4: 'die',
    t5: 'Kartoffeln',
    t6: 'geerntet',
    t7: '.',

  },
  {
    t0: 'Автомобиль был строен в Вольфсбурге.(Auto Wolfsburg gebaut)',
    t1: 'Das',
    t2: 'Auto',
    t3: 'wurde',
    t4: 'in',
    t5: 'Wolfsburg',
    t6: 'gebaut',
    t7: '.',

  },
  {
    t0: 'Проблема обсуждалась многими сотрудниками.(Problem Angestellten diskutiert)',
    t1: 'Das',
    t2: 'Problem',
    t3: 'wurde',
    t4: 'von',
    t5: 'vielen',
    t6: 'Angestellten',
    t7: 'diskutiert',
    t8: '.',

  },
  {
    t0: 'Вы были выбираемы, чтобы обеспечить выживание человечества.(auserwählt Überleben Menschheit sichern)',
    t1: 'Ihr',
    t2: 'wurdet',
    t3: 'auserwählt',
    t4: ',',
    t5: 'um',
    t6: 'das',
    t7: 'Überleben',
    t8: 'der',
    t9: 'Menschheit',
    t10: 'zu',
    t11: 'sichern',
    t12: '.',

  },

]
const SlotVorgangspassivsPerfekt = [
  {
    t0: 'Автомобиль был построен в Вольфсбурге. (Auto Wolfsburg)',
    t1: 'Das',
    t2: 'Auto',
    t3: 'ist',
    t4: 'in',
    t5: 'Wolfsburg',
    t6: 'gebaut',
    t7: 'worden',
    t8: '.',

  },
  {
    t0: 'Октоберфест открыт в Баварии. (Bayern Oktoberfest eröffnet)',
    t1: 'In',
    t2: 'Bayern',
    t3: 'ist',
    t4: 'das',
    t5: 'Oktoberfest',
    t6: 'eröffnet',
    t7: 'worden',
    t8: '.',

  },
  {
    t0: 'Картофель собран осенью. (Herbst Kartoffeln geerntet)',
    t1: 'Im',
    t2: 'Herbst',
    t3: 'sind',
    t4: 'die',
    t5: 'Kartoffeln',
    t6: 'geerntet',
    t7: 'worden',
    t8: '.',

  },
  {
    t0: 'Я уже дважды был прооперирован. (schon zweimal operiert)',
    t1: 'Ich',
    t2: 'bin',
    t3: 'schon',
    t4: 'zweimal',
    t5: 'operiert',
    t6: 'worden',
    t7: '.',

  },
  {
    t0: 'Окна разбиты ветром. (Fenster durch Wind gebrochen)',
    t1: 'Die',
    t2: 'Fenster',
    t3: 'sind',
    t4: 'durch',
    t5: 'den',
    t6: 'Wind',
    t7: 'gebrochen',
    t8: 'worden',
    t9: '.',

  },
  {
    t0: 'Телевизор был отремонтирован мастером. (Fernseher Meister repariert)',
    t1: 'Der',
    t2: 'Fernseher',
    t3: 'ist',
    t4: 'vom',
    t5: 'Meister',
    t6: 'repariert',
    t7: 'worden',
    t8: '.',

  },
  {
    t0: 'Был ли построен мост? (Brücke gebaut)',
    t1: 'Ist',
    t2: 'die',
    t3: 'Brücke',
    t4: 'gebaut',
    t5: 'worden',
    t6: '?',

  },

]
const SlotVorgangspassivsPlusquamperfekt = [
  {
    t0: 'Белье выстиралось. (Wäsche gewaschen)',
    t1: 'Die',
    t2: 'Wäsche',
    t3: 'war',
    t4: 'gewaschen',
    t5: 'worden',
    t6: '.',

  },
  {
    t0: 'Проблема обсуждалась многими сотрудниками.(Problem vielen Angestellten diskutiert)',
    t1: 'Das',
    t2: 'Problem',
    t3: 'war',
    t4: 'von',
    t5: 'vielen',
    t6: 'Angestellten',
    t7: 'diskutiert',
    t8: 'worden',
    t9: '.',

  },
  {
    t0: 'Вчера меня осмотрел врач.(Arzt untersucht)',
    t1: 'Ich',
    t2: 'war',
    t3: 'gestern',
    t4: 'vom',
    t5: 'Arzt',
    t6: 'untersucht',
    t7: 'worden',
    t8: '.',

  },
  {
    t0: 'Текст был переведен двести лет назад.(Text zweihundert Jahren übersetzt)',
    t1: 'Der',
    t2: 'Text',
    t3: 'war',
    t4: 'vor',
    t5: 'zweihundert',
    t6: 'Jahren',
    t7: 'übersetzt',
    t8: 'worden',
    t9: '.',

  },
  {
    t0: 'Вы были очень красиво нарисованы.(sehr gemalt)',
    t1: 'Ihr',
    t2: 'wart',
    t3: 'sehr',
    t4: 'schön',
    t5: 'gemalt',
    t6: 'worden',
    t7: '.',

  },
  {
    t0: 'Эти вазы были изготовлены в Китае.(Vasen China hergestellt)',
    t1: 'Diese',
    t2: 'Vasen',
    t3: 'waren',
    t4: 'in',
    t5: 'China',
    t6: 'hergestellt',
    t7: 'worden',
    t8: '.',

  },
  {
    t0: 'Эта церковь была построена в шестнадцатом столетии.(Kirche sechzehnten Jahrhundert gebaut)',
    t1: 'Diese',
    t2: 'Kirche',
    t3: 'war',
    t4: 'im',
    t5: 'sechzehnten',
    t6: 'Jahrhundert',
    t7: 'gebaut',
    t8: 'worden',
    t9: '.',

  },

]
const SlotVorgangspassivsFuturum = [
  {
    t0: 'Завтра я буду осматриваем врачем.(morgen Arzt untersucht)',
    t1: 'Ich',
    t2: 'werde',
    t3: 'morgen',
    t4: 'vom',
    t5: 'Arzt',
    t6: 'untersucht',
    t7: 'werden',
    t8: '.',

  },
  {
    t0: 'Ты будешь хорошо подготавливаем учителями.(Lehrern vorbereitet)',
    t1: 'Du',
    t2: 'wirst',
    t3: 'von',
    t4: 'Lehrern',
    t5: 'gut',
    t6: 'vorbereitet',
    t7: 'werden',
    t8: '.',

  },
  {
    t0: 'Габи тоже будет приглашаема на вечеринку.(Gabi Party eingeladen)',
    t1: 'Gabi',
    t2: 'wird',
    t3: 'auch',
    t4: 'zur',
    t5: 'Party',
    t6: 'eingeladen',
    t7: 'werden',
    t8: '.',

  },
  {
    t0: 'Вы будете очень красиво раскрашиваемы.(sehr schön gemalt)',
    t1: 'Ihr',
    t2: 'werdet',
    t3: 'sehr',
    t4: 'schön',
    t5: 'gemalt',
    t6: 'werden',
    t7: '.',

  },
  {
    t0: 'Герр Майер, вы тоже будете приглашаемы.(Mayer eingeladen)',
    t1: 'Herr',
    t2: 'Mayer',
    t3: ',',
    t4: 'Sie',
    t5: 'werden',
    t6: 'auch',
    t7: 'eingeladen',
    t8: 'werden',
    t9: '.',

  },

  {
    t0: 'Пациент будет спасаем операцией.(Patient Operation gerettet)',
    t1: 'Der',
    t2: 'Patient',
    t3: 'wird',
    t4: 'durch',
    t5: 'die',
    t6: 'Operation',
    t7: 'gerettet',
    t8: 'werden',
    t9: '.',

  },

]
const SlotZustandspassivsPräsens = [
  {
    t0: 'Дверь закрыта.(Tür geschlossen)',
    t1: 'Die',
    t2: 'Tür',
    t3: 'ist',
    t4: 'geschlossen',
    t5: '.',

  },
  {
    t0: 'Пациент прооперирован.(Patient operiert)',
    t1: 'Der',
    t2: 'Patient',
    t3: 'ist',
    t4: 'operiert',
    t5: '.',

  },
  {
    t0: 'Автомобиль отремонтирован.(Auto repariert)',
    t1: 'Das',
    t2: 'Auto',
    t3: 'ist',
    t4: 'repariert',
    t5: '.',

  },
  {
    t0: 'Кровати уже заправлены.(Betten bereits gemacht)',
    t1: 'Die',
    t2: 'Betten',
    t3: 'sind',
    t4: 'bereits',
    t5: 'gemacht',
    t6: '.',

  },
  {
    t0: 'Магазины сегодня закрыты.(Heute Läden geschlossen)',
    t1: 'Heute',
    t2: 'sind',
    t3: 'die',
    t4: 'Läden',
    t5: 'geschlossen',
    t6: '.',

  },
  {
    t0: 'Во многих семьях телевизор включен всю ночь.(Haushalten Fernsehgerät Nacht eingeschaltet)',
    t1: 'In',
    t2: 'vielen',
    t3: 'Haushalten',
    t4: 'ist',
    t5: 'das',
    t6: 'Fernsehgerät',
    t7: 'die',
    t8: 'ganze',
    t9: 'Nacht',
    t10: 'über',
    t11: 'eingeschaltet',
    t12: '.',

  },
  {
    t0: 'Японские АЭС закрыты.(japanischen Atomkraftwerke abgeschaltet)',
    t1: 'Die',
    t2: 'japanischen',
    t3: 'Atomkraftwerke',
    t4: 'sind',
    t5: 'abgeschaltet',
    t6: '.',

  },
  {
    t0: 'Магазин закрыт на три недели.(Geschäft drei Wochen lang geschlossen)',
    t1: 'Das',
    t2: 'Geschäft',
    t3: 'ist',
    t4: 'drei',
    t5: 'Wochen',
    t6: 'lang',
    t7: 'geschlossen',
    t8: '.',

  },
]
const SlotZustandspassivsPräteritum = [
  {
    t0: 'Вчера магазины были закрыты. (Gestern Läden geschlossen)',
    t1: 'Gestern',
    t2: 'waren',
    t3: 'die',
    t4: 'Läden',
    t5: 'geschlossen',
    t6: '.',

  },
  {
    t0: 'Мужчина получил серьезные ранения. (Mann schwer verletzt)',
    t1: 'Der',
    t2: 'Mann',
    t3: 'war',
    t4: 'schwer',
    t5: 'verletzt',
    t6: '.',

  },
  {
    t0: 'Забор был свежепокрашен. (Zaun frisch gestrichen)',
    t1: 'Der',
    t2: 'Zaun',
    t3: 'war',
    t4: 'frisch',
    t5: 'gestrichen',
    t6: '.',

  },
  {
    t0: 'Дверь была заперта. (Tür zugesperrt)',
    t1: 'Die',
    t2: 'Tür',
    t3: 'war',
    t4: 'zugesperrt',
    t5: '.',

  },
  {
    t0: 'Ты был прооперирован. (operiert)',
    t1: 'Du',
    t2: 'warst',
    t3: 'operiert',
    t4: '.',

  },
  {
    t0: 'Экзамен был написан.(Prüfung geschrieben)',
    t1: 'Die',
    t2: 'Prüfung',
    t3: 'war',
    t4: 'geschrieben',
    t5: '.',

  },

]
const SlotZustandspassivsPerfekt = [
  {
    t0: 'Вчера магазины были закрыты уже в 8 утра. (Gestern Läden geschlossen)',
    t1: 'Gestern',
    t2: 'sind',
    t3: 'die',
    t4: 'Geschäfte',
    t5: 'um',
    t6: '8',
    t7: 'Uhr',
    t8: 'bereits',
    t9: 'geschlossen',
    t10: 'gewesen',
    t11: '.',
  },
  {
    t0: 'Экзамен уже написан. (Prüfung geschrieben)',
    t1: 'Die',
    t2: 'Prüfung',
    t3: 'ist',
    t4: 'geschrieben',
    t5: 'gewesen',
    t6: '.',
  },
]
const SlotZustandspassivsPlusquamperfekt = [
  {
    t0: 'Экзамен уже был написан. (Prüfung geschrieben)',
    t1: 'Die',
    t2: 'Prüfung',
    t3: 'war',
    t4: 'geschrieben',
    t5: 'gewesen',
    t6: '.',

  }, {
    t0: 'Вчера магазины уже были закрыты. (Gestern Läden geschlossen)',
    t1: 'Gestern',
    t2: 'waren',
    t3: 'die',
    t4: 'Läden',
    t5: 'geschlossen',
    t6: 'gewesen',
    t7: '.',

  },
]
const SlotZustandspassivsFuturum = [
  {
    t0: 'Экзамен будет написан. (Prüfung geschrieben)',
    t1: 'Die',
    t2: 'Prüfung',
    t3: 'wird',
    t4: 'geschrieben',
    t5: 'sein',
    t6: '.',

  },
  {
    t0: 'Кровати завтра тоже будут заправлены . (Betten gemacht morgen )',
    t1: 'Die',
    t2: 'Betten',
    t3: 'werden',
    t4: 'auch',
    t5: 'morgen',
    t6: 'gemacht',
    t7: 'sein',
    t8: '.',

  },
  {
    t0: 'Завтра машину отремонтируют. (Auto morgen repariert)',
    t1: 'Das',
    t2: 'Auto',
    t3: 'wird',
    t4: 'morgen',
    t5: 'repariert',
    t6: 'sein',
    t7: '.',
  },
]

</script>

<style lang="scss">
p {
  padding: 3px 0;
}
</style>