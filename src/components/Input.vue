<template lang="pug">
input(type='text'   v-model='inputValue' @focus="focusHandler()" @blur="blurHandler()"  :class="[(inputValue == Antwort) ? '_is-active' : '_is-falsch',(focused == true) ? '_is-light' : '' ]" v-if="Antwort !== undefined")
</template>
<script setup>
import { ref, watch, defineProps, onMounted } from 'vue';
const inputValue = ref('')
const focused = ref(false)



const props = defineProps({

	reset: {
		type: Boolean,
		required: false
	},
	Antwort: {
		type: String,
		required: false
	},

})
const focusHandler = () => {
	focused.value = true;
	console.log(focused.value);
}
const blurHandler = () => {
	focused.value = false;
	console.log(focused.value);
}

watch(() => props.reset, (newvalue, oldvalue) => {
	inputValue.value = '';
});


// onMounted(
// console.log(focused.value)
// 	() => {
// 		// if (props.focusActiv) {
// 		// 	console.log(props.focusActiv);
// 		// myinput.value.focus()
// 		// }
// 	}
// )


</script>

<style lang="scss" scoped>
input {
	display: inline-block;
	max-width: 110px;
	border-radius: 5px;
	// color: transparent;

	// &:focus {
	// 	background: lighten($deep-orange-1, 50%) !important;
	// 	color: $deep-orange-13;
	// 	box-shadow: inset 0 0 5px rgba(252, 253, 253, 0.884) !important;
	// }

	&._is-light {
		background: lighten($deep-orange-13, 30%) !important;
		box-shadow: inset 0 0 5px rgb(253, 252, 252) !important;
		color: $grey-10;
	}

	&._is-active {
		background: $green-2 !important;
		box-shadow: inset 0 0 5px rgba(252, 253, 253, 0.884) !important;
		color: $green-8;
	}

	&._is-falsch {
		background: lighten($deep-orange-13, 20%);
		box-shadow: inset 0 0 5px rgb(253, 252, 252) !important;
		color: $grey-10;
	}
}
</style>
