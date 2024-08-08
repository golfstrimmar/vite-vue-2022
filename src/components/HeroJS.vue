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
			Tab(title='Common' :copyData='copyDataCommon' @someEvent = "someEvent")
			Tab(title='Array' :copyData='copyDataArray' @someEvent = "someEvent")
			Tab(title='Cycle' :copyData='copyDataCycl' @someEvent = "someEvent")
			Tab(title='String' :copyData='copyDataString' @someEvent = "someEvent")
			Tab(title='Object' :copyData='copyDataObject' @someEvent = "someEvent")
			Tab(title='Class' :copyData='copyDataClass' @someEvent = "someEvent")
			Tab(title='Promise/Async/Await' :copyData='copyDataAsyncAwait' @someEvent = "someEvent")


</template>

<script setup>
import { ref } from 'vue'
import Button from './Button.vue';
import Tab from '@/components/Tab.vue';
var Result = ref('');
var Something = ref('');
var lastResult = ref('');


const copyDataCommon = [
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

const copyDataCycl = [
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

const copyDataPosition = [
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
const copyDataString = [
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
const copyDataObject = [
	{
		i: 11, discription: '', dataText: 'var person = {}; person.name = "Вася"; person.age = 25;'
	},
	{ i: 11, discription: 'удаление', dataText: 'delete person.age;' },
	{
		i: 11, discription: ' ', dataText: 'var menuSetup = {width: 300,height: 200,title: "Menu"}; '
	},
	{ i: 11, discription: 'in проверка наличия', dataText: '"test" in obj ; ' },
	{
		i: 11, discription: 'Доступ к свойству через переменную', dataText: 'var person = {}; person.age = 25; var key = "age"; person[key]; person["age"]'
	},
	{
		i: 11, discription: 'цикл по ключам', dataText: 'var user = {name: "Вася",surname: "Петров",user.age = 25;}for (var prop in user) {alert(prop); // name, surname, age}'
	},
	{
		i: 11, discription: 'Клонирование объектов', dataText: 'var user = {name: "Вася",age: 30};var clone = {}; // новый пустой объект// скопируем в него все свойства user for (var key in user) {clone[key] = user[key];}// теперь clone ‐ полностью независимая копия clone.name = "Петя"; // поменяли данные в clone alert(user.name); // по‐прежнему "Вася"'
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
const copyDataArray = [
	{ i: 11, discription: '', dataText: '.forEach((cell) => { }); ' },
	{ i: 11, discription: '', dataText: '.indexOf(0)' },
	{ i: 11, discription: '', dataText: '.find((item) => item.id == id)' },
	{ i: 11, discription: 'повторит значение переменной spase столько раз, какое чмсло в переменной Offset ', dataText: 'spase.repeat(Offset)' },
	{ i: 11, discription: 'создаёт новый массив, который будет состоять из результатов вызова callback(item, i, arr) для каждого элемента arr', dataText: '.map(function (name) {return name.length;}); ' },
	{ i: 11, discription: ' создаёт новый массив, в который войдут только те элементы arr , для которых вызов callback(item, i, arr) возвратит true .', dataText: '.filter(function (number) {return number > 0;}); ' },
	{ i: 11, discription: 'Удаляет последний элемент из массива и возвращает его', dataText: '.pop()' },
	{ i: 11, discription: 'Добавляет элемент в конец массива', dataText: '.push({ id: Index, Offset: 0, value: canvasItem.value });' },
	{ i: 11, discription: 'Удаляет из массива первый элемент и возвращает его', dataText: '.shift();' },
	{ i: 11, discription: 'Добавляет элемент в начало массива:', dataText: '.unshift("Яблоко");' },
	{ i: 11, discription: 'позволяет превратить строку в массив, разбив ее по разделителю s', dataText: '.split(", ", 2);' },
	{ i: 11, discription: 'берет массив и склеивает его в строку, используя str как разделитель', dataText: '.join(";");' },
	{ i: 11, discription: 'значение с индексом 1 удалено', dataText: 'delete arr[1];' },
	{ i: 11, discription: ' начиная с позиции 1, удалить 1 элемент', dataText: '.splice(1, 1);' },
	{ i: 11, discription: 'удалить 3 первых элемента и добавить другие вместо них', dataText: '.splice(0, 3, "Мы", "изучаем")' },
	{ i: 11, discription: 'удалить 2 первых элемента', dataText: '.splice(0, 2);' },
	{ i: 11, discription: 'с позиции 2 // удалить 0 // вставить "сложный", "язык"', dataText: '.splice(2, 0, "сложный", "язык");' },
	{ i: 11, discription: 'начиная с позиции индексом ‐1 (перед последним элементом) // удалить 0 элементов, // затем вставить числа 3 и 4', dataText: '.splice(‐1, 0, 3, 4);' },
	{ i: 11, discription: 'копирует участок массива от begin до end, не включая end.Исходный массив при этом не меняется.', dataText: '.slice(begin, end)' },
	{ i: 11, discription: 'элементы 1, 2 (не включая 3)', dataText: '.slice(1, 3);' },
	{ i: 11, discription: 'копировать от 2‐го элемента с конца и дальше', dataText: '.slice(‐2); ' },
	{ i: 11, discription: 'скопируется весь массив', dataText: '.slice();' },
	{ i: 11, discription: '', dataText: 'function compareNumeric(a, b) {if (a > b) return 1;if (a < b) return ‐1;} .sort(compareNumeric); ' },
	{ i: 11, discription: '', dataText: '.reverse();' },
	{ i: 11, discription: 'соединяет массивы', dataText: '.concat(3, 4);' },



	{ i: 11, discription: 'вернет false, не все положительные', dataText: 'function isPositive(number) {return number > 0;} .every(isPositive)' },
	{ i: 11, discription: 'вернет true, есть хоть одно положительное', dataText: 'function isPositive(number) {return number > 0;} .some(isPositive)' },
	{ i: 11, discription: 'copy – это объект, в который нужно копировать, он назван dst . Для упрощения доступа к нему можно указать его прямо в объявлении функции:', dataText: 'function copy(dst) {for (var i = 1; i <arguments.length; i++) { var arg = arguments[i]; for (var key in arg) { dst[key] = arg[key]; } } return dst;}' },
	{
		i: 11, discription: 'Метод reduce используется для вычисления на основе массива какого‑либо единого значения,иначе говорят «для свёртки массива».Он применяет функцию callback по очереди к каждому элементу массива слева направо, сохраняя при этом промежуточный результат.Аргументы функции callback(previousValue,currentItem, index, arr) :previousValue – последний результат вызова функции, он же «промежуточный результат».currentItem – текущий элемент массива, элементы перебираются по очереди слева‑направо.index – номер текущего элемента.arr – обрабатываемый массив.Например, в качестве «свёртки» мы хотим получить сумму всех элементов массива.', dataText: 'var arr = [1, 2, 3, 4, 5]// для каждого элемента массива запустить функцию,// промежуточный результат передавать первым аргументом далее var result =arr.reduce(function (sum, current) {return sum + current;}, 0);alert(result); // 15'
	},
	{ i: 11, discription: 'если не указана width, то width = 200', dataText: 'function showWarning(width, height, title, contents){width = width || 200; title = title || "Предупреждение"; } ' },

]

const copyDataClass = [
	{ i: 11, discription: '', dataText: 'class Car {constructor(brand, color) {this.brand = brand;this.color = color;}start() {}stop() {}static discount() {}}' },

	{ i: 11, discription: 'cetter позволяет добавить свойство, которого изначально нет в классе.', dataText: 'set rating(value){this.score = value.toUpperCase();}' },
	{ i: 11, discription: 'getter позволяет взять значение этого свойства', dataText: 'get rating(){return this.score}' },
	{ i: 11, discription: 'дочерние классы полностью наследуют методы родителя и еще ожно добавить свои методы', dataText: 'class HibridCar extends Car {' },

]


const copyDataAsyncAwait = [
	{ i: 11, discription: 'Promise', dataText: 'function sleep(time) {return new Promise((resolve, reject) => {	if (time < 1000) { reject("слишком мало поспал") } setTimeout(() => resolve(`поспал ${time}`), time)})}   sleep(1500).then(res => {console.log(res);	return sleep(1000)}).then(res => {console.log(res);return sleep(500)}).then(res => {console.log(res);}).catch(err => {console.log("ошибка", err);})' },
	{ i: 11, discription: 'async/await', dataText: 'const getGitData = async () => {try {	const responce = await fetch("https://api.github.com/users/vasilymur");	const data = await responce.json();console.log(data);} catch (err) {console.log("err", err);}} getGitData()' },
	{ i: 11, discription: 'async/await', dataText: 'const getUserVideo = async () => {try {const response = await navigator.mediaDevices.getUserMedia({ video: true });video.srcObject = response;} catch (err) {console.log("err", err);}}getUserVideo();' },
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
