<template lang="pug">
.container
	.ideas#ideas
		.ideas__item
			HeroInfo(
			title= 'It started with a small idea',
			description='A global brand with local beginnings, our story begain in a small studio in South London in early 2014'
			colorTitle="#FFF"
			colorDescription="#FFF"
			backGround="#2A254B"
			)
		.ideas__item.rel
			.imgs
				img(src='/public/img/ideas/i-1.png' alt='img')
</template>

<script setup>
import { ref } from 'vue'
import ButtonEmpty from '@/components/ButtonEmpty.vue'
import HeroInfo from './HeroInfo.vue'

</script>

<style lang="scss" >
.ideas {
	margin: 100px 0 0 0;
	min-height: 478px;
	display: grid;
	grid-template-columns: 1fr 1fr;
	column-gap: 10px;
	row-gap: 10px;

	&__item {
		padding: 64px 75px 54px 64px;
		background: var(--dark-primary, #2A254B);
		@include flex-column;

	}

	.hero-info {
		padding: 0 0 0 0;
		max-width: 630px;
		min-height: 478px;
	}

	.button-empty {
		margin: auto 0 0 0;
		color: white;
		background: rgba(249, 249, 249, 0.15);

		&:hover {
			box-shadow: inset 0 0 8px white;
		}
	}

	.hero-info {
		padding: 0 0 0 0;
	}
}
</style>
