<script setup>
import { ref } from "vue";
import Tab3 from "../includes/Tab3.vue";
import Tab3Hidden from "../Kit/tab-3-hidden.vue";
let selectedTab = ref(0)
let addition = ref(0)
let tabs = ref([
  {
    id: 1,
    title: 'tab-1',
    selected: false,
  },
  {
    id: 2,
    title: 'tab-2',
    selected: false,
  }
  ,
  {
    id: 3,
    title: 'tab-3',
    selected: false,
  }
])

const MyTab = (tab) => {
  selectedTab.value = tab.id
  tabs.value = tabs.value.map(item => {
    if (item === tab) {
      if (item.selected === false) {
        item.selected = !item.selected
      } else {
        item.selected = false
        selectedTab.value = 0
      }
    } else {
      item.selected = false
    }
    return item
  })
};

mounted: {
  document.addEventListener('click', function (e) {
    if (!e.target.closest('.tabs-3')) {
      tabs.value = tabs.value.map(item => {
        item.selected = false
        return item
      })
      selectedTab.value = 0
    }
  });
}

</script>
<template>
  <h1 class="heading-1">tabs-3</h1>
  <div class="tabs-3">
    <Tab3 v-for="tab in tabs" :key="tab.id" @changeTab="MyTab" :tab="tab"></Tab3>
    <Tab3Hidden :selectedTab="selectedTab"></Tab3Hidden>
  </div>
</template>


<style lang="scss" scoped>

</style>