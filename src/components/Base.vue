<template lang='pug'>
.base(ref='base')
	Button( :text='item.title' @click='HandlerClick(item.id)' :disabled="isButtonDisabled" :class="[(isButtonDisabled == true  ) ? '_is-active' : '', 'activButton' ]"   svg='click'   )
	.base__hidden(:class="(isButtonDisabled == true) ? '_is-active' : '' ")
		Button(@click='HandlerClose' svg='x-circle' margin='0' class='ButtonClose')
		.tabel(v-if="TopVorPräsens.row1 && isButtonDisabled==true")
			ul
				li ich
				li du
				li er,sie,es
				li ihr
				li wir,sie,Sie 
				li
					ul
						li(v-for="i in TopVorPräsens.row1" :key="index" ) {{ i }} 
		.block__buttons(v-if="TopVorPräsens.row1 && AuthStore.isAuthenticated && isButtonDisabled==true")
			Button( text='Mischen'   @click = "handlerClick(Data)"  svg='arrow-repeat')
			Button( text='Start'  @click='start'    svg='sport')
			Button( text='Stop'   @click='stop'    svg='stopwatch')
			Button( text='Reset'   @click='reset'    )
		.tablo(v-if="TopVorPräsens.row1 && AuthStore.isAuthenticated && isButtonDisabled==true")
			span.zeit Anzahl der richtigen Antworten:  
				span {{ count }}
			span.zeit Sie haben für das Training ausgegeben:   
				span {{ formattedTime }}
		.spielPlatz(v-if="TopVorPräsens.row1 && isButtonDisabled==true")
			.block__line(v-for="el in ContVorPräsens" :key="index" v-if="ContVorPräsens") 
				.block__info 
					h4 {{el.text}}
					button.tooltip(v-if="el.x" v-tool  :data = "el.x")
						span i
					button.tooltip(v-if="el.content"  v-tool  :data = "el.content")
						span i
				div
					Input(v-if="el.x"   :Antwort='content'  :content='content' :resetInputs='resetInputs'  v-for="content in el.x.split(' ')" :key="index" @lineFertig="lineFertig" )
					Input(v-if="!el.x"   :Antwort='content'  :content='el.content' :resetInputs='resetInputs'  v-for="content in el.content" :key="index" @lineFertig="lineFertig" )
</template>
<script setup>
import { ref, computed, onMounted, watchEffect, nextTick } from 'vue';
import Input from '@/components/Input.vue';
import Button from '@/components/Button.vue';

const props = defineProps({
	item: {
		type: Object,
		required: false
	}
})

var isButtonDisabled = ref(false);
const base = ref(null)
const scrollPosition = ref(0);
// ---pinia-----
import { useAuthStore } from '@/store/authent';
const AuthStore = useAuthStore();
// ---------db-----------------
import { db } from "@/firebase/config.ts";
import { collection, query, onSnapshot, getDoc, doc, setDoc, } from "firebase/firestore";
// -----

var TopVorPräsens = ref([]);
var ContVorPräsens = ref([]);
const emit = defineEmits(['CloseAndere'])
const HandlerClick = async () => {

	try {
		const docSnap = await getDoc(doc(db, props.item.dbTopE, props.item.dbTopZ));
		if (docSnap.exists()) {
			scrollPosition.value = base.value.getBoundingClientRect().top;
			nextTick(() => {
				window.scrollTo({
					top: scrollPosition.value - 200,
					behavior: 'smooth', // 'smooth' для плавного возврата
				});
			});
			TopVorPräsens.value = docSnap.data();
			emit('CloseAndere', props.item.id)
			document.querySelector('body').classList.add("_lock");
			isButtonDisabled.value = true;
		}
	} catch (e) {
		console.error("Error getting document: ", e);
	}
	onSnapshot(query(collection(db, props.item.dbItems)), (querySnapshot) => {
		querySnapshot.forEach((doc) => {
			ContVorPräsens.value.push(doc.data());
		});
	})

};


// ==========================
var time = ref(0);        // Количество секунд
var interval = ref(null);   // Интервал для обновления времени
const formattedTime = computed(() => {
	const hours = Math.floor(time.value / 3600).toString().padStart(2, '0');
	const minutes = Math.floor((time.value % 3600) / 60).toString().padStart(2, '0');
	const seconds = (time.value % 60).toString().padStart(2, '0');
	return `${hours}h ${minutes}m ${seconds}s`;
})
const start = () => {
	if (!interval.value) {
		interval.value = setInterval(() => {
			time.value++;
		}, 1000);
	}
};


const stop = () => {
	clearInterval(interval.value);
	interval.value = null;
};

// const emit = defineEmits(['addTime'])
const capturedValue = ref(null);
var prozent = ref(0);
var resetInputs = ref(false);
// --------------------------
var count = ref(0);
var countAll = ref(0);
const lineFertig = (some) => {
	if (some.closest(".block__line").nextElementSibling) {
		some.closest(".block__line").nextElementSibling.querySelector('input').focus();
	}
	let lineItems = [...some.closest(".spielPlatz").querySelectorAll(".block__line")];
	countAll.value = lineItems.length
	count.value++
}

// --------------------------

const reset = () => {
	stop();
	capturedValue.value = formattedTime.value;
	count.value > 0 ? prozent.value = Math.round(count.value * 100 / countAll.value) : prozent.value = 0;
	AuthStore.refresh('Passiv', capturedValue.value, prozent.value)
	resetInputs.value = !resetInputs.value;
	count.value = 0;
	formattedTime.value = 0;
	time.value = 0;
	prozent.value = 0;
};
// --------------------------------
const HandlerClose = () => {
	document.querySelector('body').classList.remove("_lock");
	isButtonDisabled.value = false;
};
</script>
<style lang='scss' scoped>
button {
	padding: 5px;
	margin: 10px 0;

	&.activButton {
		min-height: 50px;
		padding: 5px 27px 5px 5px;
	}
}


.tablo {
	margin: 0 0 10px 0;
	display: flex;
	flex-direction: column;

	span.zeit {
		font-family: 'HouschkaPro-DemiBold', sans-serif;
		color: #fff;

		span {
			font-size: larger;
			color: #eb2f2f;
			white-space: nowrap;
		}
	}
}

.tabel {
	background-color: #fff;
	border: 2px solid $brown-7;
	box-shadow: 1px 1px 4px #666;
	border-radius: 3px;
	border-collapse: collapse;
	border-spacing: 0;
	font-family: "Roboto-Regular", sans-serif;


	ul {
		display: grid;
		grid-template-columns: repeat(5, 1fr);
		align-items: center;

		li {

			line-height: 1;
			outline: 1px solid #ededed;
			text-shadow: none;
			text-align: center;
			padding: 3px;

			&:last-of-type {
				border-right: none;
			}

			&:not(:has(ul)) {
				font-size: 16px;
				font-weight: 600;
			}

			&:has(ul) {

				padding: 0 0 0 0;
				grid-row: 2/3;
				grid-column: 1 / -1;

				& ul li {
					font-size: 14px;
					font-weight: 400;
				}
			}
		}
	}
}

.spielPlatz {
	padding: 5px;
	border: 3px solid white;
	border-radius: 10px;
	background: #d6d2d0;


}

.block__buttons {
	display: flex;
	column-gap: 5px;
}

.block__info {
	position: relative;
	display: inline-block;
}

.block__line {
	margin: 0 0 6px 0;

	h4 {
		display: inline-block;
		margin: 0 0 3px 0;
		position: relative;
		padding: 0 0 0 25px;
	}

	input:not([type="range"]) {
		height: 22px;
		border-radius: 3px;
		margin: 0 3px 0 0;

		&:last-of-type {
			margin: 0 0 0 0;
		}
	}


}

.base__hidden {
	left: 0%;
	top: 0%;
	z-index: 20000;
	position: fixed;
	width: 100vw;
	overflow: hidden;
	height: 100vh;
	background: rgba(0, 0, 0, .85);
	overflow: scroll;
	transition: all 0.2s;
	transform: scale(0);
	padding: 44px 20px 20px 20px;

	&._is-active {
		transform: scale(1);
	}
}

.ButtonClose {
	position: fixed;
	top: 10px;
	left: 50%;
	transform: translate(-50%, -50%);
	border-radius: 100%;
}
</style>