<template lang="pug">
.container
	.page-title 
		h2 Personalpronomen
	Content(:items='Personal')
</template>


<script setup>
import { ref } from 'vue';
import Content from '@/components/Content.vue'
const Personal = ref([
	[
		{ id: 1, text: 'ich' },
		{ id: 2, text: 'du' },
		{ id: 3, text: 'er' },
		{ id: 4, text: 'sie' },
		{ id: 5, text: 'es' },
		{ id: 6, text: 'wir' },
		{ id: 6, text: 'ihr' },
		{ id: 7, text: 'sie' },
		{ id: 8, text: 'Sie' },
	],
	[
		{ id: 1, text: 'mir' },
		{ id: 2, text: 'dir' },
		{ id: 3, text: 'ihm' },
		{ id: 4, text: 'ihr' },
		{ id: 5, text: 'ihm' },
		{ id: 6, text: 'uns' },
		{ id: 7, text: 'euch' },
		{ id: 8, text: 'ihnen' },
		{ id: 9, text: 'Ihnen' },
	],
	[
		{ id: 1, text: 'mich' },
		{ id: 2, text: 'dich' },
		{ id: 3, text: 'ihn' },
		{ id: 4, text: 'sie' },
		{ id: 5, text: 'es' },
		{ id: 6, text: 'uns' },
		{ id: 7, text: 'euch' },
		{ id: 8, text: 'sie' },
		{ id: 9, text: 'Sie' },
	],
	[
		{ id: 1, text: 'meiner' },
		{ id: 2, text: 'deiner' },
		{ id: 3, text: 'seiner' },
		{ id: 4, text: 'ihrer' },
		{ id: 5, text: 'seiner' },
		{ id: 6, text: 'unser' },
		{ id: 7, text: 'eurer' },
		{ id: 8, text: 'ihrer' },
		{ id: 9, text: 'Ihrer' },
	]
]
)
</script>

<style lang="scss" ></style>