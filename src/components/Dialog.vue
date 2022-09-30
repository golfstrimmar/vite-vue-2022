<script setup>
import { ref } from 'vue'
const props = defineProps({
  title: {
    type: String,
    required: false,
  },
  translation: {
    type: String,
    required: false,
  },
  category: {
    type: String,
    required: false,
  }
  
});
const alert = ref(false)

</script>

<template>
  <div class="">
    <q-btn light-dimmed   label="Übersetzung" @click="alert = true" />
    <q-dialog v-model="alert">
      <q-card class="q-pa-md">
        <q-card-section v-if="category !== 'Kurz'"  align="center" class=" text-center">
          <div class="text-h6">
            {{title}}
          </div>
        </q-card-section>

        <q-card-section class="q-pt-none text-center" align="center">
          {{translation}}
        </q-card-section>

        <q-card-actions align="center">
          <q-btn  outline  label="OK" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>

  </div>
</template>

<style lang="scss" scoped>
.q-dialog__backdrop {
  background: rgba(0, 0, 0, 0.9) !important;
}


.myDialog{
    min-width: 100%;
      min-height: 100%;
      border-radius: 10px;
}

.q-btn {

  padding:  5px 0;
  min-width: 100%;
  min-height: 100%;
  border-radius: 10px;
}
</style>