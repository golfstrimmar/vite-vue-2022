<script setup>
import Button from "@/components/includes/Button.vue";

const eventForButton = (e) => {
  if (e.target.closest('.btn_wave')) {
    let target = e.target.closest('.btn_wave');
    e.preventDefault();
    let mValue = Math.max(target.clientWidth, target.clientHeight),
      addDiv = document.createElement("div"),
      rect = target.getBoundingClientRect();
    addDiv.classList.add("addDiv");
    addDiv.style.width = addDiv.style.height = mValue + "px";
    addDiv.style.left = e.clientX - rect.left - mValue / 2 + "px";
    addDiv.style.top = e.clientY - rect.top - mValue / 2 + "px";
    target.closest(".btn_wave").append(addDiv);
    setTimeout(() => {
      addDiv.remove();
    }, 300);
  }
};

</script>

<template>
  <h1 class="heading-1">Button</h1>
  <h2 class="heading-2">Disabled</h2>
  <div class="line">
    <Button label="Primary" color="primary" disabled />
    <Button label="Secondary" color="secondary" disabled />
  </div>
  <h2 class="heading-2">Colors</h2>
  <div class="line">
    <Button label="Primary" color="primary" />
    <Button label="Secondary" color="secondary" />
    <Button label="Success" color="success" />
    <Button label="Info" color="info" />
    <Button label="Warning" color="warning" />
    <Button label="Danger" color="danger" />
  </div>
  <h2 class="heading-2">Rounded</h2>
  <div class="line">
    <Button label="Primary" color="primary" rounded />
    <Button label="Secondary" color="secondary" rounded />
    <Button label="Success" color="success" rounded />
    <Button label="Info" color="info" rounded />
    <Button label="Warning" color="warning" rounded />
    <Button label="Danger" color="danger" rounded />
  </div>
  <h2 class="heading-2">Outlined</h2>
  <div class="line">
    <Button label="Primary" color="primary" outlined />
    <Button label="Secondary" color="secondary" outlined />
    <Button label="Success" color="success" outlined />
    <Button label="Info" color="info" outlined />
    <Button label="Warning" color="warning" outlined />
    <Button label="Danger" color="danger" outlined />
  </div>
  <h2 class="heading-2">Icon</h2>
  <div class="line">
    <Button color="primary" icon="heart" outlined />
    <Button color="secondary" icon="hand" outlined />
    <Button color="success" icon="address-book" outlined />
    <Button color="info" icon="credit-card" />
    <Button color="warning" icon="lemon" outlined />
    <Button color="danger" icon="hourglass" />
  </div>
  <h2 class="heading-2">Size</h2>
  <div class="line">
    <Button label="Normal" color="primary" />
    <Button label="Large" color="primary" size="large" />
  </div>
  <h2 class="heading-2">Event</h2>
  <div class="line">
    <Button label="@click" color="danger" @click="eventForButton" />
  </div>
  <div class="line">
    <Button label="wave" color="success" @click="eventForButton" waved />
  </div>
</template>

<style lang="scss">
.btn_wave {
  // border-radius: 10px;
  position: relative;
  overflow: hidden;
}


.addDiv {
  width: 100px;
  height: 100px;
  border-radius: 100%;
  animation: pulseButton .3s ease-in-out;
  transform: scale(0);
  position: absolute;
  background-color: white;
  animation-fill-mode: forwards;
}


@keyframes pulseButton {
  0% {
    transform: scale(0);
    opacity: .8;
  }

  100% {
    opacity: 0;
    transform: scale(2);
  }
}
</style>