<template lang="pug">
section#hero.hero
	.container
		HeroInfo(
			title="Luxury homeware for people who love timeless design quality" 
			description="Shop the  Spring  collection today"
			colorLink = 'light'
			backGround='white'
			typeLink='link'
			)
	.hero__bg.rel
		.imgs
			picture
				source(srcset='../assets/img/hero.webp' type='image/webp' media='(min-width: 1200px)')
				source(srcset='../assets/img/hero.webp' type='image/webp' media='(min-width: 1000px) and (max-width: 1199px)')
				source(srcset='../assets/img/hero-sm.webp' type='image/webp' media='(max-width: 767px)')
				img(src='../assets/img/hero.webp' alt='img')

</template>

<script setup>
import { ref } from 'vue'
import HeroInfo from './HeroInfo.vue'

</script>

<style lang="scss" >
.hero {
	position: relative;
	@include flex-aligne-center;
	min-height: 704px;

}

.hero .container {
	z-index: 2;
	position: relative;
	@include flex-aligne-center;
	justify-content: end;
	height: 100%;
}

.hero__bg {
	position: absolute;
	width: 100%;
	min-height: 704px;
}


@media (max-width: 767px) {
	.hero {
		margin: 0px 0 0 0;
		padding: 0;
		display: grid;
		grid-template-rows: repeat(2, min-content);
		row-gap: 0;
		align-items: start;
		min-height: 10vh;
	}

	.hero .container {
		z-index: 2;
		position: relative;
		@include flex-aligne-center;
		justify-content: end;
		height: 100%;
	}

	.hero__bg {
		position: relative;
		width: 100%;
		margin: 0px 0;
		min-height: 78vw;
	}


}
</style>
