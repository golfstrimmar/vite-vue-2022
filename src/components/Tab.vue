<template lang='pug'>
.tab()
  h3.tab__title(ref='some' :class="[(tabopen == true) ? '_is-active' : '' ]"
) {{title}}
  transition(mode='easy-in-out' name='opentab'  )
    .tab__hidden(v-if='tabopen'  )
      .tab__wrap
        Copy(v-for="item in copyData" :key="item.id" @click = 'HendlerClick(item.dataText)'   :text="item.dataText" :discription="item.discription" )

</template>

<script setup>
import { reactive, ref } from 'vue';
import Copy from './Copy.vue';
const props = defineProps({
  title: {
    type: String,
    required: false
  },
  copyData: {
    type: Array,
    required: false
  }
})
const some = ref(null)
var tabopen = ref(false);
let head = document.querySelector("body").addEventListener('click', (e) => {
  if ((e.target == some.value) && tabopen.value == false) {
    tabopen.value = true;
  }
  else if (e.target.closest('.tab__hidden') && tabopen.value == true) {
    tabopen.value = true;
  }
  else {
    tabopen.value = false
  }
});


const emit = defineEmits(['someEvent'])
const HendlerClick = (dataText) => {
  emit('someEvent', dataText)
}

</script>

<style lang='scss' scoped>
.tab {
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.2), 0 2px 2px rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12);
  margin: 5px 0;
  border-radius: 5px;
}

.tab__title {
  padding: 5px;
  color: $brown-4;
  background: $blue-1;
  z-index: 4;
  cursor: pointer;
  position: relative;
  @include flex-aligne-center;
  @include transition;
  border-radius: 5px;

  &._is-active {
    background: $brown-3;
    color: $blue-1;
  }
}

.tab__hidden {
  position: relative;
  @include transition;
  z-index: 2;
  background: $grey-3;
  padding: 5px;
  display: grid;
  overflow: hidden;
}

.tab__wrap {
  min-height: 0px;
  @include flex-column;
  max-height: 80vh;
  overflow: scroll;
}

.tab__line {
  h3 {
    color: $red-10;
    display: inline-block;
    text-shadow: 0 0 5px white;
  }
}



.opentab-enter-from {
  grid-template-rows: 0fr;
  padding: 5px;
}

// .v-enter-active,
.opentab-enter-to {
  grid-template-rows: 1fr;
  padding: 5px;
}

.opentab-leave-from {
  grid-template-rows: 1fr;
  padding: 5px;
}

.opentab-leave-to {
  grid-template-rows: 0fr;
  padding-top: 0px;
  padding-bottom: 0px;
}
</style>