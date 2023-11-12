<template lang="pug">
.container
  .page-title 
    h2 Reflexivpronomen
  Tabs(:items= 'Reflexiv' title='Reflexiv' )
  .page-block
    .page-title--small 
      h3 Training
    Plaza
    Slot(:SlotData='SlotDataReflexiv')
</template>


<script setup>
import Tabs from '@/components/Tabs.vue';
import Plaza from '@/components/Plaza.vue';
import Slot from '@/components/Slot.vue'

const Reflexiv = [

  {
    title: 'Dativ',
    text1: 'mir',
    text2: 'dir',
    text3: 'sich',
    text4: 'sich',
    text5: 'sich',
    text6: 'uns',
    text7: 'euch',
    text8: 'sich',
    text9: 'sich',
    svg3: 'man',
    svg4: 'frau',
    svg5: 'das',
    svg6: 'group',
    svg7: 'group',
    svg8: 'group',
    svg9: 'respect',
  },
  {
    title: 'Akkusativ',
    text1: 'mich',
    text2: 'dich',
    text3: 'sich',
    text4: 'sich',
    text5: 'sich',
    text6: 'uns',
    text7: 'euch',
    text8: 'sich',
    text9: 'sich',
    svg3: 'man',
    svg4: 'frau',
    svg5: 'das',
    svg6: 'group',
    svg7: 'group',
    svg8: 'group',
    svg9: 'respect',
  },

]
const SlotDataReflexiv = [

  {
    t0: 'Я принимаю душ. (dusche)',
    t1: 'Ich',
    t2: 'dusche',
    t3: 'mich',
    t4: '.',

  },

  {
    t0: 'Я чищу зубы. (putze Zähne)',
    t1: 'Ich',
    t2: 'putze',
    t3: 'mir',
    t4: 'die',
    t5: 'Zähne',
    t6: '.',

  },

  {
    t0: 'Том и Альберт ссорятся. (Albert streiten)',
    t1: 'Tom',
    t2: 'und',
    t3: 'Albert',
    t4: 'streiten',
    t5: 'sich',
    t6: '.',

  },

  {
    t0: 'Вы поблагодарили. (bedankt)',
    t1: 'Ihr',
    t2: 'habt',
    t3: 'euch',
    t4: 'bedankt',
    t5: '.',

  },

  {
    t0: 'Я спешу. (beeile)',
    t1: 'Ich',
    t2: 'beeile',
    t3: 'mich',
    t4: '.',

  },

  {
    t0: 'Мы приветствуем друг друга. (grüßen)',
    t1: 'Wir',
    t2: 'grüßen',
    t3: 'uns',
    t4: '.',

  },

  {
    t0: 'Я надеваю теплый свитер. (Pullover)',
    t1: 'Ich',
    t2: 'ziehe',
    t3: 'mir',
    t4: 'einen',
    t5: 'warmen',
    t6: 'Pullover',
    t7: 'an',
    t8: '.',
  },

  {
    t0: 'Она вымыла руки. (Hände gewaschen)',
    t1: 'Sie',
    t2: 'hat',
    t3: 'sich',
    t4: 'die',
    t5: 'Hände',
    t6: 'gewaschen',
    t7: '.',
  },

  {
    t0: 'Вам все еще нужно почистить зубы! (Zähne putzen)',
    t1: 'Ihr',
    t2: 'müsst',
    t3: 'euch',
    t4: 'noch',
    t5: 'die',
    t6: 'Zähne',
    t7: 'putzen',
    t8: '!',
  },

  {
    t0: 'В детстве я всегда прятался от Санта-Клауса. (Weihnachtmann versteckt)',
    t1: 'Als',
    t2: 'Kind',
    t3: 'habe',
    t4: 'ich',
    t5: 'mich',
    t6: 'immer',
    t7: 'vor',
    t8: 'dem',
    t9: 'Weihnachtmann',
    t10: 'versteckt',
    t11: '.',
  },

  {
    t0: 'Когда ты сможешь запомнить цифры? (Zahlen merken)',
    t1: 'Wann',
    t2: 'kannst',
    t3: 'du',
    t4: 'dir',
    t5: 'uns',
    t6: 'mal',
    t7: 'die',
    t8: 'Zahlen',
    t9: 'merken',
    t10: '?',
  },

  {
    t0: 'О чем вы только думали, ребята? (bloß gedacht)',
    t1: 'Was',
    t2: 'habt',
    t3: 'ihr',
    t4: 'euch',
    t5: 'bloß',
    t6: 'dabei',
    t7: 'gedacht',
    t8: '?',

  },
  {
    t0: 'Мы берем на себя обязательство убирать. (nehmen sauber)',
    t1: 'Wir',
    t2: 'nehmen',
    t3: 'uns',
    t4: 'vor',
    t5: ',',
    t6: 'sauber',
    t7: 'zu',
    t8: 'machen',
    t9: '.',
  },

  {
    t0: 'Мне кажется, он всегда был очень крепок здоровьем. (gesundheitlich stark)',
    t1: 'Das',
    t2: 'denke',
    t3: 'ich',
    t4: 'mir',
    t5: ',',
    t6: 'er',
    t7: 'war',
    t8: 'ja',
    t9: 'gesundheitlich',
    t10: 'immer',
    t11: 'sehr',
    t12: 'stark',
    t13: '.',
  },

  {
    t0: 'Я могу только удивляться некоторым людям , которые притворяются, когда им задают честный вопрос. (Leute wundern verstellen ehrliche Frage stellt)',
    t1: 'Ich',
    t2: 'kann',
    t3: 'mich',
    t4: 'über',
    t5: 'manche',
    t6: 'Leute',
    t7: 'nur',
    t8: 'wundern',
    t9: ',',
    t10: 'die',
    t11: 'sich',
    t12: 'verstellen',
    t13: ',',
    t14: 'wenn',
    t15: 'man',
    t16: 'ihnen',
    t17: 'eine',
    t18: 'ehrliche',
    t19: 'Frage',
    t20: 'stellt',
    t21: '.',
  },

  {
    t0: 'Ты можешь себе представить, что когда-нибудь мы увидим на улицах только автомобили без водителей ? (vorstellen Autos Fahrer Straßen werden)',
    t1: 'Kannst',
    t2: 'du',
    t3: 'dir',
    t4: 'vorstellen',
    t5: ',',
    t6: 'dass',
    t7: 'wir',
    t8: 'mal',
    t9: 'nur',
    t10: 'noch',
    t11: 'Autos',
    t12: 'ohne',
    t13: 'Fahrer',
    t14: 'auf',
    t15: 'den',
    t16: 'Straßen',
    t17: 'sehen',
    t18: 'werden',
    t19: '?',
  },

  {
    t0: 'Я подумал, что мы могли бы подарить ей красивую кожаную сумку. (gedacht könnten schöne Ledertasche schenken)',
    t1: 'Ich',
    t2: 'habe',
    t3: 'mir',
    t4: 'gedacht',
    t5: ',',
    t6: 'wir',
    t7: 'könnten',
    t8: 'ihr',
    t9: 'eine',
    t10: 'schöne',
    t11: 'Ledertasche',
    t12: 'schenken',
    t13: '.',
  },

  {
    t0: 'Для похода нам нужно одеться потеплее . (Wandertour warm anziehen)',
    t1: 'Für',
    t2: 'die',
    t3: 'Wandertour',
    t4: 'müssen',
    t5: 'wir',
    t6: 'uns',
    t7: 'warm',
    t8: 'anziehen',
    t9: '.',
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
