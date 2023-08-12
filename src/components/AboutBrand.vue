<template lang="pug">
.about-brand
	.container
		.about-brand__title 
			h3 What makes our brand different
		.about-brand__body
			.about-brand__item(
			v-for="(el,i) of AboutBrand"
			:key="i"
		)
				img(:src="el.img"  :alt="el.title" )
				h4 {{ el.title }}
				p {{ el.text }}
		
</template>

<script setup>
import { ref } from 'vue';
const AboutBrand = [
	{
		img: '/svg/about-brand/i-1.svg',
		title: 'Next day as standard',
		text: 'Order before 3pm and get your order the next day as standard'
	},
	{
		img: '/svg/about-brand/i-2.svg',
		title: 'Made by true artisans',
		text: 'Order before 3pm and get your order the next day as standard'
	},
	{
		img: '/svg/about-brand/i-3.svg',
		title: 'Unbeatable prices',
		text: 'Order before 3pm and get your order the next day as standard'
	},
	{
		img: '/svg/about-brand/i-4.svg',
		title: 'Recycled packaging',
		text: 'Order before 3pm and get your order the next day as standard'
	}
]
// components: {},
// props: {},
// data: () => ({}),
// methods: {},
</script>

<style lang="scss" scoped>
.about-brand {
	padding: 80px 0 0 0;

	&__title {
text-align: center;
		h3 {
			color: #2A254B;
			font-size: 24px;
			font-weight: 400;
			line-height: 140%;
		}
	}
}

.about-brand__body {
	display: grid;
	grid-template-columns: repeat(4, 305px);
	column-gap: 22px;
	row-gap: 22px;
margin: 36px 0 0 0;
}

.about-brand__item {
	background: #F9F9F9;
	display: flex;
	padding: 48px;
	flex-direction: column;
	align-items: flex-start;
	gap: 10px;

	h4 {
		font-family: 'Playfair Display', serif;
		color: #2A254B;
		font-size: 20px;
		font-weight: 400;
		line-height: 140%;
	}

	p {
		color: var(--dark-primary, #2A254B);
		font-family: Satoshi;
		font-size: 16px;
		font-style: normal;
		font-weight: 400;
		line-height: 150%;
	}
}
</style>
