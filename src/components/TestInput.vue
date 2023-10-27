<template lang="pug">
input(type = 'text' @input="$emit('update:modelValue', $event.target.value)" :value='modelValue')

</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
	modelValue: {
		type: String,
		required: false
	}
})


</script>

<style lang="scss" scoped></style>