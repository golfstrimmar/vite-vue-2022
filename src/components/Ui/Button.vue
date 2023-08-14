<template lang="pug">
button(
  v-if="type=== 'button'" 
  :class="['btn',{'btn--light':color ==='light','btn--dark':color === 'dark'}]"
  ) 
  slot
router-link.btn(
  v-else 
  :to='to'
  :class="['btn',{'btn--light':color ==='light','btn--dark':color === 'dark'}]"
  ) 
  slot 
</template>

<script setup>
const props = defineProps({
  type: {
    type: String,
    default: 'button',
  },
  to: {
    type: String,
    required: false
  },
  color: {
    type: String,
    required: false,
  }
})
</script>

<style lang="scss"  scoped>
.btn {
  padding: 16px 32px; 
  @include flex-center;
  transition: all .2s;
  cursor: pointer;
  color: #2A254B;
  font-size: 16px;
  font-weight: 400;
  line-height: 150%;

  &--light {
    color: #2A254B;
    background: #F9F9F9;
    &:hover {
      box-shadow: inset 0 0 8px darken(#F9F9F9, 20%);
    }
  }
  &--dark {
    color: white;
    background: rgba(249, 249, 249, 0.15);
    &:hover {
      box-shadow: inset 0 0 8px white;
    }
  }
}
</style>