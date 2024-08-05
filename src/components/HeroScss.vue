<template lang="pug">
.container
	.hero 
		.canvas 
			textarea.result( :v-model="Something" :value='Something'  @click='handlerCopy(  Something)')
		//- DragDrop
		.hero__head
			.hero__temp
				//- .tempContent(draggable="true" @dragstart='startHandler' :class="[(Result !== '') ? '_is-active' : '' ]") {{ Result }}
				//- img(src='/src/assets/ex.png'  alt='img')
				Button.hero__reset( @click='handelClean')
			input.hero__line(type = 'text'  v-model='Result' )
		.hero__body
			.hero__column
				Copy(:text="item.dataText"  @someEvent = "someEvent(item.dataText)" v-for="item in copyDataCommon" :key="item.i")
			//- .hero__column
			//- 	Copy(:text="item.dataText"  @someEvent = "someEvent" v-for="item in copyDataName" :key="item.i").hero__column
			//- .hero__column
			//- 	Copy(:text="item.dataText"  @someEvent = "someEvent" v-for="item in copyDataLinks" :key="item.i").hero__column
</template>

<script setup>
import { ref, reactive, computed } from 'vue'
import DragDrop from './DragDrop.vue';
import Button from './Button.vue';
import Copy from './Copy.vue';
var Result = ref('');
var Something = ref('');
var lastResult = ref('');
var copyDataCommon = reactive([{ i: 0, dataText: '' }]);
var copyDataName = reactive([{ i: 0, dataText: '' }]);
var copyDataLinks = reactive([{ i: 0, dataText: '' }]);

copyDataCommon = [
	{ i: 1, dataText: 'display: grid;' },
	{ i: 2, dataText: 'grid-template-columns: 100px 1fr;' },
	{ i: 12, dataText: 'grid-template-columns: repeat(3, 200px);' },
	{ i: 2, dataText: 'grid-template-columns: repeat(auto-fill, 200px);' },
	{ i: 2, dataText: 'grid-template-columns: minmax(100px, max-content);' },
	{ i: 2, dataText: 'column-gap: 34px;' },
	{ i: 2, dataText: 'row-gap: 15px;' },
	{ i: 2, dataText: 'gap: 37px 36px;' },
	{ i: 3, dataText: 'grid-auto-flow: row;' },
	{ i: 4, dataText: 'grid-auto-flow: column; автоматически создает равные колонки по размеру контента' },
	{ i: 6, dataText: 'grid-auto-rows: max-content;(прижимает к верху)' },
	{ i: 7, dataText: 'grid-template-areas: "a b c e" "a d c e";' },
	{ i: 8, dataText: '._a{grid-area: a;}' },
	{ i: 8, dataText: '._b{ grid- area: b;}' },
	{ i: 9, dataText: '._c{ grid- area: c;}' },

]

copyDataName = [
	{ i: 15, dataText: 'body' },
	{ i: 18, dataText: 'blocks' },
	{ i: 18, dataText: 'block' },
	{ i: 17, dataText: 'button' },
	{ i: 17, dataText: 'content' },
	{ i: 17, dataText: 'email' },
	{ i: 17, dataText: 'img' },
	{ i: 17, dataText: 'info' },
	{ i: 17, dataText: 'hidden' },
	{ i: 19, dataText: 'items' },
	{ i: 20, dataText: 'item' },
	{ i: 17, dataText: 'line' },
	{ i: 20, dataText: 'logo' },
	{ i: 17, dataText: 'plaza' },
	{ i: 17, dataText: 'phone' },
	{ i: 16, dataText: 'title' },
	{ i: 17, dataText: 'text' },
]

copyDataLinks = [
	{ i: 11, dataText: 'a.btn.btn-success.but-wave( href="#!")  ' },
	{ i: 11, dataText: 'a.btn.btn-success.but-wave.popups-init-js(rel="#popup1" href="#!")  ' },
	{ i: 10, dataText: 'a.btn.btn-empty(href="#!") empty' },
	{ i: 10, dataText: 'a.btn.btn-blue(href="#!") blue' },
	{ i: 10, dataText: 'button.btn.btn-success.but-wave(type="text" name = "text") text' },
	{ i: 10, dataText: 'button.btn.btn-success.but-wave(type="submit" name = "submit") submit' },
	{ i: 10, dataText: 'button.btn.btn-empty(type="button" name = "empty") empty' },
	{ i: 10, dataText: 'button.btn.btn-blue(type = "button") blue' }
]
// ----------------------------------------

// ----------------------------------------
const handelClean = () => {
	var rExp = new RegExp(Result.value, "g");
	Something.value = Something.value.replace(rExp, '')
	Result.value = '';
}
// ----------------------------------------
const someEvent = (data) => {
	Result.value = data;
	lastResult.value = "\n" + data;
	Something.value = Something.value + lastResult.value;
}
// ----------------------------------------
// const startHandler = (e) => {
// 	e.dataTransfer.effectAllowed = "move";
// 	e.dataTransfer.setData("item", e.target.innerText);
// 	Result.value = '';
// }

</script>


<style lang="scss">
.result {
	border: 1px solid darkblue;
	min-height: 45px;
	white-space: pre-wrap;
	cursor: pointer;

	&._is-copied {
		border: 1px solid $deep-orange-8;
		background-color: $deep-orange-4;
		color: #fff;
	}
}

.canvas__result {
	display: grid;
	column-gap: 10px;
	grid-template-columns: repeat(2, 1fr);
	margin: 10px 0;

}

.hero {

	&__plaza {
		width: 100%;
		min-height: 200px;
		outline: 2px solid $lime-8;
		margin: 20px 0;
	}

	&__body {
		display: grid;
		grid-template-columns: repeat(2, 187px) 1fr;
		grid-template-rows: 45px repeat(20, 30px);
		column-gap: 5px;
	}



	&__temp {
		width: 160px;
		min-height: 30px;
		position: relative;

		img {
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			width: 18px;
			height: 18px;
			@include transition;
		}

	}

	.tempContent {
		overflow: hidden;
		@include transition;
		padding: 0 0 0 2px;
		min-height: 30px;
		color: transparent;
		box-shadow: 0 -0.25em 0.25em $blue-grey-7 inset;
		border-radius: 0.5em;
		display: block;
		perspective: 20em;
		inset: 0.25em;

		&._is-active {
			box-shadow: 0 -0.25em 0.5em $blue-grey-7 inset;

			&~img {
				width: 22px;
				height: 22px;
			}
		}

		&:hover {
			cursor: pointer;
		}
	}
}

.hero__head {
	display: grid;
	grid-template-columns: 160px 1fr;
	margin: 10px 0;
	column-gap: 43px;
}

input.hero__line {
	height: 30px;
	border-radius: 0.75em;
	background-color: $blue-grey-1;
	box-shadow: 0 0.0625em 0.0625em $blue-grey-7 inset, 0 -0.0625em 0.0625em $blue-grey-5 inset, 0 0.25em 0.25em $blue-grey-3 inset;
	padding: 0 0 0 10px;

	&:focus {
		background-color: $orange-3;
	}
}
</style>
