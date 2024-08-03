<template lang='pug'>
.tab()
  h3.tab__title( ref='some') {{id}}
  transition(mode='easy-in-out' name='opentab'  )
    .tab__hidden(v-if="tabopen")
      .tab__wrap
        .tab__line(v-for="content in item")
          h3 {{ content.title }}
          p {{ content.text1 }}
          p {{ content.text2 }}

</template>

<script setup>
import { reactive, ref } from 'vue';
const props = defineProps({
  item: {
    type: Array,
    required: false
  },
  id: {
    type: String,
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


</script>

<style lang='scss' scoped>
.tab {
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.2), 0 2px 2px rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12);
  overflow: hidden;
  margin: 5px 0;
  border-radius: 5px;

}

.tab__title {
  padding: 5px;
  color: $blue-1;
  background: $brown-4;
  z-index: 4;
  cursor: pointer;
  position: relative;
  @include flex-aligne-center;
}

.tab__hidden {
  position: relative;
  z-index: 2;
  background: $grey-3;
  padding: 5px;
  display: grid;
}

.tab__line {
  h3 {
    color: $red-10;
    display: inline-block;
    text-shadow: 0 0 5px white;
  }

  p {}
}

.tab__wrap {
  min-height: 0px;
  row-gap: 5px;
  @include flex-column;
}

.opentab-enter-from {
  grid-template-rows: 0fr;
}

// .v-enter-active,
.opentab-enter-to {
  transition: .2s all;
  grid-template-rows: 1fr;
}

.opentab-leave-from {
  transition: .2s all;
  grid-template-rows: 1fr;
}

.opentab-leave-to {
  transition: .2s all;
  grid-template-rows: 0fr;
}
</style>