<template lang="pug">
.ideas 
	.ideas__item
		.ideas__title 
			h3 It started with a small idea 
		.ideas__text A global brand with local beginnings, our story begain in a small studio in South London in early 2014
		Button(:text='button.text')
	.ideas__item.rel
		.imgs
			img(src='/public/img/ideas/i-1.png' alt='img')
</template>

<script setup>
import { ref } from 'vue'
import Button from '../components/ButtonEmpty.vue'
const button = ref(
	{
		text: 'View collection',
	},
)

</script>

<style lang="scss" scoped>
.ideas {
	margin: 100px 0 0 0;
	min-height: 478px;
	display: grid;
	grid-template-columns: 1fr 1fr;
	column-gap: 10px;
	row-gap: 10px;

	&__title {
		h3 {
			color: #FFF;
			font-family: Clash Display;
			font-size: 32px;
			font-weight: 400;
			line-height: normal;
			font-family: 'Playfair Display', serif;
		}
	}

	&__text {
		color: #FFF;
		font-size: 18px;
		font-weight: 400;
		line-height: normal;
		margin: 20px 0 0 0;
	}

	.button-empty {
		color: #FFF;
		background: rgba(249, 249, 249, 0.15);
	}
}

.ideas__item {
	padding: 64px 75px 54px 64px;
	background: var(--dark-primary, #2A254B);
	@include flex-column;

}</style>
