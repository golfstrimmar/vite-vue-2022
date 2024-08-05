<template lang='pug'>
.canvas 
	.canvas__result
		textarea.result( :v-model="somethingPug" :value='somethingPug' ref = 'copyPug' @click='handlerCopy( somethingPug, copyPug)')
		textarea.result( :v-model="somethingScss" :value='somethingScss' ref = 'copyScss' @click='handlerCopy(somethingScss,copyScss)')
	.canvas__body
		.canvas__line(v-for="item in canvasLinien" :key="index")
			CanvasItem(v-for="item in canvas" :key="item.id"  :item='item' @EventDrop='EventDrop' @EventClear='EventClear')
</template>



<script setup>
import CanvasItem from './CanvasItem.vue';
import { ref, reactive } from 'vue';

// --------------------------------
let canvas = reactive([]);
for (let index = 0; index < 10; index++) {
	canvas.push({ id: index, text: '' })
}
// --------------------------------
let canvasLinien = reactive([{}]);

// --------------------------------
let somethingPug = ref('');
let somethingScss = ref('');
const spase = '  ';
let lastElPug = ref('');
let lastElScss = ref('');

const EventDrop = (result, id) => {
	lastElPug.value = "\n" + spase.repeat(id) + result.value;
	lastElScss.value = "\n" + result.value + '{  }';
	canvas[id].text = lastElPug.value;
	somethingPug.value = somethingPug.value + lastElPug.value;
	somethingScss.value = somethingScss.value + lastElScss.value;
	canvasLinien.push({})
	lastElPug.value = ''
}

// --------------------------------
const EventClear = (item) => {
	canvas.forEach((cell) => {
		if (item.id == cell.id && item.text == cell.text) {
			var rExp = new RegExp(cell.text, "g");
			somethingPug.value = somethingPug.value.replace(rExp, '')
			cell.text = ''
		}
	});
}
// --------------------------------
const copyPug = ref(null);
const copyScss = ref(null);
const handlerCopy = (something, copy) => {
	let add = document.createElement('textarea')
	add.style.cssText = "position: absolute;z-index: -2;max-height: 0; border: none;"
	document.querySelector('body').appendChild(add)
	add.textContent = something
	add.select();
	document.execCommand('copy');
	copy.classList.add('_is-copied')
	setTimeout(function () { add.remove(); copy.classList.remove('_is-copied') }, 300)
}

// --------------------------------
// --------------------------------
</script>
<style lang='scss' scoped>
.result {
	border: 1px solid darkblue;
	min-height: 45px;
	white-space: pre-wrap;
	cursor: pointer;

	&._is-copied {
		border: 1px solid $deep-orange-8;
		background-color: $deep-orange-4;
		color: #fff;
	}
}

.canvas__result {
	display: grid;
	column-gap: 10px;
	grid-template-columns: repeat(2, 1fr);
	margin: 10px 0;

}

.canvas__line {
	display: grid;
	grid-template-columns: repeat(auto-fill, 160px);

}


.card {
	width: 150px;
	height: 30px;
	background-color: #fff;
	border: 1px solid #ccc;
	border-radius: 5px;
	box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}
</style>