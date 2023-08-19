<template lang="pug">

section.product
	.container
		.product__body
			.product__img.rel 
				.imgs
					img(:src='product.image' :alt='product.name')
			.product__info
				.product-info
					p.product-info__title
						h2 {{ product.name }}
					p.product-info__price  £{{ product.price }}
				.product-info
					.product-info__sub-title 
						h4 Product description
					p.product-info__description(v-html='product.description')
				.product-info
					.product-info__sub-title 
						h4 Dimensions
					ul.product-info__params
						li.product-info__param(v-for="(param, i) of product.params" :key="i") {{ param.title }}: {{param.value  }}
				.product-info
					.product-info__sub-title 
						h4 Quantitity
					.product-info-quantitity
						.product-info-quantitity__simbol(@click="changeQuantity('minus')") -
						.product-info-quantitity__value {{ quantitity }}
						.product-info-quantitity__simbol(@click="changeQuantity('plus')") +
				Button(type="button"  color= "dark-deep") Add to cart
			.product-description

</template>

<script setup>
import { ref } from "vue";
import Button from '@/components/Ui/Button.vue'
var quantitity = ref(1);
const props = defineProps({
	product: {
		type: Object,
		default: () => { },
		required: true
	}
})
const changeQuantity = (type) => {
	if (type === 'minus') {
		quantitity.value === 1 ? quantitity.value = 1 : quantitity.value--
	}
	if (type === 'plus') {
		quantitity.value === 5 ? quantitity.value = 5 : quantitity.value++
	}
}
</script>

<style scoped lang="scss">
.product {
	background-color: $light-grey;

	&__body {
		padding: 50px 0;

		display: grid;
		grid-template-columns: 607px 518px;
		column-gap: 65px;
	}

	&__img {}

	&__info {
		padding: 30px 0;
	}

	.product-info {
		margin: 27px 0 0 0;


		&:nth-child(2) {
			padding: 24px 0 0 0;
			border-top: 1px solid $border-grey;
		}

		&__title {
			h2 {
				text-align: left;
				@include Text-Style-10;
			}
		}

		&__price {
			margin: 16px 0 0 0;
			text-align: left;
			@include Text-Style-16;
		}

		&__sub-title {
			text-align: left;
			@include Text-Style-12;
		}

		&__description {
			margin: 14px 0 0 0;
			text-align: left;
			@include Text-Style-5;
		}

		&__params {
			margin: 24px 0 0 0;
		}

		&__param {
			margin: 15px 0 0 0;
			text-align: left;
			@include Text-Style-14;
		}

		&-quantitity {
			background-color: $white;
			min-width: 122px;
			min-height: 46px;
			column-gap: 33px;
			display: inline-flex;
			justify-content: center;
			align-items: center;
			margin: 12px 0 0 0;

			&__simbol {
				transition: all .2s;

				&:hover {
					@include hover;
				}

				@include Text-Style-17;
			}

			&__value {
				@include Text-Style-5;
			}
		}

	}

	.btn {
		margin: 48px 0 0 0;
	}
}
</style>
