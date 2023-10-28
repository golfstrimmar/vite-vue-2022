<template lang="pug">
.container
  .page-title 
    h2 Demonstrativpronomen
  Tabs(:items= 'Nom' title='Nominativ ' )
  Tabs(:items= 'Dativ' title='Dativ' )
  Tabs(:items= 'Akkusativ' title='Akkusativ' )
  Tabs(:items= 'Genitiv' title='Genitiv' )
  .page-block
    .page-title--small 
      h3 Training
    Plaza
    Slot(:SlotData='SlotDataDemonstrativ')

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
import { ref } from 'vue';
// import Content from '@/components/Content.vue';
import Tabs from '@/components/Tabs.vue';
import Plaza from '@/components/Plaza.vue';
import Slot from '@/components/Slot.vue'

const Nom = ref([

  {
    title: 'männlichen',
    text1: 'der',
    text2: 'dieser/jener',
    text3: 'derjenige',
    text4: 'derselbe',
    text5: 'solch ein',
    svg1: 'man',
    svg2: 'man',
    svg3: 'man',
    svg4: 'man',
    svg5: 'man',
  },
  {
    title: 'weiblichen',
    text1: 'die',
    text2: 'diese/jene',
    text3: 'diejenige',
    text4: 'dieselbe',
    text5: 'solch eine',
    svg1: 'frau',
    svg2: 'frau',
    svg3: 'frau',
    svg4: 'frau',
    svg5: 'frau',

  },
  {
    title: 'neutrum',
    text1: 'das',
    text2: 'dieses/jenes',
    text3: 'dasjenige',
    text4: 'dasselbe',
    text5: 'solch ein',
    svg1: 'das',
    svg2: 'das',
    svg3: 'das',
    svg4: 'das',
    svg5: 'das',

  },
  {
    title: 'plural',
    text1: 'die',
    text2: 'diese/jene',
    text3: 'diejenigen',
    text4: 'dieselben',
    text5: 'solche',
    svg1: 'group',
    svg2: 'group',
    svg3: 'group',
    svg4: 'group',
    svg5: 'group',

  },
])
const Dativ = ref([

  {
    title: 'männlichen',
    text1: 'dem',
    text2: 'diesem/jenem',
    text3: 'demjenigen',
    text4: 'demselben',
    text5: 'solch einem',
    svg1: 'man',
    svg2: 'man',
    svg3: 'man',
    svg4: 'man',
    svg5: 'man',
  },
  {
    title: 'weiblichen',
    text1: 'der',
    text2: 'dieser/jener',
    text3: 'derjenigen',
    text4: 'derselben',
    text5: 'solch einer',
    svg1: 'frau',
    svg2: 'frau',
    svg3: 'frau',
    svg4: 'frau',
    svg5: 'frau',

  },
  {
    title: 'neutrum',
    text1: 'dem',
    text2: 'diesem/jenem',
    text3: 'demjenigen',
    text4: 'demselben',
    text5: 'solch einem',
    svg1: 'das',
    svg2: 'das',
    svg3: 'das',
    svg4: 'das',
    svg5: 'das',

  },
  {
    title: 'plural',
    text1: 'denen',
    text2: 'diesen/jenen',
    text3: 'denjenigen',
    text4: 'denselben',
    text5: 'solchen',
    svg1: 'group',
    svg2: 'group',
    svg3: 'group',
    svg4: 'group',
    svg5: 'group',

  },
])
const Akkusativ = ref([

  {
    title: 'männlichen',
    text1: 'den',
    text2: 'diesen/jenen',
    text3: 'denjenigen',
    text4: 'denselben',
    text5: 'solch einen',
    svg1: 'man',
    svg2: 'man',
    svg3: 'man',
    svg4: 'man',
    svg5: 'man',
  },
  {
    title: 'weiblichen',
    text1: 'die',
    text2: 'diese/jene',
    text3: 'diejenige',
    text4: 'dieselbe',
    text5: 'solch eine',
    svg1: 'frau',
    svg2: 'frau',
    svg3: 'frau',
    svg4: 'frau',
    svg5: 'frau',

  },
  {
    title: 'neutrum',
    text1: 'das',
    text2: 'dieses/jenes',
    text3: 'dasjenige',
    text4: 'dasselbe',
    text5: 'solch ein',
    svg1: 'das',
    svg2: 'das',
    svg3: 'das',
    svg4: 'das',
    svg5: 'das',

  },
  {
    title: 'plural',
    text1: 'die',
    text2: 'diese/jene',
    text3: 'diejenigen',
    text4: 'dieselben',
    text5: 'solche',
    svg1: 'group',
    svg2: 'group',
    svg3: 'group',
    svg4: 'group',
    svg5: 'group',

  },
])
const Genitiv = ref([

  {
    title: 'männlichen',
    text1: 'dessen',
    text2: 'dieses/jenes',
    text3: 'desjenigen',
    text4: 'desselben',
    text5: 'solch eines',
    svg1: 'man',
    svg2: 'man',
    svg3: 'man',
    svg4: 'man',
    svg5: 'man',
  },
  {
    title: 'weiblichen',
    text1: 'deren',
    text2: 'dieser/jener',
    text3: 'derjenigen',
    text4: 'derselben',
    text5: 'solch einer',
    svg1: 'frau',
    svg2: 'frau',
    svg3: 'frau',
    svg4: 'frau',
    svg5: 'frau',

  },
  {
    title: 'neutrum',
    text1: 'dessen',
    text2: 'dieses/jenes',
    text3: 'desjenigen',
    text4: 'desselben',
    text5: 'solch eines',
    svg1: 'das',
    svg2: 'das',
    svg3: 'das',
    svg4: 'das',
    svg5: 'das',

  },
  {
    title: 'plural',
    text1: 'deren/derer',
    text2: 'dieser/jener',
    text3: 'derjenigen',
    text4: 'derselben',
    text5: 'solher',
    svg1: 'group',
    svg2: 'group',
    svg3: 'group',
    svg4: 'group',
    svg5: 'group',

  },
])



const SlotDataDemonstrativ = ref([

  // {
  //   t0: '',
  //   t1: 'Das',
  //   t2: 'Fach macht',
  //   t3: 'mir',
  //   t4: 'am meisten Spaß.',

  // },
  // {
  //   t0: '',
  //   t1: 'Dieser',
  //   t2: ' Film gefällt mir.',

  // },
  // {
  //   t0: 'Sie ist ',
  //   t1: 'diejenige',
  //   t2: ', die dir weiterhelfen kann.',

  // },
  // {
  //   t0: 'Das ist  ',
  //   t1: 'dieselbe',
  //   t2: 'Nachricht wie gestern.',

  // },
  // {
  //   t0: '',
  //   t1: 'Der',
  //   t2: ' Urlaub war besonders toll.',

  // },
  // {
  //   t0: 'Tim hat mir seinen Freund Paul vorgestellt. ',
  //   t1: 'Dessen',
  //   t2: 'Haare sind blau gefärbt.',

  // },
  // {
  //   t0: 'Ich habe viele Lehrer,  ',
  //   t1: 'deren',
  //   t2: 'Unterricht Spaß macht.',

  // },
  // {
  //   t0: 'Die Menge ',
  //   t1: 'derer',
  //   t2: ', die einen tollen Unterricht gestalten, steigt.',

  // },
  // {
  //   t0: 'Zu  ',
  //   t1: 'denen',
  //   t2: 'habe ich keinen Kontakt mehr.',

  // },
  // {
  //   t0: 'Du musst noch ',
  //   t1: 'deine',
  //   t2: 'Hausaufgaben machen. –',
  //   t3: 'Das',
  //   t4: 'weiß ich.',

  // },
  // {
  //   t0: 'Wie findest du    ',
  //   t1: 'den',
  //   t2: 'Rock? –',
  //   t3: 'Der',
  //   t4: 'ist echt cool.',

  // },
  // {
  //   t0: 'Die Schuhe  ',
  //   t1: 'dieser',
  //   t2: 'Frau sind schön.',

  // },
  // {
  //   t0: '',
  //   t1: 'Diese  ',
  //   t2: ' Tasche mag ich nicht, aber',
  //   t3: 'jene',
  //   t4: 'ist wirklich cool.',

  // },
  // {
  //   t0: 'Gib das Handy ',
  //   t1: 'demjenigen',
  //   t2: ',  ',
  //   t3: 'dem',
  //   t4: 'es gehört.',

  // },
  // {
  //   t0: ' Das ändert sich jedoch,',
  //   t1: 'solch ein',
  //   t2: ' wenn  kleiner Fortschritt eine Barriere für die wirklichen Lösungen errichtet.',

  // },
  // {
  //   t0: 'Die Öffentlichkeit unserer Staaten forderte  ',
  //   t1: 'solch ein',
  //   t2: 'radikales Handeln, wie es dann erfolgte.',

  // },
  // {
  //   t0: 'Im Interesse beider Seiten ist  ',
  //   t1: 'solch ein',
  //   t2: 'Ausschuss so bald wie möglich einzurichten.',

  // },
  // {
  //   t0: '',
  //   t1: 'Dieselbe',
  //   t2: ' Logik müsste auch für Boote gelten.',

  // },
  // {
  //   t0: '',
  //   t1: 'Dieselbe',
  //   t2: ' Erwartung haben wir auch an den Rat.',

  // },
  // {
  //   t0: '',
  //   t1: 'Dieselbe ',
  //   t2: ' Frage hätte ich Herrn Nielson stellen können, wenn er heute hier gewesen wäre.',

  // },
  // {
  //   t0: 'Wir können  ',
  //   t1: 'demjenigen',
  //   t2: ', der diesen Punkt aufgeworfen hat, leider nichts anderes antworten.',

  // },
  // {
  //   t0: ' Aber es geht auch darum, mit Körpersprache  ',
  //   t1: 'demjenigen',
  //   t2: 'etwas mitzuteilen,  ',
  //   t3: 'die',
  //   t4: 'ihn betrachtet.',

  // },
  // {
  //   t0: '',
  //   t1: 'Dessen ',
  //   t2: 'Verpflichtungen und Disziplin sind neu in Europa.',

  // },
  // {
  //   t0: '',
  //   t1: 'Dessen ',
  //   t2: 'müssen Sie sich in jedem Fall bewusst sein.',

  // },
  // {
  //   t0: 'Was wären',
  //   t1: 'deren',
  //   t2: 'Aufgaben?',

  // },
  // {
  //   t0: 'Wir müssen  ',
  //   t1: 'deren',
  //   t2: 'Rechte respektieren.',

  // },
  // {
  //   t0: 'Eine  ',
  //   t1: 'solche',
  //   t2: 'Feststellung ist schwer zu ertragen.',

  // },
  // {
  //   t0: 'Aber Sie haben  ',
  //   t1: 'solche',
  //   t2: 'Situationen trainiert.',

  // },
  // {
  //   t0: 'Eine  ',
  //   t1: 'solche',
  //   t2: 'Grenze ist die Anstiftung zur Gewalt.',

  // },
  // {
  //   t0: 'Weil du  ',
  //   t1: 'denselben',
  //   t2: 'Mut besitzt wie jemand, den ich gut kenne.',

  // },
  // {
  //   t0: 'Wiederholen wir, unter  ',
  //   t1: 'denselben',
  //   t2: 'Bedingungen.',

  // },
  {
    t0: 'Тот роман скучен.',
    t1: 'Jener',
    t2: 'Roman',
    t3: 'ist',
    t4: 'langweilig',
    t5: '.',
  },
  {
    t0: 'Это тот же самый мужчина, что и на фото?',
    t1: 'Ist',
    t2: 'das',
    t3: 'derselbe',
    t4: 'Mann',
    t5: 'wie',
    t6: 'auf',
    t7: 'dem',
    t8: 'Foto',
    t8: '?',
  },
  {
    t0: 'Он такой интересный мужчина.',
    t1: 'Er',
    t2: 'ist',
    t3: 'solch ein',
    t4: 'interessanter',
    t5: 'Mann',
    t6: '.',

  },
  {
    t0: 'Эта сумка мне нравится.',
    t1: 'Die',
    t2: 'Tasche',
    t3: 'gefält',
    t4: 'mir',
    t5: '.',

  },
  {
    t0: 'Это та сумка, про которую ты говорила?',
    t1: 'Ist',
    t2: 'das',
    t3: 'jene',
    t4: 'Tasche',
    t5: ',',
    t6: 'von',
    t7: 'der',
    t8: 'du',
    t9: 'gesprochen',
    t10: 'hast',
    t11: '?',

  },
  {
    t0: 'Та же (самая) сумка лежит у меня на столе.',
    t1: 'Dieselbe',
    t2: 'Tasche',
    t3: 'liegt',
    t4: 'jetzt',
    t5: 'auf',
    t6: 'mainem',
    t7: 'Tich',
    t8: '.',

  },
  {
    t0: 'Такая сумка очень дорогая.',
    t1: 'Solch',
    t2: 'eine',
    t3: 'Tasche',
    t4: 'ist',
    t5: 'sehr',
    t6: 'teuer',
    t7: '.',

  },
  {
    t0: 'То платье, которое она мне подарила , мне не подходит.',
    t1: 'Jenes',
    t2: 'Kleid',
    t3: ',',
    t4: 'das',
    t5: 'sie',
    t6: 'mir',
    t7: 'geschenkt',
    t8: 'hat',
    t9: ',',
    t10: 'passt',
    t11: 'mir',
    t12: 'nicht',
    t13: '.',

  },
  {
    t0: 'Это было то же самое платье, в котором она пришла.',
    t1: 'Es',
    t2: 'war',
    t3: 'dasselbe',
    t4: 'Kleid',
    t5: ',',
    t6: 'in',
    t7: 'dem',
    t8: 'sie',
    t9: '.',

  },
  {
    t0: 'Такое платье есть в любом цвете.',
    t1: 'Solch',
    t2: 'ein',
    t3: 'Kleid',
    t4: 'gibt',
    t5: 'es',
    t6: 'in',
    t7: 'jeder',
    t8: 'Farbe',
    t9: '.',
  },
  {
    t0: 'Те люди, которые знают мало говорят много.',
    t1: 'Jene',
    t2: 'Leute',
    t3: ',',
    t4: 'die',
    t5: 'wenig',
    t6: 'wissen',
    t7: ',',
    t8: 'sagen',
    t9: 'viel',
    t10: '.',

  },
  {
    t0: 'Всегда одни и те же люди.',
    t1: 'Immer',
    t2: 'dieselben',
    t3: 'Leute',
    t4: '.',

  },
  {
    t0: 'Такие люди не имеют никакого представления о политике.',
    t1: 'Solche',
    t2: 'Leute',
    t3: 'haben',
    t4: 'keine',
    t5: 'Ahnung',
    t6: 'von',
    t7: 'Politik',
    t8: '.',

  },
  {
    t0: 'Я скажу этому мужчине, что ...',
    t1: 'Ich',
    t2: 'sage',
    t3: 'dem',
    t4: 'Mann',
    t5: ',',
    t6: 'dass',
    t7: '...',

  },
  {
    t0: 'Машина и дом принадлежат одному и тому же человеку.',
    t1: 'Das',
    t2: 'Auto',
    t3: 'und',
    t4: 'das',
    t5: 'Haus',
    t6: 'gehören',
    t7: 'demselben',
    t8: 'Mann',
    t9: '.'

  },
  {
    t0: 'С таким мужчиной невозможно жить.',
    t1: 'Mit',
    t2: 'solch',
    t3: 'einem',
    t4: 'Mann',
    t5: 'kann',
    t6: 'man',
    t7: 'nicht',
    t8: 'leben',
    t9: '.',

  },
  {
    t0: 'Что в той сумке?',
    t1: 'Was',
    t2: 'ist',
    t3: 'in',
    t4: 'jener',
    t5: 'Tasche',
    t6: '?',

  },
  {
    t0: 'Я приду с той же сумкой что и на прошлой неделе.',
    t1: 'Ich',
    t2: 'komme',
    t3: 'mit',
    t4: 'derselben',
    t5: 'Tasche',
    t6: 'wie',
    t7: 'letzte',
    t8: 'Woche',
    t9: '.',

  },
  {
    t0: 'Мы помогаем тем людям, которые и нам помогают.',
    t1: 'Wir',
    t2: 'helfen',
    t3: 'jenen',
    t4: 'Leuten',
    t5: ',',
    t6: 'die',
    t7: 'uns',
    t8: 'auch',
    t9: 'helfen',
    t10: '.',

  },
  {
    t0: 'Они нашли того мужчину,который был пропавший без вести.',
    t1: 'Sie',
    t2: 'haben',
    t3: 'jenen',
    t4: 'Mann',
    t5: ',',
    t6: 'der',
    t7: 'vermist',
    t8: 'war',
    t9: ',',
    t10: 'gefunden',
    t11: '.',

  },
  {
    t0: 'Мы избегаем этих людей.',
    t1: 'Wir',
    t2: 'vermeiden',
    t3: 'diese',
    t4: 'Leute',
    t5: '.',

  },
  {
    t0: 'Это только для тех Людей ,которые имеют деньги.',
    t1: 'Das',
    t2: 'ist',
    t3: 'nur',
    t4: 'für',
    t5: 'jene',
    t6: 'Leute',
    t7: ',',
    t8: 'die',
    t9: 'Geld',
    t10: 'haben',
    t11: '.',

  },
  {
    t0: 'Он консультирует тех же самых людей что и я.',
    t1: 'Er',
    t2: 'berät',
    t3: 'dieselben',
    t4: 'Leute',
    t5: 'wie',
    t6: 'ich',
    t7: '.',

  },
  {
    t0: 'Таких людей я терпеть не могу.',
    t1: 'Solche',
    t2: 'Leute',
    t3: 'kann',
    t4: 'ich',
    t5: 'gar',
    t6: 'nicht',
    t7: 'leiden',
    t8: '.',

  },
  {
    t0: 'Несмотря на таких людей я был успешен.',
    t1: 'Trotz',
    t2: 'solcher',
    t3: 'Leute',
    t4: 'war',
    t5: 'ich',
    t6: 'erfolgreich',
    t7: '.',
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