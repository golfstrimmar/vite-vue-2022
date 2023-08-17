<template lang="pug">
section#ideas
	.container
		.ideas
			.ideas__item
				HeroInfo(
					title= 'It started with a small idea',
					description='A global brand with local beginnings, our story begain in a small studio in South London in early 2014'
					colorTitle="#FFF"
					colorDescription="#FFF"
					backGround="dark"
					colorLink = 'dark'
					typeLink='button'
					)
			.ideas__item.rel
				.imgs
					img(src='src/assets/img/ideas/i-1.webp' alt='img')

</template>

<script setup>
import { ref } from 'vue'
import HeroInfo from './HeroInfo.vue'
</script>

<style lang="scss" scoped>

.ideas {
	margin: 100px 0 0 0;
	display: grid;
	grid-template-columns: 1fr 1fr;
	column-gap: 10px;
	row-gap: 10px;

	&__item {

		&:first-child {
			min-height: 478px;
			padding: 0 0 0 0;
		}
	}
}

@media (max-width: 767px) {
	.ideas {
		grid-template-columns: 1fr;
		margin: 60px 0 0 0;
		row-gap: 24px;

		&__item {
			&:first-child {
				min-height: 280px;
			}

			&:last-child {
				min-height: 260px;
				height: 65vw;
			}
		}
	}
}
</style>
