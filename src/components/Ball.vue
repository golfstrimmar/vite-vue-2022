<template lang='pug'>
.hero(ref='hero')
	.canvas(v-for="item in canvasItems" :key="item.id"  @dragstart='canvasStart' @drop='canvasDrop' @mousedown='canvasMousedown'  @mouseup='canvasUp') {{item.value}}
</template>
<script setup>
import { ref, reactive, computed } from 'vue'
let newX = ref(0)
let startX = ref(0)
let newY = ref(0)
let startY = ref(0)
let ball = ref({})
const hero = ref(null)
var canvasItems = ref([
	{ id: '0', Offset: '0', value: 'value' },

]);


const canvasStart = (e) => {
	return false;
}

const canvasMousedown = (e) => {
	ball.value = e.target
	const getCoords = (elem) => {
		var box = elem.getBoundingClientRect();
		return {
			top: box.top + pageYOffset,
			left: box.left + pageXOffset
		};
	}
	const moveAt = (e) => {
		ball.value.style.left = e.pageX - shiftX + 'px';
		ball.value.style.top = e.pageY - shiftY + 'px';
	}
	var coords = getCoords(ball.value);
	var shiftX = e.pageX - coords.left;
	var shiftY = e.pageY - coords.top;
	ball.value.style.position = 'absolute';
	moveAt(e);
	document.body.appendChild(ball.value);
	ball.value.style.zIndex = 1000;
	document.onmousemove = function (e) {
		moveAt(e);
	}
}

ball.value.onmouseup = function () {
	document.onmousemove = null;
	ball.value.onmouseup = null;
}
const canvasUp = (e) => {
	var heroleft = hero.value.getBoundingClientRect().left;
	var herotop = hero.value.getBoundingClientRect().top;
	hero.value.getBoundingClientRect().top;
	var temp = ball.value.getBoundingClientRect();
	ball.value.style.left = `${temp.left - heroleft}` + 'px'
	ball.value.style.top = `${temp.top - herotop}` + 'px'
	ball.value.style.position = 'relative';
	document.body.removeChild(ball.value);
	hero.value.appendChild(ball.value);
	document.onmousemove = null;
	ball.value.onmouseup = null;
}

</script>
<style lang='scss' scoped>
.hero {
	border: 1px solid red;
	width: 100%;
	height: 30px;
}
</style>