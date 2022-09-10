<script setup>
import Close from '../svgComponents/Close.vue';
const props = defineProps({
  tab: {
    type: Object,
    required: false,
  }
});
const emit = defineEmits(['changeTab'])
const clickOnTab = (tab) => {
  emit('changeTab', tab)
}
</script>
<template>
  <div class="tab-js">
    <button @click="clickOnTab(tab) " :class="['tab-title-js', {'_is-active':tab.selected === true}]">
      {{tab.title}}
    </button>

    <div :style="[tab.selected ? { 'maxHeight': tab.addition + 'px' } : { 'maxHeight': 0 + 'px' }]"
      :class="['tab-hidden-js', {'_is-active':tab.selected === true}, {'_not-active':tab.selected === false}]">
      <div class=" hidden__wrap ">
        <div class="hidden__body" v-if="tab.id === 1">
          <Close></Close>
          11111111111 Lorem ipsum dolor sit amet.
          <Close></Close>
        </div>
        <div class="hidden__body" v-if="tab.id === 2">
          <h3 class="hidden__title">22222222</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae perspiciatis animi aliquam excepturi
            sapiente
            aperiam.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae perspiciatis animi aliquam excepturi
            sapiente
            aperiam.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae perspiciatis animi aliquam excepturi
            sapiente
            aperiam.</p>
        </div>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.tab-title-js {

  background: transparent;
  padding: 5px 10px;
  border: 1px solid var(--info);
  color: var(--info);
  font-size: 13px;
  text-transform: uppercase;
  cursor: pointer;
  transition: all .2s;
  display: block;

  &:hover {
    cursor: pointer;
    background: var(--info-hover);
    color: var(--white);
  }

  &._is-active {
    background: var(--info);
    color: var(--white);
    border: 1px solid var(--info);
  }
}

.hidden__wrap {
  padding: 20px;
}

.tab-hidden-js {
  border: 1px solid var(--border);
  z-index: -1;
  position: relative;
  max-height: 0;
  transform: scaleY(0);
  transform-origin: top;
  transition: all .2s;
}

.tab-hidden-js._is-active {
  animation: pulse .2s;
  animation-fill-mode: forwards;
}

.tab-hidden-js._not-active {
  animation: notPulse .2s;
  animation-fill-mode: forwards;
}




@keyframes pulse {
  0% {
    transform: scaleY(0);
  }

  100% {
    transform: scaleY(1);
  }
}

@keyframes notPulse {
  0% {
    transform: scaleY(1);
  }

  100% {
    transform: scaleY(0);
  }
}
</style>
