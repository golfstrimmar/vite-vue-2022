export const useVue = {
  dataVue: [
    [
      { title: "Common" },
      {
        dataText: `import Button from "@/components/Button.vue";
            Button(  @click="clickHandler('Artikel',item)" svg='x-circle'  margin='0')
            `,
      },
      { dataText: "import { ref, onMounted } from 'vue'" },
      { dataText: "var  = ref('');" },
      { dataText: "const  =   ;" },
      { dataText: "var  =   ;" },
      { dataText: "const = () => {};" },
      { dataText: "@  =' ' " },
      { dataText: "onMounted(() => {})" },

      { dataText: 'v-for="item in items" :key="index"' },
      { dataText: ".value" },
      {
        dataText: '@click="handlerClick" ',
        description:
          "Прикрепляет обработчик события к элементу. Тип события определяется аргументом. .stop — вызывает event.stopPropagation()..prevent — вызывает event.preventDefault()..capture — отслеживает событие в режиме capture..self — вызывает обработчик только если событие произошло именно на этом элементе..{ keyAlias } — вызывает обработчик только при нажатии определённой клавиши..once — вызывает обработчик события только один раз..left — вызывает обработчик только по нажатию левой кнопки мыши..right — вызывает обработчик только по нажатию правой кнопки мыши..middle — вызывает обработчик только по нажатию средней кнопки мыши..passive — добавляет обработчик события DOM с опцией { passive: true }.",
      },
      { dataText: "const handlerClick = () => {};" },
      {
        dataText: "transition(mode='easy-in-out' name='opentab')",
        description: "transition",
      },
      {
        dataText:
          ".opentab-enter-from {}.opentab-enter-to {}.opentab-leave-from {}.opentab-leave-to {}",
        description: "transition классы",
      },
      {
        dataText: "isAuthenticated: (state) => !!state.user",
        description:
          "это способ проверить, определено ли свойство user в объекте state и не является ли оно ложным значением (таким как null, undefined, 0, '' и т.д.   дает true или false.  Первое !:Преобразует значение к логическому типу и инвертирует его. Второе !:Снова инвертирует значение, возвращая его в исходный логический тип. ).",
      },
      {
        dataText: `SvgIcon(name='flag')
    import SvgIcon from '@/components/SvgIcon.vue'`,
        description: "SvgIcon",
      },
      {
        dataText: "mes.value = `Hallo, ${data}.\\nSie sind im System!` ;",
        description:
          "Использование \n и CSS: white-space: pre-line;  заставляет браузер отображать переносы строк, заданные с помощью \n, как новые строки.",
      },
      {
        description:
          "гарантирует, что прокрутка произойдет после того, как Vue обновит DOM, что важно, если вы работаете с данными, которые могут изменять элементы на странице и таким образом влиять на прокрутку.",
        dataText: `scrollPosition.value = base.value.getBoundingClientRect().top;
            nextTick(() => {
            window.scrollTo({
            top: scrollPosition.value - 200,
            behavior: 'smooth', // Плавная прокрутка
            });
            });`,
      },
      { title: "Directiven" },
      {
        dataText: 'v-html=" "',
        description:
          "содержимое будет вставляться как обычный HTML и не будет компилироваться или обрабатываться как шаблоны Vue.",
      },
      {
        dataText: 'v-show=" "',
        description:
          "Отображает элемент по условию, выполняя переключение у элемента CSS-свойства display в зависимости от истинности указанного выражения.Директива запускает анимации перехода при изменении состояния.",
      },
      {
        dataText: 'v-if=" "',
        description:
          "При переключении элемент и все содержащиеся в нём директивы / компоненты будут уничтожены и созданы заново.",
      },
      {
        dataText: "v-else",
        description:
          "предыдущий элемент должен иметь директиву v-if или v-else-if.Обозначает «блок else» для v-if или цепочки v-if/v-else-if.",
      },
      {
        dataText: "v-else-if",
        description:
          "Обозначает «блок else if» для v-if. Можно использовать для создания цепочек условий.",
      },

      { dataText: 'v-model=" "', description: "" },
      {
        dataText: "v-slot",
        description:
          "Обозначение именованного слота или слота, который получает входные параметры.",
      },
      {
        dataText: "v-pre",
        description:
          "Пропускает компиляцию для элемента и всех его потомков. Можно использовать для отображения необработанных тегов фигурных скобок. Пропуск большого количества элементов без директив на них также может ускорить компиляцию.",
      },
      {
        dataText: "v-cloak",
        description:
          "Директива остаётся на элементе, пока связанный с ним экземпляр компонента не завершит компиляцию. В сочетании с CSS-правилом [v-cloak] { display: none } позволяет скрывать нескомпилированные шаблоны до тех пор, пока не будет готов экземпляр компонента.",
      },
      {
        dataText: "v-once",
        description:
          "Отрисовывает один раз элемент или компонент. При последующих обновлениях данных и перерисовках элемент/компонент и все его потомки будут считаться статичными и пропускаться.",
      },
      {
        dataText: 'v-memo="[valueA, valueB]"',
        description:
          "Директива ожидает массив фиксированной длины зависимых значений, которые станут использоваться для сравнения при мемоизации. Если каждое значение массива осталось таким же, как при последней отрисовке, то обновление всего поддерева будет пропущено.",
      },
    ],
    [
      { title: ":class" },
      {
        dataText: `:class="[(modelValue !== '') ? '_is-light' : '']"`,
      },
      { dataText: ':class="[activeClass, errorClass]', description: " " },
      {
        dataText: ':class="{ active: isActive }" ',
        description:
          "наличие класса active на элементе будет определяться истинностью значения свойства isActive.",
      },
      { dataText: ':class="classObject"', description: " " },

      { title: "computed" },

      {
        dataText: `--//computed//--
            const count = ref(1)
const plusOne = computed(() => count.value + 1)
console.log(plusOne.value)// 2`,

        description: " ",
      },
      {
        dataText: `--//computed//--
            
            const count = ref(1)
const plusOne = computed({
  get: () => count.value + 1,
  set: val => {
    count.value = val - 1
  }
})
plusOne.value = 1
console.log(count.value) // 0`,

        description:
          "const count = ref(1):Создается реактивная переменная count, значение которой изначально равно 1.const plusOne = computed({ get: () => count.value + 1, set: val => { count.value = val - 1 } }):Создается вычисляемое свойство plusOne с использованием computed, которое имеет два свойства: get и set .get: Это функция, которая определяет, что возвращает вычисляемое свойство. В данном случае она возвращает count.value + 1 .set: Это функция, которая вызывается при изменении значения plusOne. В данном случае она устанавливает значение count.value, равное переданному значению минус 1 (val - 1). plusOne.value = 1:Это устанавливает значение plusOne в 1, что приводит к вызову set-метода.В set-методе val равно 1, поэтому значение count.value устанавливается в 1 - 1, то есть в 0.console.log(count.value):Выводит текущее значение count.value, которое на этот момент равно 0.",
      },
      { title: "watch,watchEffect" },
      {
        dataText: `--//watchEffect//--
            
            const count = ref(0)
watchEffect(() => console.log(count.value))
// -> выведет 0
setTimeout(() => {
  count.value++
  // -> выведет 1
}, 100)`,

        description:
          "watchEffect — это функция Vue, которая автоматически отслеживает все реактивные зависимости внутри переданной функции и повторно выполняет её при изменении этих зависимостей.В данном случае watchEffect будет отслеживать изменения count.value и выводить его значение в консоль при каждом изменении.",
      },

      {
        dataText: `--//наблюдение за геттер-функцией//-- 
const state = reactive({ count: 0 })
watch(
  () => state.count,
  (count, prevCount) => {
    /* ... */
  }
)
// наблюдение за ref-ссылкой
const count = ref(0)
watch(count, (count, prevCount) => {
  /* ... */
})`,

        description: "watch",
      },

      { title: ":style" },
      {
        dataText: ':style="{ color: activeColor, fontSize: fontSize + "px" }"',
        description: " ",
      },
      {
        dataText: ':style="{backgroundColor: backGround}"',
        description: " ",
      },
      {
        title: "ссылка на конкретный tag. аналог this",
      },
      { dataText: "ref='some'", description: "" },
      { dataText: "const some = ref(null)", description: "" },

      {
        title: "custom directive прописывается в main.js",
      },
      {
        description: "copy",
        dataText: `.directive("copy", {
    mounted(el) {
      el.addEventListener("click", (e) => {
        let add = document.createElement("textarea");
        document.querySelector("body").appendChild(add);
        add.textContent = el.value;
        add.select();
        navigator.clipboard.writeText(add.textContent);
        el.classList.add("_is-active");
        setTimeout(function () {
          add.remove();
          el.classList.remove("_is-active");
        }, 200);
      });
    },
  })`,
      },
      {
        description: "tool",
        dataText: `.directive("tool", {
    mounted(el) {
      let add = document.createElement("div");

      el.addEventListener("mouseover", (e) => {
        add.innerText = el.getAttribute("data");
        add.classList.add("add");
        document.querySelector("body").appendChild(add);
        // var xPosition = el.offsetLeft;
        // var yPosition = el.offsetTop;
        // console.log(xPosition, yPosition);
        // add.style.left = 0 + "px";
        // add.style.top = 0 + "px";
      });

      el.addEventListener("mouseleave", (e) => {
        add.remove();
      });
    },
  })`,
      },
      {
        dataText:
          "app.directive('blur', { updated(el, binding) { if (binding.value) { el.blur(); el.classList.add('_is-light'); } }, })",
      },
      { title: "Input" },
      {
        dataText:
          "TestInput(v-model='age') import TestInput from '@/components/TestInput.vue'; const age = ref('fff')",
        description: "В родителе",
      },
      {
        dataText:
          "input(type = 'text' @input = '$emit('update:modelValue', $event.target.value)' :value = 'modelValue') const props = defineProps({modelValue: {type: String,required: false}})",
        description: "В потомке",
      },
    ],

    [
      { title: "emit" },
      {
        dataText: `const emit = defineEmits(['lineFertig'])`,
        description: "",
      },
      {
        dataText: `const HendlerClick = () => {
 emit('lineFertig', some.value)
}`,
        description: "",
      },
      { title: "Props" },

      {
        dataText: `Button(text="beispiele mischen" @someEvent="someEvent")
const someEvent = (data) => {
console.log(data);
}`,
        description: "В родителе",
      },
      {
        dataText: `button(type="button" @click="$emit('someEvent',text) , Button($event)").btn.but-wave {{ text }}
const props = defineProps({
text: {
type: String,
required: false
}
})`,
        description: "В потомке",
      },

      { title: "работа с props, toRaw " },
      {
        dataText: `const props = defineProps({item: {type: Array , required: false},})
            import {  ref, onMounted, toRaw } from 'vue';var content = ref([]); 
            onMounted(() => {content.value = toRaw(props.item)})
            `,
        description:
          "на входе превращаем его в массив, который можно только рендерить. при перезагрузке страницы весь код слетает. ",
      },
      {
        title:
          "чтобы не слетал код при перезагрзке страницы при рендеринге props, нужно использовать watchEffect",
      },
      {
        title:
          "этот компонент автоматически отсортирует элементы по указанному порядку.",
      },
      {
        dataText: `var content = reactive([]);
            watchEffect(() => {
	content.value = props.Slot
	const orderArray = ['Nominativ', 'Dativ', 'Akkusativ', 'Genitiv', 'Nominativ Ersatz', 'Dativ Ersatz', 'Akkusativ Ersatz', 'Genitiv Ersatz', 'Singular', 'Plural'];

	sortSlot.value = content.value
		.map(item => ({ ...item, sortOrder: orderArray.indexOf(item.title) }))
		.sort((a, b) => a.sortOrder - b.sortOrder)

}) `,

        description: `Этот код полезен в ситуациях, когда нужно динамически сортировать данные на основе какого-то заранее установленного порядка. С помощью watchEffect Vue автоматически отслеживает изменения пропса и обновляет сортированный список sortSlot, обеспечивая правильное отображение данных в компоненте.
            watchEffect(() => { ... }):

watchEffect — это реактивный эффект в Vue, который автоматически отслеживает все зависимости внутри переданной функции и выполняет её заново при изменении этих зависимостей.
content.value = props.Slot:

Этот код обновляет реактивную переменную content, присваивая ей значение пропса Slot. Это действие происходит каждый раз, когда props.Slot изменяется.
Определение orderArray:

orderArray — это массив строк, определяющий порядок, в котором элементы должны быть отсортированы. Этот порядок будет использоваться для сортировки объектов в content.value.
Сортировка массива:

sortSlot.value = content.value.map(...).sort(...) — здесь происходит два этапа:
map: Каждый объект из content.value копируется в новый объект, в который добавляется новое свойство sortOrder, основанное на позиции item.title в orderArray.
sort: Затем этот массив сортируется по значению sortOrder, что обеспечивает правильный порядок элементов.
Как это работает:
При каждом изменении props.Slot срабатывает watchEffect, и:
content.value обновляется, получая новое значение props.Slot.
Затем создается массив, в котором каждому элементу добавляется поле sortOrder, указывающее позицию его title в orderArray.
Массив сортируется по значению sortOrder.
Наконец, sortSlot.value обновляется отсортированным массивом.

            `,
      },
    ],

    [
      { title: "PINIA" },
      {
        dataText:
          "import { createPinia } from 'pinia'; const pinia = createPinia(); .use(pinia)",
        description: "инициализация в index.js",
      },
      {
        dataText: "import Stell from './../modules/stellen-vue/Stell.vue';",
      },
      {
        dataText:
          "[...document.querySelectorAll('.stell')].forEach((cell) => { createApp(Stell).use(createPinia()).mount(cell);",
        description:
          "здесь на каждый тег.stell накидывается экземпляр vue в котором уже есть доступ к PINIA",
      },

      {
        title:
          "делаем папку store отдельный файл в папке store, например taskStell.js",
      },
      {
        dataText:
          "import { defineStore } from 'pinia';export const useTask = defineStore('taskLager', {state: () => {return {dataScss: [],}; },});', ",
      },

      {
        dataText:
          "export const useTaskSalut = defineStore('taskSalut', { state: () => ({ isActiveSalut: 'notActive', staat: [{ titleItem: 'Токарь', gehaltItem: '80', }, { titleItem: 'Токарь', gehaltItem: '80', },], isVisible: true, }, }), }); ]",
      },
      {
        description: "простое использование store",
        dataText:
          "import { useTask } from '@/store/taskLager' const store = useTask();",
      },
      {
        title:
          "здесь isActiveSalut прописана как реактивная. можно менять ее значение в компонентах и она будет реакивно обновляться в хранилище. по новому значению можно что-то делать в других компонентах.",
      },

      {
        dataText: "import { useTaskSalut } from '../store/taskSalut'",
      },
      { dataText: "import { storeToRefs } from 'pinia'", description: "" },
      { dataText: "const store = useTaskSalut();", description: "" },
      {
        dataText: "const { isActiveSalut } = storeToRefs(store)",
      },
    ],
    [
      { title: "изображения" },

      {
        description: "делаем в assets/img/img.js",
        dataText: `import urlImgSalut from "./salut.gif";
import urlFon from "./fon1.jpg";
import urlFonSm from "./fon-sm.jpg";
import spin from "./spin.gif";
export { urlImgSalut, urlFon, urlFonSm, spin };`,
      },
      {
        description: "используем в компонентах",
        dataText: `	img(:src='Imgs.spin' alt='img')

import * as Imgs from '../assets/img/img';`,
      },
      {
        description: "один из вариантов",
        dataText: `import tabel1 from "./penImgs/tabel1.png";
import tabel2 from "./penImgs/tabel2.png";
const listImg = [
  { id: 0, img: tabel1 },
  { id: 1, img: tabel2 },
];
export { listImg };`,
      },

      {
        description:
          "потом используем в компонентах. если нужно создать изображение и добавить его на страницу например к какому то тэгу some.value,который создан через ссылку input(type='text' ref='some')const some = ref(null).а потом например удалить через время",
        dataText: `import * as Imgs from '../assets/img';
var salut, imgSalut;
const handelMO = (img) => {
	Imgs.listImg.forEach(car => {
		if (car.id == img) {
			salut = document.createElement('div')
			salut.classList.add('salut')
			imgSalut = document.createElement('img')
			imgSalut.setAttribute('src', car.img)
			salut.append(imgSalut);
			document.querySelector('body').append(salut);
		}
	})
};
const handelML = () => {
	salut.remove();
};`,
      },
    ],
    [
      {
        title: "firebase database",
      },
      {
        description:
          "делаем в корне файл firebase.js/здесь сразу инициируется storage для храниения изображений",
        dataText: `import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCTr_tR1MbYjHurQgAfdgEntqZQ150rZyA",
  authDomain: "deutsch-d26e4.firebaseapp.com",
  databaseURL:
    "https://deutsch-d26e4-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "deutsch-d26e4",
  storageBucket: "deutsch-d26e4.appspot.com",
  messagingSenderId: "1002823720200",
  appId: "1:1002823720200:web:c70fc15791d9ed502520bd",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);
export { storage, db, auth };
            `,
      },
      {
        description: "забираем коллекцию целиком",
        dataText: `import { db } from "@/composables/firebase.ts";
import { collection, query, onSnapshot, doc, getDoc } from "firebase/firestore";
var Hero = reactive([]);
const SomeColl = query(collection(db, "my-collection"));
onMounted(async () => {
  onSnapshot(SomeColl, (querySnapshot) => {
    querySnapshot.forEach((doc) => {
      Hero.push(doc.data());
    });
  });
});
  `,
      },
      {
        description:
          "если нужно достать один из массивов в коллекци Vorgangspassivs",
        dataText: `import { db } from "@/firebase/config.ts";
import { collection, query, doc,getDoc } from "firebase/firestore";
var TopVorPräsens = reactive([]);
onMounted(async () => {
  try {
    const docSnap = await getDoc(doc(db, "Vorgangspassivs", "Präsens"));
    if (docSnap.exists()) {
      TopVorPräsens.value = docSnap.data()
      TopVorPräsens.value.id = 0;
      TopVorPräsens.value.isOpen = true;
    }
  } catch (e) {
    console.error("Error getting document: ", e);
  }
});`,
      },

      {
        description:
          "ИЗ какого-то массива 'Gegenwart' переправит данные в коллекцию 'KONJUNKTVS2' ",
        dataText: `onMounted(async () => {
  const WerbenRef = collection(db, "KONJUNKTVS2");
  for (const item of Gegenwart) {
    const newDocRef = doc(WerbenRef, 'Gegenwart');
    await setDoc(newDocRef, item);
  }
})
 `,
      },
      {
        description:
          "вызывает коллекции, собирает их в одну и отправляет новую колекцию 'VorWerben' на firebase",

        dataText: `onMounted(async () => {
  const querySnapshot1 = await getDocs(collection(db, "SlotVorgangspassivsPräsens"));
  const querySnapshot2 = await getDocs(collection(db, "SlotVorgangspassivsPräteritum"));
  const querySnapshot3 = await getDocs(collection(db, "SlotVorgangspassivsPerfekt"));
  const querySnapshot4 = await getDocs(collection(db, "SlotVorgangspassivsPlusquamperfekt"));
  const querySnapshot5 = await getDocs(collection(db, "SlotVorgangspassivsFuturum"));
  const documents = [];
  querySnapshot1.forEach((doc) => {
    documents.push({ id: doc.data().text, ...doc.data() });
  });
  querySnapshot2.forEach((doc) => {
    documents.push({ id: doc.data().text, ...doc.data() });
  });
  querySnapshot3.forEach((doc) => {
    documents.push({ id: doc.data().text, ...doc.data() });
  });
  querySnapshot4.forEach((doc) => {
    documents.push({ id: doc.data().text, ...doc.data() });
  });
  querySnapshot5.forEach((doc) => {
    documents.push({ id: doc.data().text, ...doc.data() });
  });
  const WerbenRef = collection(db, "VorWerben");
  for (const item of documents) {
    const newDocRef = doc(WerbenRef, item.id);
    await setDoc(newDocRef, item);
  }
}) `,
      },
      {
        description:
          "вызывает несколько колекций и собирает в один масив XY. потом его можно рендерить",
        dataText: `var XY = ref([]);
          onMounted(async () => {
            const qSq = await getDocs(collection(db, "SlotDataDürfen"));
            const qSw = await getDocs(collection(db, "SlotDataMöchten"));
            const qSe = await getDocs(collection(db, "SlotDataSollen"));
            const qSr = await getDocs(collection(db, "SlotDataWollen"));
            const qSt = await getDocs(collection(db, "SlotDataMögen"));

            qSq.forEach((doc) => {
              XY.value.push(doc.data());
            });
            qSw.forEach((doc) => {
              XY.value.push(doc.data());
            });
            qSe.forEach((doc) => {
              XY.value.push(doc.data());
            });
            qSr.forEach((doc) => {
              XY.value.push(doc.data());
            });
            qSt.forEach((doc) => {
              XY.value.push(doc.data());
            });
          }),

            `,
      },
      {
        title: "компонент достает изображения из storage",
        link: "https://codepen.io/viktor-yushin/pen/WNqYRwv",
      },
      {
        description:
          "использование предыдущего примера для вывода изображений в компоненты",
        link: "https://codepen.io/viktor-yushin/pen/KKjragM",
      },
    ],
    [
      {
        title: "vue validate",
      },
      {
        title: "Form",
        link: "https://stackblitz.com/edit/vitejs-vite-hyhfuw?file=src%2FApp.vue",
      },
      {
        title: "DynamicForm",
        link: "https://stackblitz.com/edit/vee-validate-v4-form-generator-5pek5r?file=src%2FApp.vue",
      },
      {
        title: "custom checkboxes",
        link: "https://stackblitz.com/edit/vee-validate-v4-custom-checkboxes-nsgpvf?file=src%2FApp.vue",
      },

      // {
      //   dataText: `

      //   `,
      //   description: " ",
      // },
    ],
    [
      {
        title: "примеры",
      },
      {
        title: "секундомер",
        link: "https://codepen.io/viktor-yushin/pen/bGPMbbe",
      },
    ],
  ],
};
