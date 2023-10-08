<template lang="pug">
.container
  .page-title 
    h2 Artikel
  Content(:items='Artikel' :headers='Headers')
</template>


<script setup>
import { ref } from 'vue';
import Content from '@/components/Content.vue';
const Headers = ref([
  { title: 'Nominativ' },
  { title: 'Dativ' },
  { title: 'Akkusativ' },
  { title: 'Genitiv' },

])
const Artikel = ref([
  [
    { id: 1, marker: 'M', text: 'ein' },
    { id: 2, marker: 'F', text: 'eine' },
    { id: 3, marker: 'N', text: 'ein' },
    { id: 5, marker: 'M', text: 'der' },
    { id: 6, marker: 'F', text: 'die' },
    { id: 7, marker: 'N', text: 'das' },
    { id: 8, marker: 'P', text: 'die' },
  ],
  [
    { id: 1, marker: 'M', text: 'einem' },
    { id: 2, marker: 'F', text: 'einer' },
    { id: 3, marker: 'N', text: 'einem' },
    { id: 5, marker: 'M', text: 'dem' },
    { id: 6, marker: 'F', text: 'der' },
    { id: 7, marker: 'N', text: 'dem' },
    { id: 8, marker: 'P', text: 'den' },
  ],
  [
    { id: 1, marker: 'M', text: 'einen' },
    { id: 2, marker: 'F', text: 'eine' },
    { id: 3, marker: 'N', text: 'ein' },
    { id: 5, marker: 'M', text: 'den' },
    { id: 6, marker: 'F', text: 'die' },
    { id: 7, marker: 'N', text: 'das' },
    { id: 8, marker: 'P', text: 'die' },
  ],
  [
    { id: 1, marker: 'M', text: 'eines' },
    { id: 2, marker: 'F', text: 'einer' },
    { id: 3, marker: 'N', text: 'eines' },
    { id: 5, marker: 'M', text: 'des' },
    { id: 6, marker: 'F', text: 'der' },
    { id: 7, marker: 'N', text: 'des' },
    { id: 8, marker: 'P', text: 'der' },
  ]
]
)
</script>

<style lang="scss" ></style>