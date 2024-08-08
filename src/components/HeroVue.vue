<template lang="pug">
.container
	.hero 
		.canvas 
			textarea.result.copy(type='textarea'  v-copy :v-model="Something" :value='Something' )
		.hero__head
			.hero__temp
				Button.hero__reset( @click='handelClean')
			input.hero__line(type = 'text'  v-model='Result' )
		.hero__body
			Tab(title='Directives' :copyData='copyDataVue' @someEvent = "someEvent")
			


</template>

<script setup>
import { ref } from 'vue'
import Button from './Button.vue';
import Tab from '@/components/Tab.vue';
var Result = ref('');
var Something = ref('');
var lastResult = ref('');
var copyDataVue = [{ i: 0, dataText: '' }];


copyDataVue = [
	{ i: 1, dataText: 'v-html= " "', discription: 'содержимое будет вставляться как обычный HTML и не будет компилироваться или обрабатываться как шаблоны Vue.', },
	{
		i: 1, dataText: 'v-show = " "', discription: 'Отображает элемент по условию, выполняя переключение у элемента CSS-свойства display в зависимости от истинности указанного выражения.Директива запускает анимации перехода при изменении состояния.',
	},
	{ i: 1, dataText: 'v-if= " "', discription: 'При переключении элемент и все содержащиеся в нём директивы / компоненты будут уничтожены и созданы заново.', },
	{ i: 1, dataText: 'v-else', discription: 'предыдущий элемент должен иметь директиву v-if или v-else-if.Обозначает «блок else» для v-if или цепочки v-if/v-else-if.', },
	{ i: 1, dataText: 'v-else-if', discription: 'Обозначает «блок else if» для v-if. Можно использовать для создания цепочек условий.', },
	{ i: 1, dataText: 'v-for="item in items" :key="item.id"', discription: '', },
	{
		i: 1, discription: 'Прикрепляет обработчик события к элементу. Тип события определяется аргументом. .stop — вызывает event.stopPropagation()..prevent — вызывает event.preventDefault()..capture — отслеживает событие в режиме capture..self — вызывает обработчик только если событие произошло именно на этом элементе..{ keyAlias } — вызывает обработчик только при нажатии определённой клавиши..once — вызывает обработчик события только один раз..left — вызывает обработчик только по нажатию левой кнопки мыши..right — вызывает обработчик только по нажатию правой кнопки мыши..middle — вызывает обработчик только по нажатию средней кнопки мыши..passive — добавляет обработчик события DOM с опцией { passive: true }.', dataText: '@',
	},
	{
		i: 1, discription: 'Динамически привязывает один или несколько атрибутов или входных параметров компонента к выражению. .camel — преобразование имён атрибутов из kebab-case в camelCase..prop — форсирует установку привязки как свойством DOM. 3.2+.attr — форсирует установку привязки атрибутом DOM.', dataText: ':class="{ red: isRed }"',
	},
	{ i: 1, dataText: 'v-model=" "', discription: '', },
	{ i: 1, dataText: 'v-slot', discription: 'Обозначение именованного слота или слота, который получает входные параметры.', },
	{ i: 1, dataText: 'v-pre', discription: 'Пропускает компиляцию для элемента и всех его потомков. Можно использовать для отображения необработанных тегов фигурных скобок. Пропуск большого количества элементов без директив на них также может ускорить компиляцию.', },
	{ i: 1, dataText: 'v-cloak', discription: 'Директива остаётся на элементе, пока связанный с ним экземпляр компонента не завершит компиляцию. В сочетании с CSS-правилом [v-cloak] { display: none } позволяет скрывать нескомпилированные шаблоны до тех пор, пока не будет готов экземпляр компонента.', },
	{ i: 1, dataText: 'v-once', discription: 'Отрисовывает один раз элемент или компонент. При последующих обновлениях данных и перерисовках элемент/компонент и все его потомки будут считаться статичными и пропускаться.', },
	{ i: 1, dataText: 'v-memo="[valueA, valueB]"', discription: 'Директива ожидает массив фиксированной длины зависимых значений, которые станут использоваться для сравнения при мемоизации. Если каждое значение массива осталось таким же, как при последней отрисовке, то обновление всего поддерева будет пропущено.', },
	{ i: 1, dataText: '', discription: '', },
	{ i: 1, dataText: '', discription: '', },
	{ i: 1, dataText: '', discription: '', },
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
