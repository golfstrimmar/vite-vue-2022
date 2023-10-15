<template lang="pug">
input(type='text' v-model='inputValue' :class="[(inputValue == Antwort) ? '_is-active' : '_is-falsch']" v-if="Antwort !== undefined" 
)
</template>
<script setup>
import { ref, defineEmits, computed, watch, defineProps } from 'vue';
const inputValue = ref('')


const props = defineProps({
	reset: {
		type: Boolean,
		required: false
	},
	Antwort: {
		type: String,
		required: false
	}
})


// const emit = defineEmits(['eventChange'])
// const handleChange = ($event) => {
// 	emit('eventChange', $event.target.value)
// }


watch(() => props.reset, (newvalue, oldvalue) => {
	inputValue.value = ''
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

	&._is-falsch {
		background: $deep-orange-13 !important;
		box-shadow: inset 0 0 5px rgba(252, 253, 253, 0.884) !important;
		color: $grey-14;
	}
}
</style>
