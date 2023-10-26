<template lang="pug">
.tabs 
  .tabs__item  
    .tabs__title(@click="tabopen=!tabopen") 
      h3 {{title}}
    transition(mode='easy-in-out' name='o'  )
      .tabs__hidden(v-if="tabopen") 
        .tabs__wrap
          ul
            li( v-for="item in items" :key="index" :item='item')
              h4 {{item.title}}
              span
                SvgIcon(name='man' v-if="props.icons")
                span {{item.text1}}
              span
                SvgIcon(name='frau' v-if="props.icons")
                span {{item.text2}}
              span
                SvgIcon(name='das' v-if="props.icons")
                span {{item.text3}}
              span
                SvgIcon(name='group' v-if="props.icons")
                span {{item.text4}}



</template>

<script setup>
import Text from '@/components/Text.vue'; import SvgIcon from '@/components/SvgIcon.vue'
import { ref } from 'vue';
const tabopen = ref(false);
const props = defineProps({
  icons: {
    type: Boolean,
    required: false
  },
  title: {
    type: String,
    required: false
  },
  items: {
    type: Object,
    required: false
  }
})

</script>

<style lang="scss" scoped>
.tabs {
  &__item {
    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.2), 0 2px 2px rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12);
    overflow: hidden;
    margin: 0 0 5px 0;
    border-radius: 5px;
  }

  &__title {
    padding: 5px;
    background: $blue-6;
    z-index: 4;
    cursor: pointer;
    position: relative;

    h3 {
      color: $blue-1;
    }
  }

  &__hidden {
    position: relative;
    z-index: 2;
    display: grid;
    background: $grey-1;
  }

  &__icons {
    display: grid;
    grid-template-columns: repeat(4, 120px);
    padding: 0 0 0 140px;
  }

  &__wrap {
    min-height: 0px;
    row-gap: 5px;
    @include flex-column;


    li {
      display: grid;
      grid-template-columns: 160px repeat(4, 150px);
      padding: 5px;

      &:first-child {
        padding: 10px 5px 5px 5px;
      }

      &:last-child {
        padding: 5px 5px 10px 5px;
      }

      h4 {
        color: $blue-6;
        font-size: 18px;
        margin: 0 20px 0 0;
      }

      svg {
        width: 25px;
        height: 25px;
        margin: 0 5px 0 0;
      }
    }
  }
}


@media (max-width: 767px) {
  .tabs {


    &__wrap {
      padding: 8px 5px 0px 5px;

      li {
        grid-template-columns: max-content;
        margin: 0 0 10px 0;

        h4 {
          color: $blue-6;
          font-size: 15px;
          margin: 0 10px 0 0;
        }

        span {}
      }
    }
  }


}

.o-enter-from {
  grid-template-rows: 0fr;
}

// .v-enter-active,
.o-enter-to {
  transition: .2s all;
  grid-template-rows: 1fr;
}

.o-leave-from {
  transition: .2s all;
  grid-template-rows: 1fr;
}

.o-leave-to {
  transition: .2s all;
  grid-template-rows: 0fr;
}
</style>