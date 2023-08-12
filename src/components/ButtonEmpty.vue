<template lang="pug">
a.button-empty(href='!#') {{ text }}
</template>

<script setup>
const props = defineProps({
	text: {
		type: String,
		required: true
	},
})
</script>

<style lang="scss"  scoped>
.button-empty {
	width: 170px;
	height: 56px;
	background: #F9F9F9;
	@include flex-center;
	margin: auto 0 0 0;
}
</style>
