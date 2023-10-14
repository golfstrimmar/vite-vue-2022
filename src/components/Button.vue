<template lang="pug">
button(type="button" @click='Button($event)').btn.btn-success.but-wave {{ text }}
</template>

<script setup>
const props = defineProps({
  text: {
    type: String,
    required: false
  }

})


const Button = (event) => {
  let target = event.target.closest(".but-wave");
  let mValue = Math.max(target.clientWidth, target.clientHeight),
    addDiv = document.createElement("div"),
    rect = target.getBoundingClientRect();
  addDiv.classList.add("addDiv");
  addDiv.style.width = addDiv.style.height = mValue + "px";
  addDiv.style.left = event.clientX - rect.left - mValue / 2 + "px";
  addDiv.style.top = event.clientY - rect.top - mValue / 2 + "px";

  target.closest(".but-wave").append(addDiv);
  setTimeout(() => {
    addDiv.remove();
  }, 3000);
}

</script>

<style lang="scss" scoped></style>