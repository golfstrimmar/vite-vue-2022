<template lang="pug">
.container
  .page-title 
    h2 Demonstrativpronomen
  Tabs(:items= 'Nom' title='Nominativ ' )
  Tabs(:items= 'Dativ' title='Dativ' )
  Tabs(:items= 'Akkusativ' title='Akkusativ' )
  Tabs(:items= 'Genitiv' title='Genitiv' )
  .page-block.blue-grey-4
    .page-title--small
      h2 Beispiele
    TabsTraining( title='' :SlotData='SlotDataDemonstrativ' )  
 

</template>


<script setup>
// import Content from '@/components/Content.vue';
import Tabs from '@/components/Tabs.vue';
import Plaza from '@/components/Plaza.vue';
import Slot from '@/components/Slot.vue'
import TabsTraining from '@/components/TabsTraining.vue';
const Nom = [

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
]
const Dativ = [

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
]
const Akkusativ = [

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
]
const Genitiv = [

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
]



const SlotDataDemonstrativ = [
  {
    t0: 'Этот предмет мне нравится больше всего. (Fach macht Spaß)',
    t1: 'Das',
    t2: 'Fach',
    t3: 'macht',
    t4: 'mir',
    t5: 'am',
    t6: 'meisten',
    t7: 'Spaß',
    t8: '.',

  },
  {
    t0: 'Мне нравится этот фильм. (Film gefällt )',
    t1: 'Dieser',
    t2: 'Film',
    t3: 'gefällt',
    t4: 'mir',
    t5: '.',

  },

  {
    t0: 'Она единственная , кто может тебе помочь. (weiterhelfen kann)',
    t1: 'Sie',
    t2: 'ist',
    t3: 'diejenige',
    t4: ',',
    t5: 'die',
    t6: 'dir',
    t7: 'weiterhelfen',
    t8: 'kann',
    t9: '.',

  },

  {
    t0: 'Это та же новость, что и вчера.(Nachricht)',
    t1: 'Das',
    t2: 'ist',
    t3: 'dieselbe',
    t4: 'Nachricht',
    t5: 'wie',
    t6: 'gestern',
    t7: '.',

  },

  {
    t0: 'Отпуск был особенно замечательным.(Urlaub toll)',
    t1: 'Urlaub',
    t2: 'war',
    t3: 'besonders',
    t4: 'toll',
    t5: '.',

  },

  {
    t0: 'Тим познакомил меня со своим другом Полом, чьи волосы выкрашены в голубой цвет. (Tim Paul vorgestellt Haare gefärbt)',
    t1: 'Tim',
    t2: 'hat',
    t3: 'mir',
    t4: 'seinen',
    t5: 'Freund',
    t6: 'Paul',
    t7: 'vorgestellt',
    t8: ',',
    t9: 'dessen',
    t10: 'Haare',
    t11: 'sind',
    t12: 'blau',
    t13: 'gefärbt',
    t14: '.',

  },

  {
    t0: 'У меня много учителей, чьи занятия доставляют удовольствие.( Lehrer Unterricht Spaß macht)',
    t1: 'Ich',
    t2: 'habe',
    t3: 'viele',
    t4: 'Lehrer',
    t5: ',',
    t6: 'deren',
    t7: 'Unterricht',
    t8: 'Spaß',
    t9: 'macht',
    t10: '.',

  },

  {
    t0: 'Количество тех, кто создает отличные уроки, растет. (Menge Unterricht gestalten steigt)',
    t1: 'Die',
    t2: 'Menge',
    t3: 'derer',
    t4: ',',
    t5: 'die',
    t6: 'einen',
    t7: 'tollen',
    t8: 'Unterricht',
    t9: 'gestalten',
    t10: ',',
    t11: 'steigt',
    t12: '.',

  },

  {
    t0: 'У меня больше нет с ними никаких контактов. (Zu Kontakt)',
    t1: 'Zu',
    t2: 'denen',
    t3: 'habe',
    t4: 'ich',
    t5: 'keinen',
    t6: 'Kontakt',
    t7: 'mehr',
    t8: '.',

  },

  {
    t0: 'Тебе еще нужно сделать домашнее задание . Я это знаю.  (Hausaufgaben )',
    t1: 'Du',
    t2: 'musst',
    t3: 'noch',
    t4: 'deine',
    t5: 'Hausaufgaben',
    t6: 'machen',
    t7: '.',
    t8: 'Das',
    t9: 'weiß',
    t10: 'ich',
    t11: '.',

  },

  {
    t0: 'Как тебе эта юбка? Он действительно классный.  (Rock cool)',
    t1: 'Wie',
    t2: 'findest',
    t3: 'du',
    t4: 'den',
    t5: 'Rock',
    t6: '?',
    t7: 'Der',
    t8: 'ist',
    t9: 'echt',
    t10: 'cool',
    t11: '.',

  },

  {
    t0: 'Туфли этой женщины прекрасны. (Schuhe Frau schön)',
    t1: 'Die',
    t2: 'Schuhe',
    t3: 'dieser',
    t4: 'Frau',
    t5: 'sind',
    t6: 'schön',
    t7: '.',

  },

  {
    t0: 'Мне не нравится эта сумка , но та действительно классная.  (Tasche cool)',
    t1: 'Diese',
    t2: 'Tasche',
    t3: 'mag',
    t4: 'ich',
    t5: 'nicht',
    t6: ',',
    t7: 'aber',
    t8: 'jene',
    t9: 'ist',
    t10: 'wirklich',
    t11: 'cool',
    t12: '.',

  },

  {

    t0: 'Отдай телефон тому, кому он принадлежит. (Gib Handy  gehört )',
    t1: 'Gib',
    t2: 'das',
    t3: 'Handy',
    t4: 'demjenigen',
    t5: ',',
    t6: 'dem',
    t7: 'es',
    t8: 'gehört',
    t9: '.',

  },





  {
    t0: 'Та же логика должна применяться и к лодкам.  (Logik müsste Boote gelten)',
    t1: 'Dieselbe',
    t2: 'Logik',
    t3: 'müsste',
    t4: 'auch',
    t5: 'für',
    t6: 'Boote',
    t7: 'gelten',
    t8: '.',

  },

  {
    t0: 'То же самое мы ожидаем и от Совета. (Erwartung Rat)',
    t1: 'Dieselbe',
    t2: 'Erwartung',
    t3: 'haben',
    t4: 'wir',
    t5: 'auch',
    t6: 'an',
    t7: 'den',
    t8: 'Rat',
    t9: '.',

  },


  {
    t0: 'К сожалению, мы больше ничего не можем ответить тому, кто поднял этот вопрос. (Punkt aufgeworfen anderes antworten)',
    t1: 'Wir',
    t2: 'können',
    t3: 'demjenigen',
    t4: ',',
    t5: 'der',
    t6: 'diesen',
    t7: 'Punkt',
    t8: 'aufgeworfen',
    t9: 'hat',
    t10: ',',
    t11: 'leider',
    t12: 'nichts',
    t13: 'anderes',
    t14: 'antworten',
    t15: '.',

  },



  {
    t0: 'Вы должны знать об этом в каждом конкретном случае. (müssen bewusst jedem Fall sein)',
    t1: 'Dessen',
    t2: 'müssen',
    t3: 'Sie',
    t4: 'sich',
    t5: 'jedem',
    t6: 'Fall',
    t7: 'bewusst',
    t8: 'sein',
    t9: '.',

  },

  {
    t0: 'Каковы были бы их обязанности? (wären Aufgaben)',
    t1: 'Was',
    t2: 'wären',
    t3: 'deren',
    t4: 'Aufgaben',
    t5: '?',

  },



  {
    t0: 'Такой вывод трудно вынести. (Feststellung schwer ertragen)',
    t1: 'Eine',
    t2: 'solche',
    t3: 'Feststellung',
    t4: 'ist',
    t5: 'schwer',
    t6: 'zu',
    t7: 'ertragen',
    t8: '.',

  },

  {
    t0: 'Но их обучали таким ситуациям. (Situationen trainiert)',
    t1: 'Aber',
    t2: 'Sie',
    t3: 'haben',
    t4: 'solche',
    t5: 'Situationen',
    t6: 'trainiert',
    t7: '.',

  },


  {
    t0: 'Потому что ты обладаешь таким же мужеством, как и тот, кого я хорошо знаю. (Mut besitzt kenne)',
    t1: 'Weil',
    t2: 'du',
    t3: 'denselben',
    t4: 'Mut',
    t5: 'besitzt',
    t6: 'wie',
    t7: 'jemand',
    t8: ',',
    t9: 'den',
    t10: 'ich',
    t11: 'gut',
    t12: 'kenne',
    t12: '.',

  },



  {
    t0: 'Тот роман скучен. (Roman langweilig)',
    t1: 'Jener',
    t2: 'Roman',
    t3: 'ist',
    t4: 'langweilig',
    t5: '.',
  },
  {
    t0: 'Это тот же самый мужчина, что и на фото? (Mann auf Foto)',
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
    t0: 'Он такой интересный мужчина. (Mann)',
    t1: 'Er',
    t2: 'ist',
    t3: 'solch ein',
    t4: 'interessanter',
    t5: 'Mann',
    t6: '.',

  },
  {
    t0: 'Эта сумка мне нравится. (Tasche gefält)',
    t1: 'Die',
    t2: 'Tasche',
    t3: 'gefält',
    t4: 'mir',
    t5: '.',

  },
  {
    t0: 'Это та сумка, про которую ты говорила? (Tasche )',
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
    t0: 'Та же (самая) сумка лежит у меня на столе. (Tasche jetzt Tich)',
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
    t0: 'Такая сумка очень дорогая. (Tasche teuer)',
    t1: 'Solch',
    t2: 'eine',
    t3: 'Tasche',
    t4: 'ist',
    t5: 'sehr',
    t6: 'teuer',
    t7: '.',

  },
  {
    t0: 'То платье, которое она мне подарила , мне не подходит. (Kleid geschenkt passt)',
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
    t0: 'Это было то же самое платье, в котором она пришла. (Kleid in kam)',
    t1: 'Es',
    t2: 'war',
    t3: 'dasselbe',
    t4: 'Kleid',
    t5: ',',
    t6: 'in',
    t7: 'dem',
    t8: 'sie',
    t9: 'kam',
    t10: '.',
  },
  {
    t0: 'Такое платье есть в любом цвете. (Kleid Farbe)',
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
    t0: 'Те люди, которые знают мало говорят много. (Leute wenig wissen sagen)',
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
    t0: 'Всегда одни и те же люди. (Immer Leute)',
    t1: 'Immer',
    t2: 'dieselben',
    t3: 'Leute',
    t4: '.',

  },
  {
    t0: 'Такие люди не имеют никакого представления о политике. (Leute Ahnung Politik)',
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
    t0: 'Я скажу этому мужчине, что ... (Mann)',
    t1: 'Ich',
    t2: 'sage',
    t3: 'dem',
    t4: 'Mann',
    t5: ',',
    t6: 'dass',
    t7: '...',

  },
  {
    t0: 'Машина и дом принадлежат одному и тому же человеку. (Auto Haus Mann)',
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
    t0: 'С таким мужчиной невозможно жить. (Mann leben)',
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
    t0: 'Что в той сумке? (Tasche)',
    t1: 'Was',
    t2: 'ist',
    t3: 'in',
    t4: 'jener',
    t5: 'Tasche',
    t6: '?',

  },
  {
    t0: 'Я приду с той же сумкой что и на прошлой неделе. (Tasche letzte Woche)',
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
    t0: 'Мы помогаем тем людям, которые и нам помогают. (Leuten )',
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
    t0: 'Они нашли того мужчину,который был пропавший без вести. (Mann vermist gefunden)',
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
    t0: 'Мы избегаем этих людей. (vermeiden Leute)',
    t1: 'Wir',
    t2: 'vermeiden',
    t3: 'diese',
    t4: 'Leute',
    t5: '.',

  },
  {
    t0: 'Это только для тех Людей ,которые имеют деньги. (Leute Geld)',
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
    t0: 'Он консультирует тех же самых людей что и я. (berät Leute)',
    t1: 'Er',
    t2: 'berät',
    t3: 'dieselben',
    t4: 'Leute',
    t5: 'wie',
    t6: 'ich',
    t7: '.',

  },
  {
    t0: 'Таких людей я терпеть не могу. (Leute gar nicht leiden)',
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
    t0: 'Несмотря на таких людей я был успешен. (Trotz Leute erfolgreich)',
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





</script>

<style lang="scss" ></style>