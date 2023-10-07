<template lang="pug">
.container
  h2 Artikel
  Content(Items='Artikel')
</template>


<script setup>
import Content from '@/components/Content.vue'
const Artikel = ref(
  [
    { id: 1, text: 'ein' },
    { id: 2, text: 'eine' },
    { id: 3, text: 'ein' },
    { id: 4, text: 'kein' },
    { id: 5, text: 'der' },
    { id: 6, text: 'die' },
    { id: 6, text: 'das' },
    { id: 7, text: 'die' },
  ],
  [
    { id: 1, text: 'einem' },
    { id: 2, text: 'einer' },
    { id: 3, text: 'einem' },
    { id: 4, text: 'keinem' },
    { id: 5, text: 'dem' },
    { id: 6, text: 'der' },
    { id: 7, text: 'dem' },
    { id: 7, text: 'den' },
  ],
  [
    { id: 1, text: 'einen' },
    { id: 2, text: 'eine' },
    { id: 3, text: 'ein' },
    { id: 4, text: 'kein' },
    { id: 5, text: 'den' },
    { id: 6, text: 'die' },
    { id: 7, text: 'das' },
    { id: 7, text: 'die' },
  ],
  [
    { id: 1, text: 'eines' },
    { id: 2, text: 'einer' },
    { id: 3, text: 'eines' },
    { id: 4, text: 'keiner' },
    { id: 5, text: 'des' },
    { id: 6, text: 'der' },
    { id: 7, text: 'des' },
    { id: 7, text: 'der' },
  ]
)
</script>

<style lang="scss" ></style>