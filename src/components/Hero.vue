<template lang="pug">
.hero
	.imgs
		img(src='/public/img/hero.png' alt='hero')
	.container
		.hero-info
			.hero-info__title Luxury homeware for people who love timeless design quality
			.hero-info__discription Shop the new Spring 2022 collection today
			Button(
			:text='button.text'
			)
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
.hero {
	position: relative;
	min-height: 704px;
	display: flex;
	align-items: center;

	.container {
		z-index: 2;
		display: flex;
		align-items: center;
		justify-content: end;
	}

	&-info {



		padding: 48px 60px 46px;
		@include flex-column;

		justify-content: center;
		align-items: flex-start;
		background: #FFF;
		max-width: 630px;
		min-height: 444px;

		&__title {
			color: #22202E;
			font-family: 'Playfair Display', serif;
			font-size: 32px;
			font-style: normal;
			font-weight: 400;
			line-height: 140%;
		}

		&__discription {
			margin: 20px 0 0 0;
			color: #5B5676;
			font-size: 18px;
			font-style: normal;
			font-weight: 400;
			line-height: 150%;

		}

		&__link {}
	}
}
</style>
