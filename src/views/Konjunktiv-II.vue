<template lang="pug">
.container
	.page-title 
		h2 Konjunktiv II
	.page-block
		.page-title--small 
			h3 würden     +      Infinitiv  
			p In den meisten Fällen wird das Hilfsverb " werden " benutzt, um den Konjunktiv II zu bilden.
			p " Werden " muss aber verändert werden, damit es den Konjunktiv II anzeigt.
			p Die Form des Konjunktiv II wird vom Präteritum abgeleitet: werden = " wurden ".
			p Die Präteritumsform "wurden" erhält einen Umlaut " würden ".
		Content(:items='würdeformen' :headers='würde')
	.page-block
		.page-title--small 
			h3 Die Bildung des Konjunktivs II mit den Verbformen. 
			h3 Präteritumform + Umlaut 
			p Zu den wenigen Verben, die <span>IMMER</span> den Konjunktiv II in der Originalform verwenden, gehören:
		Content(:items='Verbformen' :headers='Verbformentitle')
	.page-block
		.page-title--small 
			h3 die Modalverben +      Infinitiv  
			h3 Präteritumform + Umlaut  +      Infinitiv  
		Content(:items='Modalverben' :headers='Modalverbentitle')
	.page-block
		.page-title--small 
			h3 Konjunktiv II der Vergangenheit. 
			h3 wären / hätten     +      Partizip II  
		Content(:items='Vergangenheit' :headers='Vergangenheittitle')
	.page-block
		.page-title--small 
			h3 Konjunktiv II der Vergangenheit mit Modalverben. 
			h3 hätten + Infinitiv + Modalverb im Infinitiv     
		Content(:items='VergangenheitModalverben' :headers='VergangenheitModalverbentitle')
	.page-block
		.page-title--small 
			h3 Konjunktiv II der Gegenwart plus Passiv. 
			h3 würden     +      Partizip II     +     werden  
		Content(:items='Gegenwart' :headers='Gegenwarttitle')
	.page-block
		.page-title--small 
			h3 Konjunktiv II der Vergangenheit plus Passiv. 
			h3 wären     +      Partizip II     +     worden    
		Content(:items='VergangenheitPassiv' :headers='VergangenheitPassivtitle')

</template>


<script setup>
import { ref } from 'vue';
import Content from '@/components/Content.vue';

const VergangenheitPassivtitle = ref([
	{ title: 'wären     +      Partizip II     +     worden    ' },
])
const VergangenheitPassiv = ref([
	[
		{ id: 1, text: 'ich wäre + Partizip II + worden' },
		{ id: 2, text: 'du 	wärest + Partizip II + worden' },
		{ id: 3, marker: 'M', text: 'er wäre + Partizip II + worden' },
		{ id: 4, marker: 'F', text: 'sie 	wäre + Partizip II + worden ' },
		{ id: 5, marker: 'N', text: 'es 	wäre + Partizip II + worden' },
		{ id: 6, marker: 'P', text: 'wir 	wären + Partizip II + worden' },
		{ id: 6, marker: 'P', text: 'ihr 	wäret + Partizip II + worden' },
		{ id: 7, marker: 'P', text: 'sie 	wären + Partizip II + worden' },
		{ id: 8, marker: 'P', text: 'Sie 	wären + Partizip II + worden' },
	],


])
const Gegenwarttitle = ref([
	{ title: 'würden     +      Partizip II     +     werden' },
])
const Gegenwart = ref([
	[
		{ id: 1, text: 'ich würde + Partizip II + werden' },
		{ id: 2, text: 'du würdest + Partizip II + werden' },
		{ id: 3, marker: 'M', text: 'er würde + Partizip II + werden' },
		{ id: 4, marker: 'F', text: 'sie würde + Partizip II + werden ' },
		{ id: 5, marker: 'N', text: 'es würde + Partizip II + werden' },
		{ id: 6, marker: 'P', text: 'wir würden + Partizip II + werden' },
		{ id: 6, marker: 'P', text: 'ihr würdet + Partizip II + werden' },
		{ id: 7, marker: 'P', text: 'sie würden + Partizip II + werden' },
		{ id: 8, marker: 'P', text: 'Sie würden + Partizip II + werden' },
	],


])
const VergangenheitModalverbentitle = ref([
	{ title: 'müssen' },
	{ title: 'dürfen' },
])
const VergangenheitModalverben = ref([
	[
		{ id: 1, text: 'ich hätte + Infinitiv + müssen' },
		{ id: 2, text: 'du hättest + Infinitiv + müssen' },
		{ id: 3, marker: 'M', text: 'er hätte + Infinitiv + müssen' },
		{ id: 4, marker: 'F', text: 'sie hätte + Infinitiv + müssen ' },
		{ id: 5, marker: 'N', text: 'es hätte + Infinitiv + müssen' },
		{ id: 6, marker: 'P', text: 'wir hätten + Infinitiv + müssen' },
		{ id: 6, marker: 'P', text: 'ihr hättet + Infinitiv + müssen' },
		{ id: 7, marker: 'P', text: 'sie hätten + Infinitiv + müssen' },
		{ id: 8, marker: 'P', text: 'Sie hätten + Infinitiv + müssen' },
	],

	[
		{ id: 1, text: 'ich hätte + Infinitiv + dürfen' },
		{ id: 2, text: 'du hättest + Infinitiv + dürfen' },
		{ id: 3, marker: 'M', text: 'er hätte + Infinitiv + dürfen' },
		{ id: 4, marker: 'F', text: 'sie hätte + Infinitiv + dürfen ' },
		{ id: 5, marker: 'N', text: 'es hätte + Infinitiv + dürfen' },
		{ id: 6, marker: 'P', text: 'wir hätten + Infinitiv + dürfen' },
		{ id: 6, marker: 'P', text: 'ihr hättet + Infinitiv + dürfen' },
		{ id: 7, marker: 'P', text: 'sie hätten + Infinitiv + dürfen' },
		{ id: 8, marker: 'P', text: 'Sie hätten + Infinitiv + dürfen' },
	],


])
const Vergangenheittitle = ref([
	{ title: 'wäre' },
	{ title: 'hätte' },
])
const Vergangenheit = ref([
	[
		{ id: 1, text: 'ich wäre + Partizip II  ' },
		{ id: 2, text: 'du wärest + Partizip II' },
		{ id: 3, marker: 'M', text: 'er wäre + Partizip II' },
		{ id: 4, marker: 'F', text: 'sie wäre + Partizip II' },
		{ id: 5, marker: 'N', text: 'es wäre + Partizip II' },
		{ id: 6, marker: 'P', text: 'wir wären + Partizip II' },
		{ id: 6, marker: 'P', text: 'ihr wäret + Partizip II' },
		{ id: 7, marker: 'P', text: 'sie wären + Partizip II' },
		{ id: 8, marker: 'P', text: 'Sie wären + Partizip II' },
	],
	[
		{ id: 1, text: 'ich hätte + Partizip II  ' },
		{ id: 2, text: 'du hättest + Partizip II  ' },
		{ id: 3, marker: 'M', text: 'er hätte + Partizip II  ' },
		{ id: 4, marker: 'F', text: 'sie hätte + Partizip II  ' },
		{ id: 5, marker: 'N', text: 'es hätte + Partizip II  ' },
		{ id: 6, marker: 'P', text: 'wir hätten + Partizip II  ' },
		{ id: 6, marker: 'P', text: 'ihr hättet + Partizip II ' },
		{ id: 7, marker: 'P', text: 'sie hätten + Partizip II  ' },
		{ id: 8, marker: 'P', text: 'Sie hätten + Partizip II  ' },
	]

])

const Modalverbentitle = ref([
	{ title: 'dürfen' },
	{ title: 'können' },
	{ title: 'mögen' },
	{ title: 'müssen' },
	{ title: 'sollen' },
	{ title: 'wollen' },
])

const Modalverben = ref([
	[
		{ id: 1, text: 'ich dürfte  +      Infinitiv  ' },
		{ id: 2, text: 'du dürftest  +      Infinitiv  ' },
		{ id: 3, marker: 'M', text: 'er dürfte  +      Infinitiv  ' },
		{ id: 4, marker: 'F', text: 'sie dürfte  +      Infinitiv  ' },
		{ id: 5, marker: 'N', text: 'es dürfte  +      Infinitiv  ' },
		{ id: 6, marker: 'P', text: 'wir dürften  +      Infinitiv  ' },
		{ id: 6, marker: 'P', text: 'ihr dürftet  +      Infinitiv  ' },
		{ id: 7, marker: 'P', text: 'sie dürften  +      Infinitiv  ' },
		{ id: 8, marker: 'P', text: 'Sie dürften  +      Infinitiv  ' },
	],
	[
		{ id: 1, text: 'ich könnte  +      Infinitiv  ' },
		{ id: 2, text: 'du könntest  +      Infinitiv  ' },
		{ id: 3, marker: 'M', text: 'er könnte  +      Infinitiv  ' },
		{ id: 4, marker: 'F', text: 'sie könnte  +      Infinitiv  ' },
		{ id: 5, marker: 'N', text: 'es könnte  +      Infinitiv  ' },
		{ id: 6, marker: 'P', text: 'wir könnten  +      Infinitiv  ' },
		{ id: 6, marker: 'P', text: 'ihr könntet  +      Infinitiv  ' },
		{ id: 7, marker: 'P', text: 'sie könnten  +      Infinitiv  ' },
		{ id: 8, marker: 'P', text: 'Sie könnten  +      Infinitiv  ' },
	],
	[
		{ id: 1, text: 'ich möchte  +      Infinitiv  ' },
		{ id: 2, text: 'du möchtest  +      Infinitiv  ' },
		{ id: 3, marker: 'M', text: 'er möchte  +      Infinitiv  ' },
		{ id: 4, marker: 'F', text: 'sie möchte  +      Infinitiv  ' },
		{ id: 5, marker: 'N', text: 'es möchte  +      Infinitiv  ' },
		{ id: 6, marker: 'P', text: 'wir möchten  +      Infinitiv  ' },
		{ id: 6, marker: 'P', text: 'ihr möchtet  +      Infinitiv  ' },
		{ id: 7, marker: 'P', text: 'sie möchten  +      Infinitiv  ' },
		{ id: 8, marker: 'P', text: 'Sie möchten  +      Infinitiv  ' },
	],
	[
		{ id: 1, text: 'ich müsste  +      Infinitiv  ' },
		{ id: 2, text: 'du müsstest  +      Infinitiv  ' },
		{ id: 3, marker: 'M', text: 'er müsste  +      Infinitiv  ' },
		{ id: 4, marker: 'F', text: 'sie müsste  +      Infinitiv  ' },
		{ id: 5, marker: 'N', text: 'es müsste  +      Infinitiv  ' },
		{ id: 6, marker: 'P', text: 'wir müssten  +      Infinitiv  ' },
		{ id: 6, marker: 'P', text: 'ihr müsstet  +      Infinitiv  ' },
		{ id: 7, marker: 'P', text: 'sie müssten  +      Infinitiv  ' },
		{ id: 8, marker: 'P', text: 'Sie müssten  +      Infinitiv  ' },
	],
	[
		{ id: 1, text: 'ich sollte  +      Infinitiv  ' },
		{ id: 2, text: 'du solltest  +      Infinitiv  ' },
		{ id: 3, marker: 'M', text: 'er sollte +      Infinitiv  ' },
		{ id: 4, marker: 'F', text: 'sie sollte   +      Infinitiv  ' },
		{ id: 5, marker: 'N', text: 'es sollte  +      Infinitiv  ' },
		{ id: 6, marker: 'P', text: 'wir sollten  +      Infinitiv  ' },
		{ id: 6, marker: 'P', text: 'ihr solltet  +      Infinitiv  ' },
		{ id: 7, marker: 'P', text: 'sie sollten  +      Infinitiv  ' },
		{ id: 8, marker: 'P', text: 'Sie sollten +      Infinitiv  ' },
	],
	[
		{ id: 1, text: 'ich wollte +      Infinitiv  ' },
		{ id: 2, text: 'du wolltest  +      Infinitiv  ' },
		{ id: 3, marker: 'M', text: 'er wollte +      Infinitiv  ' },
		{ id: 4, marker: 'F', text: 'sie wollte +      Infinitiv  ' },
		{ id: 5, marker: 'N', text: 'es wollte +      Infinitiv  ' },
		{ id: 6, marker: 'P', text: 'wir wollten +      Infinitiv  ' },
		{ id: 6, marker: 'P', text: 'ihr wolltet  +      Infinitiv  ' },
		{ id: 7, marker: 'P', text: 'sie wollten  +      Infinitiv  ' },
		{ id: 8, marker: 'P', text: 'Sie wollten  +      Infinitiv  ' },
	],

])
const würde = ref([
	{ title: 'Die Bildung des Konjunktivs II mit würde + Infinitiv' },
])

const würdeformen = ref([
	[
		{ id: 1, text: 'ich würde + Infinitiv' },
		{ id: 2, text: 'du würdest + Infinitiv' },
		{ id: 3, marker: 'M', text: 'er würde + Infinitiv' },
		{ id: 4, marker: 'F', text: 'sie würde + Infinitiv' },
		{ id: 5, marker: 'N', text: 'es würde + Infinitiv' },
		{ id: 6, marker: 'P', text: 'wir würden + Infinitiv' },
		{ id: 6, marker: 'P', text: 'ihr würdet + Infinitiv' },
		{ id: 7, marker: 'P', text: 'sie würden + Infinitiv' },
		{ id: 8, marker: 'P', text: 'Sie würden + Infinitiv' },
	],

])

const Verbformentitle = ref([
	{ title: 'sein' },
	{ title: 'haben' },
	{ title: 'werden' },
	{ title: 'finden' },
	{ title: 'gehen' },
	{ title: 'kommen' },
	{ title: 'lassen' },
	{ title: 'schlafen' },
	{ title: 'wissen' },
	{ title: 'dürfen' },
	{ title: 'können' },
	{ title: 'mögen' },
	{ title: 'müssen' },
	{ title: 'sollen' },
	{ title: 'wollen' },

])




const Verbformen = ref([

	[
		{ id: 1, text: 'ich wäre' },
		{ id: 2, text: 'du wärest' },
		{ id: 3, marker: 'M', text: 'er wäre' },
		{ id: 4, marker: 'F', text: 'sie wäre' },
		{ id: 5, marker: 'N', text: 'es wäre' },
		{ id: 6, marker: 'P', text: 'wir wären' },
		{ id: 7, marker: 'P', text: 'ihr wäret' },
		{ id: 8, marker: 'P', text: 'sie wären' },
		{ id: 9, marker: 'P', text: 'Sie wären' },
	],
	[
		{ id: 1, text: 'ich hätte' },
		{ id: 2, text: 'du hättest' },
		{ id: 3, marker: 'M', text: 'er hätte' },
		{ id: 4, marker: 'F', text: 'sie hätte' },
		{ id: 5, marker: 'N', text: 'es hätte' },
		{ id: 6, marker: 'P', text: 'wir hätten' },
		{ id: 7, marker: 'P', text: 'ihr hättet' },
		{ id: 8, marker: 'P', text: 'sie hätten' },
		{ id: 9, marker: 'P', text: 'Sie hätten' },
	],
	[
		{ id: 1, text: 'ich würde' },
		{ id: 2, text: 'du würdest' },
		{ id: 3, marker: 'M', text: 'er würde' },
		{ id: 4, marker: 'F', text: 'sie würde' },
		{ id: 5, marker: 'N', text: 'es würde' },
		{ id: 6, marker: 'P', text: 'wir würden' },
		{ id: 7, marker: 'P', text: 'ihr würdet' },
		{ id: 8, marker: 'P', text: 'sie würden' },
		{ id: 9, marker: 'P', text: 'Sie würden' },
	],
	[
		{ id: 1, text: 'ich fände' },
		{ id: 2, text: 'du fändest' },
		{ id: 3, marker: 'M', text: 'er fände' },
		{ id: 4, marker: 'F', text: 'sie fände' },
		{ id: 5, marker: 'N', text: 'es fände' },
		{ id: 6, marker: 'P', text: 'wir fänden' },
		{ id: 7, marker: 'P', text: 'ihr fändet' },
		{ id: 8, marker: 'P', text: 'sie fänden' },
		{ id: 9, marker: 'P', text: 'Sie fänden' },
	],
	[
		{ id: 1, text: 'ich ginge' },
		{ id: 2, text: 'du gingest' },
		{ id: 3, marker: 'M', text: 'er ginge' },
		{ id: 4, marker: 'F', text: 'sie ginge' },
		{ id: 5, marker: 'N', text: 'es ginge' },
		{ id: 6, marker: 'P', text: 'wir gingen' },
		{ id: 7, marker: 'P', text: 'ihr ginget' },
		{ id: 8, marker: 'P', text: 'sie gingen' },
		{ id: 9, marker: 'P', text: 'Sie gingen' },
	],
	[
		{ id: 1, text: 'ich käme' },
		{ id: 2, text: 'du kämest' },
		{ id: 3, marker: 'M', text: 'er käme' },
		{ id: 4, marker: 'F', text: 'sie käme' },
		{ id: 5, marker: 'N', text: 'es käme' },
		{ id: 6, marker: 'P', text: 'wir kämen' },
		{ id: 7, marker: 'P', text: 'ihr kämet' },
		{ id: 8, marker: 'P', text: 'sie kämen' },
		{ id: 9, marker: 'P', text: 'Sie kämen' },
	],

	[
		{ id: 1, text: 'ich ließe' },
		{ id: 2, text: 'du ließest' },
		{ id: 3, marker: 'M', text: 'er ließe' },
		{ id: 4, marker: 'F', text: 'sie ließe' },
		{ id: 5, marker: 'N', text: 'es ließe' },
		{ id: 6, marker: 'P', text: 'wir ließen' },
		{ id: 7, marker: 'P', text: 'ihr ließet' },
		{ id: 8, marker: 'P', text: 'sie ließen' },
		{ id: 9, marker: 'P', text: 'Sie ließen' },
	],
	[
		{ id: 1, text: 'ich schliefe' },
		{ id: 2, text: 'du schliefest' },
		{ id: 3, marker: 'M', text: 'er schliefe' },
		{ id: 4, marker: 'F', text: 'sie schliefe' },
		{ id: 5, marker: 'N', text: 'es schliefe' },
		{ id: 6, marker: 'P', text: 'wir schliefen' },
		{ id: 7, marker: 'P', text: 'ihr schliefet' },
		{ id: 8, marker: 'P', text: 'sie schliefen' },
		{ id: 9, marker: 'P', text: 'Sie schliefen' },
	],
	[
		{ id: 1, text: 'ich wüsste' },
		{ id: 2, text: 'du wüsstest' },
		{ id: 3, marker: 'M', text: 'er wüsste' },
		{ id: 4, marker: 'F', text: 'sie wüsste' },
		{ id: 5, marker: 'N', text: 'es wüsste' },
		{ id: 6, marker: 'P', text: 'wir wüssten' },
		{ id: 7, marker: 'P', text: 'ihr wüsstet' },
		{ id: 8, marker: 'P', text: 'sie wüssten' },
		{ id: 9, marker: 'P', text: 'Sie wüssten' },
	],


])



</script>

<style lang="scss" >
p {
	margin: 10px 0 0 0;
	color: $blue-14;

	span {
		color: $red-14;
	}
}
</style>