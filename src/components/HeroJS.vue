<template lang="pug">
.container
	.hero 
		.canvas 
			textarea.result.copy(type='textarea'  v-copy :v-model="Something" :value='Something' )
		.hero__head
			.hero__temp
				Button.hero__reset( @click='handelClean')
			input.hero__line(type = 'text'  v-model='Result' )
		.hero__body
			.hero__column
				Copy(:text="item.dataText"  @someEvent = "someEvent(item.dataText)" v-for="item in copyDataCommon" :key="item.i")
			.hero__column
				Copy(:text="item.dataText"  @someEvent = "someEvent" v-for="item in copyDataCycl" :key="item.i")
			.hero__column
				Copy(:text="item.dataText"  @someEvent = "someEvent" v-for="item in copyDataPosition" :key="item.i")


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
var copyDataCycl = reactive([{ i: 0, dataText: '' }]);
var copyDataPosition = reactive([{ i: 0, dataText: '' }]);

copyDataCommon = [
	{ i: 1, dataText: 'const = () => {}' },
	{ i: 1, dataText: "let = document.querySelector('');" },
	{ i: 1, dataText: 'e.target' },
	{ i: 1, dataText: '.classList.add("_is- active")' },
	{ i: 1, dataText: '.classList.remove("_is- active")' },
	{ i: 1, dataText: '.classList.toggle("_is- active")' },
	{ i: 1, dataText: '.classList.contains("_is- active")' },
	{ i: 1, dataText: '	let = .querySelectorAll(" ");' },
	{ i: 1, dataText: '.addEventListener("click",(e) => {});' },
	{ i: 1, dataText: '.addEventListener("input",(e) =>{ })' },
	{ i: 1, dataText: '.innerHTML =' },
	{ i: 1, dataText: '.getAttribute("name");' },
	{ i: 1, dataText: 'input.onchange = function() {}' },
	{ i: 1, dataText: '.insertAdjacentHTML("beforeend", html)' },
	{ i: 1, dataText: 'document.createElement(" ")' },
	{ i: 1, dataText: 'let headItems =[...head.children]; ' },
	{ i: 1, dataText: '.style.cssText= `${val}`;' },
	{ i: 1, dataText: 'hidden.style.height = `${hidden.scrollHeight}px`;' },
	{ i: 1, dataText: '.matches(".popup-overlay-js")' },
	{ i: 1, dataText: 'document.addEventListener("DOMContentLoaded", function(){ })' },

]

copyDataCycl = [
	{ i: 15, dataText: '.forEach(car => { console.log(car); })' },
	{ i: 15, dataText: 'for(const index in cars){ console.log(cars[index]); if (index == 3) { break } }' },
	{ i: 15, dataText: 'for( const car of cars ){ if (car === "bmw") { break } console.log(car); }' },
	{ i: 15, dataText: 'var i = 0; while (i < 3) { alert( i ); i++; }' },
	{ i: 15, dataText: 'var i = 3; while (i) { // при i, равном 0, значение в скобках будет false и цикл остановится alert( i ); i‐‐; }' },
	{ i: 15, dataText: 'var i = 0; do { alert( i ); i++; } while (i < 3);' },
	{ i: 15, dataText: 'for (i = 0; i < 3; i++) { alert( i ); }' },
	{ i: 15, dataText: 'var sum = 0; while (true) { var value = +prompt("Введите число", ""); if (!value) break; sum += value; } alert( "Сумма:" + sum );' },
	{ i: 15, dataText: 'for (var i = 0; i < 10; i++) { if (i % 2==0) continue; alert(i); }' },
	{ i: 15, dataText: 'for (var i = 0; i < 10; i++) { if (i % 2) { alert( i ); } }Цикл, который обрабатывает только нечётные значения' },
	{ i: 15, dataText: 'var a = 2 + 2; switch (a) { case 3: alert( "Маловато" ); break; case 4: alert( "В точку!" ); break; case 5: alert( "Перебор" ); break; default: alert( "Я таких значений не знаю" ); }' },

]

copyDataPosition = [
	{ i: 11, dataText: 'access = age > 14 ? true : false;' },
	{ i: 11, dataText: '' },
	{ i: 11, dataText: '' },
	{ i: 11, dataText: '' },
	{ i: 11, dataText: '' },
	{ i: 11, dataText: '' },
	{ i: 11, dataText: '' },
	{ i: 11, dataText: '' },
	{ i: 11, dataText: '' },
	{ i: 11, dataText: '' },
	{ i: 11, dataText: '' },

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

</script>

<style lang="scss" scoped></style>
