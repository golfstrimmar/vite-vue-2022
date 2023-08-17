<template lang="pug">
.hero-info(:class="[{'hero-info--white':backGround ==='white','hero-info--dark':backGround ==='dark'}]")
	.hero-info__title
		h2(:style='{color: colorTitle}') {{ title }}
	p.hero-info__text(:style='{color: colorDescription}') {{description}}
	Button(:type="typeLink" to='/' :color= "colorLink").hero-info__button View collection
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

	&--white {
		width: 630px;
		min-height: 444px;
		padding: 48px 61px 46px 56px;
		background-color: $white;

		.hero-info__title {
			h2 {
				color: $dark;
				@include Headings-H2;
			}
		}

		.hero-info__text {
			margin: 20px 0 0 0;
			text-align: left;
			color: $dusk;
			@include Body-Large;
		}

		.hero-info__button {
			margin: 157px 0 0 0;
		}
	}

	&--dark {
		padding: 64px 75px 54px 64px;
		background-color: $dark-primary;
		height: 100%;

		.hero-info__title {
			h2 {
				@include Text-Style-3;
			}
		}

		.hero-info__text {
			margin: 20px 0 0 0;
			@include Text-Style-4;
		}

		.hero-info__button {
			margin: auto 0 0 0;
		}
	}
}

@media (max-width: 767px) {
	.hero-info {
		width: 100%;

		&--white {
			min-height: 335px;
			padding: 45px 0 32px;
			background-color: $white;

			.hero-info__title {
				h2 {
					@include Text-Style-9;
				}
			}

			.hero-info__text {
				margin: 12px 0 0 0;
				@include Text-Style-5;
			}

			.hero-info__button {
				margin: 32px 0 0 0;
			}
		}

		&--dark {
			padding: 36px 32px 30px;
			background-color: $dark-primary;
			height: 100%;

			.hero-info__title {
				h2 {
					color: $white;
					@include Headings-H4;
				}
			}

			.hero-info__text {
				margin: 12px 0 0 0;
				@include BodySmall;
			}

			.hero-info__button {
				margin: auto 0 0 0;
			}
		}
	}
}
</style>
