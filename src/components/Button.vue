<template lang='pug'>
button(type = "button" :class="(props.item && props.item.isOpen == true  ) ? '_is-active' : '' "  )  {{ props.text }}
</template>
<script setup>
import { ref } from 'vue';
const props = defineProps({
	item: {
		type: Object,
		required: false
	},
	text: {
		type: String,
		required: false
	},
})
// const emit = defineEmits(['clicEvent', item.id])

</script>
<style lang='scss' scoped>
button {
	font-size: 13px;
	color: #666565;
	text-shadow: 0px -1px 1px #bdb5b4,
		1px 1px 1px white;
	cursor: pointer;
	border-radius: 3px;
	margin: 0 0 5px 0;
	padding: 3px;
	@include flex-center;
	@include transition;
	background-image: -webkit-linear-gradient(top, #f4f1ee, #fff);
	background-image: linear-gradient(top, #f4f1ee, #fff);
	border-radius: 5px;
	box-shadow: 0 1px 5px rgba(0, 0, 0, 0.2), 0 2px 2px rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12);

	&._is-active {
		color: #eb2f2f;
		text-shadow: 0px 0px 6px #eb2f2f;
	}

	&:hover {
		color: #f1bbbb;
		text-shadow: 0px 0px 6px #f1bbbb;
	}
}
</style>