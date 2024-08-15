<template lang='pug'>
textarea.result(v-copy  )
</template>
<script setup>
import { ref } from 'vue';
import Button from '@/components/Button.vue';
</script>
<style lang='scss' scoped>
.result {
	outline: 1px solid $blue-grey-7;
	min-height: 45px;
	white-space: pre-wrap;
	cursor: pointer;
	background-color: $blue-grey-1;
	font-family: "Satoshi", sans-serif;
	font-size: 14px;
	font-weight: 400;

	&:hover {
		color: $deep-orange-4;
	}

	&._is-active {
		border: 1px solid $deep-orange-8;
		background-color: $deep-orange-4;
		color: #fff;
	}
}
</style>
