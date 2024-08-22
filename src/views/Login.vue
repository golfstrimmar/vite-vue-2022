<template lang="pug">
form(action="#" name="send-form" ).send#send-form
	h2 Login
	.vergessen noch nicht registriert?
		#reg
			Button( type='buton' @click.prevent='Register' text='Register')
	.input-field
		input#email(type='email' name='email'  placeholder=' Denzel Washington' v-model.prevent="email" )
		label.text-field__label(for='email') *Bitte geben Sie Ihre E-Mail ein
	.input-field
		input#password(type='password' name='password'  placeholder=' Denzel Washington' v-model.prevent="password")
		label.text-field__label(for='password') *Bitte geben Sie Ihre Password ein
		.fildset-checkbox
			.form-check
			input#showPassword(type='checkbox' name="showPassword" @click="togglePassword()")
			label(for='showPassword')
				SvgIcon(name='eye' )
	.vergessen password vergessen?
		#resetForm
			Button( type='buton' @click.prevent='resetForm' text='E-Mail zum Zurücksetzen senden')
	Button( type='submit'  @click.prevent="Login" text='Login')
	transition(mode='easy-in-out' name='opentab')
		#message(  v-if="mess ==  true " ) {{ mes }}
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router' // import router
const router = useRouter();
import Button from '@/components/Button.vue';
const email = ref('')
const mess = ref(false)
const mes = ref('')
const password = ref('')
import SvgIcon from '@/components/SvgIcon.vue'

// ==========================================
const Register = () => {
	router.push("/register");
}

// ==========================================
const messageShow = (data) => {
	mes.value = data;
	mess.value = true
	setTimeout(() => {
		mes.value = '';
		mess.value = false
	}, 2000);
};
// ==========================================
const resetForm = () => {
	sendPasswordResetEmail(auth, email.value)
		.then(() => {
			messageShow('E-Mail zum Zurücksetzen des Passworts gesendet!');

		})
		.catch(
			(error) => {
				switch (error.code) {
					case "auth/missing-email":
						mes.value = "fehlende E-Mail-Adresse";
						messageShow(mes.value);
						break;
					case "auth/user-not-found":
						mes.value = "benutzer nicht gefunden";
						messageShow(mes.value);
						break;
				}
				return;
			});
}





// ==========================================
import { useAuthStore } from '@/store/authent';
const authStore = useAuthStore();
import { getAuth, signInWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";
// ---------db-----------------
import { db } from "@/firebase/config.ts";



import {
	getFirestore,
	doc,
	setDoc,
	getDoc,
	onSnapshot,
} from "firebase/firestore";


const auth = getAuth();

const Login = () => {
	signInWithEmailAndPassword(auth, email.value, password.value)
		.then((userCredential) => {
			// Успешный вход
			const user = userCredential.user;
			messageShow(user.email);
			const username = user.email.substring(0, user.email.indexOf('@'));
			setTimeout(() => {
				const userData = {
					email: user.email,
					name: username,
					password: password.value
				};


				async function saveUserData(uid, userData) {
					try {
						await setDoc(doc(db, "users", uid), userData, { merge: true });
						console.log("Данные успешно сохранены");
					} catch (error) {
						console.error("Ошибка при сохранении данных:", error);
					}
				}
				saveUserData()
				authStore.login(userData);



				router.push("/artikel");
			}, 2000);
		})
		.catch(
			(error) => {
				switch (error.code) {
					case "auth/user-not-found":
						mes.value = "benutzer nicht gefunden"
						messageShow(mes.value);
						break;
					case "auth/wrong-password":
						mes.value = "Falsches Passwort"
						messageShow(mes.value);
						break;
					case "auth/missing-password":
						mes.value = "Fehlendes Passwort"
						messageShow(mes.value);
						break;
					case "auth/invalid-email":
						mes.value = "Ungültige E-Mail-Adresse"
						messageShow(mes.value);
						break;
					default:
						mes.value = error.code
						messageShow(mes.value);
				}
			}
		);


	// const userData = {
	// 	name: "John Doe",
	// 	age: 30,
	// 	email: "johndoe@example.com",
	// };
	// onAuthStateChanged(auth, (user) => {
	// 	if (user) {
	// 		saveUserData(user.uid, userData);
	// 	}
	// });
}
// ==========================================


const togglePassword = () => {
	const passwordField = document.getElementById("password");
	const showPassword = document.getElementById("showPassword");
	if (showPassword.checked) {
		passwordField.type = "text";
	} else {
		passwordField.type = "password";
	}
}

</script>
<style lang='scss' scoped>
h2 {
	margin: 0 0 30px 0;
}

.input-field {
	margin: 0 0 20px 0;
}

.send {
	padding: 20px 30px;
	max-width: 700px;
}

#message {
	position: fixed;
	display: flex;
	width: 100vw;
	top: 0%;
	left: 0%;
	height: 100vh;
	color: $blue-grey-1;
	background: rgba(7, 31, 43, 0.85);
	outline: 1px solid;
	padding: 0 0 0 0;
	transition: all 0.2s;
	box-shadow: 0px 8px 10px 0px rgba(0, 0, 0, .3), inset 0px 4px 1px 1px white, inset 0px -3px 1px 1px rgba(204, 198, 197, .5);
	justify-content: center;
	align-items: center;
	z-index: 20000;
	backdrop-filter: blur(5px);
}

.vergessen {
	position: relative;
	display: grid;
	grid-template-columns: max-content 1fr;
	align-items: center;
	column-gap: 9px;
	row-gap: 15px;
	margin: 0 0 20px 0;

	button {
		margin: 0 0 0 0;
		padding: 0 10px;
		font-size: 14px;
	}
}

button {
	padding: 5px 40px;
	margin: 40px 0 0 0;
}

.opentab-enter-from {
	opacity: 0;
	transform: scale(0);
}

.opentab-enter-to {
	opacity: 1;
	transform: scale(1);
}

.opentab-leave-from {
	opacity: 1;
	transform: scale(1);
}

.opentab-leave-to {
	opacity: 0;
	transform: scale(0);
}
</style>
