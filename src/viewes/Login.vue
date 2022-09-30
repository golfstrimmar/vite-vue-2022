<script setup>
// export default {
  // setup () {
    

  //   return {}
  // }
// }
import {ref} from 'vue'
import {useStore} from 'vuex'

const login_form = ref({})
const register_form = ref({})
const store = useStore()
const login = () =>{
  store.dispatch('login', login_form.value)
}
const register = () =>{
  store.dispatch('register', register_form.value)
}
</script>

<template>
  <main class="login">
<section class="forms">
 
  <form  class="register" @submit.prevent="register">
    <h2>register</h2>
    <input 
    v-model="register_form.email"
    type="email" 
    placeholder="Email address"/>
    <input 
    v-model="register_form.password"
    type="password" 
    placeholder="Password"/>
    <input type="submit" value="Register">
  </form>

  <form  class="login"  @submit.prevent="login">
    <h2>login</h2>
    <input v-model="login_form.email" type="email" placeholder="Email address" />
    <input v-model="login_form.password" type="password" placeholder="Password" />
    <input type="submit" value="Login">
  </form>

</section>
  </main>
</template>




<style lang="scss" scoped>

</style>