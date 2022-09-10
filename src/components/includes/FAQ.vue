<script>
import ArrowDown from '../svgComponents/ArrowDown.vue';
export default {
  name: "FAQ",
  props: ["faq", "index", "open"],
  components: { ArrowDown }
}
</script>



<template>
  <div :class="open ? 'faq open' : 'faq'">
    <div class="question" @click="$emit('toggleOpen', index)">
      {{ faq.question }}
      <ArrowDown></ArrowDown>
    </div>
      <!-- <Transition name="slide-fade"> -->
      <div class="answer" v-if='open === true'>
        <div class="answer__body">
          <!-- {{ faq.answer }} -->
          <div v-if="index===0">
            <p>
              1 Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <p>
              At sed alias quo suscipit rerum laborum.
            </p>
          </div>
          <div v-if="index===1">
            <p>
              2 Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <p>
              At sed alias quo suscipit rerum laborum.
            </p>
          </div>
          <div v-if="index===2">
            <p>
              3 Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <p>
              At sed alias quo suscipit rerum laborum.
            </p>
          </div>
        </div>
      </div>
  </div>
</template>



<style lang="scss" scoped>
.faq {
  display: block;
  width: 100%;
  margin: 15px auto;
  background-color: #FFF;
  cursor: pointer;
  overflow: hidden;
}

.faq .question {
  position: relative;
  color: var(--dark);
  font-size: 20px;
  padding: 5px 10px;
  background-color: var(--warning);
  transition: all 0.2s ease-out;
  z-index: 2;
  display: flex;
  justify-content: space-between;
  align-items: center;
}


.faq.open .question {
  position: relative;
  font-size: 22px;
  padding: 5px 10px;
  background-color: var(--warning-hover);
  color: var(--primary);
}
.faq .question svg {
  fill: var(--dark-gray);
  width: 15px;
  height: 15px;
  transition: all .3s;
}
.faq.open .question svg {
  transform: rotate(180deg);
  fill:var(--primary);
}

.faq .answer {
  color: #3c3c3c;
  font-size: 14px;
  // opacity: 0;
  // height: auto;
  overflow-y: hidden;
  border: 1px solid var(--border);
}

.faq .answer__body {
  padding: 20px 10px;
}

// .faq.open .answer {
//   // opacity: 1;
//   max-height: 150px;
// }
.fade-enter-active,
.fade-leave-active {
  transition: All 0.3s ease;
  transform: scaleY(1);
  transform-origin: top;
}

.fade-enter-from,
.fade-leave-to {
  // opacity: 0;
  transform: scaleY(0);
  z-index: -1;
}
</style>
