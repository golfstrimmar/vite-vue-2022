<template lang="pug">
.container
	.hero-info(:style="{backgroundColor: backGround}")
		.hero-info__title(:style='{color: colorTitle}') {{ title }}
		.hero-info__discription(:style='{color: colorDescription}') {{description}}
		ButtonEmpty( 
			text='View collection' 
			)
</template>

<script setup>
import { ref, computed } from 'vue'
import ButtonEmpty from './ButtonEmpty.vue'
const props = defineProps({
	title: {
		type: String,
		required: false
	},
	description: {
		type: String,
		required: false
	},
	link: {
		type: String,
		required: false
	},
	colorTitle: {
		type: String,
		default: '#22202E',
		required: false
	},
	colorDescription: {
		default: '#5B5676'
	},

	backGround: {
		type: String,
		default: '#fff'
	}
	
})
const fonbutton = computed(() => {
	return buttonFon
})
</script>

<style scoped lang="scss">
.hero-info {
	@include flex-column;
	justify-content: center;
	align-items: flex-start;
	max-width: 630px;
	min-height: 444px;

	&__title {
		font-family: var(--playfair);
		font-size: 32px;
		font-style: normal;
		font-weight: 400;
		line-height: 140%;
	}

	&__discription {
		margin: 20px 0 0 0;
		font-size: 18px;
		font-style: normal;
		font-weight: 400;
		line-height: 150%;

	}

	&__link {}
}
</style>
