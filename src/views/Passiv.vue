<template lang="pug">
.container
  .page-title 
    h2 Passiv
  button(@click="addUser()" ) addUser
  .page-block.deep-orange-2
    p(style="color: red;font-weight: 800;") Многие формы пассива не преводятся дословно на русский или звучат некорректно!
    p(style="color: red;font-weight: 800;") Viele Formen des Passivs werden nicht wörtlich ins Russische übersetzt oder klingen falsch!

  .page-block.blue-grey-4
    .page-title--small
      h2 Das Vorgangspassiv 
    div
      p ✔️ несовершенный пассив или по-другому его называют пассив действия 
      p 👌 Это значит, что действие, которое совершается над объектом не было завершено, мы не знаем его результат.
      p ✔️ Das Vorgangspassiv stellt den Vorgang, die Handlung oder das Geschehen in den Vordergrund.Button( :text='item.title' @click='HandlerClick(item.id)' :disabled="isButtonDisabled" :class="(isButtonDisabled == true  ) ? '_is-active' : '' " )
    .base-area
      .base-area__unit
        h3 Verben
        Base( v-for="item in titlesVorgangspas" :key="index"  :item='item'   )
      .base-area__unit
        h3 Modalverben
        Base( v-for="item in titlesModal" :key="index"  :item='item'   )
      .base-area__unit
        h3 Konjunktiv II
        Base( v-for="item in titlesKonjunktiv" :key="index"  :item='item'   )

  .page-block.amber-3
    .page-title--small
      h2 Das Zustandspassiv
    div
      p ✔️ совершенный пассив или по-другому пассив состояния 
      p 👌Это значит, что у нас уже есть результат какого-либо действия. Мы просто констатируем как факт, то что произошло.
      p ✔️ Das Zustandspassiv drückt ein Ergebnis bzw. einen Zustand aus.
      p ✔️ Некоторые формы пассивного состояния очень похожи на активные формы.
      p Чтобы узнать, находится ли предложение в пассивном состоянии или в активном состоянии, установите его в пассивное   состояние. 
      p Если это возможно, то речь идет о пассиве состояния. Если это невозможно, предложение остается в активе.

      p ✔️ Manche Formen des Zustandspassivs ähneln sehr den Aktivformen.
      p Um herauszufinden, ob ein Satz im Zustandspassiv oder im Aktiv steht, setzt du ihn ins Vorgangspassiv. Ist das möglich, 
      p handelt es sich um das Zustandspassiv. Ist dies nicht möglich, steht der Satz im Aktiv.
    .base-area
      .base-area__unit
        h3 Verben
        Base( v-for="item in titlesZustandspassiv" :key="index"  :item='item'   )
      .base-area__unit
        h3 Modalverben
        Base( v-for="item in titlesZustandspassivModalverben" :key="index"  :item='item'   )
      .base-area__unit
        h3 Konjunktiv II
        Base( v-for="item in titlesZustandsKonjunktiv" :key="index"  :item='item'   )

  Loader(v-if="isLoading")
</template>

<script setup>
import Loader from "@/components/Loader.vue";
import Base from "@/components/Base.vue";
import { ref, onMounted, reactive } from 'vue'
import Plaza from "@/components/Plaza.vue";
import { db } from "@/firebase/config.ts";
import { collection, query, onSnapshot, getDoc, doc, setDoc, } from "firebase/firestore";
import { useRouter } from 'vue-router' // import router
const router = useRouter();


// --------------Vorgangspas-----

var titlesVorgangspas = ref([
  { id: 0, title: 'Werben', dbTopE: "Vorgangspassivs", dbTopZ: "Werben", isOpen: false },

])
// , dbItems: "SlotVorgangspassivsPräsens"

var titlesModal = ref([
  { id: 1, title: 'Modalverben  Präsens', dbTopE: "Vorgangspassivs", dbTopZ: "PräsensModalverb", isOpen: false },
  { id: 2, title: 'Modalverben  Präteritum', dbTopE: "Vorgangspassivs", dbTopZ: "PräteritumModalverb", isOpen: false },
  { id: 3, title: 'Modalverben  Perfekt', dbTopE: "Vorgangspassivs", dbTopZ: "PerfektModalverb", isOpen: false },
  { id: 3, title: 'Modalverben  Plusquamperfekt', dbTopE: "Vorgangspassivs", dbTopZ: "PlusquamperfektModalverb", isOpen: false },
  { id: 3, title: 'Modalverben  Futur1', dbTopE: "Vorgangspassivs", dbTopZ: "Futur1Modalverb", isOpen: false },
])

var titlesKonjunktiv = ref([
  { id: 1, title: 'KonjunktivII', dbTopE: "Vorgangspassivs", dbTopZ: "KonjunktivII", isOpen: false },
])

// --------------Zustands-----
var titlesZustandspassiv = ref([
  { id: 1, title: 'Werben', dbTopE: "Zustandspassiv", dbTopZ: "Werben", isOpen: false },
])

var titlesZustandspassivModalverben = ref([
  { id: 1, title: 'Modalverben Präsens', dbTopE: "Zustandspassiv", dbTopZ: "PräsensModalverb", isOpen: false },
  { id: 1, title: 'Modalverben Präteritum', dbTopE: "Zustandspassiv", dbTopZ: "PräteritumModalverb", isOpen: false },
  { id: 1, title: 'Modalverben Perfekt', dbTopE: "Zustandspassiv", dbTopZ: "PerfektModalverb", isOpen: false },
  { id: 1, title: 'Modalverben Plusquamperfekt', dbTopE: "Zustandspassiv", dbTopZ: "PlusquamperfektModalverb", isOpen: false },
  { id: 1, title: 'Modalverben Futur1', dbTopE: "Zustandspassiv", dbTopZ: "Futur1Modalverb", isOpen: false },
])

var titlesZustandsKonjunktiv = ref([
  { id: 1, title: 'KonjunktivII', dbTopE: "Zustandspassiv", dbTopZ: "KonjunktivII", isOpen: false },
])

// ---------------------

// { id: 7, title: 'Gegenwart Passiv', dbTopE: "", dbTopZ: "", dbItems: "SlotGegenwartPassiv", isOpen: false },
// { id: 8, title: 'Vergangenheit Passiv', dbTopE: "", dbTopZ: "", dbItems: "SlotVergangenheitPassiv", isOpen: false },
// { id: 9, title: 'FuturI Passiv', dbTopE: "", dbTopZ: "", dbItems: "SlotFuturIPassiv", isOpen: false },
// { id: 10, title: 'FuturII Passiv', dbTopE: "", dbTopZ: "", dbItems: "SlotFuturIIPassiv", isOpen: false },



// { id: 11, title: 'Modalverben Gegenwart Passiv', dbTopE: "", dbTopZ: "", dbItems: "SlotModalverbenGegenwartPassiv", isOpen: false },
// { id: 12, title: 'Modalverben Gegenwart Passiv', dbTopE: "", dbTopZ: "", dbItems: "SlotModalverbenGegenwartPassiv", isOpen: false },
// { id: 13, title: 'Modalverben Vergangenheit Passiv', dbTopE: "", dbTopZ: "", dbItems: "SlotModalverbenVergangenheitPassiv", isOpen: false },
// { id: 14, title: 'Modalverben FuturII Passiv', dbTopE: "", dbTopZ: "", dbItems: "SlotModalverbenFuturIIPassiv", isOpen: false },


const CloseAndere = (id) => {
  titles.value.forEach(car => {
    car.id == id ? car.isOpen = true : car.isOpen = false;

  })
};

// ---------верхняя таблица-------------


// ================================================
// const addItem = async (text, res) => {
//   try {
//     await setDoc(doc(db, "SlotZuFuturIIPassiv", text), res);
//   } catch (error) {
//     console.error("Error saving user ", error);
//   }
// };
// const addUser = () => {
//   SlotZuFuturIIPassiv.forEach((cell) => {
//     var text = Object.values(cell)[0];
//     var x = Object.values(cell).slice(1, cell.length).join(' ');
//     var res = {
//       text: text,
//       x: x
//     };
//     addItem(text, res)
//   });
// };

// ------------
// var titles = reactive([]);



// var DVP = reactive([]);
// var SVPräteritum = reactive([]);
// var SVPerfekt = reactive([]);
// var SVPlusquamperfekt = reactive([]);
// var SVFuturum = reactive([]);

// var SVergangs = reactive([]);





// var Smüssen = reactive([]);
// var SGegenwartPassiv = reactive([]);
// var SVergangenheitPassiv = reactive([]);
// var SFuturIPassiv = reactive([]);
// var SFuturIIPassiv = reactive([]);
// var SModalverbenGegenwartPassiv = reactive([]);
// var SModalverbenVergangenheitPassiv = reactive([]);
// var SModalverbenFuturIPassiv = reactive([]);
// var SModalverbenFuturIIPassiv = reactive([]);

// var titlesZu = reactive([]);
// var SZustandspassivsPräsens = reactive([]);
// var SZustandspassivsPräteritum = reactive([]);
// var SZustandspassivsPerfekt = reactive([]);
// var SZustandspassivsPlusquamperfekt = reactive([]);
// var SZustandspassivsFuturum = reactive([]);
// var SZuPräsensModalverb = reactive([]);
// var SZuPräteritumModalverb = reactive([]);
// var SZuPerfektModalverb = reactive([]);
// var SZuPlusquamperfektModalverb = reactive([]);
// var SZuFutur1Modalverb = reactive([]);
// var SZuGegenwartPassiv = reactive([]);
// var SZuVergangenheitPassiv = reactive([]);
// var SZuFuturIPassiv = reactive([]);
// var SZuFuturIIPassiv = reactive([]);



// const SlotVorgangspassivsPräsens = query(collection(db, "SlotVorgangspassivsPräsens"));
// const SlotVorgangspassivsPräteritum = query(collection(db, "SlotVorgangspassivsPräteritum"));
// const SlotVorgangspassivsPerfekt = query(collection(db, "SlotVorgangspassivsPerfekt"));
// const SlotVorgangspassivsPlusquamperfekt = query(collection(db, "SlotVorgangspassivsPlusquamperfekt"));
// const SlotVorgangspassivsFuturum = query(collection(db, "SlotVorgangspassivsFuturum"));
// const Slotmüssen = query(collection(db, "Slotmüssen"));
// const SlotGegenwartPassiv = query(collection(db, "SlotGegenwartPassiv"));
// const SlotVergangenheitPassiv = query(collection(db, "SlotVergangenheitPassiv"));
// const SlotFuturIPassiv = query(collection(db, "SlotFuturIPassiv"));
// const SlotFuturIIPassiv = query(collection(db, "SlotFuturIIPassiv"));
// const SlotModalverbenGegenwartPassiv = query(collection(db, "SlotModalverbenGegenwartPassiv"));
// const SlotModalverbenVergangenheitPassiv = query(collection(db, "SlotModalverbenVergangenheitPassiv"));
// const SlotModalverbenFuturIPassiv = query(collection(db, "SlotModalverbenFuturIPassiv"));
// const SlotModalverbenFuturIIPassiv = query(collection(db, "SlotModalverbenFuturIIPassiv"));




// const SlotZustandspassivsPräsens = query(collection(db, "SlotZustandspassivsPräsens"));
// const SlotZustandspassivsPräteritum = query(collection(db, "SlotZustandspassivsPräteritum"));
// const SlotZustandspassivsPerfekt = query(collection(db, "SlotZustandspassivsPerfekt"));
// const SlotZustandspassivsPlusquamperfekt = query(collection(db, "SlotZustandspassivsPlusquamperfekt"));
// const SlotZustandspassivsFuturum = query(collection(db, "SlotZustandspassivsFuturum"));
// const SlotZuPräsensModalverb = query(collection(db, "SlotZuPräsensModalverb"));
// const SlotZuPräteritumModalverb = query(collection(db, "SlotZuPräteritumModalverb"));
// const SlotZuPerfektModalverb = query(collection(db, "SlotZuPerfektModalverb"));
// const SlotZuPlusquamperfektModalverb = query(collection(db, "SlotZuPlusquamperfektModalverb"));
// const SlotZuFutur1Modalverb = query(collection(db, "SlotZuFutur1Modalverb"));
// const SlotZuGegenwartPassiv = query(collection(db, "SlotZuGegenwartPassiv"));
// const SlotZuVergangenheitPassiv = query(collection(db, "SlotZuVergangenheitPassiv"));
// const SlotZuFuturIPassiv = query(collection(db, "SlotZuFuturIPassiv"));
// const SlotZuFuturIIPassiv = query(collection(db, "SlotZuFuturIIPassiv"));

// var TopVorPräsens = ref([]);
// var TopVorPräteritum = ref([]);
// var TopVorPerfekt = ref([]);
// var TopVorPlusquamperfekt = ref([]);
// var TopVorVorgangsFutur = ref([]);

// onMounted(async () => {
//   try {
//     const docSnap = await getDoc(doc(db, "Vorgangspassivs", "Präsens"));
//     if (docSnap.exists()) {
//       TopVorPräsens.value = docSnap.data()
//       TopVorPräsens.value.id = 0;
//       TopVorPräsens.value.isOpen = true;
//     }
//   } catch (e) {
//     console.error("Error getting document: ", e);
//   }
//   try {
//     const docSnap = await getDoc(doc(db, "Vorgangspassivs", "Präteritum"));
//     if (docSnap.exists()) {
//       TopVorPräteritum.value = docSnap.data()
//       TopVorPräteritum.value.id = 1;
//       TopVorPräteritum.value.isOpen = false;
//     }
//   } catch (e) {
//     console.error("Error getting document: ", e);
//   }
//   try {
//     const docSnap = await getDoc(doc(db, "Vorgangspassivs", "Perfekt"));
//     if (docSnap.exists()) {
//       TopVorPerfekt.value = docSnap.data()
//       TopVorPerfekt.value.id = 2;
//       TopVorPerfekt.value.isOpen = false;
//     }
//   } catch (e) {
//     console.error("Error getting document: ", e);
//   }
//   try {
//     const docSnap = await getDoc(doc(db, "Vorgangspassivs", "Plusquamperfekt"));
//     if (docSnap.exists()) {
//       TopVorPlusquamperfekt.value = docSnap.data()
//       TopVorPlusquamperfekt.value.id = 3;
//       TopVorPlusquamperfekt.value.isOpen = false;
//     }
//   } catch (e) {
//     console.error("Error getting document: ", e);
//   }
//   try {
//     const docSnap = await getDoc(doc(db, "Vorgangspassivs", "VorgangsFutur1"));
//     if (docSnap.exists()) {
//       TopVorVorgangsFutur.value = docSnap.data()
//       TopVorVorgangsFutur.value.id = 4;
//       TopVorVorgangsFutur.value.isOpen = false;
//     }
//   } catch (e) {
//     console.error("Error getting document: ", e);
//   }
//   // ------------------------------------

//   onSnapshot(SlotVorgangspassivsPräsens, (querySnapshot) => {
//     querySnapshot.forEach((doc) => {
//       DVP.push(doc.data());
//     });
//     titles.push({ id: 0, title: 'Vorgangspassivs Präsens', isOpen: true });
//     DVP.id = 0;
//     DVP.isOpen = true;
//   })
//   onSnapshot(SlotVorgangspassivsPräteritum, (querySnapshot) => {
//     querySnapshot.forEach((doc) => {
//       SVPräteritum.push(doc.data());
//     });
//     titles.push({ id: 1, title: 'Vorgangspassivs Präteritum', isOpen: false });
//     SVPräteritum.id = 1;
//     SVPräteritum.isOpen = false;
//   })
//   onSnapshot(SlotVorgangspassivsPerfekt, (querySnapshot) => {
//     querySnapshot.forEach((doc) => {
//       SVPerfekt.push(doc.data());
//     });
//     titles.push({ id: 2, title: 'Vorgangspassivs Perfekt', isOpen: false });
//     SVPerfekt.id = 2;
//     SVPerfekt.isOpen = false;
//   })
//   onSnapshot(SlotVorgangspassivsPlusquamperfekt, (querySnapshot) => {
//     querySnapshot.forEach((doc) => {
//       SVPlusquamperfekt.push(doc.data());
//     });
//     titles.push({ id: 3, title: 'Vorgangspassivs Plusquamperfekt', isOpen: false });
//     SVPlusquamperfekt.id = 3;
//     SVPlusquamperfekt.isOpen = false;
//   })
//   onSnapshot(SlotVorgangspassivsFuturum, (querySnapshot) => {
//     querySnapshot.forEach((doc) => {
//       SVFuturum.push(doc.data());
//     });
//     titles.push({ id: 4, title: 'Vorgangspassivs Futurum', isOpen: false });
//     SVFuturum.id = 4;
//     SVFuturum.isOpen = false;
//   })




//   onSnapshot(Slotmüssen, (querySnapshot) => {
//     querySnapshot.forEach((doc) => {
//       Smüssen.push(doc.data());
//     });
//     titles.push({ id: 5, title: 'Müssen', isOpen: false });
//     Smüssen.id = 5;
//     Smüssen.isOpen = false;
//   })
//   onSnapshot(SlotGegenwartPassiv, (querySnapshot) => {
//     querySnapshot.forEach((doc) => {
//       SGegenwartPassiv.push(doc.data());
//     });
//     titles.push({ id: 6, title: 'Gegenwart Passiv', isOpen: false });
//     SGegenwartPassiv.id = 6;
//     SGegenwartPassiv.isOpen = false;
//   })
//   onSnapshot(SlotVergangenheitPassiv, (querySnapshot) => {
//     querySnapshot.forEach((doc) => {
//       SVergangenheitPassiv.push(doc.data());
//     });
//     titles.push({ id: 7, title: 'Vergangenheit Passiv', isOpen: false });
//     SVergangenheitPassiv.id = 7;
//     SVergangenheitPassiv.isOpen = false;
//   })
//   onSnapshot(SlotFuturIPassiv, (querySnapshot) => {
//     querySnapshot.forEach((doc) => {
//       SFuturIPassiv.push(doc.data());
//     });
//     titles.push({ id: 8, title: 'FuturI Passiv', isOpen: false });
//     SFuturIPassiv.id = 8;
//     SFuturIPassiv.isOpen = false;
//   })
//   onSnapshot(SlotFuturIIPassiv, (querySnapshot) => {
//     querySnapshot.forEach((doc) => {
//       SFuturIIPassiv.push(doc.data());
//     });
//     titles.push({ id: 9, title: 'FuturII Passiv', isOpen: false });
//     SFuturIIPassiv.id = 9;
//     SFuturIIPassiv.isOpen = false;
//   })
//   onSnapshot(SlotModalverbenGegenwartPassiv, (querySnapshot) => {
//     querySnapshot.forEach((doc) => {
//       SModalverbenGegenwartPassiv.push(doc.data());
//     });
//     titles.push({ id: 10, title: 'Modalverben Gegenwart Passiv', isOpen: false });
//     SModalverbenGegenwartPassiv.id = 10;
//     SModalverbenGegenwartPassiv.isOpen = false;
//   })
//   onSnapshot(SlotModalverbenVergangenheitPassiv, (querySnapshot) => {
//     querySnapshot.forEach((doc) => {
//       SModalverbenVergangenheitPassiv.push(doc.data());
//     });
//     titles.push({ id: 11, title: 'Modalverben Vergangenheit Passiv', isOpen: false });
//     SModalverbenVergangenheitPassiv.id = 11;
//     SModalverbenVergangenheitPassiv.isOpen = false;
//   })
//   onSnapshot(SlotModalverbenFuturIPassiv, (querySnapshot) => {
//     querySnapshot.forEach((doc) => {
//       SModalverbenFuturIPassiv.push(doc.data());
//     });
//     titles.push({ id: 12, title: 'Modalverben FuturI Passiv', isOpen: false });
//     SModalverbenFuturIPassiv.id = 12;
//     SModalverbenFuturIPassiv.isOpen = false;
//   })
//   onSnapshot(SlotModalverbenFuturIIPassiv, (querySnapshot) => {
//     querySnapshot.forEach((doc) => {
//       SModalverbenFuturIIPassiv.push(doc.data());
//     });
//     titles.push({ id: 13, title: 'Modalverben FuturII Passiv', isOpen: false });
//     SModalverbenFuturIIPassiv.id = 13;
//     SModalverbenFuturIIPassiv.isOpen = false;
//   })




//   onSnapshot(SlotZustandspassivsPräsens, (querySnapshot) => {
//     querySnapshot.forEach((doc) => {
//       SZustandspassivsPräsens.push(doc.data());
//     });
//     titlesZu.push({ id: 0, title: 'Zustandspassivs Präsens', isOpen: true });
//     SZustandspassivsPräsens.id = 0;
//     SZustandspassivsPräsens.isOpen = true;
//   })
//   onSnapshot(SlotZustandspassivsPräteritum, (querySnapshot) => {
//     querySnapshot.forEach((doc) => {
//       SZustandspassivsPräteritum.push(doc.data());
//     });
//     titlesZu.push({ id: 1, title: 'Zustandspassivs Präteritum', isOpen: false });
//     SZustandspassivsPräteritum.id = 1;
//     SZustandspassivsPräteritum.isOpen = false;
//   })
//   onSnapshot(SlotZustandspassivsPerfekt, (querySnapshot) => {
//     querySnapshot.forEach((doc) => {
//       SZustandspassivsPerfekt.push(doc.data());
//     });
//     titlesZu.push({ id: 2, title: 'Zustandspassivs Perfekt', isOpen: false });
//     SZustandspassivsPerfekt.id = 2;
//     SZustandspassivsPerfekt.isOpen = false;
//   })
//   onSnapshot(SlotZustandspassivsPlusquamperfekt, (querySnapshot) => {
//     querySnapshot.forEach((doc) => {
//       SZustandspassivsPlusquamperfekt.push(doc.data());
//     });
//     titlesZu.push({ id: 3, title: 'Zustandspassivs Plusquamperfekt', isOpen: false });
//     SZustandspassivsPlusquamperfekt.id = 3;
//     SZustandspassivsPlusquamperfekt.isOpen = false;
//   })
//   onSnapshot(SlotZustandspassivsFuturum, (querySnapshot) => {
//     querySnapshot.forEach((doc) => {
//       SZustandspassivsFuturum.push(doc.data());
//     });
//     titlesZu.push({ id: 4, title: 'Zustandspassivs Futurum', isOpen: false });
//     SZustandspassivsFuturum.id = 4;
//     SZustandspassivsFuturum.isOpen = false;
//   })
//   onSnapshot(SlotZuPräsensModalverb, (querySnapshot) => {
//     querySnapshot.forEach((doc) => {
//       SZuPräsensModalverb.push(doc.data());
//     });
//     titlesZu.push({ id: 5, title: 'Zustandspassivs Präsens Modalverb', isOpen: false });
//     SZuPräsensModalverb.id = 5;
//     SZuPräsensModalverb.isOpen = false;
//   })
//   onSnapshot(SlotZuPräteritumModalverb, (querySnapshot) => {
//     querySnapshot.forEach((doc) => {
//       SZuPräteritumModalverb.push(doc.data());
//     });
//     titlesZu.push({ id: 6, title: 'Zustandspassivs Präteritum Modalverb', isOpen: false });
//     SZuPräteritumModalverb.id = 6;
//     SZuPräteritumModalverb.isOpen = false;
//   })
//   onSnapshot(SlotZuPerfektModalverb, (querySnapshot) => {
//     querySnapshot.forEach((doc) => {
//       SZuPerfektModalverb.push(doc.data());
//     });
//     titlesZu.push({ id: 7, title: 'Zustandspassivs Perfekt Modalverb', isOpen: false });
//     SZuPerfektModalverb.id = 7;
//     SZuPerfektModalverb.isOpen = false;
//   })
//   onSnapshot(SlotZuPlusquamperfektModalverb, (querySnapshot) => {
//     querySnapshot.forEach((doc) => {
//       SZuPlusquamperfektModalverb.push(doc.data());
//     });
//     titlesZu.push({ id: 8, title: 'Zustandspassivs Plusquamperfekt Modalverb', isOpen: false });
//     SZuPlusquamperfektModalverb.id = 8;
//     SZuPlusquamperfektModalverb.isOpen = false;
//   })
//   onSnapshot(SlotZuFutur1Modalverb, (querySnapshot) => {
//     querySnapshot.forEach((doc) => {
//       SZuFutur1Modalverb.push(doc.data());
//     });
//     titlesZu.push({ id: 9, title: 'Zustandspassivs Futur1 Modalverb', isOpen: false });
//     SZuFutur1Modalverb.id = 9;
//     SZuFutur1Modalverb.isOpen = false;
//   })
//   onSnapshot(SlotZuGegenwartPassiv, (querySnapshot) => {
//     querySnapshot.forEach((doc) => {
//       SZuGegenwartPassiv.push(doc.data());
//     });
//     titlesZu.push({ id: 10, title: 'Zustandspassivs Gegenwart Passiv', isOpen: false });
//     SZuGegenwartPassiv.id = 10;
//     SZuGegenwartPassiv.isOpen = false;
//   })
//   onSnapshot(SlotZuVergangenheitPassiv, (querySnapshot) => {
//     querySnapshot.forEach((doc) => {
//       SZuVergangenheitPassiv.push(doc.data());
//     });
//     titlesZu.push({ id: 11, title: 'Zustandspassivs Vergangenheit Passiv', isOpen: false });
//     SZuVergangenheitPassiv.id = 11;
//     SZuVergangenheitPassiv.isOpen = false;
//   })
//   onSnapshot(SlotZuFuturIPassiv, (querySnapshot) => {
//     querySnapshot.forEach((doc) => {
//       SZuFuturIPassiv.push(doc.data());
//     });
//     titlesZu.push({ id: 12, title: 'Zustandspassivs FuturI Passiv', isOpen: false });
//     SZuFuturIPassiv.id = 12;
//     SZuFuturIPassiv.isOpen = false;
//   })
//   onSnapshot(SlotZuFuturIIPassiv, (querySnapshot) => {
//     querySnapshot.forEach((doc) => {
//       SZuFuturIIPassiv.push(doc.data());
//     });
//     titlesZu.push({ id: 13, title: 'Zustandspassivs FuturII Passiv', isOpen: false });
//     SZuFuturIIPassiv.id = 13;
//     SZuFuturIIPassiv.isOpen = false;
//   })
//   setTimeout(() => {
//     isLoading.value = false;
//   }, 100);
// })

// // ------------pinia-------------
// import { useAuthStore } from '@/store/authent';
// const authStore = useAuthStore();

// const addTime = (formattedTime, prozent) => { authStore.refresh('Passiv', formattedTime, prozent) };

var isLoading = ref(true);
onMounted(() => {
  setTimeout(() => {
    isLoading.value = false;
  }, 100);
})


</script>

<style lang="scss">
.base-area {
  margin: 5px 0 10px;


  &__unit {
    padding: 5px;
    border-radius: 5px;
    margin: 0 0 10px 0;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 10px;

    @media (max-width: 600px) {}

    h3 {
      grid-column: 1/-1;
      font-family: "RR", sans-serif;
      font-size: 15px;
      font-weight: 800;
      color: #5d4037;
      text-transform: uppercase;
      line-height: 1.5;
      text-shadow: 0 0 5px white;
      margin: 0 50px 0 0;
    }

    &:nth-child(1) {
      background: lighten($purple-3, 20%);
      border: 3px solid lighten($purple-3, 10%);
    }

    &:nth-child(2) {
      background: lighten($light-blue-7, 20%);
      border: 3px solid lighten($light-blue-7, 10%);
    }

    &:nth-child(3) {
      background: lighten($cyan-6, 20%);
      border: 3px solid lighten($cyan-6, 10%);
    }
  }
}




p {
  padding: 3px 0;
}

.page-block div p {
  &:last-child {
    margin: 0 0 10px 0;
  }
}
</style>