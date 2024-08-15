<template lang='pug'>
textarea.stock(type = 'text' @input="Change " :value='modelValue' :class="[(modelValue !== '') ? '_is-light' : '']" )



</template>
<script setup>
import { ref } from 'vue';
let stock = ref(false)
const props = defineProps({
	modelValue: {
		type: String,
		required: false
	}
})

const Change = () => {
	$emit('update:modelValue', $event.target.value)
};

</script>
<style lang='scss' scoped>
.stock {
	min-height: 26px;
	width: 80%;
	height: 30px;
	position: relative;
	border-radius: 5px;
	padding: 5px;
	font-weight: 400;
	font-size: 14px;
	border: 1px solid $blue-grey-7;
	background-color: rgba(143, 197, 225, 0.4);

	&._is-light {
		background-color: #e0e0e0;
	}
}
</style>
