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

	input {
		display: flex;
		padding: 17px 205px 17px 32px;
		align-items: center;
		flex: 1 0 0;
		align-self: stretch;

		&::placeholder {
			font-size: 16px;
			font-weight: 400;
			opacity: 0.2;
		}

		&.white {
			background: white;
			color: #F9F9F9;

			&::placeholder {
				color: var(--dark-primary, #2A254B);
			}
		}
		&.dark {
			background: rgba(255, 255, 255, 0.15);
			color: #F9F9F9;

			&::placeholder {
				opacity: 1;
				color: var(--white, #FFF);
			}
		}

	}

}
</style>
