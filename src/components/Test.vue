<template lang='pug'>
.hero
	textarea.canvas(draggable="true" v-for="item in canvasItems" :key="index" :value = 'item.id ' :style= "{marginLeft: item.Offset*30 + 'px' }" @dragstart='canvasStart' @drop='canvasDrop')
</template>
<script setup>
import { ref, reactive, computed } from 'vue'
var canvasItems = ref([
	{ id: '0', Offset: '0', value: 'value' },
	{ id: '1', Offset: '1', value: 'value1' },
	{ id: '2', Offset: '2', value: 'value2' },
	{ id: '3', Offset: '2', value: 'value3' },
	{ id: '4', Offset: '2', value: 'value4' },
]);
const canvasStart = (e) => {
	e.dataTransfer.effectAllowed = "move";
	e.dataTransfer.setData("item", e.target.value);

	return false;
}

const canvasDrop = (e) => {
	if (e.stopPropagation)
		e.stopPropagation();
	console.log(e.dataTransfer.getData("item"));
}
</script>
<style lang='scss' scoped></style>