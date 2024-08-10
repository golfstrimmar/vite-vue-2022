<template lang="pug">
.hero 
	.canvas 
		textarea.result(type='textarea'  v-copy :v-model="Something" :value='Something' )
	.hero__head
		.hero__temp
			Button.hero__reset( @click='handelClean')
		input.hero__line(type = 'text'  v-model='Result' )
	.hero__body
		.hero__column
			Copy(:text="item.dataText"  @someEvent = "someEvent(item.dataText)" v-for="item in copyDataGridCommon" :key="item.i")
		.hero__column
			Copy(:text="item.dataText"  @someEvent = "someEvent(item.dataText)" v-for="item in copyDataGrid" :key="item.i")
		.hero__column
			Copy(:text="item.dataText"  @someEvent = "someEvent" v-for="item in copyDataFlex" :key="item.i")
		.hero__column
			Copy(:text="item.dataText"  @someEvent = "someEvent" v-for="item in copyDataPosition" :key="item.i")
		.hero__column
			Copy(:text="item.dataText"  @someEvent = "someEvent" v-for="item in copyDataPsevdo" :key="item.i")


</template>

<script setup>
import { ref, reactive, computed } from 'vue'
import DragDrop from './DragDrop.vue';
import Button from './Button.vue';
import Copy from './Copy.vue';
var Result = ref('');
var Something = ref('');
var lastResult = ref(''); const copy = ref(null);
var copyDataGrid = reactive([{ i: 0, dataText: '' }]);
var copyDataFlex = reactive([{ i: 0, dataText: '' }]);
var copyDataPosition = reactive([{ i: 0, dataText: '' }]);
var copyDataGridCommon = reactive([{ i: 0, dataText: '' }]);
var copyDataPsevdo = reactive([{ i: 0, dataText: '' }]);

copyDataGridCommon = [
	{ i: 1, dataText: 'text-align: center;' },

	{ i: 1, dataText: 'margin: 0 0 0 0;' },
	{ i: 1, dataText: 'margin: 0 auto;' },
	{ i: 1, dataText: 'padding: 0 0 0 0;' },

	{ i: 1, dataText: 'display: block;' },
	{ i: 1, dataText: 'display: inline-block;' },
	{ i: 1, dataText: 'display: none;' },

	{ i: 1, dataText: 'width:  ;' },
	{ i: 1, dataText: 'max-width:  ;' },
	{ i: 1, dataText: 'height:  ;' },
	{ i: 1, dataText: 'min-height: ;' },

	{ i: 1, dataText: 'cursor: pointer;' },
	{ i: 1, dataText: 'color:  ;' },
	{ i: 1, dataText: 'opacity:  ;' },
	{ i: 10, dataText: 'border: 3px solid ;' },
	{ i: 10, dataText: 'outline: 1px solid ;' },
	{ i: 10, dataText: 'border-radius: 10px;' },
	{ i: 10, dataText: 'border-top-left-radius: 10px;' },
	{ i: 10, dataText: 'box-shadow: 0px 8px 10px 0px rgba(0, 0, 0, .3), inset 0px 4px 1px 1px white, inset 0px -3px 1px 1px rgba(204, 198, 197, .5);' },
	{ i: 10, dataText: 'background: rgba(0,0,0,.75);' },
	{ i: 1, dataText: 'overflow: hidden;' },
	{ i: 1, dataText: 'overflow: scroll;' },
	{ i: 10, dataText: '&._is-active{}' },


]
copyDataGrid = [
	{ i: 1, dataText: 'display: grid;' },
	{ i: 2, dataText: 'grid-template-columns: 100px 1fr;' },
	{ i: 12, dataText: 'grid-template-columns: repeat(3, 200px);' },
	{ i: 2, dataText: 'grid-template-columns: repeat(auto-fill, 200px);' },
	{ i: 2, dataText: 'grid-template-columns: minmax(100px, max-content);' },
	{ i: 2, dataText: 'column-gap: 34px;' },
	{ i: 2, dataText: 'row-gap: 15px;' },
	{ i: 2, dataText: 'gap: 37px 36px;' },
	{ i: 3, dataText: 'grid-auto-flow: row;' },
	{ i: 4, dataText: 'grid-auto-flow: column; автоматически создает равные колонки по размеру контента' },
	{ i: 6, dataText: 'grid-auto-rows: max-content;(прижимает к верху)' },
	{ i: 7, dataText: 'grid-template-areas: "a b c e" "a d c e";' },
	{ i: 8, dataText: '._a{grid-area: a;}' },
	{ i: 8, dataText: '._b{ grid- area: b;}' },
	{ i: 9, dataText: '._c{ grid- area: c;}' },

]
copyDataPsevdo = [
	{ i: 1, dataText: '', description: 'https://developer.mozilla.org/ru/docs/Web/CSS/:hover' },
	{ i: 1, dataText: '&::after{\n  content: "";\n  position: absolute;\n  background- color: ;\n  width: ;\n  height: ;\n  top: 0;\n  left: 0;\n  }', description: '' },
	{ i: 1, dataText: '&::before{\n  content: "";\n  position: absolute;\n  background- color: ;\n  width: ;\n  height: ;\n  top: 0;\n  left: 0;\n  }', description: '' },


	{ i: 1, dataText: '&:first-child{ }; ', description: '' },
	{ i: 1, dataText: '&:first-of-type{ }; ', description: '' },
	{ i: 1, dataText: '&:focus{ }; ', description: '' },
	{ i: 1, dataText: '&:hover{ };', description: '' },
	{ i: 1, dataText: '&:last-child{ };', description: '' },
	{
		i: 1, dataText: '&:last-of-type{ };', description: 'Выбирает , являющийся последним элементом среди элементов своего типа среди своих соседей'
	},
	{ i: 1, dataText: '&:not(p){ };', description: 'Он находит элементы, не соответствующие селектору. ' },
	{ i: 1, dataText: ':root { --main - color: hotpink;	--pane - padding: 5px 42px;};', description: 'полезно для объявления CSS Переменных:' },
	{
		i: 1, dataText: '&:nth-last-of-type(4n){ };', description: 'Выбирает каждый четвёртый элемент <p> среди любой группы соседних элементов,	отсчёт начинается с последнего элемента'
	},

	{
		i: 1, dataText: '&:has(+ p){}; ', description: 'только для тегов < h1 >, следом за которыми идёт тег < p > '
	},
	{ i: 1, dataText: '&:nth-child(2n){ }; ', description: 'Описывает чётные строки HTML таблицы: 2, 4, 6, и т. д.' },
	{ i: 1, dataText: '&:nth-child(2n+1){ }; ', description: 'Описывает нечётные строки : 1, 3, 5, и т. д.' },
	{ i: 1, dataText: '&:nth-child( ){ };', description: '' },
	{ i: 1, dataText: '&:nth-child(5n){ };', description: 'Описывает элементы с номерами 5, 10, 15, и т. д.' },
	{ i: 1, dataText: '&:nth-child(3n+4){ };', description: 'Описывает элементы с номерами 4, 7, 10, 13, и т. д.' },
	{ i: 1, dataText: '&:nth-child(-n+3){ };', description: 'Описывает первые три элемента среди группы соседних элементов.' },
	{ i: 1, dataText: 'p:nth-child(0n+1){ };', description: 'Описывает каждый элемент <p>, являющийся первым среди группы соседних элементов.' },
	{ i: 1, dataText: '&:nth-last-child(-n + 3){ };', description: 'последние 3 потомка' },

]

copyDataFlex = [
	{ i: 15, dataText: 'display: flex;' },
	{ i: 18, dataText: 'justify-content: center;' },
	{ i: 18, dataText: 'align-items: center;' },
	{ i: 17, dataText: 'flex-direction: column;' },
	{ i: 17, dataText: 'justify-content: flex-start;' },
	{ i: 17, dataText: 'justify-content: flex-end;' },
	{ i: 17, dataText: 'justify-content:space-between;' },
	{ i: 17, dataText: 'justify-content:space-around;' },
	{ i: 17, dataText: 'justify-content: left;' },
	{ i: 19, dataText: 'justify-content: right;' },
	{ i: 20, dataText: 'justify-content: baseline;' },
	{ i: 17, dataText: 'justify-content: first baseline;' },
	{ i: 20, dataText: 'justify-content: last baseline;' },
	{ i: 17, dataText: 'justify-content: inherit;' },
	{ i: 17, dataText: 'justify-items: center;' },
	{ i: 17, dataText: 'justify-items: right;' },
	{ i: 17, dataText: 'align-items: flex-start;' },
	{ i: 16, dataText: 'align-items: flex-end;' },
	{ i: 17, dataText: 'align-items: self-start;' },
	{ i: 17, dataText: 'align-items: self-start;' },
	{ i: 17, dataText: 'flex-wrap: nowrap;' },
	{ i: 17, dataText: 'align-items: self-start;' },
	{ i: 17, dataText: 'flex: 0 1 100%;' },
	{ i: 17, dataText: 'flex-grow: 0; /* элемент не может расти/растягиваться больше, чем исходный размер */' },
	{ i: 17, dataText: 'flex- shrink: 1; /* элемент может сжиматься меньше, чем исходный размер */' },
	{ i: 17, dataText: 'flex - basis: auto; /* исходный размер равен auto, то есть равен просто ширине элемента, но ширина элемента не задана, поэтому по содержимому */' },


]

copyDataPosition = [
	{ i: 11, dataText: 'position: relative; ' },
	{ i: 11, dataText: 'position: absolute;' },
	{ i: 10, dataText: 'top: 50%;' },
	{ i: 10, dataText: 'left: 50%;' },
	{ i: 10, dataText: 'right: auto;' },
	{ i: 10, dataText: 'bottom: 0;' },
	{ i: 10, dataText: 'transform: translate(-50%, -50%);' },
	{ i: 10, dataText: 'transform: rotate(180deg) translateY(50%);' },
	{ i: 10, dataText: 'transform: scale(1.1);' },
	{ i: 10, dataText: 'transform: scaleX(1);' },
	{ i: 10, dataText: 'transform-origin: top;' },
	{ i: 10, dataText: 'filter: blur(6px);' },
	{ i: 10, dataText: 'background-image: url(../img/png/i-2.png);' },
	{ i: 10, dataText: 'background-repeat: no-repeat;' },
	{ i: 10, dataText: 'background-size: cover;' },
	{ i: 10, dataText: 'background-position: 50%;' },
	{ i: 10, dataText: 'backdrop-filter: blur(15px);' },

]


// ----------------------------------------

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
		grid-template-columns: repeat(auto-fill, 300px);
		grid-template-rows: 1fr;
	}
}

.hero__column {
	max-height: 80vh;
	overflow: scroll;
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
</style>
