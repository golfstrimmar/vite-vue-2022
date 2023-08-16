<template lang="pug">
.about-brand
	.container
		.about-brand__title 
			h3 What makes our brand different
		.about-brand__body
			.about-brand__item(
				v-for="(item,index) in AboutBrand" :key="index"
				)
				img(:src="item.img"  :alt="item.title" )
				h4 {{item.title}}
				p {{item.text}}
		
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

</script>

<style lang="scss" scoped>
.about-brand {
	padding: 80px 0 0 0;

	&__title {
		text-align: center;

		h3 {
			color: $dark-primary;
			@include Headings-H3;
		}
	}
}

.about-brand__body {
	display: grid;
	grid-template-columns: repeat(auto-fit, 300px) ;
	column-gap: 22px;
	row-gap: 22px;
	margin: 36px 0 0 0;
	justify-content: center;
}

.about-brand__item {
	background: $light-grey;
	padding: 48px;
	align-items: flex-start;
	gap: 10px;
	@include flex-column;

	h4 {
		color: $dark-primary;
		@include Headings-H4;
	}

	p {
		color: $dark-primary;
		@include BodyMedium;
	}
}
</style>
