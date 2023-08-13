<template lang="pug">
a.button-empty(href='!#') {{ text }}
</template>

<script setup>
const props = defineProps({
	text: {
		type: String,
		required: true
	},
	link: {
		type: String,
		required: false
	}
})
</script>

<style lang="scss"  scoped>
.button-empty {
	width: 170px;
	height: 56px;
	@include flex-center;
	
}
</style>
