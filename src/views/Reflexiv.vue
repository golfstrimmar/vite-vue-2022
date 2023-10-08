<template lang="pug">
.container
	.page-title 
		h2 Reflexivpronomen
	Content(:items='Reflexiv' :headers='Headers')
</template>


<script setup>
import { ref } from 'vue';
import Content from '@/components/Content.vue';
const Headers = ref([
	{ title: 'Dativ' },
	{ title: 'Akkusativ' },

]);
const Reflexiv = ref([

	[
		{ id: 1, text: 'mir' },
		{ id: 2, text: 'dir' },
		{ id: 3, marker: 'M', text: 'sich' },
		{ id: 4, marker: 'F', text: 'sich' },
		{ id: 5, marker: 'N', text: 'sich' },
		{ id: 6, marker: 'P', text: 'uns' },
		{ id: 7, marker: 'P', text: 'euch' },
		{ id: 8, marker: 'P', text: 'sich' },
		{ id: 9, marker: 'P', text: 'sich' },
	],
	[
		{ id: 1, text: 'mich' },
		{ id: 2, text: 'dich' },
		{ id: 3, marker: 'M', text: 'sich' },
		{ id: 4, marker: 'F', text: 'sich' },
		{ id: 5, marker: 'N', text: 'sich' },
		{ id: 6, marker: 'P', text: 'uns' },
		{ id: 7, marker: 'P', text: 'euch' },
		{ id: 8, marker: 'P', text: 'sich' },
		{ id: 9, marker: 'P', text: 'sich' },
	]
]
)
</script>

<style lang="scss" ></style>