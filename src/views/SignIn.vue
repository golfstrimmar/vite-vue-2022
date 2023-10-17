<template lang="pug">
.container
	form#signUp( @submit="eventSubmit($event)" )
		.page-title 
			h2 Sign In
		.input-field
			input#emailValue(type='email' name='email2' v-model="emailValue" placeholder=' Denzel Washington')
			label.text-field__label(for='email2') geben Sie Ihre E-Mail ein
		.input-field
			input#passwordValue(type='password' name='password2' v-model="passwordValue" placeholder=' Denzel Washington')
			label.text-field__label(for='password2') geben Sie Ihr Passwort ein

		Button(type='submit' text="Log in" ).mixButton
	router-link(to="/signup" )
		p Sind Sie nicht angemeldet? 
</template>

<script setup>
import { ref } from 'vue'
import Button from '@/components/Button.vue';

var emailValue = ref('')
var passwordValue = ref('')


const eventSubmit = (e) => {
	e.preventDefault();

}
</script>

<style lang="scss" scoped>
form {
	margin: 0 0 30px 0;
}

.page-title {
	margin: 15px 0 40px 0;
}

.input-field {
	margin: 20px 0 0 0;
}



.input-field input[type="email"],
.input-field input[type="password"] {
	margin: 0 0 0 0;
	background: $deep-purple-1;
	box-shadow: 0 0 8px $blue-grey-4;
	padding: 5px 0 5px 10px;

	&+label {
		font-size: 14px;
		z-index: 20;
		left: 10px;
		cursor: pointer;

		&:hover {
			color: $blue-grey-4;
		}
	}

	&:hover {
		&+label {
			color: $blue-grey-4;
		}
	}

	&:focus+label,
	&:not(:placeholder-shown)+label {
		transform: translateY(-220%);
		color: $blue-grey-4;
	}

}


.mixButton {
	margin: 40px 0 0 0;
}
</style>
