<template lang='pug'>
.copy 
	h2(v-if='item.title&& item.title !== " " ') {{item.title}}
	textarea(v-copy :value='item.dataText' @click='clickcopy' v-if='item.dataText&& item.dataText !== " " ' )  
	button.tool(v-tool  :data='item.description' v-if='item.description && item.description !== " " ') 
		span i 
	//- p(v-if='item.description && item.description !== " " ') {{item.description}}
</template>


<script setup>
import { ref, defineEmits } from 'vue';

const props = defineProps({
	item: {
		type: Array,
		required: false
	},

})


let singles = ref([]);
const copy = ref(null);
const activeItem = ref(false);
const emit = defineEmits(['clickcopy'])


const handlerCopy = () => {
	activeItem.value = !activeItem.value;
	emit('someEvent', item.dataText)
	setTimeout(function () { add.remove(); activeItem.value = !activeItem.value; }, 300)

}

const clickcopy = () => {
	if (props.item.dataText !== '') { emit('clickcopy', props.item.dataText) }
}

</script>
<style lang='scss'>
.copy {

	height: 20px;
	white-space: pre-wrap;
	position: relative;
	outline: 1px solid #bdb5b4;

	h2 {
		font-weight: 700;
		font-size: 14px;
		color: #f8f6eb;
		text-align: center;

		background-image: -webkit-linear-gradient(top, #f4f1ee, #fff);
		background-image: linear-gradient(top, #f4f1ee, #fff);
		border-radius: 4px;
		background: rgb(107, 95, 0);
		position: absolute;
		top: 0%;
		left: 0%;
		// transform: translate(-50%, -50%);
		display: inline-block;
		width: 100%;
		height: 100%;
	}

	// p {
	// 	background-color: #fdfded;
	// 	font-family: "Sora", sans-serif;
	// 	color: $blue-grey-9;
	// 	font-size: 12px;
	// 	font-weight: 400;
	// 	transform: translate(0%, -150%);
	// 	position: absolute;
	// 	transition: all 0.2s;
	// }

	textarea {
		position: relative;
		height: 100%;
		padding: 2px;
		font-weight: 400;
		font-size: 14px;
		scrollbar-width: none;
		background-color: #fffec9;

		&:hover {
			color: $orange-10;
			@include transition;
		}

		&._is-active {
			border: 1px solid $deep-orange-8;
			background-color: $deep-orange-4;
			color: #fff;
		}
	}

	&:has(p) {
		height: auto;
		min-height: 20px;
	}

}
</style>
