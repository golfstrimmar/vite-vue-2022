<template lang="pug">
.hero
  .imgs
    img(src='/public/img/hero.png' alt='hero')
  .hero-info
    .hero-info__title Luxury homeware for people who love timeless design quality
    .hero-info__discription Shop the new Spring 2022 collection today
    a.hero-info__button(href='!#') View collection
</template>

<script>
export default {
	name: 'HeroVue',
	// components: {},
	// props: {},
	// data: () => ({}),
	// methods: {},
};
</script>

<style lang="scss" scoped>
.hero {
	position: relative;
	min-height: 704px;


	&-info {
		position: absolute;
		left: auto;
		top: 130px;
		right: 80px;
		z-index: 2;
		display: flex;
		padding: 48px 61px 46px 56px;
		flex-direction: column;
		justify-content: center;
		align-items: flex-start;
		background: #FFF;
		width: 630px;
		height: 444px;

		&__title {
			color: #22202E;
			font-family: 'Playfair Display', serif;
			font-size: 32px;
			font-style: normal;
			font-weight: 400;
			line-height: 140%;
		}

		&__discription {
			margin: 20px 0 0 0;
			color: #5B5676;
			font-size: 18px;
			font-style: normal;
			font-weight: 400;
			line-height: 150%;

		}

		&__button {
			width: 170px;
			height: 56px;
			background: #F9F9F9;
			display: flex;
			justify-content: center;
			align-items: center;
			margin: auto 0 0 0;
		}
	}
}</style>
