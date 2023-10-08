<template lang="pug">
.container
	.page-title 
		h2 Personalpronomen
	Content(:items='Personal' :headers='Headers')
</template>


<script setup>
import { ref } from 'vue';
import Content from '@/components/Content.vue';
const Headers = ref([
	{ title: 'Nominativ' },
	{ title: 'Dativ' },
	{ title: 'Akkusativ' },
	{ title: 'Genitiv' },

]);
const Personal = ref([
	[
		{ id: 1, text: 'ich' },
		{ id: 2, text: 'du' },
		{ id: 3, marker: 'M', text: 'er' },
		{ id: 4, marker: 'F', text: 'sie' },
		{ id: 5, marker: 'N', text: 'es' },
		{ id: 6, marker: 'P', text: 'wir' },
		{ id: 6, marker: 'P', text: 'ihr' },
		{ id: 7, text: 'sie' },
		{ id: 8, marker: 'P', text: 'Sie' },
	],
	[
		{ id: 1, text: 'mir' },
		{ id: 2, text: 'dir' },
		{ id: 3, marker: 'M', text: 'ihm' },
		{ id: 4, marker: 'F', text: 'ihr' },
		{ id: 5, marker: 'N', text: 'ihm' },
		{ id: 6, marker: 'P', text: 'uns' },
		{ id: 7, marker: 'P', text: 'euch' },
		{ id: 8, text: 'ihnen' },
		{ id: 9, marker: 'P', text: 'Ihnen' },
	],
	[
		{ id: 1, text: 'mich' },
		{ id: 2, text: 'dich' },
		{ id: 3, marker: 'M', text: 'ihn' },
		{ id: 4, marker: 'F', text: 'sie' },
		{ id: 5, marker: 'N', text: 'es' },
		{ id: 6, marker: 'P', text: 'uns' },
		{ id: 7, marker: 'P', text: 'euch' },
		{ id: 8, text: 'sie' },
		{ id: 9, marker: 'P', text: 'Sie' },
	],
	[
		{ id: 1, text: 'meiner' },
		{ id: 2, text: 'deiner' },
		{ id: 3, marker: 'M', text: 'seiner' },
		{ id: 4, marker: 'F', text: 'ihrer' },
		{ id: 5, marker: 'N', text: 'seiner' },
		{ id: 6, marker: 'P', text: 'unser' },
		{ id: 7, marker: 'P', text: 'eurer' },
		{ id: 8, text: 'ihrer' },
		{ id: 9, marker: 'P', text: 'Ihrer' },
	]
]
)
</script>

<style lang="scss" ></style>