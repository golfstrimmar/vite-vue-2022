<template lang="pug">
.product
	router-link(to="/").product__img
		.imgs
			img(:src='img'  :alt='title')
	router-link(to="/").product__name {{ title }}
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
		margin: 24px 0 0 0;
		color: $dark-primary;
		@include Headings-H4;

	}

	&__price {
		color: $dark-primary;
		@include Body-Large;
		margin: 8px 0 0 0;
	}

}
</style>
