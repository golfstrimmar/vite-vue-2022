<template lang="pug">
.container
	.page-title 
		h2 Vorgangspassivs
	Content(:items='VorgangsPassiv' :headers='VorgangsHeaders')
	.page-title 
		h2 Zustandspassivs
	Content(:items='ZustandPassiv' :headers='ZustandHeaders')
</template>


<script setup>
import { ref } from 'vue';
import Content from '@/components/Content.vue'
const VorgangsHeaders = ref([
	{ title: 'Präsens' },
	{ title: 'Präteritum' },
	{ title: 'Perfekt' },
	{ title: 'Plusquamperfekt' },
	{ title: 'Futur' },

])
const VorgangsPassiv = ref([
	[
		{ id: 1, text: 'ich werde Pt2' },
		{ id: 2, text: 'du wirst Pt2' },
		{ id: 3, marker: 'M', text: 'er wird Pt2' },
		{ id: 4, marker: 'F', text: 'sie wird Pt2' },
		{ id: 5, marker: 'N', text: 'es wird Pt2' },
		{ id: 6, marker: 'P', text: 'wir werden Pt2' },
		{ id: 6, marker: 'P', text: 'ihr werdet Pt2' },
		{ id: 7, marker: 'P', text: 'sie werden Pt2' },
		{ id: 8, marker: 'P', text: 'Sie werden Pt2' },
	],
	[
		{ id: 1, text: 'ich wurde Pt2' },
		{ id: 2, text: 'du wurdest Pt2' },
		{ id: 3, marker: 'M', text: 'er wurde Pt2' },
		{ id: 4, marker: 'F', text: 'sie wurde Pt2' },
		{ id: 5, marker: 'N', text: 'es wurde Pt2' },
		{ id: 6, marker: 'P', text: 'wir wurden Pt2' },
		{ id: 7, marker: 'P', text: 'ihr wurdet Pt2' },
		{ id: 8, marker: 'P', text: 'sie wurden Pt2' },
		{ id: 9, marker: 'P', text: 'Sie wurden Pt2' },
	],
	[
		{ id: 1, text: 'ich bin Pt2 worden' },
		{ id: 2, text: 'du bist Pt2 worden' },
		{ id: 3, marker: 'M', text: 'er ist Pt2 worden' },
		{ id: 4, marker: 'F', text: 'sie ist Pt2 worden' },
		{ id: 5, marker: 'N', text: 'es ist Pt2 worden' },
		{ id: 6, marker: 'P', text: 'wir sind Pt2 worden' },
		{ id: 7, marker: 'P', text: 'ihr seid Pt2 worden' },
		{ id: 8, marker: 'P', text: 'sie sind Pt2 worden' },
		{ id: 9, marker: 'P', text: 'Sie sind Pt2 worden' },
	],
	[
		{ id: 1, text: 'ich war Pt2 worden' },
		{ id: 2, text: 'du warst Pt2 worden' },
		{ id: 3, marker: 'M', text: 'er war Pt2 worden' },
		{ id: 4, marker: 'F', text: 'sie war Pt2 worden' },
		{ id: 5, marker: 'N', text: 'es war Pt2 worden' },
		{ id: 6, marker: 'P', text: 'wir waren Pt2 worden' },
		{ id: 7, marker: 'P', text: 'ihr wart Pt2 worden' },
		{ id: 8, marker: 'P', text: 'sie waren Pt2 worden' },
		{ id: 9, marker: 'P', text: 'Sie waren Pt2 worden' },
	],

	[
		{ id: 1, text: 'ich werde Pt2 werden' },
		{ id: 2, text: 'du wirst Pt2 werden' },
		{ id: 3, marker: 'M', text: 'er wird Pt2 werden' },
		{ id: 4, marker: 'F', text: 'sie wird Pt2 werden' },
		{ id: 5, marker: 'N', text: 'es wird Pt2 werden' },
		{ id: 6, marker: 'P', text: 'wir werden Pt2 werden' },
		{ id: 6, marker: 'P', text: 'ihr werdet Pt2 werden' },
		{ id: 7, marker: 'P', text: 'sie werden Pt2 werden' },
		{ id: 8, marker: 'P', text: 'Sie werden Pt2 werden' },
	],

])
const ZustandHeaders = ref([
	{ title: 'Präsens' },
	{ title: 'Präteritum' },
	{ title: 'Perfekt' },
	{ title: 'Plusquamperfekt' },
	{ title: 'Futur' },

])
const ZustandPassiv = ref([
	[
		{ id: 1, text: 'ich bin Pt2' },
		{ id: 2, text: 'du bist Pt2' },
		{ id: 3, marker: 'M', text: 'er ist Pt2' },
		{ id: 4, marker: 'F', text: 'sie ist Pt2' },
		{ id: 5, marker: 'N', text: 'es ist Pt2' },
		{ id: 6, marker: 'P', text: 'wir sind Pt2' },
		{ id: 6, marker: 'P', text: 'ihr seid Pt2' },
		{ id: 7, marker: 'P', text: 'sie sind Pt2' },
		{ id: 8, marker: 'P', text: 'Sie sind Pt2' },
	],
	[
		{ id: 1, text: 'ich war Pt2' },
		{ id: 2, text: 'du warst Pt2' },
		{ id: 3, marker: 'M', text: 'er war Pt2' },
		{ id: 4, marker: 'F', text: 'sie war Pt2' },
		{ id: 5, marker: 'N', text: 'es war Pt2' },
		{ id: 6, marker: 'P', text: 'wir waren Pt2' },
		{ id: 7, marker: 'P', text: 'ihr wart Pt2' },
		{ id: 8, marker: 'P', text: 'sie waren Pt2' },
		{ id: 9, marker: 'P', text: 'Sie waren Pt2' },
	],
	[
		{ id: 1, text: 'ich bin Pt2 gewesen' },
		{ id: 2, text: 'du bist Pt2 gewesen' },
		{ id: 3, marker: 'M', text: 'er ist Pt2 gewesen' },
		{ id: 4, marker: 'F', text: 'sie ist Pt2 gewesen' },
		{ id: 5, marker: 'N', text: 'es ist Pt2 gewesen' },
		{ id: 6, marker: 'P', text: 'wir sind Pt2 gewesen' },
		{ id: 7, marker: 'P', text: 'ihr seid Pt2 gewesen' },
		{ id: 8, marker: 'P', text: 'sie sind Pt2 gewesen' },
		{ id: 9, marker: 'P', text: 'Sie sind Pt2 gewesen' },
	],
	[
		{ id: 1, text: 'ich war Pt2 gewesen' },
		{ id: 2, text: 'du warst Pt2 gewesen' },
		{ id: 3, marker: 'M', text: 'er war Pt2 gewesen' },
		{ id: 4, marker: 'F', text: 'sie war Pt2 gewesen' },
		{ id: 5, marker: 'N', text: 'es war Pt2 gewesen' },
		{ id: 6, marker: 'P', text: 'wir waren Pt2 gewesen' },
		{ id: 7, marker: 'P', text: 'ihr wart Pt2 gewesen' },
		{ id: 8, marker: 'P', text: 'sie waren Pt2 gewesen' },
		{ id: 9, marker: 'P', text: 'Sie waren Pt2 gewesen' },
	],

	[
		{ id: 1, text: 'ich werde Pt2 sein' },
		{ id: 2, text: 'du wirst Pt2 sein' },
		{ id: 3, marker: 'M', text: 'er wird Pt2 sein' },
		{ id: 4, marker: 'F', text: 'sie wird Pt2 sein' },
		{ id: 5, marker: 'N', text: 'es wird Pt2 sein' },
		{ id: 6, marker: 'P', text: 'wir werden Pt2 sein' },
		{ id: 6, marker: 'P', text: 'ihr werdet Pt2 sein' },
		{ id: 7, marker: 'P', text: 'sie werden Pt2 sein' },
		{ id: 8, marker: 'P', text: 'Sie werden Pt2 sein' },
	],

]
)
</script>

<style lang="scss" ></style>