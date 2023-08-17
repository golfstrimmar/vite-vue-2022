<template lang="pug">
button(
  v-if="type=== 'button'" 
  :class="['btn',{'btn--white':color ==='white','btn--light':color ==='light','btn--dark':color === 'dark','btn--dark':color === 'dark'}]"
  ) 
  slot
router-link(
  v-else 
  :to='to'
  :class="['btn',{'btn--white':color ==='white','btn--light':color ==='light','btn--dark':color === 'dark','btn--dark-deep':color === 'dark-deep'}]"
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
  width: 170px;
  height: 56px;
  @include flex-center;
  transition: all 0.2s;
  cursor: pointer;
  @include BodyMedium;
  background-color: $light-grey;

  &--light {
    color: $dark-primary;
    background-color: $light-grey;

    &:hover {
      box-shadow: inset 0 0 8px darken($light-grey, 20%);
    }
  }

  &--white {
    color: $dark-primary;
    background-color: $white;
    max-width: 118px;

    &:hover {
      box-shadow: inset 0 0 8px darken($light-grey, 40%);
    }
  }

  &--dark {
    color: $white;
    background-color: $light-grey-15;

    &:hover {
      box-shadow: inset 0 0 8px $white;
    }
  }

  &--dark-deep {
    color: $white;
    background-color: $dark-primary;
    max-width: 118px;

    &:hover {
      box-shadow: inset 0 0 8px $white;
    }
  }
}

@media (max-width: 767px) {
  .btn {
    width: 100%;
    max-width: 336px;
    height: 56px;

    &--light {
      color: $dark-primary;
      background-color: $light-grey;

      &:hover {
        box-shadow: inset 0 0 8px darken($light-grey, 20%);
      }
    }

    &--white {
      max-width: 118px;

    }

    &--dark-deep {
      max-width: 118px;
    }
  }
}</style>