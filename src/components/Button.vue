<template lang='pug'>
button(type="button" ).hero__button 
	p {{buttonValue}}
</template>
<script setup>
import { ref } from 'vue';
const props = defineProps({
	buttonValue: {
		type: String,
		required: false
	}
})
</script>
<style lang='scss' scoped>
.hero__button {
	position: relative;
	position: absolute;
	top: 50%;

	transform: translate(0px, -50%);
	width: 30px;
	height: 30px;
	background-image: -webkit-linear-gradient(top, #f4f1ee, #fff);
	background-image: linear-gradient(top, #f4f1ee, #fff);
	border-radius: 100%;
	box-shadow: 0px 8px 10px 0px rgba(0, 0, 0, .3), inset 0px 4px 1px 1px white, inset 0px -3px 1px 1px rgba(204, 198, 197, .5);
	transition: all .2s linear;

	p {
		font-size: 15px;
		text-transform: uppercase;
		transform: rotate(-90deg);
	}

	&:after {
		content: "✖";
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
		color: #e9e6e4;
		display: block;
		font-size: 15px;
		height: 20px;
		width: 20px;
		text-decoration: none;
		text-shadow: 0px -1px 1px #bdb5b4, 1px 1px 1px white;
		position: absolute;
		transition: all .2s linear;
	}

	&:hover {
		background-image: -webkit-linear-gradient(top, #fff, #f4f1ee);
		background-image: linear-gradient(top, #fff, #f4f1ee);
		color: #eb2f2f;
		text-shadow: 0px 0px 6px #eb2f2f;
	}

	&:hover:after {
		color: #eb2f2f;
		text-shadow: 0px 0px 6px #eb2f2f;
	}

	&._is-active {
		box-shadow: 0px 8px 10px 0px rgba(0, 0, 0, .3), inset 0px 4px 1px 1px #ef9a9a, inset 0px -3px 1px 1px #f89177;
		background-image: linear-gradient(top, #ef9a9a, #fff);
		background-image: -webkit-linear-gradient(top, #eb2f2f, #ef9a9a);

	}
}
</style>
