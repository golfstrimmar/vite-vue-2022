<template lang="pug">
.container
	.hero 
		.canvas 
			textarea.result(type='textarea'  v-copy :v-model="Something" :value='Something' )
		.hero__head
			.hero__temp
				Button.hero__reset( @click='handelClean')
			input.hero__line(type = 'text'  v-model='Result' )
		.hero__body
			Akkord( :Data='[copyDataCommon,copyDataCycl,copyDataArray,copyDataObject,copyDataPosition,copyDataString,copyDataClass,copyDataAsyncAwait,copyDatadragDrop]' @someEvent = "someEvent")

</template>

<script setup>
import { ref } from 'vue'
import Button from './Button.vue';
import Tab from '@/components/Tab.vue';
import Akkord from '@/components/Akkord.vue';
var Result = ref('');
var Something = ref('');
var lastResult = ref('');


const copyDataCommon = [
	{ title: 'Common' },
	{ dataText: 'console.log( );' },
	{ dataText: 'const = () => {};' },
	{ dataText: 'e.target' },
	{ dataText: "let = document.querySelector('');" },
	{ dataText: 'let head = .querySelectorAll(" ");' },
	{ dataText: 'let headItems =[...head.children]; ' },
	{ dataText: '.classList.add("_is-active");' },
	{ dataText: '.classList.remove("_is-active");' },
	{ dataText: '.classList.toggle("_is-active");' },
	{ dataText: '.classList.contains("_is-active");' },
	{ dataText: '.addEventListener("click",(e) => {});' },
	{ dataText: '.addEventListener("input",(e) =>{ });' },
	{ dataText: '.innerHTML =' },
	{ discription: 'Node.innerText - это свойство, позволяющее задавать или получать текстовое содержимое элемента и его потомков. В качестве геттера, свойство приближается к тексту, который пользователь получит, если он выделит содержимое элемента курсором, затем копирует его в буфер обмена.', dataText: '.innerText = ' },
	{
		discription: 'textContent получает содержимое всех элементов, включая<script> и <style>', dataText: '.textContent ='
	},
	{ discription: 'возвращает добавленный Nodeобъект', dataText: '.appendChild(add);' },
	{ discription: 'вставляет набор Nodeобъектов или строк после последнего дочернего элемента Element,не имеет возвращаемого значения, тогда как Node.appendChild()возвращает добавленный Nodeобъект.', dataText: '.append();' },
	{ discription: 'вставляет набор Nodeобъектов или строк перед первым дочерним элементом Element. ', dataText: '.prepend(param1, "foo");' },
	{
		discription: 'анализирует указанный текст как HTML или XML и вставляет полученные узлы в дерево DOM в указанной позиции. "beforebegin"Перед элементом.Действительно только если элемент находится в дереве DOM и имеет родительский элемент."afterbegin"Прямо внутри элемента, перед его первым дочерним элементом."beforeend"Внутри элемента, после его последнего дочернего элемента."afterend"После элемента.Действительно только если элемент находится в дереве DOM и имеет родительский элемент.', dataText: '.insertAdjacentHTML("beforeend", html);'
	},

	{ discription: 'удаляет дочерний узел из DOM и возвращает удаленный узел.', dataText: '.removeChild(add);' },
	{ discription: 'удаляет элемент из DOM', dataText: '.remove();' },

	{ dataText: '.getAttribute("name");' },
	{ dataText: 'input.onchange = function() {};' },
	{ discription: 'ИЛИ', dataText: '||' },
	{ discription: 'И', dataText: '&&' },
	{ discription: 'НЕ', dataText: '!' },
	{ dataText: 'document.createElement(" ");' },
	{ dataText: '.push({ id: Index, Offset: 0, value: canvasItem.value });' },
	{ dataText: '.style = "color:red";' },
	{ dataText: '.style.background = "  ";' },
	{ dataText: '.style.cssText= `${val}`;' },
	{ dataText: 'hidden.style.height = `${hidden.scrollHeight}px`;' },
	{ dataText: '.matches(".popup-overlay-js")' },
	{ dataText: 'document.addEventListener("DOMContentLoaded", function(){ });' },
]
const copyDataCycl = [
	{ title: 'Zyklus' },
	{ dataText: '.forEach(car => {  })' },
	{ dataText: 'for (i = 0; i < 3; i++) { alert( i ); }' },
	{ dataText: 'for(const index in cars){ console.log(cars[index]); if (index == 3) { break } }' },
	{ dataText: 'for( const car of cars ){ if (car === "bmw") { break } console.log(car); }' },
	{ dataText: 'var i = 0; while (i < 3) { alert( i ); i++; }' },
	{ discription: ' при i, равном 0, значение в скобках будет false и цикл остановится', dataText: 'var i = 3; while (i) {  alert( i ); i‐‐; }' },
	{ dataText: 'var i = 0; do { alert( i ); i++; } while (i < 3);' },

	{ discription: 'Прерывание цикла: break', dataText: 'var sum = 0; while (true) { var value = +prompt("Введите число", ""); if (!value) break; sum += value; } alert( "Сумма:" + sum );' },
	{ discription: 'завершает выполнение инструкций на текущей итерации текущего или помеченного цикла и продолжает выполнение цикла на следующей итерации.', dataText: 'for (var i = 0; i < 10; i++) { if (i % 2==0) continue; alert(i); }' },
	{ discription: 'Цикл, который обрабатывает только нечётные значения', dataText: 'for (var i = 0; i < 10; i++) { if (i % 2) { alert( i ); } }' },
	{ discription: 'switch', dataText: 'var a = 2 + 2; switch (a) { case 3: alert( "Маловато" ); break; case 4: alert( "В точку!" ); break; case 5: alert( "Перебор" ); break; default: alert( "Я таких значений не знаю" ); }' },

]
const copyDataPosition = [
	{ title: '1,2,3 ...' },
	{ dataText: 'access = age > 14 ? true : false;' },
	{ dataText: "var age = prompt('возраст?', 18); var message = (age < 3) ? 'Здравствуй, малыш!' : (age < 18) ? 'Привет!' : (age < 100) ? 'Здравствуйте!' : 'Какой необычный возраст!' ; alert( message );" },
	{ discription: 'рекурсия', dataText: 'function sumTo(n) { if (n == 1) return 1; return n + sumTo(n ‐ 1); } alert( sumTo(100) );' },

	{ discription: 'Преобразование к числу', dataText: 'var s = "12.34"; alert( +s ); ' },
	{ discription: 'Округляет вниз', dataText: 'Math.floor(3.1)' },
	{ discription: 'Округляет вверхalert( Math.round(3.1) ); // 3', dataText: ' Math.ceil(3.1) ' },
	{ discription: 'Округляет до ближайшего целого', dataText: 'Math.round(3.1)' },
	{ discription: 'математические методы', dataText: 'page 110 Math.max(a, b, c...) Math.min(a, b, c...) Math.random() toLocaleString()' },

]
const copyDataString = [
	{ title: 'String' },
	{
		discription: '', dataText: '"https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String"'
	},
	{ discription: 'Оператор typeof возвращает строку, указывающую тип значения операнда.', dataText: 'typeof "blubber"' },
	{ discription: 'Длина', dataText: 'length;' },
	{ discription: 'Доступ к символам', dataText: 'charAt(позиция);' },
	{ discription: 'Доступ к символам', dataText: 'str[0];' },
	{ discription: 'Смена регистра', dataText: 'toLowerCase();' },
	{ discription: 'Смена регистра', dataText: 'toUpperCase();' },
	{ discription: 'проверяет с учётом регистра, содержит ли строка заданную подстроку, и возвращает, соответственно true или false.', dataText: '.includes(word);' },
	{
		discription: 'Индекс первого вхождения «й» с начала строки ', dataText: ".indexOf('й')"
	},
	{ discription: 'возвращает позицию, на которой находится подстрока или ‐1 , если ничего не найдено', dataText: 'str.indexOf("id", начальная_позиция))' },
	{ discription: '.substring(start, end) возвращает подстроку с позиции start до, но не включая end', dataText: '.substring(0,1);' },
	{ discription: '.substr(start [, length]) Первый аргумент имеет такой же смысл, как и в substring , а второй содержит не конечную позицию, а количество символов.', dataText: '.substr(2,4);' },
	{ discription: '.slice(start [, end]) Возвращает часть строки от позиции start до, но не включая, позиции end .Смысл параметров – такой же как в substring', dataText: '.slice(start [, end])' },
	{ discription: 'slice Отрицательные значения отсчитываются от конца строки', dataText: '.slice(‐2); ' },
	{ discription: 'substring(start, end) работают с отрицательными и выходящими за границу строки аргументами', dataText: '.substring(‐2); ' },
	{ discription: 'str1.localeCompare(str2) возвращает ‐1 , если str1 < str2 , 1 , если str1> str2 и 0 , если они равны.', dataText: '.localeCompare("Яблони"); ' }
]
const copyDataObject = [
	{ title: 'Object' },
	{
		discription: '', dataText: 'var person = {}; person.name = "Вася"; person.age = 25;'
	},
	{ discription: 'удаление', dataText: 'delete person.age;' },
	{
		discription: ' ', dataText: 'var menuSetup = {width: 300,height: 200,title: "Menu"}; '
	},
	{ discription: 'in проверка наличия', dataText: '"test" in obj ; ' },
	{
		discription: 'Доступ к свойству через переменную', dataText: 'var person = {}; person.age = 25; var key = "age"; person[key]; person["age"]'
	},
	{
		discription: 'цикл по ключам', dataText: 'var user = {name: "Вася",surname: "Петров",user.age = 25;}for (var prop in user) {alert(prop); // name, surname, age}'
	},
	{
		discription: 'Клонирование объектов', dataText: 'var user = {name: "Вася",age: 30};var clone = {}; // новый пустой объект// скопируем в него все свойства user for (var key in user) {clone[key] = user[key];}// теперь clone ‐ полностью независимая копия clone.name = "Петя"; // поменяли данные в clone alert(user.name); // по‐прежнему "Вася"'
	},
	{
		discription: 'метод копирует все перечислимые собственные свойства из одного или нескольких исходных объектов в целевой объект . Он возвращает измененный целевой объект.', dataText: 'const target = { a: 1, b: 2 };const source = { b: 4, c: 5 };const returnedTarget = Object.assign(target, source); '
	},
	{ discription: 'delete удаляет свойство из объекта', dataText: 'delete user.name;' },
	{ discription: 'Опциональная цепочка ?. останавливает вычисление и возвращает undefined, если значение перед ?. равно undefined или null.', dataText: 'user?.address?.street' },
	{
		discription: 'проверка наличия свойства', dataText: 'if("address" in User ){console.log(User.address);}; '
	},
	{
		discription: 'перебор всех свойств объеков', dataText: 'for (var key in User) {console.log(prop);}'
	},
	{
		discription: 'функция конструктор', dataText: 'function UserInfo(name, age) {// неявно создается новый объект this{}//this.name = name;this.age = age// return this; неявно} console.log(new UserInfo("bill", 20)); '
	},

]
const copyDataArray = [
	{ title: 'Array' },
	{ discription: '', dataText: '.forEach((cell) => { }); ' },
	{ discription: '', dataText: '.indexOf(0)' },
	{ discription: '', dataText: '.find((item) => item.id == id)' },
	{ discription: 'повторит значение переменной spase столько раз, какое чмсло в переменной Offset ', dataText: 'spase.repeat(Offset)' },
	{ discription: 'создаёт новый массив, который будет состоять из результатов вызова callback(item, i, arr) для каждого элемента arr', dataText: '.map((car) => {  });' },
	{ discription: ' создаёт новый массив, в который войдут только те элементы arr , для которых вызов callback(item, i, arr) возвратит true .', dataText: '.filter(function (number) {return number > 0;}); ' },
	{ discription: 'Удаляет последний элемент из массива и возвращает его', dataText: '.pop()' },
	{ discription: 'Добавляет элемент в конец массива', dataText: '.push({ id: Index, Offset: 0, value: canvasItem.value });' },
	{ discription: 'Удаляет из массива первый элемент и возвращает его', dataText: '.shift();' },
	{ discription: 'Добавляет элемент в начало массива:', dataText: '.unshift("Яблоко");' },
	{ discription: 'позволяет превратить строку в массив, разбив ее по разделителю s', dataText: '.split(", ", 2);' },
	{ discription: 'берет массив и склеивает его в строку, используя str как разделитель', dataText: '.join(";");' },
	{ discription: 'значение с индексом 1 удалено', dataText: 'delete arr[1];' },
	{ discription: ' начиная с позиции 1, удалить 1 элемент', dataText: '.splice(1, 1);' },
	{ discription: 'удалить 3 первых элемента и добавить другие вместо них', dataText: '.splice(0, 3, "Мы", "изучаем")' },
	{ discription: 'удалить 2 первых элемента', dataText: '.splice(0, 2);' },
	{ discription: 'с позиции 2 // удалить 0 // вставить "сложный", "язык"', dataText: '.splice(2, 0, "сложный", "язык");' },
	{ discription: 'начиная с позиции индексом ‐1 (перед последним элементом) // удалить 0 элементов, // затем вставить числа 3 и 4', dataText: '.splice(‐1, 0, 3, 4);' },
	{ discription: 'копирует участок массива от begin до end, не включая end.Исходный массив при этом не меняется.', dataText: '.slice(begin, end)' },
	{ discription: 'элементы 1, 2 (не включая 3)', dataText: '.slice(1, 3);' },
	{ discription: 'копировать от 2‐го элемента с конца и дальше', dataText: '.slice(‐2); ' },
	{ discription: 'скопируется весь массив', dataText: '.slice();' },
	{ discription: '', dataText: 'function compareNumeric(a, b) {if (a > b) return 1;if (a < b) return ‐1;} .sort(compareNumeric); ' },
	{ discription: '', dataText: '.reverse();' },
	{ discription: 'соединяет массивы', dataText: '.concat(3, 4);' },



	{ discription: 'вернет false, не все положительные', dataText: 'function isPositive(number) {return number > 0;} .every(isPositive)' },
	{ discription: 'вернет true, есть хоть одно положительное', dataText: 'function isPositive(number) {return number > 0;} .some(isPositive)' },
	{ discription: 'copy – это объект, в который нужно копировать, он назван dst . Для упрощения доступа к нему можно указать его прямо в объявлении функции:', dataText: 'function copy(dst) {for (var i = 1; i <arguments.length; i++) { var arg = arguments[i]; for (var key in arg) { dst[key] = arg[key]; } } return dst;}' },
	{
		discription: 'Метод reduce используется для вычисления на основе массива какого‑либо единого значения,иначе говорят «для свёртки массива».Он применяет функцию callback по очереди к каждому элементу массива слева направо, сохраняя при этом промежуточный результат.Аргументы функции callback(previousValue,currentItem, index, arr) :previousValue – последний результат вызова функции, он же «промежуточный результат».currentItem – текущий элемент массива, элементы перебираются по очереди слева‑направо.index – номер текущего элемента.arr – обрабатываемый массив.Например, в качестве «свёртки» мы хотим получить сумму всех элементов массива.', dataText: 'var arr = [1, 2, 3, 4, 5]// для каждого элемента массива запустить функцию,// промежуточный результат передавать первым аргументом далее var result =arr.reduce(function (sum, current) {return sum + current;}, 0);alert(result); // 15'
	},
	{ discription: 'если не указана width, то width = 200', dataText: 'function showWarning(width, height, title, contents){width = width || 200; title = title || "Предупреждение"; } ' },

]
const copyDataClass = [
	{ title: 'Class' },
	{ discription: '', dataText: 'class Car {constructor(brand, color) {this.brand = brand;this.color = color;}start() {}stop() {}static discount() {}}' },

	{ discription: 'cetter позволяет добавить свойство, которого изначально нет в классе.', dataText: 'set rating(value){this.score = value.toUpperCase();}' },
	{ discription: 'getter позволяет взять значение этого свойства', dataText: 'get rating(){return this.score}' },
	{ discription: 'дочерние классы полностью наследуют методы родителя и еще ожно добавить свои методы', dataText: 'class HibridCar extends Car {' },

]
const copyDataAsyncAwait = [
	{ title: 'AsyncAwait' },
	{ discription: 'Promise', dataText: 'function sleep(time) {return new Promise((resolve, reject) => {	if (time < 1000) { reject("слишком мало поспал") } setTimeout(() => resolve(`поспал ${time}`), time)})}   sleep(1500).then(res => {console.log(res);	return sleep(1000)}).then(res => {console.log(res);return sleep(500)}).then(res => {console.log(res);}).catch(err => {console.log("ошибка", err);})' },
	{ discription: 'async/await', dataText: 'const getGitData = async () => {try {	const responce = await fetch("https://api.github.com/users/vasilymur");	const data = await responce.json();console.log(data);} catch (err) {console.log("err", err);}} getGitData()' },
	{ discription: 'async/await', dataText: 'const getUserVideo = async () => {try {const response = await navigator.mediaDevices.getUserMedia({ video: true });video.srcObject = response;} catch (err) {console.log("err", err);}}getUserVideo();' },
]
const copyDatadragDrop = [
	{ title: 'DragDrop' },
	{ dataText: 'let dragged = null; const source = document.getElementById("draggable"); source.ondragstart = (event) => {dragged = event.target; e.dataTransfer.dropEffect = "move" e.dataTransfer.effectAllowed = "move" e.dataTransfer.setData("item", id)};', discription: '<p id="source" draggable="true"></p> https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/drop_event' },

	{
		dataText: 'const dragoverHandler = (e) => {if (e.preventDefault) e.preventDefault();e.dataTransfer.dropEffect = "move";return false;}', discription: 'https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/drop_event'
	},
	{ dataText: 'const leaveHandler = (e) => {if (e.preventDefault) e.preventDefault();}', discription: 'https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/drop_event' },
	{
		dataText: 'const onDrop = (e) => {if (e.stopPropagation)e.stopPropagation(); dragged.parentNode.removeChild(dragged);e.target.appendChild(dragged);   var Data = e.dataTransfer.getData("item");}', discription: 'https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/drop_event'
	},
]
// ----------------------------------------
const handelClean = () => {
	let schneidenIndex = Something.value.indexOf(Result.value, 0)
	Something.value = Something.value.substring(0, schneidenIndex);
	Result.value = '';
}
// ----------------------------------------
const someEvent = (data) => {
	Result.value = data;
	lastResult.value = data + "\n";
	Something.value = Something.value + lastResult.value;
}
// ----------------------------------------

</script>

<style lang="scss" scoped>
.hero {
	margin: 10px 0 0 0;

	&__body {
		// grid-template-columns: repeat(auto-fill, 400px);
		display: block;
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
