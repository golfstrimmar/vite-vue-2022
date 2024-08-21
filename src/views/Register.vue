<template lang="pug">
div
	h1 Register
	input(v-model="email" placeholder="Email")
	input(v-model="password" type="password" placeholder="Password")

	button(@click="register") Register
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router' // import router
const router = useRouter();
const email = ref('')
const password = ref('')

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();

const register = async () => {
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




// createUserWithEmailAndPassword(auth, email, password)
// 	.then((userCredential) => {
// 		// Signed up 
// 		const user = userCredential.user;
// 		alert(user)
// 	})
// 	.catch((error) => {
// 		const errorCode = error.code;
// 		const errorMessage = error.message;
// 		alert(errorMessage)
// 	});

</script>
<style lang='scss' scoped></style>
