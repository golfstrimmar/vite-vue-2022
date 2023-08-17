<template lang="pug">

section#about-brand.about-brand
	.container
		.about-brand__title 
			h3 What makes our brand different
		.about-brand__body
			.about-brand__item(
				v-for="(item,index) in AboutBrand" :key="index"
				)
				SvgIcon(:name='item.svg' )
				h4 {{item.title}}
				p {{item.text}}
		
</template>

<script setup>
import { ref } from 'vue';
import { defineComponent, computed } from 'vue'
import SvgIcon from './SvgIcon.vue'

const AboutBrand = [
	{
		svg: 'i-1',
		title: 'Next day as standard',
		text: 'Order before 3pm and get your order the next day as standard'
	},
	{
		svg: 'i-2',
		title: 'Made by true artisans',
		text: 'Order before 3pm and get your order the next day as standard'
	},
	{
		svg: 'i-3',
		title: 'Unbeatable prices',
		text: 'Order before 3pm and get your order the next day as standard'
	},
	{
		svg: 'i-4',
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
	grid-template-columns: repeat(auto-fit, 300px);
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
	svg {
		width: 20px;
		height: 20px; 
		fill:$dark-primary;
	}

	h4 {
		color: $dark-primary;
		@include Headings-H4;
	}

	p {
		color: $dark-primary;
		@include BodyMedium;
	}
}


@media (min-width: 768px) and (max-width: 1340px) {
	.about-brand__body {
		grid-template-columns: repeat(2, 300px);
	}
}





@media (max-width: 767px) {
	.about-brand {
		padding: 48px 0 0 0;
		width: 100%;

		&__title {
			text-align: left;
			max-width: 342px;
			margin: 0 auto;

			h3 {
				color: $dark-primary;
				@include Headings-H4;
			}
		}
	}

	.about-brand__body {
		grid-template-columns: 1fr;
		column-gap: 0px;
		row-gap: 26px;
		margin: 36px auto 0;
		max-width: 342px;
	}

	.about-brand__item {
		padding: 36px 24px;
		gap: 0px;
		@include flex-column;

		svg {
			width: 20px;
			height: 20px;
		}

		h4 {
			color: $dark-primary;
			@include Headings-H4;
			margin: 15px 0 0 0;
		}

		p {
			margin: 12px 0 0 0;
			color: $dark-primary;
			@include BodyMedium;
		}
	}
}
</style>
