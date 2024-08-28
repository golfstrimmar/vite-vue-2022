<template lang="pug">
.container
  h2 Demonstrativpronomen
  Plaza(:Slot='SlotDemonstrativ')
  Akkord(:titles="titles" :Data="[SlotDataDemonstrativ]" @addTime ='addTime')

</template>

<script setup>
import Akkord from "@/components/Akkord.vue";
import Plaza from "@/components/Plaza.vue";
import { ref, onMounted, reactive } from 'vue'
// ---------db-----------------
import { db } from "@/firebase/config.ts";
import { collection, query, onSnapshot } from "firebase/firestore";
var SlotDemonstrativ = reactive([]);
var SlotDataDemonstrativ = reactive([]);

var titles = reactive([]);
const Demonstrativ = query(collection(db, "Demonstrativ-tabel"));
const DataDemonstrativ = query(collection(db, "DemonstrativSlot"));


onMounted(async () => {
  onSnapshot(Demonstrativ, (querySnapshot) => {
    querySnapshot.forEach((doc) => {
      console.log(doc.data());
      SlotDemonstrativ.push(doc.data());
    });

  });
  onSnapshot(DataDemonstrativ, (querySnapshot) => {
    querySnapshot.forEach((doc) => {
      SlotDataDemonstrativ.push(doc.data());
    });
    titles.push({ id: 0, title: 'Demonstrativ', isOpen: true });
    SlotDataDemonstrativ.id = 0;
    SlotDataDemonstrativ.isOpen = true;
  });
});
// ---------
// ------------pinia-------------
import { useAuthStore } from '@/store/authent';
const authStore = useAuthStore();
const addTime = (formattedTime, count, countAll) => { authStore.refresh('Demonstrativ', formattedTime, count, countAll) };
// --------------------------
</script>


// {
// t0: 'Каковы были бы их обязанности? (wären Aufgaben)',
// t1: 'Was',
// t2: 'wären',
// t3: 'deren',
// t4: 'Aufgaben',
// t5: '?',

// },



// {
// t0: 'Такой вывод трудно вынести. (Feststellung schwer ertragen)',
// t1: 'Eine',
// t2: 'solche',
// t3: 'Feststellung',
// t4: 'ist',
// t5: 'schwer',
// t6: 'zu',
// t7: 'ertragen',
// t8: '.',

// },

// {
// t0: 'Но их обучали таким ситуациям. (Situationen trainiert)',
// t1: 'Aber',
// t2: 'Sie',
// t3: 'haben',
// t4: 'solche',
// t5: 'Situationen',
// t6: 'trainiert',
// t7: '.',

// },


// {
// t0: 'Потому что ты обладаешь таким же мужеством, как и тот, кого я хорошо знаю. (Mut besitzt kenne)',
// t1: 'Weil',
// t2: 'du',
// t3: 'denselben',
// t4: 'Mut',
// t5: 'besitzt',
// t6: 'wie',
// t7: 'jemand',
// t8: ',',
// t9: 'den',
// t10: 'ich',
// t11: 'gut',
// t12: 'kenne',
// t12: '.',

// },



// {
// t0: 'Тот роман скучен. (Roman langweilig)',
// t1: 'Jener',
// t2: 'Roman',
// t3: 'ist',
// t4: 'langweilig',
// t5: '.',
// },
// {
// t0: 'Это тот же самый мужчина, что и на фото? (Mann auf Foto)',
// t1: 'Ist',
// t2: 'das',
// t3: 'derselbe',
// t4: 'Mann',
// t5: 'wie',
// t6: 'auf',
// t7: 'dem',
// t8: 'Foto',
// t8: '?',
// },
// {
// t0: 'Он такой интересный мужчина. (Mann)',
// t1: 'Er',
// t2: 'ist',
// t3: 'solch ein',
// t4: 'interessanter',
// t5: 'Mann',
// t6: '.',

// },
// {
// t0: 'Эта сумка мне нравится. (Tasche gefält)',
// t1: 'Die',
// t2: 'Tasche',
// t3: 'gefält',
// t4: 'mir',
// t5: '.',

// },
// {
// t0: 'Это та сумка, про которую ты говорила? (Tasche )',
// t1: 'Ist',
// t2: 'das',
// t3: 'jene',
// t4: 'Tasche',
// t5: ',',
// t6: 'von',
// t7: 'der',
// t8: 'du',
// t9: 'gesprochen',
// t10: 'hast',
// t11: '?',

// },
// {
// t0: 'Та же (самая) сумка лежит у меня на столе. (Tasche jetzt Tich)',
// t1: 'Dieselbe',
// t2: 'Tasche',
// t3: 'liegt',
// t4: 'jetzt',
// t5: 'auf',
// t6: 'mainem',
// t7: 'Tich',
// t8: '.',

// },
// {
// t0: 'Такая сумка очень дорогая. (Tasche teuer)',
// t1: 'Solch',
// t2: 'eine',
// t3: 'Tasche',
// t4: 'ist',
// t5: 'sehr',
// t6: 'teuer',
// t7: '.',

// },
// {
// t0: 'То платье, которое она мне подарила , мне не подходит. (Kleid geschenkt passt)',
// t1: 'Jenes',
// t2: 'Kleid',
// t3: ',',
// t4: 'das',
// t5: 'sie',
// t6: 'mir',
// t7: 'geschenkt',
// t8: 'hat',
// t9: ',',
// t10: 'passt',
// t11: 'mir',
// t12: 'nicht',
// t13: '.',

// },
// {
// t0: 'Это было то же самое платье, в котором она пришла. (Kleid in kam)',
// t1: 'Es',
// t2: 'war',
// t3: 'dasselbe',
// t4: 'Kleid',
// t5: ',',
// t6: 'in',
// t7: 'dem',
// t8: 'sie',
// t9: 'kam',
// t10: '.',
// },
// {
// t0: 'Такое платье есть в любом цвете. (Kleid Farbe)',
// t1: 'Solch',
// t2: 'ein',
// t3: 'Kleid',
// t4: 'gibt',
// t5: 'es',
// t6: 'in',
// t7: 'jeder',
// t8: 'Farbe',
// t9: '.',
// },
// {
// t0: 'Те люди, которые знают мало говорят много. (Leute wenig wissen sagen)',
// t1: 'Jene',
// t2: 'Leute',
// t3: ',',
// t4: 'die',
// t5: 'wenig',
// t6: 'wissen',
// t7: ',',
// t8: 'sagen',
// t9: 'viel',
// t10: '.',

// },
// {
// t0: 'Всегда одни и те же люди. (Immer Leute)',
// t1: 'Immer',
// t2: 'dieselben',
// t3: 'Leute',
// t4: '.',

// },
// {
// t0: 'Такие люди не имеют никакого представления о политике. (Leute Ahnung Politik)',
// t1: 'Solche',
// t2: 'Leute',
// t3: 'haben',
// t4: 'keine',
// t5: 'Ahnung',
// t6: 'von',
// t7: 'Politik',
// t8: '.',

// },
// {
// t0: 'Я скажу этому мужчине, что ... (Mann)',
// t1: 'Ich',
// t2: 'sage',
// t3: 'dem',
// t4: 'Mann',
// t5: ',',
// t6: 'dass',
// t7: '...',

// },
// {
// t0: 'Машина и дом принадлежат одному и тому же человеку. (Auto Haus Mann)',
// t1: 'Das',
// t2: 'Auto',
// t3: 'und',
// t4: 'das',
// t5: 'Haus',
// t6: 'gehören',
// t7: 'demselben',
// t8: 'Mann',
// t9: '.'

// },
// {
// t0: 'С таким мужчиной невозможно жить. (Mann leben)',
// t1: 'Mit',
// t2: 'solch',
// t3: 'einem',
// t4: 'Mann',
// t5: 'kann',
// t6: 'man',
// t7: 'nicht',
// t8: 'leben',
// t9: '.',

// },
// {
// t0: 'Что в той сумке? (Tasche)',
// t1: 'Was',
// t2: 'ist',
// t3: 'in',
// t4: 'jener',
// t5: 'Tasche',
// t6: '?',

// },
// {
// t0: 'Я приду с той же сумкой что и на прошлой неделе. (Tasche letzte Woche)',
// t1: 'Ich',
// t2: 'komme',
// t3: 'mit',
// t4: 'derselben',
// t5: 'Tasche',
// t6: 'wie',
// t7: 'letzte',
// t8: 'Woche',
// t9: '.',

// },
// {
// t0: 'Мы помогаем тем людям, которые и нам помогают. (Leuten )',
// t1: 'Wir',
// t2: 'helfen',
// t3: 'jenen',
// t4: 'Leuten',
// t5: ',',
// t6: 'die',
// t7: 'uns',
// t8: 'auch',
// t9: 'helfen',
// t10: '.',

// },
// {
// t0: 'Они нашли того мужчину,который был пропавший без вести. (Mann vermist gefunden)',
// t1: 'Sie',
// t2: 'haben',
// t3: 'jenen',
// t4: 'Mann',
// t5: ',',
// t6: 'der',
// t7: 'vermist',
// t8: 'war',
// t9: ',',
// t10: 'gefunden',
// t11: '.',






<style lang="scss"></style>