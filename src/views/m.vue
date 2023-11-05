<template lang="pug">
.container
	.page-title 
		h2 Modalverben
	Content(:items='Modal' :headers='Headers')
</template>


<script setup>
import { ref } from 'vue';
import Content from '@/components/Content.vue'
const Headers = ref([
	{ title: 'müssen Präsens' },
	{ title: 'können Präsens' },
	{ title: 'dürfen Präsens' },
	{ title: 'sollen Präsens' },
	{ title: 'wollen Präsens' },
	{ title: 'mögen Präsens' },
	{ title: 'möchten Präsens' },
	{ title: 'müssen Präteritum' },
	{ title: 'können Präteritum' },
	{ title: 'dürfen Präteritum' },
	{ title: 'sollen Präteritum' },
	{ title: 'wollen Präteritum' },
	{ title: 'mögen Präteritum' },
	{ title: 'möchten Präteritum' },
	{ title: 'müssen Perfekt' },
	{ title: 'können Perfekt' },
	{ title: 'dürfen Perfekt' },
	{ title: 'sollen Perfekt' },
	{ title: 'wollen Perfekt' },
	{ title: 'mögen Perfekt' },
	{ title: 'möchten Perfekt' },
])
const Modal = ref([
	[
		{ id: 1, text: 'ich muss' },
		{ id: 2, text: 'du musst' },
		{ id: 3, marker: 'M', text: 'er muss' },
		{ id: 4, marker: 'F', text: 'sie muss' },
		{ id: 5, marker: 'N', text: 'es muss' },
		{ id: 6, marker: 'P', text: 'wir müssen' },
		{ id: 6, marker: 'P', text: 'ihr müsst' },
		{ id: 7, marker: 'P', text: 'sie müssen' },
		{ id: 8, marker: 'P', text: 'Sie müssen' },
	],
	[
		{ id: 1, text: 'ich kann' },
		{ id: 2, text: 'du kannst' },
		{ id: 3, marker: 'M', text: 'er kann' },
		{ id: 4, marker: 'F', text: 'sie kann' },
		{ id: 5, marker: 'N', text: 'es kann' },
		{ id: 6, marker: 'P', text: 'wir können' },
		{ id: 7, marker: 'P', text: 'ihr könnt' },
		{ id: 8, marker: 'P', text: 'sie können' },
		{ id: 9, marker: 'P', text: 'Sie können' },
	],
	[
		{ id: 1, text: 'ich darf' },
		{ id: 2, text: 'du darfst' },
		{ id: 3, marker: 'M', text: 'er darf' },
		{ id: 4, marker: 'F', text: 'sie darf' },
		{ id: 5, marker: 'N', text: 'es darf' },
		{ id: 6, marker: 'P', text: 'wir dürfen' },
		{ id: 7, marker: 'P', text: 'ihr dürft' },
		{ id: 8, marker: 'P', text: 'sie dürfen' },
		{ id: 9, marker: 'P', text: 'Sie dürfen' },
	],
	[
		{ id: 1, text: 'ich soll' },
		{ id: 2, text: 'du sollst' },
		{ id: 3, marker: 'M', text: 'er soll' },
		{ id: 4, marker: 'F', text: 'sie soll' },
		{ id: 5, marker: 'N', text: 'es soll' },
		{ id: 6, marker: 'P', text: 'wir sollen' },
		{ id: 7, marker: 'P', text: 'ihr sollt' },
		{ id: 8, marker: 'P', text: 'sie sollen' },
		{ id: 9, marker: 'P', text: 'Sie sollen' },
	],
	[
		{ id: 1, text: 'ich will' },
		{ id: 2, text: 'du willst' },
		{ id: 3, marker: 'M', text: 'er will' },
		{ id: 4, marker: 'F', text: 'sie will' },
		{ id: 5, marker: 'N', text: 'es will' },
		{ id: 6, marker: 'P', text: 'wir wollen' },
		{ id: 7, marker: 'P', text: 'ihr wollt' },
		{ id: 8, marker: 'P', text: 'sie wollen' },
		{ id: 9, marker: 'P', text: 'Sie wollen' },
	],
	[
		{ id: 1, text: 'ich mag' },
		{ id: 2, text: 'du magst' },
		{ id: 3, marker: 'M', text: 'er mag' },
		{ id: 4, marker: 'F', text: 'sie mag' },
		{ id: 5, marker: 'N', text: 'es mag' },
		{ id: 6, marker: 'P', text: 'wir mögen' },
		{ id: 7, marker: 'P', text: 'ihr mögt' },
		{ id: 8, marker: 'P', text: 'sie mögen' },
		{ id: 9, marker: 'P', text: 'Sie mögen' },
	],
	[
		{ id: 1, text: 'ich	möcht(e)' },
		{ id: 2, text: 'du möchtest' },
		{ id: 3, marker: 'M', text: 'er möchte' },
		{ id: 4, marker: 'F', text: 'sie möchte' },
		{ id: 5, marker: 'N', text: 'es möchte' },
		{ id: 6, marker: 'P', text: 'wir möchten' },
		{ id: 7, marker: 'P', text: 'ihr möchtet' },
		{ id: 8, marker: 'P', text: 'sie möchten' },
		{ id: 9, marker: 'P', text: 'Sie möchten' },
	],

	// ===================
	[
		{ id: 1, text: 'ich musste' },
		{ id: 2, text: 'du musstest' },
		{ id: 3, marker: 'M', text: 'er musste' },
		{ id: 4, marker: 'F', text: 'sie musste' },
		{ id: 5, marker: 'N', text: 'es musste' },
		{ id: 6, marker: 'P', text: 'wir mussten' },
		{ id: 7, marker: 'P', text: 'ihr musstet' },
		{ id: 8, marker: 'P', text: 'sie mussten' },
		{ id: 9, marker: 'P', text: 'Sie mussten' },
	],
	[
		{ id: 1, text: 'ich konnte' },
		{ id: 2, text: 'du konntest' },
		{ id: 3, marker: 'M', text: 'er konnte' },
		{ id: 4, marker: 'F', text: 'sie konnte' },
		{ id: 5, marker: 'N', text: 'es konnte' },
		{ id: 6, marker: 'P', text: 'wir konnten' },
		{ id: 6, marker: 'P', text: 'ihr konntet' },
		{ id: 7, marker: 'P', text: 'sie konnten' },
		{ id: 8, marker: 'P', text: 'Sie konnten' },
	],
	[
		{ id: 1, text: 'ich durfte' },
		{ id: 2, text: 'du durftest' },
		{ id: 3, marker: 'M', text: 'er durfte' },
		{ id: 4, marker: 'F', text: 'sie durfte' },
		{ id: 5, marker: 'N', text: 'es durfte' },
		{ id: 6, marker: 'P', text: 'wir durften' },
		{ id: 7, marker: 'P', text: 'ihr durftet' },
		{ id: 8, marker: 'P', text: 'sie durften' },
		{ id: 9, marker: 'P', text: 'Sie durften' },
	],
	[
		{ id: 1, text: 'ich sollte' },
		{ id: 2, text: 'du solltest' },
		{ id: 3, marker: 'M', text: 'er sollte' },
		{ id: 4, marker: 'F', text: 'sie sollte' },
		{ id: 5, marker: 'N', text: 'es sollte' },
		{ id: 6, marker: 'P', text: 'wir sollten' },
		{ id: 7, marker: 'P', text: 'ihr solltet' },
		{ id: 8, marker: 'P', text: 'sie sollten' },
		{ id: 9, marker: 'P', text: 'Sie sollten' },
	],
	[
		{ id: 1, text: 'ich wollte' },
		{ id: 2, text: 'du wolltest' },
		{ id: 3, marker: 'M', text: 'er wollte' },
		{ id: 4, marker: 'F', text: 'sie wollte' },
		{ id: 5, marker: 'N', text: 'es wollte' },
		{ id: 6, marker: 'P', text: 'wir wollten' },
		{ id: 7, marker: 'P', text: 'ihr wolltet' },
		{ id: 8, marker: 'P', text: 'sie wollten' },
		{ id: 9, marker: 'P', text: 'Sie wollten' },
	],

	[
		{ id: 1, text: 'ich	mochte' },
		{ id: 2, text: 'du mochtest' },
		{ id: 3, marker: 'M', text: 'er mochte' },
		{ id: 4, marker: 'F', text: 'sie mochte' },
		{ id: 5, marker: 'N', text: 'es mochte' },
		{ id: 6, marker: 'P', text: 'wir mochten' },
		{ id: 7, marker: 'P', text: 'ihr mochtet' },
		{ id: 8, marker: 'P', text: 'sie mochten' },
		{ id: 9, marker: 'P', text: 'Sie mochten' },
	],

	[
		{ id: 1, text: 'ich	möchtete' },
		{ id: 2, text: 'du möchtetest' },
		{ id: 3, marker: 'M', text: 'er möchtete' },
		{ id: 4, marker: 'F', text: 'sie möchtete' },
		{ id: 5, marker: 'N', text: 'es möchtete' },
		{ id: 6, marker: 'P', text: 'wir möchteten' },
		{ id: 7, marker: 'P', text: 'ihr möchtetet' },
		{ id: 8, marker: 'P', text: 'sie möchteten' },
		{ id: 9, marker: 'P', text: 'Sie möchteten' },
	],
	[
		{ id: 1, text: 'ich	habe gemusst' },

	],
	[
		{ id: 1, text: 'ich	habe gekonnt' },

	],
	[
		{ id: 1, text: 'ich	habe	gedurft' },

	],
	[
		{ id: 1, text: 'ich	habe	gesollt' },

	],
	[
		{ id: 1, text: 'ich	habe	gewollt' },

	],
	[
		{ id: 1, text: 'ich	habe	gemocht' },

	],
	[
		{ id: 1, text: 'ich	habe	gemöchtet' },

	],


]
)
</script>

<style lang="scss" ></style>