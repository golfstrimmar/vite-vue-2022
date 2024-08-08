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
			Copy(:text="item.dataText"  @someEvent = "someEvent(item.dataText)" v-for="item in copyDataGrid" :key="item.i")
		.hero__column
			Copy(:text="item.dataText"  @someEvent = "someEvent" v-for="item in copyDataFlex" :key="item.i")
		.hero__column
			Copy(:text="item.dataText"  @someEvent = "someEvent" v-for="item in copyDataPosition" :key="item.i")


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
	{ i: 10, dataText: 'transform: rotate(180deg) translateY(50%)' },
	{ i: 10, dataText: 'transform: scale(1.1);' },
	{ i: 10, dataText: 'transform: scaleX(1);' },
	{ i: 10, dataText: 'transform-origin: top;' },
	{ i: 10, dataText: 'border: 3px solid #7AB764 ;' },
	{ i: 10, dataText: 'outline: 1px solid #4164ff;' },
	{ i: 10, dataText: 'border-radius: 10px;' },
	{ i: 10, dataText: 'border-top-left-radius: 10px;' },
	{ i: 10, dataText: 'box-shadow: inset 0 50px 100px 0 rgba(40, 40, 40, 0.15);' },
	{ i: 10, dataText: 'filter: blur(6px);' },
	{ i: 10, dataText: 'overflow: hidden;' },
	{ i: 10, dataText: 'opacity: 1;' },
	{ i: 10, dataText: 'background-image: url(../img/png/i-2.png);' },
	{ i: 10, dataText: 'background-repeat: no-repeat;' },
	{ i: 10, dataText: 'background-size: cover;' },
	{ i: 10, dataText: 'background-position: 50%;' },
	{ i: 10, dataText: 'cursor: pointer;' },
	{ i: 10, dataText: 'backdrop-filter: blur(15px);' },
	{ i: 10, dataText: 'background: rgba(0,0,0,.75);' },

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
	lastResult.value = "\n" + data;
	Something.value = Something.value + lastResult.value;
}
// ----------------------------------------

</script>

<style lang="scss" scoped>
.hero {
	margin: 10px 0 0 0;

	&__body {
		grid-template-columns: repeat(auto-fill, 400px);
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
</style>
