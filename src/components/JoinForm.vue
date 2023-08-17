<template lang="pug">
form.join__form
	input(type='text' placeholder="your@email.com" :class="[{'white':bgInput ==='white','dark':bgInput ==='dark'}]")
	Button(type="link" to='/' :color= "colorButton") Sign up
</template>

<script setup>
import { ref } from 'vue'
import Button from '@/components/Ui/Button.vue'
const props = defineProps({
	bgInput: {
		type: String,
		reqired: false
	},
	colorButton: {
		type: String,
		reqired: false
	},
})
</script >

<style scoped lang="scss">
.join__form {
	@include flex-aligne-center;
	height: 56px;

	input {
		@include flex-aligne-center;
		padding: 17px 0px 17px 32px;
		flex: 1 0 0;
		align-self: stretch;
		transition: all .2s;
		color: $white;
		&::placeholder {
			text-align: left;
			opacity: 0.2;
		}

		&.white {
			background: $white;

			&::placeholder {
				@include Text-Style-5;
			}

			&:hover {
				background: lighten($primary, 40%);
			}
		}

		&.dark {
			background: $light-grey-15;

			&::placeholder {
				opacity: 1;
				@include Text-Style-8;
			}

			&:hover {
				background: lighten($primary, 40%);
			}
		}

	}
	}



</style>
