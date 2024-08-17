<template lang='pug'>
.akkord(:class="(titlesObject == false) ? 'kurz' : ''" )
  .akkord__nav(v-if= "titlesObject") 
    Button(v-for="item in props.titles" :key="index" :item='item' @click='ButtonHandler(item.id) ')

  .akkord__items
    .block(v-for="Data in props.Data" :key="index" :class="(Data.isOpen == true) ? '_is-active' : '' "  )
      .block__line(v-for="el in Data" :key="index" ) 
        .block__info 
          h4 {{el.text}}
          button.tooltip(v-tool  :data = "el.content")
            span i
        div
          Input(:Antwort='content'  :content='el.content' v-for="content in el.content" :key="index" @anwortPositiv="anwortPositiv" @lineFertig="lineFertig")


</template>

<script setup>
import { ref, onMounted, computed, reactive } from 'vue';
import Input from '@/components/Input.vue';
import Button from '@/components/Button.vue';
const props = defineProps({
  titles: {
    type: Array,
    required: false
  },
  Data: {
    type: Array,
    required: false
  }
})

// --------------------------
const ButtonHandler = (id) => {
  props.titles.forEach(car => {
    car.id == id ? car.isOpen = true :
      car.isOpen = false
  })
  props.Data.forEach(car => {
    car.id == id ? car.isOpen = true :
      car.isOpen = false
  })
};


const lineFertig = (some) => {
  var x
  do {
    x = some.closest(".block__line").nextElementSibling.querySelector('input');
  }
  while (x && !(/text/.test(x.type)));
  x.focus();
}

// ==============anwortPositiv======================
const anwortPositiv = (data) => {
  count.value++
  let lineCurrent = [...data.closest('.plaza__line').querySelectorAll("input")];

  if (count.value == lineCurrent.length) {
    var inputCurrent = data.closest('.plaza__line').nextElementSibling.querySelector("input")
    inputCurrent.focus();
    inputCurrent.classList.add("_is-light");
    count.value = 0;
  }
}
onMounted(() => {
  if (props.titles.length == 1) {
    props.titles = ''
  }
})

const titlesObject = computed(() => {
  return props.titles.length > 1
}
)

</script>
<style lang='scss' scoped>
.akkord {
  display: grid;
  grid-template-columns: 150px 1fr;
  column-gap: 5px;
  margin: 20px 0 0 0;

  &.kurz {
    grid-template-columns: 1fr;
  }
}

.akkord__nav {
  display: flex;
  flex-direction: column;
  gap: 5px 0;
}



.akkord__items {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  padding: 10px 0 0 0;

  .block {
    position: fixed;
    z-index: -1;
    opacity: 0;
    transition: all .3s;

    &._is-active {
      position: relative;
      z-index: 1;
      transform: translate(0, 0);
      order: -1;
      animation: pulse .3s ease-in-out;
      opacity: 1;

      @keyframes pulse {
        0% {
          transform: translate(-100%, 0);
          opacity: 0;
        }

        70% {
          opacity: 0;
        }

        100% {
          opacity: 1;
          transform: translate(0, 0);
        }
      }
    }
  }
}

.block__info {
  position: relative;
  display: inline-block;
}

.block__line {
  margin: 0 0 6px 0;


  h4 {
    display: inline-block;
    margin: 0 0 3px 0;
    position: relative;
    padding: 0 0 0 25px;
  }

  input:not([type="range"]) {
    height: 22px;
    border-radius: 3px;
    margin: 0 3px 0 0;

    &:last-of-type {
      margin: 0 0 0 0;
    }
  }
}



@media (max-width: 600px) {
  .akkord {
    display: grid;
    grid-template-columns: 1fr;
    column-gap: 0;
    margin: 20px 0 0 0;
  }


}
</style>
