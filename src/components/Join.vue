<template lang="pug">
section(id='join').join.rel
	.imgs
		img(src='/public/img/join-bg.png' alt='img')
	.container
		.join__body
			.join__title
				h2 Join the club and get the benefits
			.join__text Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop up stores and more
			.join__blocks
				.join__block
					img(src='/public/svg/Vector.svg'  alt='img')
					span Exclusive offers
				.join__block
					img(src='/public/svg/Vector.svg'  alt='img')
					span Free events
				.join__block
					img(src='/public/svg/Vector.svg'  alt='img')
					span Large discounts
			JoinForm(bgInput='white' colorButton='dark-deep')
</template>

<script setup>
import { ref } from 'vue'
import Button from '@/components/Ui/Button.vue'
import JoinForm from '@/components/JoinForm.vue'
</script>

<style scoped lang="scss">
.join {
	&__body {
		@include flex-column;
		align-items: center;
		padding: 97px 0 86px 0;
		max-width: 494px;
		margin: 0 auto;
	}

	&__title {
		h2 {
			color: var(--white, #FFF);
			text-align: center;
			font-family: var(--playfair);
			font-size: 32px;
			font-weight: 400;
			line-height: 140%;
		}
	}

	&__text {
		color: var(--white, #FFF);
		text-align: center;
		font-size: 18px;
		font-weight: 400;
		line-height: 150%;
		margin: 12px 10px 0;

	}

	&__blocks {
		display: flex;
		align-items: center;
		column-gap: 36px;
		margin: 30px 0 0 0;
	}

	&__block {
		display: flex;
		align-items: center;
		column-gap: 8px;

		img {
			width: 16px;
			height: 16px;
		}

		span {
			color: var(--white, #FFF);
			font-size: 16px;
			font-weight: 400;
			line-height: 150%;
			/* 24px */
		}
	}
	.join__form {
		margin: 40px 0 0 0;
		max-width: 472px;

	}


}
</style>
