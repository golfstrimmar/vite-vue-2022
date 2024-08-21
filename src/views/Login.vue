<template lang="pug">
form(action="#" name="send-form").send#send-form
	h1 Login
	.input-field
		input#email(type='email' name='email'  placeholder=' Denzel Washington' v-model="email")
		label.text-field__label(for='email') *Bitte geben Sie Ihre E-Mail ein
	.input-field
		input#email(type='password' name='password'  placeholder=' Denzel Washington' v-model="password")
		label.text-field__label(for='password') *Bitte geben Sie Ihre Password ein
	Button(@click="Login" text='Login')
	

</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router' // import router
const router = useRouter();
import Button from '@/components/Button.vue';
const email = ref('')
const password = ref('')

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();

const Login = async () => {
	try {
		await createUserWithEmailAndPassword(auth, email.value, password.value);
		alert("Sucsess");
	} catch (error) {
		switch (error.code) {
			case "auth/email-allready-in-use":
				alert("E-Mail bereits verwendet");
				break;

			case "auth/invalid-email":
				alert("Das Format der E-Mail-Adresse ist ungültig.");
				break;

			case "auth/operation-not-allowed":
				alert("Operation ist verboten");
				break;

			case "auth/weak-password":
				alert("Das Passwort muss mindestens 6 Zeichen lang sein");
				break;

			default:
				alert(error.code);
		}
		return;
	}
	router.push("/");
}


</script>
<style lang='scss' scoped>
h1 {
	margin: 0 0 30px 0;
}

.input-field {
	margin: 0 0 20px 0;
}

.send {
	padding: 20px 30px;
}

.input-field {
	background: $deep-purple-1;
	position: relative;
	@include transition;
	width: 100%;

	input[type="text"],
	input[type="email"],
	input[type="password"] {
		width: 100%;
		height: 100%;
		padding: 5px 0 5px 10px;
		cursor: pointer;
		position: relative;
		background: transparent;
		@include transition;
		z-index: 5;
		box-shadow: 0 1px 5px rgba(0, 0, 0, 0.2), 0 2px 2px rgba(0, 0, 0, 0.14),
			0 3px 1px -2px rgba(0, 0, 0, 0.12);

		&::placeholder {
			opacity: 0;
		}

		&:not(:placeholder-shown)+label,
		&:focus+label {
			transform: translateY(-150%);
		}

		&+label {
			position: absolute;
			top: 50%;
			transform: translateY(-50%);
			font-size: 14px;
			left: 10px;
			cursor: pointer;
			z-index: 2;
			@include transition;

			&:hover {
				color: $blue-grey-4;
			}
		}

		&:focus+label,
		&:not(:placeholder-shown)+label {
			transform: translateY(-220%);
			color: $blue-grey-4;
		}
	}

}

button {
	padding: 5px 40px;
	margin: 40px 0 0 0;
}
</style>
