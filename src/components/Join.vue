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
	margin: 60px 0 0 0;

	&__body {
		@include flex-column;
		align-items: center;
		padding: 97px 0 86px 0;
		max-width: 494px;
		margin: 0 auto;
	}

	&__title {
		h2 {
			color: $white;
			@include Headings-H2;
		}
	}

	&__text {
		color: $white;
		text-align: center;
		@include Body-Large;
		margin: 12px 10px 0;
	}

	&__blocks {
		display: flex;
		align-items: center;
		column-gap: 36px;
		margin: 30px 0 0 0;
	}

	&__block {
		@include flex-aligne-center;
		column-gap: 8px;

		img {
			width: 16px;
			height: 16px;
		}

		span {
			color: $white;
			@include BodyMedium;
		}
		}
	

	&__form {
		margin: 40px 0 0 0;
		min-width: 472px;
	}
}

@media (max-width: 767px) {
	.join__form {
		margin: 40px 0 0 0;
		max-width: 472px;
		width: 100%;
		min-width: 0px;
	}
}

</style>
