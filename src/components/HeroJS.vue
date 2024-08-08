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
				Copy(:text="item.dataText" :discription="item.discription"  @someEvent = "someEvent(item.dataText)" v-for="item in copyDataCommon" :key="item.i")
			.hero__column
				Copy(:text="item.dataText" :discription="item.discription" @someEvent = "someEvent" v-for="item in copyDataCycl" :key="item.i")
			.hero__column
				Copy(:text="item.dataText" :discription="item.discription" @someEvent = "someEvent" v-for="item in copyDataString" :key="item.i")
			.hero__column
				Copy(:text="item.dataText" :discription="item.discription" @someEvent = "someEvent" v-for="item in copyDataObject" :key="item.i")
			.hero__column
				Copy(:text="item.dataText" :discription="item.discription" @someEvent = "someEvent" v-for="item in copyDataArray" :key="item.i")


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
var copyDataString = reactive([{ i: 0, dataText: '' }]);
var copyDataObject = reactive([{ i: 0, dataText: '' }]);
var copyDataArray = reactive([{ i: 0, dataText: '' }]);

copyDataCommon = [
	{ i: 1, dataText: 'console.log( );' },
	{ i: 1, dataText: 'const = () => {};' },
	{ i: 1, dataText: 'e.target' },
	{ i: 1, dataText: "let = document.querySelector('');" },
	{ i: 1, dataText: '	let head = .querySelectorAll(" ");' },
	{ i: 1, dataText: 'let headItems =[...head.children]; ' },

	{ i: 1, dataText: '.classList.add("_is- active");' },
	{ i: 1, dataText: '.classList.remove("_is- active");' },
	{ i: 1, dataText: '.classList.toggle("_is- active");' },
	{ i: 1, dataText: '.classList.contains("_is- active");' },

	{ i: 1, dataText: '.addEventListener("click",(e) => {});' },
	{ i: 1, dataText: '.addEventListener("input",(e) =>{ });' },
	{ i: 1, dataText: '.innerHTML =' },
	{ i: 1, discription: 'Node.innerText - это свойство, позволяющее задавать или получать текстовое содержимое элемента и его потомков. В качестве геттера, свойство приближается к тексту, который пользователь получит, если он выделит содержимое элемента курсором, затем копирует его в буфер обмена.', dataText: '.innerText = ' },
	{
		i: 1, discription: 'textContent получает содержимое всех элементов, включая<script> и <style>', dataText: '.textContent ='
	},
	{ i: 1, discription: 'возвращает добавленный Nodeобъект', dataText: '.appendChild(add);' },
	{ i: 1, discription: 'вставляет набор Nodeобъектов или строк после последнего дочернего элемента Element,не имеет возвращаемого значения, тогда как Node.appendChild()возвращает добавленный Nodeобъект.', dataText: '.append();' },
	{ i: 1, discription: 'вставляет набор Nodeобъектов или строк перед первым дочерним элементом Element. ', dataText: '.prepend(param1, "foo");' },
	{
		i: 1, discription: 'анализирует указанный текст как HTML или XML и вставляет полученные узлы в дерево DOM в указанной позиции. "beforebegin"Перед элементом.Действительно только если элемент находится в дереве DOM и имеет родительский элемент."afterbegin"Прямо внутри элемента, перед его первым дочерним элементом."beforeend"Внутри элемента, после его последнего дочернего элемента."afterend"После элемента.Действительно только если элемент находится в дереве DOM и имеет родительский элемент.', dataText: '.insertAdjacentHTML("beforeend", html);'
	},

	{ i: 1, discription: 'удаляет дочерний узел из DOM и возвращает удаленный узел.', dataText: '.removeChild(add);' },
	{ i: 1, discription: 'удаляет элемент из DOM', dataText: '.remove();' },

	{ i: 1, dataText: '.getAttribute("name");' },
	{ i: 1, dataText: 'input.onchange = function() {};' },

	{ i: 1, dataText: 'document.createElement(" ");' },
	{ i: 1, dataText: '.push({ id: Index, Offset: 0, value: canvasItem.value });' },
	{ i: 1, dataText: '.style = "color:red";' },
	{ i: 1, dataText: '.style.background = "  ";' },
	{ i: 1, dataText: '.style.cssText= `${val}`;' },
	{ i: 1, dataText: 'hidden.style.height = `${hidden.scrollHeight}px`;' },
	{ i: 1, dataText: '.matches(".popup-overlay-js")' },
	{ i: 1, dataText: 'document.addEventListener("DOMContentLoaded", function(){ });' },

]

copyDataCycl = [
	{ i: 15, dataText: '.forEach(car => {  })' },
	{ i: 15, dataText: 'for (i = 0; i < 3; i++) { alert( i ); }' },
	{ i: 15, dataText: 'for(const index in cars){ console.log(cars[index]); if (index == 3) { break } }' },
	{ i: 15, dataText: 'for( const car of cars ){ if (car === "bmw") { break } console.log(car); }' },
	{ i: 15, dataText: 'var i = 0; while (i < 3) { alert( i ); i++; }' },
	{ i: 15, discription: ' при i, равном 0, значение в скобках будет false и цикл остановится', dataText: 'var i = 3; while (i) {  alert( i ); i‐‐; }' },
	{ i: 15, dataText: 'var i = 0; do { alert( i ); i++; } while (i < 3);' },

	{ i: 15, discription: 'Прерывание цикла: break', dataText: 'var sum = 0; while (true) { var value = +prompt("Введите число", ""); if (!value) break; sum += value; } alert( "Сумма:" + sum );' },
	{ i: 15, discription: 'завершает выполнение инструкций на текущей итерации текущего или помеченного цикла и продолжает выполнение цикла на следующей итерации.', dataText: 'for (var i = 0; i < 10; i++) { if (i % 2==0) continue; alert(i); }' },
	{ i: 15, discription: 'Цикл, который обрабатывает только нечётные значения', dataText: 'for (var i = 0; i < 10; i++) { if (i % 2) { alert( i ); } }' },
	{ i: 15, discription: 'switch', dataText: 'var a = 2 + 2; switch (a) { case 3: alert( "Маловато" ); break; case 4: alert( "В точку!" ); break; case 5: alert( "Перебор" ); break; default: alert( "Я таких значений не знаю" ); }' },

]

copyDataPosition = [
	{ i: 11, dataText: 'access = age > 14 ? true : false;' },
	{ i: 11, dataText: "var age = prompt('возраст?', 18); var message = (age < 3) ? 'Здравствуй, малыш!' : (age < 18) ? 'Привет!' : (age < 100) ? 'Здравствуйте!' : 'Какой необычный возраст!' ; alert( message );" },
	{ i: 11, discription: 'рекурсия', dataText: 'function sumTo(n) { if (n == 1) return 1; return n + sumTo(n ‐ 1); } alert( sumTo(100) );' },
	{ i: 11, discription: 'ИЛИ', dataText: '||' },
	{ i: 11, discription: 'И', dataText: '&&' },
	{ i: 11, discription: 'НЕ', dataText: '!' },
	{ i: 11, discription: 'Преобразование к числу', dataText: 'var s = "12.34"; alert( +s ); ' },
	{ i: 11, discription: 'Округляет вниз', dataText: 'Math.floor(3.1)' },
	{ i: 11, discription: 'Округляет вверхalert( Math.round(3.1) ); // 3', dataText: ' Math.ceil(3.1) ' },
	{ i: 11, discription: 'Округляет до ближайшего целого', dataText: 'Math.round(3.1)' },
	{ i: 11, discription: 'математические методы', dataText: 'page 110 Math.max(a, b, c...) Math.min(a, b, c...) Math.random() toLocaleString()' },
	{ i: 11, discription: '', dataText: '' },
	{ i: 11, discription: '', dataText: '' },
	{ i: 11, discription: '', dataText: '' },
	{ i: 11, discription: '', dataText: '' },
	{ i: 11, discription: '', dataText: '' },

]
copyDataString = [
	{ i: 11, discription: 'Длина', dataText: 'length;' },
	{ i: 11, discription: 'Доступ к символам', dataText: 'charAt(позиция)' },
	{ i: 11, discription: 'Доступ к символам', dataText: 'str[0]' },
	{ i: 11, discription: 'Смена регистра', dataText: 'toLowerCase()' },
	{ i: 11, discription: 'Смена регистра', dataText: 'toUpperCase()' },
	{
		i: 11, discription: 'Индекс первого вхождения «й» с начала строки ', dataText: ".indexOf('й')"
	},
	{ i: 11, discription: 'возвращает позицию, на которой находится подстрока или ‐1 , если ничего не найдено', dataText: 'str.indexOf("id", начальная_позиция))' },
	{ i: 11, discription: 'substring(start, end) возвращает подстроку с позиции start до, но не включая end', dataText: 'substring(0,1);' },
	{ i: 11, discription: 'substr(start [, length]) Первый аргумент имеет такой же смысл, как и в substring , а второй содержит не конечную позицию, а количество символов.', dataText: '.substr(2,4);' },
	{ i: 11, discription: 'slice(start [, end]) Возвращает часть строки от позиции start до, но не включая, позиции end .Смысл параметров – такой же как в substring', dataText: 'slice(start [, end])' },
	{ i: 11, discription: 'slice Отрицательные значения отсчитываются от конца строки', dataText: '.slice(‐2); ' },
	{ i: 11, discription: 'substring(start, end) работают с отрицательными и выходящими за границу строки аргументами', dataText: '.substring(‐2); ' },
	{ i: 11, discription: 'str1.localeCompare(str2) возвращает ‐1 , если str1 < str2 , 1 , если str1> str2 и 0 , если они равны.', dataText: '.localeCompare("Яблони"); ' }
]
copyDataObject = [
	{
		i: 11, discription: '', dataText: 'var person = {}; person.name = "Вася"; person.age = 25;'
	},
	{ i: 11, discription: 'удаление', dataText: 'delete person.age;' },
	{
		i: 11, discription: '', dataText: '	var menuSetup = {width: 300,height: 200,title: "Menu"}; '
	},
	{ i: 11, discription: 'in проверка наличия', dataText: '"test" in obj ; ' },
	{
		i: 11, discription: 'Доступ к свойству через переменную', dataText: 'var person = {}; person.age = 25; var key = "age"; person[key]; person["age"]'
	},
	{
		i: 11, discription: 'цикл по ключам', dataText: 'var user = {name: "Вася",surname: "Петров",user.age = 25;}for (var prop in user) {alert(prop); // name, surname, age}'
	},
	{
		i: 11, discription: 'Клонирование объектов', dataText: ' var user = {name: "Вася",age: 30};var clone = {}; // новый пустой объект// скопируем в него все свойства user for (var key in user) {clone[key] = user[key];}// теперь clone ‐ полностью независимая копия clone.name = "Петя"; // поменяли данные в clone alert(user.name); // по‐прежнему "Вася"'
	},
	{
		i: 11, discription: 'метод копирует все перечислимые собственные свойства из одного или нескольких исходных объектов в целевой объект . Он возвращает измененный целевой объект.', dataText: 'const target = { a: 1, b: 2 };const source = { b: 4, c: 5 };const returnedTarget = Object.assign(target, source); '
	},
	{ i: 11, discription: 'delete удаляет свойство из объекта', dataText: 'delete user.name;' },
	{ i: 11, discription: 'Опциональная цепочка ?. останавливает вычисление и возвращает undefined, если значение перед ?. равно undefined или null.', dataText: 'user?.address?.street' },
	{
		i: 11, discription: 'проверка наличия свойства', dataText: 'if("address" in User ){console.log(User.address);}; '
	},
	{
		i: 11, discription: 'перебор всех свойств объеков', dataText: 'for (var key in User) {console.log(prop);}'
	},
	{
		i: 11, discription: 'функция конструктор', dataText: 'function UserInfo(name, age) {// неявно создается новый объект this{}//this.name = name;this.age = age// return this; неявно} console.log(new UserInfo("bill", 20)); '
	},

]
copyDataArray = [

	{ i: 11, discription: '', dataText: '' },
	{ i: 11, discription: '', dataText: '' },
	{ i: 11, discription: '', dataText: '' },
	{ i: 11, discription: '', dataText: '' },


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

<style lang="scss" scoped>
.hero {
	margin: 10px 0 0 0;

	&__body {
		grid-template-columns: repeat(auto-fill, 400px);
	}
}

input.hero__line {
	padding: 0 0 0 5px;
}

.hero__button {
	right: auto;
	left: 0;
}

.hero__head {
	grid-template-columns: 20px 1fr;
	column-gap: 20px;
}

.hero__column {
	height: 80vh;
	overflow-y: scroll;
}
</style>
