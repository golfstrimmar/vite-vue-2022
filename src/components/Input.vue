<template lang="pug">
input(type='text' v-model='lue' :class="[(lue == Antwort) ? '_is-active' : '']" v-if="Antwort !== undefined" )
</template>
<script setup>
import { ref, computed, watch } from 'vue';
import { toRefs } from "vue";



const props = defineProps({
	inputValue: {
		type: String,
		default: '',
		required: false
	},
	Antwort: {
		type: String,
		required: false
	}
})

var lue = ref('');


watch(() => lue.value, (first, second) => {
	console.log(
		first,
		second
	);
	if (first !== props.inputValue) {
		lue.value == props.inputValue
	}

});

</script>

<style lang="scss" scoped>
input {
	display: inline-block;
	max-width: 60px;
	border-radius: 5px;
	// color: transparent;

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
