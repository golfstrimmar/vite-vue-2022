<template lang="pug">
.product
	a(href="#!").product__img
		.imgs
			img(:src='img'  :alt='title')
	a(href="#!").product__name {{ title }}
	span.product__price £{{ price }}

</template>

<script setup>

const props = defineProps({
	img: {
		type: String,
		required: true
	},
	title: {
		type: String,
		required: true
	},
	price: {
		type: Number,
		required: true
	},
})
</script>

<style lang="scss" scoped>
.product {
	min-height: 462px;
	position: relative;
	@include flex-column;

	&__img {
		position: relative;
		min-height: 375px;
		width: 100%;
	}

	&__name {
		color: var(--dark-primary, #2A254B);
		font-family: 'Playfair Display', serif;
		font-size: 20px;
		font-weight: 400;
		line-height: 140%;
		margin: 24px 0 0 0;

	}

	&__price {
		font-size: 18px;
		font-style: normal;
		font-weight: 400;
		color: var(--dark-primary, #2A254B);
		margin: 10px 0 0 0;
	}

}
</style>
