<template lang="pug">
.container
	.page-title 
		h2 Reflexivpronomen
	Content(:items='Reflexiv')
</template>


<script setup>
import { ref } from 'vue';
import Content from '@/components/Content.vue'
const Reflexiv = ref([
	[
		{ id: 1, text: '' },
		{ id: 2, text: '' },
		{ id: 3, text: '' },
		{ id: 4, text: '' },
		{ id: 5, text: '' },
		{ id: 6, text: '' },
		{ id: 6, text: '' },
		{ id: 7, text: '' },
		{ id: 8, text: '' },
	],
	[
		{ id: 1, text: 'mir' },
		{ id: 2, text: 'dir' },
		{ id: 3, text: 'sich' },
		{ id: 4, text: 'uns' },
		{ id: 5, text: 'euch' },
		{ id: 6, text: 'sich' },
	],
	[
		{ id: 1, text: 'mich' },
		{ id: 2, text: 'dich' },
		{ id: 3, text: 'sich' },
		{ id: 4, text: 'uns' },
		{ id: 5, text: 'euch' },
		{ id: 6, text: 'sich' },
	],
	[
		{ id: 1, text: '' },
		{ id: 2, text: '' },
		{ id: 3, text: '' },
		{ id: 4, text: '' },
		{ id: 5, text: '' },
		{ id: 6, text: '' },
		{ id: 7, text: '' },
		{ id: 8, text: '' },
		{ id: 9, text: '' },
	]
]
)
</script>

<style lang="scss" ></style>