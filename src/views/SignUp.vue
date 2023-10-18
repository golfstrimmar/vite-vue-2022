<template lang="pug">
.container
	form#signUp()
		.page-title 
			h2 Sign Up
		.input-field
			input#inputemailValue(type='email' name='email1' v-model="inputemailUp" placeholder=' Denzel Washington')
			label.text-field__label(for='email1') geben Sie Ihre E-Mail ein
		//- InputField( id="inputemailUp" type='email' name='emailUp'     :model='inputemailUp' text='geben Sie Ihre E-Mail ein')
		.input-field
			input#inputpasswordValue(type='password' name='password1' v-model="inputpasswordUp" placeholder=' Denzel Washington')
			label.text-field__label(for='password1') geben Sie Ihr Passwort ein
		//- InputField(id="inputpasswordUp"  type='password' name='passwordUp'   :model='inputpasswordUp' text='geben Sie Ihr Passwort ein'  )
		Button(type='submit' text='sign up' @eventSubmit.prevnt='eventSubmit').mixButton 


	p Sind Sie bereits angemeldet? 
		router-link(to="/signin" ) sign in
</template>


<script setup>
import { ref } from 'vue'
import Button from '@/components/Button.vue';
// import InputField from '@/components/InputField.vue';

var inputemailUp = ref('')
var inputpasswordUp = ref('')


// const eventChange = (data) => {
// 	inputemailUp.value = data
// 	inputpasswordUp.value = data
// }

const submit = (e) => {

}


const eventSubmit = (e) => {
	console.log(inputemailUp.value, inputpasswordUp.value);
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
