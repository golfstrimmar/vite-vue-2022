<template lang="pug">
.container

	.hero-info(:style="{backgroundColor: backGround}")
		.hero-info__title(:style='{color: colorTitle}') {{ title }}
		.hero-info__discription(:style='{color: colorDescription}') {{description}}
		Button(:type="typeLink" to='/' :color= "colorLink") View collection
</template>

<script setup>
import { ref } from 'vue'
import Button from '@/components/Ui/button.vue'

const props = defineProps({
	title: {
		type: String,
		required: false
	},
	description: {
		type: String,
		required: false
	},
	typeLink: {
		type: String,
		required: false
	},
	colorLink: {
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
	},

})

</script>

<style scoped lang="scss">
.hero-info {
	@include flex-column;
	justify-content: center;
	align-items: flex-start;
	max-width: 630px;


	&__title {
		color: $dark;
		@include Headings-H2;
	}

	&__discription {
		margin: 20px 0 0 0;
		color: $dusk;
		@include Body-Large;

	}

	button,
	.btn {
		margin: auto 0 0 0;
	}
}
</style>
