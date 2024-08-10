<template lang="pug">
.container
	.hero 
		.canvas 
			textarea.result(type='textarea'  v-copy :v-model="Something" :value='Something' )
		.hero__head
			.hero__temp
				Button.hero__reset( @click='handelClean')
			input.hero__line(type = 'text'  v-model='Result' )
		.hero__body
			Akkord( :Data='[copyDataCommon,copyDataClass,copyData,copyDataProps,copyDataInput,copyDataPINIA,copyDataIMG]' @someEvent = "someEvent")






</template>

<script setup>
import { ref } from 'vue'
import Button from './Button.vue';
import Tab from '@/components/Tab.vue';
import Akkord from '@/components/Akkord.vue';
var Result = ref('');
var Something = ref('');
var lastResult = ref('');

const copyDataCommon = [
	{ title: 'Common' },
	{ dataText: 'import Tab from "@/components/Tab.vue";', discription: '', },
	{ dataText: "var  = ref('');", discription: "", },
	{ dataText: "import { ref, onMounted } from 'vue'", discription: "", },
	{ dataText: "onMounted(() => {})", discription: "", },

	{ dataText: "", discription: "", },
	{ dataText: "", discription: "", },
	{ dataText: "", discription: "", },
	{ dataText: 'v-html= " "', discription: 'содержимое будет вставляться как обычный HTML и не будет компилироваться или обрабатываться как шаблоны Vue.', },
	{
		dataText: 'v-show = " "', discription: 'Отображает элемент по условию, выполняя переключение у элемента CSS-свойства display в зависимости от истинности указанного выражения.Директива запускает анимации перехода при изменении состояния.',
	},
	{ dataText: 'v-if= " "', discription: 'При переключении элемент и все содержащиеся в нём директивы / компоненты будут уничтожены и созданы заново.', },
	{ dataText: 'v-else', discription: 'предыдущий элемент должен иметь директиву v-if или v-else-if.Обозначает «блок else» для v-if или цепочки v-if/v-else-if.', },
	{ dataText: 'v-else-if', discription: 'Обозначает «блок else if» для v-if. Можно использовать для создания цепочек условий.', },
	{ dataText: 'v-for="item in items" :key="item.id"', discription: '', },
	{
		dataText: '@click="" ', discription: 'Прикрепляет обработчик события к элементу. Тип события определяется аргументом. .stop — вызывает event.stopPropagation()..prevent — вызывает event.preventDefault()..capture — отслеживает событие в режиме capture..self — вызывает обработчик только если событие произошло именно на этом элементе..{ keyAlias } — вызывает обработчик только при нажатии определённой клавиши..once — вызывает обработчик события только один раз..left — вызывает обработчик только по нажатию левой кнопки мыши..right — вызывает обработчик только по нажатию правой кнопки мыши..middle — вызывает обработчик только по нажатию средней кнопки мыши..passive — добавляет обработчик события DOM с опцией { passive: true }.'
	},
	{
		discription: 'Динамически привязывает один или несколько атрибутов или входных параметров компонента к выражению. .camel — преобразование имён атрибутов из kebab-case в camelCase..prop — форсирует установку привязки как свойством DOM. 3.2+.attr — форсирует установку привязки атрибутом DOM.', dataText: ':class="{ red: isRed }"',
	},
	{ dataText: 'v-model=" "', discription: '', },
	{ dataText: 'v-slot', discription: 'Обозначение именованного слота или слота, который получает входные параметры.', },
	{ dataText: 'v-pre', discription: 'Пропускает компиляцию для элемента и всех его потомков. Можно использовать для отображения необработанных тегов фигурных скобок. Пропуск большого количества элементов без директив на них также может ускорить компиляцию.', },
	{ dataText: 'v-cloak', discription: 'Директива остаётся на элементе, пока связанный с ним экземпляр компонента не завершит компиляцию. В сочетании с CSS-правилом [v-cloak] { display: none } позволяет скрывать нескомпилированные шаблоны до тех пор, пока не будет готов экземпляр компонента.', },
	{ dataText: 'v-once', discription: 'Отрисовывает один раз элемент или компонент. При последующих обновлениях данных и перерисовках элемент/компонент и все его потомки будут считаться статичными и пропускаться.', },
	{ dataText: 'v-memo="[valueA, valueB]"', discription: 'Директива ожидает массив фиксированной длины зависимых значений, которые станут использоваться для сравнения при мемоизации. Если каждое значение массива осталось таким же, как при последней отрисовке, то обновление всего поддерева будет пропущено.', }
]
const copyDataClass = [
	{ title: ':class,:style' },
	{
		dataText: ':class="{(focused == true) ? "_is-light" : "" }" ', discription: ''
	},
	{ dataText: ':class="{ active: isActive }" ', discription: 'наличие класса active на элементе будет определяться истинностью значения свойства isActive.', },
	{ dataText: ':class="classObject"', discription: ' ', },
	{
		dataText: 'computed: {classObject() {return { active: this.isActive && !this.error,"text-danger": this.error && this.error.type === "fatal"}}} ', discription: ' ',
	},
	{ dataText: ':class="[activeClass, errorClass]', discription: ' ', },
	{ dataText: "", discription: "", },
	{ dataText: "", discription: "", },
	{ dataText: "", discription: "", },
	{ dataText: ':style="{ color: activeColor, fontSize: fontSize + "px" }"', discription: ' ', },
	{ dataText: ':style="{backgroundColor: backGround}"', discription: ' ', },
]

const copyData = [
	{ title: 'ссылка на tag/custom directive/emit/slot' },

	{ dataText: " ", discription: "ссылка на конкретный tag. аналог this", },
	{ dataText: "input(type='text' ref='some')", discription: '', },
	{ dataText: "const some = ref(null)", discription: "", },
	{ dataText: "", discription: "", },
	{ dataText: "", discription: "", },
	{ dataText: "", discription: "", },
	{ dataText: " ", discription: "custom directive прописывается в main.js", },
	{
		dataText: "app.directive('copy', {mounted(el) {el.addEventListener('click', (e) => {    });},}) ", discription: "",
	},
	{ dataText: "app.directive('blur', { updated(el, binding) { if (binding.value) { el.blur(); el.classList.add('_is - light'); } }, })", discription: " ", },
	{ dataText: "", discription: "", },
	{ dataText: "", discription: "", },
	{ dataText: "", discription: "", },
	{ dataText: " ", discription: "emit", },
	{ dataText: "const emit = defineEmits(['someEvent'])", discription: "", },
	{ dataText: "const HendlerClick = (dataText) => { emit('someEvent', dataText)}", discription: "", },


]
const copyDataProps = [
	{ title: 'Props' },
	{ dataText: "", discription: "В родителе", },

	{
		dataText: "Button(text = 'beispiele mischen' @someEvent = 'someEvent') ", discription: "",
	},
	{ dataText: "const someEvent = (data) => {console.log(data);}", discription: "", },
	{ dataText: "", discription: "", },
	{ dataText: "", discription: "", },
	{ dataText: "", discription: "В потомке", },
	{ dataText: "const props = defineProps({ ", discription: "", },
	{ dataText: "text: { ", discription: "", },
	{ dataText: "type: String, ", discription: "", },
	{ dataText: "required: false ", discription: "", },
	{ dataText: "}, ", discription: "", },
	{ dataText: "}) ", discription: "", },
	{ dataText: "const emit = defineEmits(['someEvent']) ", discription: "", },
	{ dataText: "const HendleEventInput = () => { if (inputValue.value == 'test') { emit('anwortPositiv', data) } }", discription: "", },
]



const copyDataInput = [
	{ title: 'Input' },
	{
		dataText: "TestInput(v-model='age')", discription: "В родителе",
	},
	{ dataText: "	p age: { { age } }", discription: "В родителе", },
	{ dataText: "import { ref } from 'vue';", discription: "В родителе", },
	{ dataText: "import TestInput from '@/components/TestInput.vue';", discription: "В родителе", },
	{ dataText: "const age = ref('fff')", discription: "В родителе", },
	{ dataText: "input(type = 'text' @input = '$emit('update:modelValue', $event.target.value)' :value = 'modelValue')", discription: "В потомке", },
	{ dataText: "const props = defineProps({", discription: "В потомке", },
	{ dataText: "modelValue: {", discription: "В потомке", },
	{ dataText: "type: String,", discription: "В потомке", },
	{ dataText: "required: false", discription: "В потомке", },
	{ dataText: "}", discription: "В потомке", },
	{ dataText: "})", discription: "В потомке", },

]


const copyDataPINIA = [
	{ title: 'PINIA' },
	{
		dataText: "import { createPinia } from 'pinia';", discription: "инициализация в index.js",
	},
	{ dataText: "import Stell from './../modules/stellen-vue/Stell.vue';", discription: "", },
	{ dataText: "[...document.querySelectorAll('.stell')].forEach((cell) => { createApp(Stell).use(createPinia()).mount(cell);", discription: "здесь на каждый тег.stell накидывается экземпляр vue в котором уже есть доступ к PINIA", },
	{ dataText: "", discription: "", },
	{ dataText: "", discription: "", },
	{ dataText: "", discription: "", },
	{ dataText: "", discription: "делаем папку store отдельный файл в папке store, например taskStell.js", },
	{
		dataText: "import { ref } from 'vue';", discription: "",
	},
	{
		dataText: "import { defineStore } from 'pinia';", discription: "",
	},
	{ dataText: "export const useTaskSalut = defineStore('taskSalut', { state: () => ({ isActiveSalut: 'notActive', staat: [{ titleItem: 'Токарь', gehaltItem: '80', }, { titleItem: 'Токарь', gehaltItem: '80', },], isVisible: true, }, }), }); ]", discription: "", },
	{ dataText: "", discription: "здесь isActiveSalut прописана как реактивная. можно менять ее значение в компонентах и она будет реакивно обновляться в хранилище. по новому значению можно что-то делать в других компонентах.", },
	{ dataText: "", discription: "", },
	{ dataText: "", discription: "", },
	{ dataText: "", discription: "", },
	{ dataText: "", discription: "", },
	{ dataText: "import { useTaskSalut } from '../store/taskSalut'", discription: "", },
	{ dataText: "import { storeToRefs } from 'pinia'", discription: "", },
	{ dataText: "const store = useTaskSalut();", discription: "", },
	{ dataText: "const { isActiveSalut } = storeToRefs(store)", discription: "", },

]



const copyDataIMG = [
	{ title: 'изображение' },
	{ dataText: "", discription: "делаем в assets папку img. в ней создаем файл img.js.туда же забрасываем картинки.", },
	{ dataText: "import urlImgSalut from './salut.gif';", discription: "", },
	{ dataText: "import urlImgSalut1 from './salut1.gif';", discription: "", },
	{ dataText: "export { urlImgSalut, urlImgSalut1 };", discription: "", },
	{ dataText: "", discription: "", },
	{ dataText: "", discription: "", },
	{ dataText: "", discription: "", },
	{ dataText: "", discription: "потом используем в компонентах.", },
	{ dataText: "import * as images from '@/assets/img/img.js'", discription: "", },
	{ dataText: "img(: src = 'images.urlImgSalut')", discription: "", },
	{ dataText: "", discription: "", },
	{ dataText: "", discription: "", },
	{ dataText: "", discription: "", },
	{ dataText: "import * as images from '@/assets/img/img.js'", discription: "если нужно создать изображение и добавить его на страницу например к какому то тэгу some.value,который создан через ссылку input(type='text' ref='some')const some = ref(null).а потом например удалить через время", },
	{ dataText: "const salut = document.createElement('img')", discription: "", },
	{ dataText: "salut.setAttribute('src', images.urlImgSalut)", discription: "", },
	{ dataText: "salut.classList.add('salut')", discription: "", },
	{ dataText: "some.value.closest('.plaza__line').append(salut)", discription: "", },
	{ dataText: "setTimeout(() => { salut.remove() }, 1000);", discription: "", },

]


// ----------------------------------------
const handelClean = () => {
	let schneidenIndex = Something.value.indexOf(Result.value, 0)
	Something.value = Something.value.substring(0, schneidenIndex);
	Result.value = '';
}
// ----------------------------------------
const someEvent = (data) => {
	Result.value = data;
	lastResult.value = data + "\n";
	Something.value = Something.value + lastResult.value;
}
// ----------------------------------------

</script>

<style lang="scss" scoped>
.hero {
	margin: 10px 0 0 0;

	&__body {
		// grid-template-columns: repeat(auto-fill, 400px);
		display: block;
	}
}

input.hero__line {
	padding: 0 0 0 5px;
}

.hero__button {
	right: auto;
	left: 0;
}

.hero__head {
	grid-template-columns: 20px 1fr;
	column-gap: 20px;
}

.hero__column {
	height: 80vh;
	overflow-y: scroll;
}
</style>
