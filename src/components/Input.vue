<template lang="pug">
input(type='text' v-model='inputValue' :class="[(inputValue == Antwort) ? '_is-active' : '']" v-if="Antwort !== ''" )
</template>
<script setup>
import { ref } from 'vue';
var inputValue = ref('');
const props = defineProps({

	Antwort: {
		type: String,
		required: false
	}

})	
</script>

<style lang="scss" scoped>
input {
	display: inline-block;
	max-width: 60px;
	border-radius: 5px;
	color: transparent;

	&:focus {
		background: $deep-orange-1 !important;
		color: $deep-orange-13;
		box-shadow: inset 0 0 5px rgba(252, 253, 253, 0.884) !important;
	}


	&._is-active {
		background: $green-2 !important;
		box-shadow: inset 0 0 5px rgba(252, 253, 253, 0.884) !important;
		color: $green-8;
	}
}
</style>
