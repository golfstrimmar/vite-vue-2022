<template lang="pug">
.container
	form#signUp()
		.page-title 
			h2 Sign In
		.input-field
			input#inputemailValue(type='email' name='email1' v-model="email" placeholder=' Denzel Washington')
			label.text-field__label(for='email1') geben Sie Ihre E-Mail ein
		//- InputField( id="inputemailUp" type='email' name='emailUp'     :model='inputemailUp' text='geben Sie Ihre E-Mail ein')
		.input-field
			input#inputpasswordValue(type='password' name='password1' v-model="password" placeholder=' Denzel Washington')
			label.text-field__label(for='password1') geben Sie Ihr Passwort ein
		p {{ errMsg }}
		//- InputField(id="inputpasswordUp"  type='password' name='passwordUp'   :model='inputpasswordUp' text='geben Sie Ihr Passwort ein'  )
		button(type='submit' text='sign up' @click.prevent='register' ).mixButton  sign in
		button(type='submit' text='sign up with Google' @click.prevent='registerGoogle' ).mixButton  sign up with Google


	p Sind Sie bereits angemeldet? 
		router-link(to="/signup" ) sign up
</template>


<script setup>
import { ref, onMounted } from 'vue'
import Button from '@/components/Button.vue';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from 'vue-router'

// import InputField from '@/components/InputField.vue';

var email = ref('')
var password = ref('')
var errMsg = ref('')
const router = useRouter()
var userEmail = ref('')



const register = () => {
	const auth = getAuth();
	signInWithEmailAndPassword(getAuth(), email.value, password.value)
		.then((data) => {
			errMsg.value = 'Successfully login!';

			// userEmail.value = data.user.email


			setTimeout(() => {
				router.push('/')
			}, 800);
		})
		.catch((error) => {

			switch (error.code) {
				case 'auth/invalid-email':
					errMsg.value = 'invalid email';
					break;
				case 'auth/user-not-found':
					errMsg.value = 'No account with that e-mail was faund';
					break;
				case 'auth/wrong-password':
					errMsg.value = 'Incorect password';
					break;

				default:
					errMsg.value = 'E-mail or password was inncorrect';
					break;
			}

		});
}


const registerGoogle = (e) => {
}
onMounted(() => {
	localStorage.setItem("userEmail", '');
})

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
