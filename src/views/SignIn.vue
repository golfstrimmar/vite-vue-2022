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
		p._errMsg(v-if="errMsg !== ''" ) {{ errMsg }}
		//- InputField(id="inputpasswordUp"  type='password' name='passwordUp'   :model='inputpasswordUp' text='geben Sie Ihr Passwort ein'  )
		//- button(type='submit' text='sign up with Google' @click.prevent='registerGoogle' ).mixButton  sign up with Google

		Button(type='submit' text='sign in' @someEvent="register"  ) 
		Button(type='submit' text='sign in with Google' @someEvent="registerGoogle"  ) 


	p Sind Sie bereits angemeldet? 
		router-link(to="/signup" ) sign up
</template>


<script setup>
import { ref, onMounted } from 'vue'
import Button from '@/components/Button.vue';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from 'vue-router'
import { useTaskStore } from "../store/taskStore"
const taskStore = useTaskStore();
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
			errMsg.value = 'Erfolgreich eingeloggt!';

			userEmail.value = data.user.email
			taskStore.newUser(userEmail.value)


			setTimeout(() => {
				router.push('/')
			}, 800);
		})
		.catch((error) => {

			switch (error.code) {
				case 'auth/invalid-email':
					errMsg.value = 'Ungültige E-Mail-Adresse';
					break;
				case 'auth/user-not-found':
					errMsg.value = 'Kein Konto mit dieser E-Mail war fehlerhaft';
					break;
				case 'auth/wrong-password':
					errMsg.value = 'Falsches Passwort';
					break;

				default:
					errMsg.value = 'E-Mail oder Passwort war nicht korrekt';
					break;
			}

		});
}


const registerGoogle = (e) => {
}
onMounted(() => {
})

</script>

<style lang="scss" scoped>
form {
	margin: 0 0 30px 0;
}

.page-title {
	margin: 15px 0 40px 0;
}

p {
	color: $blue-4;

	a {
		color: $blue-8;
		margin: 0 0 0 10px;
		font-size: 18px;
		text-transform: uppercase;
	}
}

.mixButton {
	margin: 20px 0 0 0;
}

@media (max-width: 899px) {
	p {
		font-size: clamp(14px, 5vw, 16px);

		a {
			margin: 10px 0 0 0;
		}
	}
}
</style>
