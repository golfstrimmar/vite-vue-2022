<template lang="pug">
button(:type = type @click.prevent="$emit('someEvent'), Button($event)").btn.but-wave.mixButton {{ text }}
</template>

<script setup>
const props = defineProps({
  type: {
    type: String,
    required: false
  },
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

<style lang="scss" scoped>
button {
  border: 1px solid transparent;
  outline: none;
  display: inline-block;
  color: $grey-11;
  border-radius: 3px;
  background-color: $blue-13;
  @include flex-center;
  @include transition;
  cursor: pointer;
  padding: 5px 10px;
  text-transform: uppercase;

  &:hover {
    color: white;
    box-shadow: inset 0 0 15px rgba(255, 255, 255, 1);
    background-color: $blue-4;
  }
}
</style>