<script setup>
import { ref } from "vue";
import Tab from "../includes/Tab.vue";

// let selected = ref(false);
// let addition = ref(0)

let tabs = ref([
  {
    id: 1,
    title: 'tab-second-1',
    selected: false,
    addition: 0
  },
  {
    id: 2,
    title: 'tab-second-2',
    selected: false,
    addition: 0
  }
])

const MyTab = (tab) => {
  let next = event.target.closest('button').nextElementSibling
  tabs.value = tabs.value.map(item => {
    if (item === tab) {
      if (item.selected === false) {
        item.selected = !item.selected
        item.addition = next.scrollHeight;
      } else {
        item.selected = false
        item.addition = 0
      }
    } else {
      item.selected = false
      item.addition = 0
    }
    return item
  })
};

mounted: {
  document.addEventListener('click', function (e) {
    if (!e.target.closest('.tab-js')) {
      tabs.value = tabs.value.map(item => {
        item.selected = false
        item.addition = 0
        return item
      })
    }
  });
}
</script>
<template>
  <h1 class="heading-1">Tab Second</h1>
  <div class="tabs">
      <Tab v-for="tab in tabs" :key="tab.id" @changeTab="MyTab" :tab="tab">
      </Tab>
  </div>
</template>


<style lang="scss" scoped>
.tabs {
  margin: 0 0 40px 0;
}
</style>
