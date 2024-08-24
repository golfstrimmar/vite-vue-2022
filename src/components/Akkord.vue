<template lang='pug'>
.akkord(:class="(titlesObject == false) ? 'kurz' : ''" )
  .akkord__nav(v-if= "titlesObject") 
    Button(  v-for="item in props.titles" :key="index" :item='item' :text='item.title' @click='ButtonHandler(item.id) ' )

  .akkord__items
    div(v-for="Data in contentData.value" :key="index")
      .block( :class="(Data.isOpen == true) ? '_is-active' : '' "  )
        Button( text='Beispiele mischen'   @click = "handlerClick(Data)"  svg='arrow-repeat')
        Button( text='Start'  @click='start'    svg='sport')
        Button( text='Stop'   @click='stop'    svg='stopwatch')
        Button( text='Reset'   @click='reset'    )
        span.zeit anzahl der richtigen Antworten: {{ count }}
        span.zeit Sie haben für das Training ausgegeben: {{ formattedTime }}

        .block__line(v-for="el in Data" :key="index" ) 
          .block__info 
            h4 {{el.text}}
            button.tooltip(v-tool  :data = "el.content")
              span i
          div
            Input(:Antwort='content'  :content='el.content' v-for="content in el.content" :key="index" @lineFertig="lineFertig" )


</template>

<script setup>
import { ref, onMounted, computed, reactive, watchEffect } from 'vue';
import Input from '@/components/Input.vue';
import Button from '@/components/Button.vue';
var contentData = reactive([]);
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


var time = ref(0);        // Количество секунд
var interval = ref(null);   // Интервал для обновления времени

const formattedTime = computed(() => {
  const hours = Math.floor(time.value / 3600).toString().padStart(2, '0');
  const minutes = Math.floor((time.value % 3600) / 60).toString().padStart(2, '0');
  const seconds = (time.value % 60).toString().padStart(2, '0');
  return `${hours}h ${minutes}m ${seconds}s`;
})


const start = () => {
  if (!interval.value) {
    interval.value = setInterval(() => {
      time.value++;
    }, 1000);
  }
};

const emit = defineEmits(['addTime'])
const capturedValue = ref(null);

const stop = () => {
  clearInterval(interval.value);
  interval.value = null;
};


const reset = () => {
  stop();
  capturedValue.value = formattedTime.value;
  emit('addTime', capturedValue.value, count.value, countAll.value)
  count.value = 0;
  formattedTime.value = 0;
  time.value = 0;
};


// --------------------------
const handlerClick = (Data) => {
  Data.sort(() => Math.random() - 0.5);
}

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

// --------------------------

var count = ref(0);
var countAll = ref(0);

const lineFertig = (some) => {
  if (some.closest(".block__line").nextElementSibling) {
    some.closest(".block__line").nextElementSibling.querySelector('input').focus();
    count.value++
  }
  let lineItems = [...some.closest(".block").querySelectorAll(".block__line")];
  countAll.value = lineItems.length
}
// --------------------------
onMounted(() => {
  if (props.titles.length == 1) {
    props.titles = ''
  }
})

const titlesObject = computed(() => {
  return props.titles.length > 1
}
)
watchEffect(() => {
  contentData.value = props.Data
})
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

  button {
    padding: 3px 5px;
  }
}

.mischen {
  position: absolute;
  top: -50px;
  left: 0px;
  padding: 10px 20px;


  &:hover {
    box-shadow: 0px 8px 10px 0px rgba(0, 0, 0, 0.5), inset 0px 4px 1px 1px white, inset 0px -3px 1px 1px rgba(204, 198, 197, 0.8);
  }
}

.akkord__items {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  position: relative;

  .block {
    position: fixed;
    z-index: -1;
    opacity: 0;
    transition: all .3s;

    button {
      margin: 0 10px 20px 0;
      padding: 3px 5px;

      &:last-of-type {
        margin: 0 0 20px 0;
      }
    }

    span.zeit {
      font-family: 'HouschkaPro-DemiBold', sans-serif;
      margin: 0 0 0 20px;
    }

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
