<template lang='pug'>
.canvas 
	textarea.result( :v-model="something" :value='something' ref = 'copy' @click='handlerCopy()')
	.canvas__body
		.canvas__line(v-for="item in canvasLinien" :key="index")
			CanvasItem(v-for="item in canvas" :key="item.id"  :item='item' @EventDrop='EventDrop' @EventClear='EventClear')



</template>



<script setup>
import CanvasItem from './CanvasItem.vue';
import { ref, reactive } from 'vue';

let something = ref('');
let lastEl = ref('');
const spase = '  ';

// --------------------------------
let canvas = reactive([]);
for (let index = 0; index < 10; index++) {
	canvas.push({ id: index, text: '' })
}
// --------------------------------
let canvasLinien = reactive([{}]);

// --------------------------------
const EventDrop = (result, id) => {
	lastEl.value = "\n" + spase.repeat(id) + result.value;
	canvas[id].text = lastEl.value;
	something.value = something.value + lastEl.value;
	canvasLinien.push({})
	lastEl.value = ''
}
// --------------------------------
const EventClear = (item) => {
	canvas.forEach((cell) => {
		if (item.id == cell.id && item.text == cell.text) {
			var rExp = new RegExp(cell.text, "g");
			something.value = something.value.replace(rExp, '')
			cell.text = ''
		}
	});
}
// --------------------------------
const copy = ref(null);
const handlerCopy = () => {
	let add = document.createElement('textarea')
	add.style.cssText = "position: absolute;z-index: -2;max-height: 0; border: none;"
	document.querySelector('body').appendChild(add)
	add.textContent = something.value
	add.select();
	document.execCommand('copy');
	copy.value.classList.add('_is-copied')
	setTimeout(function () { add.remove(); copy.value.classList.remove('_is-copied') }, 300)
}
// --------------------------------
</script>
<style lang='scss' scoped>
.result {
	border: 1px solid darkblue;
	margin: 20px 0;
	min-height: 45px;
	white-space: pre-wrap;

	&._is-copied {
		border: 1px solid $deep-orange-8;
		background-color: $deep-orange-4;
		color: #fff;
	}
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