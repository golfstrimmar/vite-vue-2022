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
  }
});
const alert = ref(false)

</script>

<template>
  <div class="">
    <!-- <q-btn label="Übersetzung" color="primary" @click="alert = true" /> -->
    <q-btn round color="indigo-5" icon="cached" @click="alert = true" />
    <q-dialog v-model="alert">
      <q-card>
        <q-card-section>
          <div class="text-h6">
            {{title}}
          </div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          {{translation}}
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="OK" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>

  </div>
</template>

<style lang="scss" scoped>
.q-dialog__backdrop {
  z-index: -1;
  pointer-events: all;
  outline: 0;
  background: rgba(0, 0, 0, 0.8) !important;
}

.q-btn {
  font-size: 10px;

}
.q-btn--round {
  min-width: 3em;
  min-height: 3em;
}
</style>