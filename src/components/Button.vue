<template lang='pug'>
button(type="button" ).hero__button {{buttonValue}}
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
	padding: 5px 0;
	border-radius: 5px;
	@include transition;
	background-color: $lime-9;
	color: white;
	box-shadow: inset 0 0 5px rgba(252, 253, 253, 0.884);
	text-transform: uppercase;
	max-height: 30px;

	&:hover {
		background-color: $pink-6;
		color: white;
	}
}
</style>
