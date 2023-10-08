<template lang="pug">
.container
	.page-title 
		h2 Interrogativpronomen
	Content(:items='Interrogativ')
</template>


<script setup>
import { ref } from 'vue';
import Content from '@/components/Content.vue'
const Interrogativ = ref([
	[
		{ id: 1, text: 'Wer' },
		{ id: 2, text: 'Was' },
		{ id: 3, marker: 'M', text: 'Welcher' },
		{ id: 4, marker: 'M', text: 'Was für ein(er)' },
		{ id: 5, marker: 'F', text: 'Welche' },
		{ id: 6, marker: 'F', text: 'Was für eine' },
		{ id: 6, marker: 'N', text: 'Welches' },
		{ id: 7, marker: 'N', text: 'Was für ein' },
		{ id: 8, marker: 'P', text: 'Welche' },
		{ id: 9, marker: 'P', text: 'Was für Bücher' },
	],
	[
		{ id: 1, text: 'Wem' },
		{ id: 2, marker: 'M', text: 'Welchem' },
		{ id: 3, marker: 'M', text: 'Was für einem' },
		{ id: 4, marker: 'F', text: 'Welcher' },
		{ id: 5, marker: 'F', text: 'Was für einer' },
		{ id: 6, marker: 'N', text: 'Welchem' },
		{ id: 7, marker: 'N', text: 'Was für einem' },
		{ id: 8, marker: 'P', text: 'Welchen' },
		{ id: 9, marker: 'P', text: 'Was für welchen' },
	],
	[
		{ id: 1, text: 'Wen' },
		{ id: 2, text: 'Was' },
		{ id: 3, marker: 'M', text: 'Welchen' },
		{ id: 4, marker: 'M', text: 'Was für einen' },
		{ id: 5, marker: 'F', text: 'Welche' },
		{ id: 6, marker: 'F', text: 'Was für eine' },
		{ id: 7, marker: 'N', text: 'Welches' },
		{ id: 8, marker: 'N', text: 'Was für ein(e)s' },
		{ id: 9, marker: 'P', text: 'Welche' },
		{ id: 10, marker: 'P', text: 'Was für welche' },
	],
	[
		{ id: 1, text: 'Wessen' },
		{ id: 2, marker: 'M', text: 'Welches' },
		{ id: 3, marker: 'M', text: 'Was für eines' },
		{ id: 4, marker: 'F', text: 'Welcher' },
		{ id: 5, marker: 'F', text: 'Was für einer' },
		{ id: 6, marker: 'N', text: 'Welches' },
		{ id: 7, marker: 'N', text: 'Was für eines' },
		{ id: 8, marker: 'P', text: 'Welcher' },
		{ id: 9, marker: 'P', text: 'Was für welcher' },
	]
]
)
</script>

<style lang="scss" ></style>