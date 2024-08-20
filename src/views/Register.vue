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
const email = ref('')
const password = ref('')

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();
createUserWithEmailAndPassword(auth, email, password)
	.then((userCredential) => {
		// Signed up 
		const user = userCredential.user;
		console.log(user);
	})
	.catch((error) => {
		const errorCode = error.code;
		const errorMessage = error.message;
		console.log(errorMessage);
	});
</script>
<style lang='scss' scoped></style>
