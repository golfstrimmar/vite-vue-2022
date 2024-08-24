<script setup>
const props = defineProps({
  percent: {
    type: Number,
    required: true
  },

})
const color1 = '#689f38';
// const color2 = '#689f38';
const color2 = '#f44336';
</script>

<template>
  <div class="progress-circle">
    <span class="progress-circle-percent" :style="[{ 'color': `${color1}` }]">{{ percent }}%</span>
    <svg width="120" height="120" viewBox="0 0 120 120" class="progress-circle-svg">
      <circle cx="60" cy="60" r="54" fill="none" :stroke="`${color2}`" stroke-width="14" />
      <circle class="progress-circle-line" :style="[{ 'stroke-dashoffset': `calc(100 - ${percent})` }]" cx="60" cy="60"
        r="54" fill="none" :stroke="`${color1}`" stroke-width="12" pathLength="100" />
    </svg>
  </div>

</template>

<style lang="scss" scoped>
.progress {


  &-circle {
    position: relative;
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 3px;

    &-svg {
      width: 100%;
      height: 100%;
      transform: rotate(-90deg);
    }

    &-percent {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
      font-size: 10px;
    }

    &-line {
      stroke-dasharray: 100;
      transition: .5s;
    }
  }
}
</style>