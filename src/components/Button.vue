<template lang='pug'>
button(type = "button" :class="(item.isOpen == true) ? '_is-active' : '' "  )  {{ props.item.title }}
</template>
<script setup>
import { ref } from 'vue';
const props = defineProps({
	item: {
		type: Object,
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
	border-radius: 5px;
	margin: 0 0 5px 0;
	padding: 3px;
	@include flex-center;
	background-image: -webkit-linear-gradient(top, #f4f1ee, #fff);
	background-image: linear-gradient(top, #f4f1ee, #fff);
	border-radius: 5px;
	box-shadow: 0px 8px 10px 0px rgba(0, 0, 0, 0.3),
		inset 0px 4px 1px 1px white,
		inset 0px -3px 1px 1px rgba(204, 198, 197, 0.5);

	&._is-active {
		color: #eb2f2f;
		text-shadow: 0px 0px 6px #eb2f2f;
	}
}
</style>