<template lang="pug">
input(type='text'   v-model='inputValue'   @input='HendleEventInput()' v-test='focusAct'  @focus="focusHandler()" @blur="blurHandler()"   :class="[(inputValue == Antwort) ? '_is-active' : '_is-falsch',(focused == true) ? '_is-light' : '' ]" v-if="Antwort !== undefined")
</template>
<script setup>
import { ref, watch, defineProps, defineEmits, onMounted } from 'vue';
const inputValue = ref('')
const focused = ref(false)
const flag = ref(false)

const emit = defineEmits(['anwortPositiv'])


const HendleEventInput = () => {
	if (inputValue.value == props.Antwort) {
		flag.value = !flag.value
		emit('anwortPositiv', flag.value)
		// flag.value = !flag.value
		// emit('anwortPositiv', flag.value)
	}
}

// const changeflag = () => {
// 	if (inputValue.value == props.Antwort) {
// 		flag.value = !flag.value
// 		console.log(inputValue.value);
// 		console.log(flag.value);
// 	}
// }

const props = defineProps({

	focusAct: {
		type: Boolean,
		required: false
	},

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
}
const blurHandler = () => {
	focused.value = false;
}

watch(() => props.reset, (newvalue, oldvalue) => {
	inputValue.value = '';
});


// onMounted(
	
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
		border: 1px solid red;
		color: $grey-10;
	}

	&._is-active {
		background: $green-2 !important;
		box-shadow: inset 0 0 5px rgba(252, 253, 253, 0.884) !important;
		border: 1px solid transparent;
		color: $green-8;
	}

	&._is-falsch {
		background: lighten($deep-orange-13, 20%);
		box-shadow: inset 0 0 5px rgb(253, 252, 252) !important;
		color: $grey-10;
	}
}
</style>
