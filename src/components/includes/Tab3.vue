<script setup>


const props = defineProps({
  tab: {
    type: Object,
    required: false,
  },
  
})
const emit = defineEmits(['changeTab'])
const clickOnTab = (tab) => {
  emit('changeTab', tab)
}
</script>

<template>
  <button  :class="['tab-title-js', {'_is-active': tab.selected === true}]"
 @click="clickOnTab(tab)">
    {{tab.id}}
    {{tab.title}}
  </button>
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
</style>

  