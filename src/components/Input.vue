<template lang="pug">
input(type='text' v-model.trim='inputValue' ref="some" :class="[(focused == true) ? '_is-light' : '']" @focus="focusHandler" @input='HendleEventInput' @blur="blurHandler")
</template>

<script setup>
import { ref, watch, defineProps } from 'vue';
import * as images from '@/assets/img/img.js'


const inputValue = ref('')
// const flag = ref(false)
// const focused = ref(false)
const some = ref(null)

// v-blur='
// const flag = ref(false)
const props = defineProps({
  Antwort: {
    type: String,
    required: false
  },
})

const blurHandler = () => {
  if (some.value.classList.contains("_is-light")) {
    some.value.classList.remove("_is-light")
  }
}


const focusHandler = () => {
  let headItems = [...some.value.closest('.plaza__line').querySelectorAll("input")];
  headItems.forEach((cell) => {
    cell.classList.remove("_is-light")
  });
  some.value.classList.add("_is-light");
}

// -----------------------------------

import { defineEmits } from 'vue';
const emit = defineEmits(['anwortPositiv'])
const HendleEventInput = () => {
  if (inputValue.value == props.Antwort) {
    some.value.classList.remove("_is-light")
    some.value.classList.add("_is-active");
    some.value.setAttribute("disabled", true)
    emit('anwortPositiv', some.value)
    if (some.value.nextElementSibling) {
      some.value.nextElementSibling.focus()
      some.value.nextElementSibling.classList.add("_is-light");
      some.value.blur()
      some.value.classList.remove("_is-light")
    }

  }
}
// -----------------------------------

// const HendlerEventInput = () => {
//   if (inputValue.value == props.Antwort) {

//     if (some.value.nextElementSibling) {
//       some.value.nextElementSibling.focus()
//       some.value.nextElementSibling.classList.add("_is-light"); some.value.blur()
//       some.value.classList.remove("_is-light")
//     }
//   }
//   // else {


//   //   if (some.value.closest('.plaza__line').nextElementSibling) {

//   //     some.value.closest('.plaza__line').nextElementSibling.querySelector("input").focus();
//   //   }

//   // isActiveSalut.value = 'isActive'

//   // const salut = document.createElement('img')
//   // salut.setAttribute('src', images.urlImgSalut)
//   // salut.classList.add('salut')
//   // some.value.closest('.plaza__line').append(salut)
//   // setTimeout(() => {
//   //   salut.remove()
//   // }, 1200);
//   // emit('anwortPositiv', true)
//   // }
// }


// const Vertig = () => {
//   return flag.value
// }
// watch(inputValue, (newValue, oldValue) => {
//   if (newValue == props.Antwort) {
//     flag.value = true
//     Vertig();
//   }
// })





</script>


<style lang='scss' scoped>
input {
  display: inline-block;
  max-width: 110px;
  max-height: 22px;
  border-radius: 5px;

  &._is-light {
    background: $green-1 !important;
    box-shadow: inset 0 0 5px rgb(253, 252, 252) !important;
    border: 1px solid $green-7;
    color: $blue-10;
  }

  &._is-active {
    background: $green-2 !important;
    box-shadow: inset 0 0 5px rgba(252, 253, 253, 0.884) !important;
    border: 1px solid transparent;
    color: $green-8;
  }

  &._is-falsch {
    background: lighten($deep-orange-13, 20%);
    box-shadow: inset 0 0 5px rgb(253, 252, 252) !important;
    color: $grey-10;
  }
}
</style>