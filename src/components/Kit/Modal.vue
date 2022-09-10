<script setup>
import Dialog from "./../includes/Dialog.vue";
import { ref } from "vue";
import Button from "../includes/Button.vue";
let animatedModalVisible = ref(false);
const clickHandler= (e) =>{
animatedModalVisible.value = true;
document.querySelector('body').style.overflow = 'hidden'
}
const closeHandler = () =>{
animatedModalVisible.value = false;
document.querySelector('body').style.overflow = 'visible'
}


</script>
 
<template>
    <h1 class="heading-1">
      modal
    </h1>
    <strong>Vue.js Composition API Teleport</strong>
    <br />
    <br />
    <Button label="Show animated Modal" color="primary" @click="clickHandler"></Button>
    <Teleport to="body">
      <Dialog :visible="animatedModalVisible" @close="closeHandler" />
    </Teleport>
</template>
<style>

</style>