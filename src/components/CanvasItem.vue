<template lang='pug'>
.canvas__item
	.drop-zone(@dragover='dragoverHandler' @dragleave='leaveHandler' @drop='dropHandler($event,props.item)' :class="(besitzt == true) ? '_is-bestzt' : ''" 
)
	span(v-if='besitzt == true' @click='clearHandler($event,props.item)') 	&#10062;
	//- .drop-zone(@dragover='dragoverHandler' @drop='dropHandler($event,item.id)' @dragleave='leaveHandler')
	//- span(@click='clearHandler' :v-if='item.bestzt === true') 	&#10062;
</template>
<script setup>
import {
	ref,
	defineEmits,
	reactive
} from 'vue';

const props = defineProps({
	item: {
		type: Object,
		required: false
	}
})

let result = ref('');
let besitzt = ref(false);

const dragoverHandler = (e) => {
	if (e.preventDefault)
		e.preventDefault();
	e.dataTransfer.dropEffect = "move";
	e.target.classList.add('_is-active')
	e.target.closest('.canvas__item').classList.add('_is-active')
	return false;
}


const leaveHandler = (e) => {
	if (e.preventDefault)
		e.preventDefault();
	e.target.classList.remove('_is-active')
	e.target.closest('.canvas__item').classList.remove('_is-active')
}
const emit = defineEmits(['EventDrop', 'EventClear'])

const dropHandler = (e, item) => {
	if (e.stopPropagation)
		e.stopPropagation();
	e.target.classList.remove('_is-active')
	e.target.closest('.canvas__item').classList.remove('_is-active')
	result.value = e.dataTransfer.getData("item")
	e.target.innerHTML = result.value
	emit('EventDrop', result, item.id)
	besitzt.value = true
}

const clearHandler = (e, item) => {
	e.target.previousElementSibling.innerHTML = '';
	emit('EventClear', item)
	result.value = '';
	besitzt.value = false;
}





</script>
<style lang='scss' scoped>
.canvas__item {
	display: grid;
	grid-template-columns: 1fr;
	position: relative;

	span {
		position: absolute;
		right: 0px;
		width: 30px;
		height: 30px;
		@include flex-center;
		cursor: pointer;
	}

	&._is-active {}
}

.drop-zone {
	@include transition;
	height: 30px;
	background-color: $grey-4;
	outline: 1px solid $grey-6;
	position: relative;


	&._is-active {
		background-color: $grey-2;
		outline: 1px solid $grey-6;
	}

	&._is-bestzt {

		background-color: darksalmon;
		border: 1px solid darkgoldenrod;
	}


}
</style>