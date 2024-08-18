<template lang='pug'>
.copy 
	textarea.textareaTitel(v-if='item.title&& item.title !== " " ') {{item.title}}
	textarea(v-copy :value='item.dataText' @click='clickcopy' v-if='item.dataText&& item.dataText !== " "  ' )  
	button.tool(v-tool  :data='item.description' v-if='item.description && item.description !== " " ') 
		span i 
	a( :href="item.link" v-if='item.link && item.link !== " " ' target="_blank"   @mouseover = "handelMO(item.img)" @mouseleave= "handelML"  :class="[( item.img ) ? '_is-active' : '']") codepen



</template>
<script setup>
import { ref, defineEmits } from 'vue';
const props = defineProps({
	item: {
		type: Array,
		required: false
	},

})


import * as Imgs from '../assets/img';
var salut, imgSalut;

const handelMO = (img) => {
	Imgs.listImg.forEach(car => {
		if (car.id == img) {
			salut = document.createElement('div')
			salut.classList.add('salut')
			imgSalut = document.createElement('img')
			imgSalut.setAttribute('src', car.img)
			salut.append(imgSalut);
			document.querySelector('body').append(salut);
		}
	})
};
const handelML = () => {
	salut.remove();
};



let singles = ref([]);
const copy = ref(null);
const activeItem = ref(false);
const emit = defineEmits(['clickcopy'])


const handlerCopy = () => {

	if (item.dataText !== " ") {
		activeItem.value = !activeItem.value;
		emit('someEvent', item.dataText)
		setTimeout(function () { add.remove(); activeItem.value = !activeItem.value; }, 300)
	}



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
	display: flex;



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

		&.textareaTitel {
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
	}

	&:has(p) {
		height: auto;
		min-height: 20px;
	}

	a {
		position: relative;
		height: 100%;
		padding: 2px;
		font-weight: 400;
		font-size: 14px;
		scrollbar-width: none;
		background-color: $yellow-3;
		border-radius: 3px;
		color: #37474f;
		flex-shrink: 1;

		&._is-active {
			background-color: $yellow-8;
		}

		&:hover {
			color: $orange-10;
			@include transition;
		}
	}

}

.salut {
	position: fixed;
	z-index: 10000;
	top: 0%;
	left: 0%;
	display: flex;
	background: rgba(0, 0, 0, .5);
	transition: all 0.2s;
	backdrop-filter: blur(10px);
	border-radius: 5px;
	padding: 10px;

}
</style>
