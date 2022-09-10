<script setup>
import Button from './Button.vue';
import Close from '../svgComponents/Close.vue';
const props = defineProps({
  visible: Boolean,
});

</script>
 
<template>
  <Transition name="myModal">
    <div v-if="visible" class="modal" @click="$emit('close')">
      <div class="modal__wrapper">
        <div class="modal__container" @click.stop>
        <center>
          <h4 class="modal__header">
            Dialog modal
          </h4>
          <p class="modal__body">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum, assumenda? Voluptate, dolorum corporis.
            Porro, labore! Eaque laudantium fugit, corrupti delectus dolore repudiandae cumque at aliquid numquam,
            quaerat vel ab quidem!
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum, assumenda? Voluptate, dolorum corporis.
            Porro, labore! Eaque laudantium fugit, corrupti delectus dolore repudiandae cumque at aliquid numquam,
            quaerat vel ab quidem!
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum, assumenda? Voluptate, dolorum corporis.
            Porro, labore! Eaque laudantium fugit, corrupti delectus dolore repudiandae cumque at aliquid numquam,
            quaerat vel ab quidem!
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum, assumenda? Voluptate, dolorum corporis.
            Porro, labore! Eaque laudantium fugit, corrupti delectus dolore repudiandae cumque at aliquid numquam,
            quaerat vel ab quidem!
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum, assumenda? Voluptate, dolorum corporis.
            Porro, labore! Eaque laudantium fugit, corrupti delectus dolore repudiandae cumque at aliquid numquam,
            quaerat vel ab quidem!
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum, assumenda? Voluptate, dolorum corporis.
            Porro, labore! Eaque laudantium fugit, corrupti delectus dolore repudiandae cumque at aliquid numquam,
            quaerat vel ab quidem!
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum, assumenda? Voluptate, dolorum corporis.
            Porro, labore! Eaque laudantium fugit, corrupti delectus dolore repudiandae cumque at aliquid numquam,
            quaerat vel ab quidem!
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum, assumenda? Voluptate, dolorum corporis.
            Porro, labore! Eaque laudantium fugit, corrupti delectus dolore repudiandae cumque at aliquid numquam,
            quaerat vel ab quidem!
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum, assumenda? Voluptate, dolorum corporis.
            Porro, labore! Eaque laudantium fugit, corrupti delectus dolore repudiandae cumque at aliquid numquam,
            quaerat vel ab quidem!
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum, assumenda? Voluptate, dolorum corporis.
            Porro, labore! Eaque laudantium fugit, corrupti delectus dolore repudiandae cumque at aliquid numquam,
            quaerat vel ab quidem!
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum, assumenda? Voluptate, dolorum corporis.
            Porro, labore! Eaque laudantium fugit, corrupti delectus dolore repudiandae cumque at aliquid numquam,
            quaerat vel ab quidem!
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum, assumenda? Voluptate, dolorum corporis.
            Porro, labore! Eaque laudantium fugit, corrupti delectus dolore repudiandae cumque at aliquid numquam,
            quaerat vel ab quidem!
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum, assumenda? Voluptate, dolorum corporis.
            Porro, labore! Eaque laudantium fugit, corrupti delectus dolore repudiandae cumque at aliquid numquam,
            quaerat vel ab quidem!
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum, assumenda? Voluptate, dolorum corporis.
            Porro, labore! Eaque laudantium fugit, corrupti delectus dolore repudiandae cumque at aliquid numquam,
            quaerat vel ab quidem!
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum, assumenda? Voluptate, dolorum corporis.
            Porro, labore! Eaque laudantium fugit, corrupti delectus dolore repudiandae cumque at aliquid numquam,
            quaerat vel ab quidem!
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum, assumenda? Voluptate, dolorum corporis.
            Porro, labore! Eaque laudantium fugit, corrupti delectus dolore repudiandae cumque at aliquid numquam,
            quaerat vel ab quidem!
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum, assumenda? Voluptate, dolorum corporis.
            Porro, labore! Eaque laudantium fugit, corrupti delectus dolore repudiandae cumque at aliquid numquam,
            quaerat vel ab quidem!
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum, assumenda? Voluptate, dolorum corporis.
            Porro, labore! Eaque laudantium fugit, corrupti delectus dolore repudiandae cumque at aliquid numquam,
            quaerat vel ab quidem!
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum, assumenda? Voluptate, dolorum corporis.
            Porro, labore! Eaque laudantium fugit, corrupti delectus dolore repudiandae cumque at aliquid numquam,
            quaerat vel ab quidem!
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum, assumenda? Voluptate, dolorum corporis.
            Porro, labore! Eaque laudantium fugit, corrupti delectus dolore repudiandae cumque at aliquid numquam,
            quaerat vel ab quidem!
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum, assumenda? Voluptate, dolorum corporis.
            Porro, labore! Eaque laudantium fugit, corrupti delectus dolore repudiandae cumque at aliquid numquam,
            quaerat vel ab quidem!
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum, assumenda? Voluptate, dolorum corporis.
            Porro, labore! Eaque laudantium fugit, corrupti delectus dolore repudiandae cumque at aliquid numquam,
            quaerat vel ab quidem!
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum, assumenda? Voluptate, dolorum corporis.
            Porro, labore! Eaque laudantium fugit, corrupti delectus dolore repudiandae cumque at aliquid numquam,
            quaerat vel ab quidem!
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum, assumenda? Voluptate, dolorum corporis.
            Porro, labore! Eaque laudantium fugit, corrupti delectus dolore repudiandae cumque at aliquid numquam,
            quaerat vel ab quidem!
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum, assumenda? Voluptate, dolorum corporis.
            Porro, labore! Eaque laudantium fugit, corrupti delectus dolore repudiandae cumque at aliquid numquam,
            quaerat vel ab quidem!
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum, assumenda? Voluptate, dolorum corporis.
            Porro, labore! Eaque laudantium fugit, corrupti delectus dolore repudiandae cumque at aliquid numquam,
            quaerat vel ab quidem!
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum, assumenda? Voluptate, dolorum corporis.
            Porro, labore! Eaque laudantium fugit, corrupti delectus dolore repudiandae cumque at aliquid numquam,
            quaerat vel ab quidem!
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum, assumenda? Voluptate, dolorum corporis.
            Porro, labore! Eaque laudantium fugit, corrupti delectus dolore repudiandae cumque at aliquid numquam,
            quaerat vel ab quidem!
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum, assumenda? Voluptate, dolorum corporis.
            Porro, labore! Eaque laudantium fugit, corrupti delectus dolore repudiandae cumque at aliquid numquam,
            quaerat vel ab quidem!
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum, assumenda? Voluptate, dolorum corporis.
            Porro, labore! Eaque laudantium fugit, corrupti delectus dolore repudiandae cumque at aliquid numquam,
            quaerat vel ab quidem!
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum, assumenda? Voluptate, dolorum corporis.
            Porro, labore! Eaque laudantium fugit, corrupti delectus dolore repudiandae cumque at aliquid numquam,
            quaerat vel ab quidem!
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum, assumenda? Voluptate, dolorum corporis.
            Porro, labore! Eaque laudantium fugit, corrupti delectus dolore repudiandae cumque at aliquid numquam,
            quaerat vel ab quidem!
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum, assumenda? Voluptate, dolorum corporis.
            Porro, labore! Eaque laudantium fugit, corrupti delectus dolore repudiandae cumque at aliquid numquam,
            quaerat vel ab quidem!
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum, assumenda? Voluptate, dolorum corporis.
            Porro, labore! Eaque laudantium fugit, corrupti delectus dolore repudiandae cumque at aliquid numquam,
            quaerat vel ab quidem!
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum, assumenda? Voluptate, dolorum corporis.
            Porro, labore! Eaque laudantium fugit, corrupti delectus dolore repudiandae cumque at aliquid numquam,
            quaerat vel ab quidem!
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum, assumenda? Voluptate, dolorum corporis.
            Porro, labore! Eaque laudantium fugit, corrupti delectus dolore repudiandae cumque at aliquid numquam,
            quaerat vel ab quidem!
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum, assumenda? Voluptate, dolorum corporis.
            Porro, labore! Eaque laudantium fugit, corrupti delectus dolore repudiandae cumque at aliquid numquam,
            quaerat vel ab quidem!
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum, assumenda? Voluptate, dolorum corporis.
            Porro, labore! Eaque laudantium fugit, corrupti delectus dolore repudiandae cumque at aliquid numquam,
            quaerat vel ab quidem!
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum, assumenda? Voluptate, dolorum corporis.
            Porro, labore! Eaque laudantium fugit, corrupti delectus dolore repudiandae cumque at aliquid numquam,
            quaerat vel ab quidem!
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum, assumenda? Voluptate, dolorum corporis.
            Porro, labore! Eaque laudantium fugit, corrupti delectus dolore repudiandae cumque at aliquid numquam,
            quaerat vel ab quidem!
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum, assumenda? Voluptate, dolorum corporis.
            Porro, labore! Eaque laudantium fugit, corrupti delectus dolore repudiandae cumque at aliquid numquam,
            quaerat vel ab quidem!
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum, assumenda? Voluptate, dolorum corporis.
            Porro, labore! Eaque laudantium fugit, corrupti delectus dolore repudiandae cumque at aliquid numquam,
            quaerat vel ab quidem!
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum, assumenda? Voluptate, dolorum corporis.
            Porro, labore! Eaque laudantium fugit, corrupti delectus dolore repudiandae cumque at aliquid numquam,
            quaerat vel ab quidem!
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum, assumenda? Voluptate, dolorum corporis.
            Porro, labore! Eaque laudantium fugit, corrupti delectus dolore repudiandae cumque at aliquid numquam,
            quaerat vel ab quidem!
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum, assumenda? Voluptate, dolorum corporis.
            Porro, labore! Eaque laudantium fugit, corrupti delectus dolore repudiandae cumque at aliquid numquam,
            quaerat vel ab quidem!
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum, assumenda? Voluptate, dolorum corporis.
            Porro, labore! Eaque laudantium fugit, corrupti delectus dolore repudiandae cumque at aliquid numquam,
            quaerat vel ab quidem!
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum, assumenda? Voluptate, dolorum corporis.
            Porro, labore! Eaque laudantium fugit, corrupti delectus dolore repudiandae cumque at aliquid numquam,
            quaerat vel ab quidem!
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum, assumenda? Voluptate, dolorum corporis.
            Porro, labore! Eaque laudantium fugit, corrupti delectus dolore repudiandae cumque at aliquid numquam,
            quaerat vel ab quidem!
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum, assumenda? Voluptate, dolorum corporis.
            Porro, labore! Eaque laudantium fugit, corrupti delectus dolore repudiandae cumque at aliquid numquam,
            quaerat vel ab quidem!
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum, assumenda? Voluptate, dolorum corporis.
            Porro, labore! Eaque laudantium fugit, corrupti delectus dolore repudiandae cumque at aliquid numquam,
            quaerat vel ab quidem!
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum, assumenda? Voluptate, dolorum corporis.
            Porro, labore! Eaque laudantium fugit, corrupti delectus dolore repudiandae cumque at aliquid numquam,
            quaerat vel ab quidem!
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum, assumenda? Voluptate, dolorum corporis.
            Porro, labore! Eaque laudantium fugit, corrupti delectus dolore repudiandae cumque at aliquid numquam,
            quaerat vel ab quidem!
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum, assumenda? Voluptate, dolorum corporis.
            Porro, labore! Eaque laudantium fugit, corrupti delectus dolore repudiandae cumque at aliquid numquam,
            quaerat vel ab quidem!
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum, assumenda? Voluptate, dolorum corporis.
            Porro, labore! Eaque laudantium fugit, corrupti delectus dolore repudiandae cumque at aliquid numquam,
            quaerat vel ab quidem!
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum, assumenda? Voluptate, dolorum corporis.
            Porro, labore! Eaque laudantium fugit, corrupti delectus dolore repudiandae cumque at aliquid numquam,
            quaerat vel ab quidem!
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum, assumenda? Voluptate, dolorum corporis.
            Porro, labore! Eaque laudantium fugit, corrupti delectus dolore repudiandae cumque at aliquid numquam,
            quaerat vel ab quidem!
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum, assumenda? Voluptate, dolorum corporis.
            Porro, labore! Eaque laudantium fugit, corrupti delectus dolore repudiandae cumque at aliquid numquam,
            quaerat vel ab quidem!
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum, assumenda? Voluptate, dolorum corporis.
            Porro, labore! Eaque laudantium fugit, corrupti delectus dolore repudiandae cumque at aliquid numquam,
            quaerat vel ab quidem!
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum, assumenda? Voluptate, dolorum corporis.
            Porro, labore! Eaque laudantium fugit, corrupti delectus dolore repudiandae cumque at aliquid numquam,
            quaerat vel ab quidem!
          </p>
          <button class="modal__close" type="button" @click="$emit('close')">
            <Close></Close>
          </button>
          </center>
        </div>
      </div>
    </div>
  </Transition>
</template>
 
<style lang="scss" scoped>
.modal {
  // display: table;
  transition: opacity 0.3s ease;
  overflow-y: scroll;
  position: fixed;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 1000;
  // overflow: auto;

}

.modal__wrapper {
  width: 100%;
  min-height: 100vh;
  background-color: rgba(0, 0, 0, 0.9);
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-y: auto;
  overflow-x: hidden;
}

.modal__close {
  width: 25px;
  height: 25px;
  border-radius: 100%;
  border: 1px solid var(--border);
  position: absolute;
  top: -20px;
  right: -20px;
  transition: all .3s;

  svg {
    fill: var(--dark);
    width: 15px;
    height: 15px;
    transition: all .3s;
  }

  &:hover {
    border: 1px solid var(--white);
    background: var(--dark-gray);

    svg {
      fill: var(--white);
    }
  }
}

.modal__container {
  transition: all 0.3s ease;
  position: relative;
  z-index: 1010;
  display: flex;
  flex-direction: column;
  border: 1px solid var(--border);
  background-color: var(--white);
  border-radius: 10px;
  z-index: 1010;
  width: 60vw;
  margin: 100px 0;
}

.modal__header {
  margin-top: 0;
  color: var(--success);
}

.modal__body {
  margin: 20px 0;
}

.myModal-enter-from,
.myModal-leave-to {
  opacity: 0;
}

.myModal-enter-from .modal__container,
.myModal-leave-to .modal__container {
  -webkit-transform: scale(1.1);
  transform:  scale(1.1);
}



@media (max-width: 900px) {
  .modal__container {
    width: 100%;
  }

    .modal__close {
    right: 6px;
    top: 6px;
  }
}
</style>