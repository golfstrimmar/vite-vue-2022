<template lang="pug">

.plaza
	.plaza__title
		h2 Plaza
		p Bitte füllen Sie die leeren Felder aus.
	.plaza__line

		span.input-sector
			input(type='text' v-model='a1' :class="[(a1 == 'Der') ? '_is-active' : '']")
		span Balkon 
		span.input-sector
			input(type='text' v-model='a2' :class="[(a2 == 'des') ? '_is-active' : '']")

		span Wohnzimmers ist groß. 
	.plaza__line
		span Wir erzählen 
		span.input-sector
			input(type='text' v-model='a3' :class="[(a3 == 'den') ? '_is-active' : '']")
		span Kindern 
		span.input-sector
			input(type='text' v-model='a4' :class="[(a4 == 'die') ? '_is-active' : '']")
		span Geschichte.
	.plaza__line
		span Aber
		span.input-sector
			input(type='text' v-model='a5' :class="[(a5 == 'der') ? '_is-active' : '']")
		span Frühling ist am allerbesten.

	.plaza__line
		span.input-sector
			input(type='text' v-model='a6' :class="[(a6 == 'Der') ? '_is-active' : '']")
		span Tourismus bringt Geld in
		span.input-sector
			input(type='text' v-model='a7' :class="[(a7 == 'die') ? '_is-active' : '']")
		span  Stadt

	.plaza__line
		span.input-sector
			input(type='text' v-model='a8' :class="[(a8 == 'Der') ? '_is-active' : '']")
		span Fahrer hat Probleme, in
		span.input-sector
			input(type='text' v-model='a9' :class="[(a9 == 'den') ? '_is-active' : '']")
		span  Parkbereich zu gelangen.


	.plaza__line
		span Ben war
		span.input-sector
			input(type='text' v-model='a10' :class="[(a10 == 'der') ? '_is-active' : '']")
		span beste investigative Journalist von allen.

	.plaza__line
		span Es ist
		span.input-sector
			input(type='text' v-model='a11' :class="[(a11 == 'der') ? '_is-active' : '']")
		span Bereich meines Lebens, wo ich mich als Teil
		span.input-sector
			input(type='text' v-model='a12' :class="[(a12 == 'der') ? '_is-active' : '']")
		span Menge fühle.

	.plaza__line
		span.input-sector
			input(type='text' v-model='a13' :class="[(a13 == 'Der') ? '_is-active' : '']")
		span Neuling bleibt mit
		span.input-sector
			input(type='text' v-model='a14' :class="[(a14 == 'dem') ? '_is-active' : '']")
		span Mädchen draußen.

	.plaza__line
		span.input-sector
			input(type='text' v-model='a15' :class="[(a15 == 'Der') ? '_is-active' : '']")
		span Körper beginnt zu verwesen und füllt sich mit Gas.


	.plaza__line

		span Das ist
		span.input-sector
			input(type='text' v-model='a17' :class="[(a17 == 'der') ? '_is-active' : '']")
		span Polizist, nach 
		span.input-sector
			input(type='text' v-model='a18' :class="[(a18 == 'dem') ? '_is-active' : '']") 
		span wir suchen.

	.plaza__line
		span Und
		span.input-sector
			input(type='text' v-model='a19' :class="[(a19 == 'die') ? '_is-active' : '']")
		span Farbe
		span.input-sector
			input(type='text' v-model='a20' :class="[(a20 == 'des') ? '_is-active' : '']")
		span Teppichs passt zu
		span.input-sector
			input(type='text' v-model='a21' :class="[(a21 == 'den') ? '_is-active' : '']") 
		span Fasern,
		span.input-sector
			input(type='text' v-model='a22' :class="[(a22 == 'die') ? '_is-active' : '']")
		span wir fanden.


	.plaza__line
		span.input-sector
			input(type='text' v-model='a23' :class="[(a23 == 'Der') ? '_is-active' : '']")
		span Techniker,
		span.input-sector
			input(type='text' v-model='a24' :class="[(a24 == 'der') ? '_is-active' : '']")
		span.input-sector
			input(type='text' v-model='a25' :class="[(a25 == 'die') ? '_is-active' : '']")
		span Analyse machte, wurde tot aufgefunden.


	.plaza__line
		span Ich habe lediglich
		span.input-sector
			input(type='text' v-model='a26' :class="[(a26 == 'den') ? '_is-active' : '']")
		span Lichtschalter und
		span.input-sector
			input(type='text' v-model='a27' :class="[(a27 == 'die') ? '_is-active' : '']")
		span Abdeckung
		span.input-sector
			input(type='text' v-model='a28' :class="[(a28 == 'des') ? '_is-active' : '']") 
		span Luftkanals angefasst.


	.plaza__line
		span Was wäre
		span.input-sector
			input(type='text' v-model='a29' :class="[(a29 == 'das') ? '_is-active' : '']")
		span Leben ohne
		span.input-sector
			input(type='text' v-model='a30' :class="[(a30 == 'die') ? '_is-active' : '']")
		span Möglichkeit dumme Entscheidungen zu treffen?


	.plaza__line
		span.input-sector
			input(type='text' v-model='a31' :class="[(a31 == 'Die') ? '_is-active' : '']")
		span Einheit wird aktiviert werden.

	.plaza__line
		span Er hat Briefe an
		span.input-sector
			input(type='text' v-model='a32' :class="[(a32 == 'die') ? '_is-active' : '']")
		span Verbeamtungs-Kommission geschrieben.


	.plaza__line
		span Was meint
		span.input-sector
			input(type='text' v-model='a33' :class="[(a33 == 'die') ? '_is-active' : '']")
		span Dichterin mit "wir gewöhnen uns"?


	.plaza__line
		span Um
		span.input-sector
			input(type='text' v-model='a34' :class="[(a34 == 'die') ? '_is-active' : '']")
		span Qualität machen wir uns später Gedanken.



	.plaza__line
		span Ich spiele nicht in
		span.input-sector
			input(type='text' v-model='a35' :class="[(a35 == 'der') ? '_is-active' : '']")
		span Mannschaft ihres Sohnes.


	.plaza__line
		span Sie sehen heute noch schlechter aus als bei
		span.input-sector
			input(type='text' v-model='a36' :class="[(a36 == 'der') ? '_is-active' : '']")
		span Konferenz.


	.plaza__line
		span Da Vinci hat Gräber geplündert, um
		span.input-sector
			input(type='text' v-model='a37' :class="[(a37 == 'die') ? '_is-active' : '']")
		span Anatomie zu studieren.


	.plaza__line
		span Ist da Zitrone auf
		span.input-sector
			input(type='text' v-model='a38' :class="[(a38 == 'dem') ? '_is-active' : '']")
		span Hähnchen?

	.plaza__line
		span In
		span.input-sector
			input(type='text' v-model='a39' :class="[(a39 == 'dem') ? '_is-active' : '']")
		span Büchlein steht
		span.input-sector
			input(type='text' v-model='a40' :class="[(a40 == 'der') ? '_is-active' : '']")
		span Name
		span.input-sector
			input(type='text' v-model='a41' :class="[(a41 == 'des') ? '_is-active' : '']")
		span Kunden,
		span.input-sector
			input(type='text' v-model='a42' :class="[(a42 == 'den') ? '_is-active' : '']")
		span er eingestellt hat.

	.plaza__line
		span Ich brauch
		span.input-sector
			input(type='text' v-model='a43' :class="[(a43 == 'das') ? '_is-active' : '']")
		span Apartment.



	.plaza__line
		span Es trägt
		span.input-sector
			input(type='text' v-model='a44' :class="[(a44 == 'das') ? '_is-active' : '']")
		span Datum
		span.input-sector
			input(type='text' v-model='a45' :class="[(a45 == 'des') ? '_is-active' : '']")
		span 5. November.

	.plaza__line
		span Wie war
		span.input-sector
			input(type='text' v-model='a46' :class="[(a46 == 'das') ? '_is-active' : '']")
		span Ergebnis?


	//- button(type="button" @click='Button($event)').btn.btn-success.but-wave Überprüfen
</template>

<script setup>
import { ref, onMounted } from 'vue';
var a1 = ref('');
var a2 = ref('');
var a3 = ref('');
var a4 = ref('');
var a5 = ref('');
var a6 = ref('');
var a7 = ref('');
var a8 = ref('');
var a9 = ref('');
var a10 = ref('');
var a11 = ref('');
var a12 = ref('');
var a13 = ref('');
var a14 = ref('');
var a15 = ref('');
var a16 = ref('');
var a17 = ref('');
var a18 = ref('');
var a19 = ref('');
var a20 = ref('');
var a21 = ref('');
var a22 = ref('');
var a23 = ref('');
var a24 = ref('');
var a25 = ref('');
var a26 = ref('');
var a27 = ref('');
var a28 = ref('');
var a29 = ref('');
var a30 = ref('');
var a31 = ref('');
var a32 = ref('');
var a33 = ref('');
var a34 = ref('');
var a35 = ref('');
var a36 = ref('');
var a37 = ref('');
var a38 = ref('');
var a39 = ref('');
var a40 = ref('');
var a41 = ref('');
var a42 = ref('');
var a43 = ref('');
var a44 = ref('');
var a45 = ref('');
var a46 = ref('');


const Button = (event) => {
	let target = event.target.closest(".but-wave");
	let mValue = Math.max(target.clientWidth, target.clientHeight),
		addDiv = document.createElement("div"),
		rect = target.getBoundingClientRect();
	addDiv.classList.add("addDiv");
	addDiv.style.width = addDiv.style.height = mValue + "px";
	addDiv.style.left = event.clientX - rect.left - mValue / 2 + "px";
	addDiv.style.top = event.clientY - rect.top - mValue / 2 + "px";

	target.closest(".but-wave").append(addDiv);
	setTimeout(() => {
		addDiv.remove();
	}, 3000);
}


</script>

<style lang="scss" scoped>
.plaza {
	&__title {
		margin: 30px 0 30px 0;
	}

	&__line {
		margin: 5px 0 10px 0;

		span {
			line-height: 1.3;
		}
	}

	button {
		padding: 5px 10px;
		margin: 30px 0 0 0;
	}

	.input-sector {
		position: relative;
		margin: 0 5px 0 5px;

		img {
			position: absolute;
			top: -50px;
			left: 50%;
			transform: translateX(-50%);
			// display: none;

			&._is-active {
				display: inline-block;
			}
		}



		input {
			display: inline-block;
			max-width: 60px;

			border-radius: 5px;
			color: transparent;

			&:focus {
				background: $deep-orange-1 !important;
				color: $deep-orange-13;
			}


			&._is-active {
				background: $green-2 !important;
				box-shadow: inset 0 0 5px rgba(252, 253, 253, 0.884) !important;
				color: $green-8;
			}
		}
	}


}
</style>
