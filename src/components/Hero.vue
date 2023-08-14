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
	display: flex;
	align-items: center;

	.container {
		z-index: 2;
		display: flex;
		align-items: center;
		justify-content: end;
	}

	.button-empty {
		margin: auto 0 0 0;
		background: #F9F9F9;

		&:hover {
			box-shadow: inset 0 0 8px lighten(#2A254B, 40%) ;
		}
	}

	.hero-info {
		padding: 48px 61px 46px 56px;
	}

}</style>
