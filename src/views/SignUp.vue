<template lang="pug">
.container
	form#signUp()
		.page-title 
			h2 Sign Up
		.input-field
			input#inputemailValue(type='email' name='email1' v-model="email" placeholder=' Denzel Washington')
			label.text-field__label(for='email1') geben Sie Ihre E-Mail ein
		//- InputField( id="inputemailUp" type='email' name='emailUp'     :model='inputemailUp' text='geben Sie Ihre E-Mail ein')
		.input-field
			input#inputpasswordValue(type='password' name='password1' v-model="password" placeholder=' Denzel Washington')
			label.text-field__label(for='password1') geben Sie Ihr Passwort ein
		p {{ errMsg }}
		//- InputField(id="inputpasswordUp"  type='password' name='passwordUp'   :model='inputpasswordUp' text='geben Sie Ihr Passwort ein'  )
		button(type='submit' text='sign up' @click.prevent='register' ).mixButton  sign up
		button(type='submit' text='sign up with Google' @click.prevent='registerGoogle' ).mixButton  sign up with Google


	p Sind Sie bereits angemeldet? 
		router-link(to="/signin" ) sign in
</template>


<script setup>
import { ref } from 'vue'
import Button from '@/components/Button.vue';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter } from 'vue-router'

// import InputField from '@/components/InputField.vue';

var email = ref('')
var password = ref('')
const router = useRouter()
var errMsg = ref('')



const register = () => {
	const auth = getAuth();
	createUserWithEmailAndPassword(getAuth(), email.value, password.value)
		.then((data) => {
			errMsg.value = 'Successfully registered!';
			setTimeout(() => {
				router.push('/')
			}, 800);


		})
		.catch((error) => {

			// alert(error.message)
			console.log(error.message);
			switch (error.code) {
				case 'auth/invalid-email':
					errMsg.value = 'invalid email';
					break;

				case 'auth/weak-password':
					errMsg.value = 'Password should be at least 6 characters';
					break;

				default:
					errMsg.value = 'E-mail or password was inncorrect';
					break;
			}
		});
}


const registerGoogle = (e) => {
}


</script>

<style lang="scss" scoped>
form {
	margin: 0 0 30px 0;
}

.page-title {
	margin: 15px 0 40px 0;
}


.mixButton {
	margin: 40px 0 0 0;
}
</style>
