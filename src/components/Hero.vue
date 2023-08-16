<template lang="pug">
.hero
	.imgs
		img(src='/public/img/hero.png' alt='hero')
	.container
		HeroInfo(
			title="Luxury homeware for people who love timeless design quality" 
			description="Shop the  Spring  collection today"
			colorLink = 'light'
			backGround='white'
			typeLink='link'
			)


</template>

<script setup>
import { ref } from 'vue'
import HeroInfo from './HeroInfo.vue'

</script>

<style lang="scss" >
.hero {
	position: relative;
	min-height: 704px;
	@include flex-aligne-center;

	.container {
		z-index: 2;
		@include flex-aligne-center;
		justify-content: end;
	}

	.hero-info {
		padding: 48px 61px 46px 56px;
		max-width: 630px;
		min-height: 444px;
	}

}
</style>
