<script setup>
  import { computed } from '@vue/reactivity';
import Tabs from './Tabs.vue';
const props = defineProps({
  selectedTab: {
    type: Number,
    required: false,
  },

});

const calcaddHeight = (arg)=> {
   let addHeight = [] , maxheight=0
 const hiddens = [...document.querySelectorAll('.hidden3__body')]
   for (let index = 0; index < hiddens.length; index++) {
     addHeight[index] = hiddens[index].scrollHeight
   }
  maxheight = addHeight[arg-1]
   return maxheight
 }

</script>
<template>
  <div :class="['tab-hidden-js']">
 
    <div 
    :style="[selectedTab === 1 ? { 'maxHeight': calcaddHeight(selectedTab) + 'px' } : { 'maxHeight': 0 + 'px' }]"
    :class="['hidden3__body', {'_is-active':selectedTab === 1}]"
     >
    <h3 class="hidden__title">11111111</h3>
    </div>
 
    <div 
   :style="[selectedTab === 2 ? { 'maxHeight': calcaddHeight(selectedTab)+ 'px' } : { 'maxHeight': 0 + 'px' }]"
    :class="['hidden3__body', {'_is-active':selectedTab === 2}]"
     >
      <h3 class="hidden__title">22222222</h3>
     <Tabs></Tabs>
    </div>

    <div 
   :style="[selectedTab === 3 ? { 'maxHeight': calcaddHeight(selectedTab)+ 'px' } : { 'maxHeight': 0 + 'px' }]"
    :class="['hidden3__body', {'_is-active':selectedTab === 3}]"
     >
      <h3 class="hidden__title">33333333333</h3>
      
    </div>



  </div>
</template>
<style lang="scss" scoped>
.hidden3__body {
  height: auto;
  max-height: 0;
  transform: scaleY(0);
  transform-origin: top;
  transition: all .2s;
}

.tab-hidden-js {
  border: 1px solid var(--border);
  z-index: -1;
  position: relative;
}

.hidden3__body._is-active {
  animation: pulse .2s;
  animation-fill-mode: forwards;
}

.hidden3__body._not-active {
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