import { ref } from "vue";
import { defineStore } from "pinia";

export const useTask = defineStore("taskLager", {
  state: () => {
    return {
      dataScss: [
        [
          { title: "Allgemein" },
          { i: 1, dataText: "text-align: center;" },

          { i: 1, dataText: "margin: 0 0 0 0;" },
          { i: 1, dataText: "margin: 0 auto;" },
          { i: 1, dataText: "padding: 0 0 0 0;" },
          { i: 1, dataText: "width:  ;" },
          { i: 1, dataText: "max-width:  ;" },
          { i: 1, dataText: "height:  ;" },
          { i: 1, dataText: "min-height: ;" },
          { i: 1, dataText: "color:  ;" },
          { i: 1, dataText: "opacity:  ;" },
          { i: 10, dataText: "border: 3px solid ;" },
          { i: 10, dataText: "outline: 1px solid ;" },
          { i: 10, dataText: "border-radius: 10px;" },
          { i: 10, dataText: "border-top-left-radius: 10px;" },
          {
            i: 10,
            dataText:
              "box-shadow: 0px 8px 10px 0px rgba(0, 0, 0, .3), inset 0px 4px 1px 1px white, inset 0px -3px 1px 1px rgba(204, 198, 197, .5);",
          },
          { i: 10, dataText: "background: rgba(0,0,0,.75);" },
          { i: 1, dataText: "overflow: hidden;" },
          { i: 1, dataText: "overflow: scroll;" },

          { i: 1, dataText: "display: block;" },
          { i: 1, dataText: "display: inline-block;" },
          { i: 1, dataText: "display: none;" },

          { i: 1, dataText: "cursor: pointer;" },

          { i: 10, dataText: "&._is-active{}" },
          {
            i: 10,
            dataText:
              "* { scrollbar- width: thin;scrollbar - color: #04286f transparent;}  ",
            description: "mozilla",
          },
          {
            i: 10,
            dataText:
              "*::-webkit-scrollbar { width: 5px;}*::-webkit-scrollbar-track {background: transparent;}	*:: -webkit-scrollbar-thumb {background-color: #04286f transparent;}",
            description: "Chrome, Edge, and Safari ",
          },
          { i: 10, dataText: "filter: blur(6px);" },
          { i: 10, dataText: "background-image: url(../img/png/i-2.png);" },
          { i: 10, dataText: "background-repeat: no-repeat;" },
          { i: 10, dataText: "background-size: cover;" },
          { i: 10, dataText: "background-position: 50%;" },
          { i: 10, dataText: "backdrop-filter: blur(15px);" },
        ],
        [
          { title: "Grid" },
          { i: 1, dataText: "display: grid;" },
          { i: 2, dataText: "grid-template-columns: 100px 1fr;" },
          { i: 12, dataText: "grid-template-columns: repeat(3, 200px);" },
          {
            i: 2,
            dataText: "grid-template-columns: repeat(auto-fill, 200px);",
          },
          {
            i: 2,
            dataText: "grid-template-columns: minmax(100px, max-content);",
          },
          { i: 2, dataText: "column-gap: 34px;" },
          { i: 2, dataText: "row-gap: 15px;" },
          { i: 2, dataText: "gap: 37px 36px;" },
          { i: 3, dataText: "grid-auto-flow: row;" },
          {
            i: 4,
            dataText: "grid-auto-flow: column;",
            description:
              "автоматически создает равные колонки по размеру контента",
          },
          { i: 4, dataText: "grid-column: 1/3;" },

          {
            i: 6,
            dataText: "grid-auto-rows: max-content;",
            description: "прижимает к верху",
          },
          { i: 7, dataText: 'grid-template-areas: "a b c e" "a d c e";' },
          { i: 8, dataText: "._a{grid-area: a;}" },
          { i: 8, dataText: "._b{ grid- area: b;}" },
          { i: 9, dataText: "._c{ grid- area: c;}" },
        ],

        [
          { title: "Flex" },
          { i: 15, dataText: "display: flex;" },
          { i: 18, dataText: "justify-content: center;" },
          { i: 18, dataText: "align-items: center;" },
          { i: 17, dataText: "flex-direction: column;" },
          { i: 17, dataText: "justify-content: flex-start;" },
          { i: 17, dataText: "justify-content: flex-end;" },
          { i: 17, dataText: "justify-content:space-between;" },
          { i: 17, dataText: "justify-content:space-around;" },
          { i: 17, dataText: "justify-content: left;" },
          { i: 19, dataText: "justify-content: right;" },
          { i: 20, dataText: "justify-content: baseline;" },
          { i: 17, dataText: "justify-content: first baseline;" },
          { i: 20, dataText: "justify-content: last baseline;" },
          { i: 17, dataText: "justify-content: inherit;" },
          { i: 17, dataText: "justify-items: center;" },
          { i: 17, dataText: "justify-items: right;" },
          { i: 17, dataText: "align-items: flex-start;" },
          { i: 16, dataText: "align-items: flex-end;" },
          { i: 17, dataText: "align-items: self-start;" },
          { i: 17, dataText: "align-items: self-start;" },
          { i: 17, dataText: "flex-wrap: nowrap;" },
          { i: 17, dataText: "align-items: self-start;" },
          { i: 17, dataText: "flex: 0 1 100%;" },
          {
            i: 17,
            dataText: "flex-grow: 0; ",
            description:
              " элемент не может расти/растягиваться больше, чем исходный размер ",
          },
          {
            i: 17,
            dataText: "flex- shrink: 1; ",
            description:
              " элемент может сжиматься меньше, чем исходный размер ",
          },
          {
            i: 17,
            dataText: "flex - basis: auto; ",
            description:
              " исходный размер равен auto, то есть равен просто ширине элемента, но ширина элемента не задана, поэтому по содержимому ",
          },
        ],
        [
          { title: "Pseudo" },
          {
            i: 1,
            dataText: "",
            description: "https://developer.mozilla.org/ru/docs/Web/CSS/:hover",
          },
          {
            i: 1,
            dataText:
              '&::after{\n  content: "";\n  position: absolute;\n  background- color: ;\n  width: ;\n  height: ;\n  top: 0;\n  left: 0;\n  }',
            description: "",
          },
          {
            i: 1,
            dataText:
              '&::before{\n  content: "";\n  position: absolute;\n  background- color: ;\n  width: ;\n  height: ;\n  top: 0;\n  left: 0;\n  }',
            description: "",
          },

          { i: 1, dataText: "&:first-child{ }; ", description: "" },
          { i: 1, dataText: "&:first-of-type{ }; ", description: "" },
          { i: 1, dataText: "&:focus{ }; ", description: "" },
          { i: 1, dataText: "&:hover{ };", description: "" },
          { i: 1, dataText: "&:last-child{ };", description: "" },
          {
            i: 1,
            dataText: "&:last-of-type{ };",
            description:
              "Выбирает , являющийся последним элементом среди элементов своего типа среди своих соседей",
          },
          {
            i: 1,
            dataText: "&:not(p){ };",
            description: "Он находит элементы, не соответствующие селектору. ",
          },
          {
            i: 1,
            dataText:
              ":root { --main - color: hotpink;	--pane - padding: 5px 42px;};",
            description: "полезно для объявления CSS Переменных:",
          },
          {
            i: 1,
            dataText: "&:nth-last-of-type(4n){ };",
            description:
              "Выбирает каждый четвёртый элемент <p> среди любой группы соседних элементов,	отсчёт начинается с последнего элемента",
          },

          {
            i: 1,
            dataText: "&:has(+ p){}; ",
            description:
              "только для тегов < h1 >, следом за которыми идёт тег < p > ",
          },
          {
            i: 1,
            dataText: "&:nth-child(2n){ }; ",
            description:
              "Описывает чётные строки HTML таблицы: 2, 4, 6, и т. д.",
          },
          {
            i: 1,
            dataText: "&:nth-child(2n+1){ }; ",
            description: "Описывает нечётные строки : 1, 3, 5, и т. д.",
          },
          { i: 1, dataText: "&:nth-child( ){ };", description: "" },
          {
            i: 1,
            dataText: "&:nth-child(5n){ };",
            description: "Описывает элементы с номерами 5, 10, 15, и т. д.",
          },
          {
            i: 1,
            dataText: "&:nth-child(3n+4){ };",
            description: "Описывает элементы с номерами 4, 7, 10, 13, и т. д.",
          },
          {
            i: 1,
            dataText: "&:nth-child(-n+3){ };",
            description:
              "Описывает первые три элемента среди группы соседних элементов.",
          },
          {
            i: 1,
            dataText: "p:nth-child(0n+1){ };",
            description:
              "Описывает каждый элемент <p>, являющийся первым среди группы соседних элементов.",
          },
          {
            i: 1,
            dataText: "&:nth-last-child(-n + 3){ };",
            description: "последние 3 потомка",
          },
        ],
        [
          { title: "Position" },
          { i: 11, dataText: "position: relative; " },
          { i: 11, dataText: "position: absolute;" },
          { i: 10, dataText: "top: 50%;" },
          { i: 10, dataText: "left: 50%;" },
          { i: 10, dataText: "right: auto;" },
          { i: 10, dataText: "bottom: 0;" },
          { i: 10, dataText: "transform: translate(-50%, -50%);" },
          { i: 10, dataText: "transform: rotate(180deg) translateY(50%);" },
          { i: 10, dataText: "transform: scale(1.1);" },
          { i: 10, dataText: "transform: scaleX(1);" },
          { i: 10, dataText: "transform-origin: top;" },
        ],
      ],
      dataJs: [
        [
          { title: "Suchen" },
          { dataText: "let = document.querySelector('');" },
          { dataText: 'let head = .querySelectorAll(" ");' },
          { description: "", dataText: '.closest("")' },
          {
            dataText: ".nextElementSibling",
            description:
              "только для чтения возвращает элемент, следующий непосредственно за указанным в списке дочерних элементов его родителя, или nullесли указанный элемент является последним в списке.",
          },
          {
            dataText: ".parentElement",
            description:
              "только для чтения, Nodeвозвращает родителя узла DOM Elementили, nullесли у узла нет родителя или его родитель не является DOM",
          },
          {
            dataText: "Node.baseURI",
            description:
              "Возвращает строку, представляющую базовый URL-адрес документа, содержащего Node.",
          },
          {
            dataText: "Node.childNodes",
            description:
              "Возвращает живой объект NodeList, содержащий все дочерние элементы данного узла (включая элементы, текст и комментарии). NodeListЕсли дочерние элементы Nodeизменяются, NodeListобъект автоматически обновляется.",
          },
          {
            dataText: "Node.firstChild",
            description:
              "Возвращает , Nodeпредставляющий первый прямой дочерний узел узла, или nullесли у узла нет дочернего узла.",
          },
          {
            dataText: "Node.lastChild",
            description:
              "Возвращает , Nodeпредставляющий последний прямой дочерний узел узла, или nullесли у узла нет дочернего узла.",
          },
          {
            dataText: "Node.nextSibling",
            description:
              "Возвращает , Nodeпредставляющий следующий узел в дереве, или , nullесли такого узла нет.",
          },
          {
            dataText: "Node.nodeValue",
            description: "Возвращает/устанавливает значение текущего узла.",
          },
          {
            dataText: "Node.parentNode",
            description:
              "Возвращает , Nodeкоторый является родителем этого узла. Если такого узла нет, например, если этот узел является вершиной дерева или не участвует в дереве, это свойство возвращает null.",
          },
          {
            dataText: "Node.parentElement",
            description:
              "Возвращает , Elementкоторый является родителем этого узла. Если у узла нет родителя или если этот родитель не является Element, это свойство возвращает null.",
          },
          {
            dataText: "Node.previousSibling",
            description:
              "Возвращает , Nodeпредставляющий предыдущий узел в дереве, или , nullесли такого узла нет.",
          },
          {
            dataText: "",
            description: "",
          },
          {
            dataText: "",
            description: "",
          },
        ],
        [
          { title: "Allgemein" },
          { dataText: "const = () => {};" },
          { dataText: "e.target" },
          { dataText: "let = document.querySelector('');" },
          { dataText: 'let head = .querySelectorAll(" ");' },
          { dataText: "let headItems =[...head.children]; " },
          { dataText: '.classList.add("_is-active");' },
          { dataText: '.classList.remove("_is-active");' },
          { dataText: '.classList.toggle("_is-active");' },
          { dataText: '.classList.contains("_is-active");' },
          { dataText: '.addEventListener("click",(e) => {});' },
          { dataText: '.addEventListener("input",(e) =>{ });' },
          { dataText: ".innerHTML =" },
          {
            description:
              "Node.innerText - это свойство, позволяющее задавать или получать текстовое содержимое элемента и его потомков. В качестве геттера, свойство приближается к тексту, который пользователь получит, если он выделит содержимое элемента курсором, затем копирует его в буфер обмена.",
            dataText: ".innerText = ",
          },
          {
            description:
              "textContent получает содержимое всех элементов, включая<script> и <style>",
            dataText: ".textContent =",
          },
          {
            description: "возвращает добавленный Nodeобъект",
            dataText: ".appendChild(add);",
          },
          {
            description:
              "вставляет набор Nodeобъектов или строк после последнего дочернего элемента Element,не имеет возвращаемого значения, тогда как Node.appendChild()возвращает добавленный Nodeобъект.",
            dataText: ".append();",
          },
          {
            description:
              "вставляет набор Nodeобъектов или строк перед первым дочерним элементом Element. ",
            dataText: '.prepend(param1, "foo");',
          },
          {
            description:
              'анализирует указанный текст как HTML или XML и вставляет полученные узлы в дерево DOM в указанной позиции. "beforebegin"Перед элементом.Действительно только если элемент находится в дереве DOM и имеет родительский элемент."afterbegin"Прямо внутри элемента, перед его первым дочерним элементом."beforeend"Внутри элемента, после его последнего дочернего элемента."afterend"После элемента.Действительно только если элемент находится в дереве DOM и имеет родительский элемент.',
            dataText: '.insertAdjacentHTML("beforeend", html);',
          },

          {
            description:
              "удаляет дочерний узел из DOM и возвращает удаленный узел.",
            dataText: ".removeChild(add);",
          },
          { description: "удаляет элемент из DOM", dataText: ".remove();" },

          { dataText: '.getAttribute("name");' },
          { dataText: '.setAttribute("name", "helloButton");' },
          { dataText: '.removeAttribute("disabled");' },
          { dataText: '.toggleAttribute("disabled");' },
          { dataText: '.hasAttribute("name");' },
          { dataText: "input.onchange = function() {};" },
          { description: "ИЛИ", dataText: "||" },
          { description: "И", dataText: "&&" },
          { description: "НЕ", dataText: "!" },
          { dataText: 'document.createElement(" ");' },
          {
            dataText:
              ".push({ id: Index, Offset: 0, value: canvasItem.value });",
          },
          { dataText: '.style = "color:red";' },
          { dataText: '.style.background = "  ";' },
          { dataText: ".style.cssText= `${val}`;" },
          { dataText: "hidden.style.height = `${hidden.scrollHeight}px`;" },
          { dataText: '.matches(".popup-overlay-js")' },
          {
            dataText:
              'document.addEventListener("DOMContentLoaded", function(){ });',
          },
        ],
        [
          { title: "Zyklus" },
          { dataText: ".forEach(car => {  })" },
          { dataText: "for (i = 0; i < 3; i++) { alert( i ); }" },
          {
            dataText:
              "for(const index in cars){ console.log(cars[index]); if (index == 3) { break } }",
          },
          {
            dataText:
              'for( const car of cars ){ if (car === "bmw") { break } console.log(car); }',
          },
          { dataText: "var i = 0; while (i < 3) { alert( i ); i++; }" },
          {
            description:
              " при i, равном 0, значение в скобках будет false и цикл остановится",
            dataText: "var i = 3; while (i) {  alert( i ); i‐‐; }",
          },
          { dataText: "var i = 0; do { alert( i ); i++; } while (i < 3);" },

          {
            description: "Прерывание цикла: break",
            dataText:
              'var sum = 0; while (true) { var value = +prompt("Введите число", ""); if (!value) break; sum += value; } alert( "Сумма:" + sum );',
          },
          {
            description:
              "завершает выполнение инструкций на текущей итерации текущего или помеченного цикла и продолжает выполнение цикла на следующей итерации.",
            dataText:
              "for (var i = 0; i < 10; i++) { if (i % 2==0) continue; alert(i); }",
          },
          {
            description: "Цикл, который обрабатывает только нечётные значения",
            dataText:
              "for (var i = 0; i < 10; i++) { if (i % 2) { alert( i ); } }",
          },
          {
            description: "switch",
            dataText:
              'var a = 2 + 2; switch (a) { case 3: alert( "Маловато" ); break; case 4: alert( "В точку!" ); break; case 5: alert( "Перебор" ); break; default: alert( "Я таких значений не знаю" ); }',
          },
        ],
        [
          { title: "Array" },
          { description: "", dataText: ".forEach((cell) => { }); " },
          { description: "", dataText: ".indexOf(0)" },
          { description: "", dataText: ".find((item) => item.id == id)" },
          {
            description:
              "повторит значение переменной spase столько раз, какое чмсло в переменной Offset ",
            dataText: "spase.repeat(Offset)",
          },
          {
            description:
              "создаёт новый массив, который будет состоять из результатов вызова callback(item, i, arr) для каждого элемента arr",
            dataText: ".map((car) => { return car });",
          },
          {
            description:
              " создаёт новый массив, в который войдут только те элементы arr , для которых вызов callback(item, i, arr) возвратит true .",
            dataText:
              ".filter((foo) => { return foo.value !== newLineas[i].value }); ",
          },
          {
            description:
              "Удаляет последний элемент из массива и возвращает его",
            dataText: ".pop()",
          },
          {
            description: "Добавляет элемент в конец массива",
            dataText:
              ".push({ id: Index, Offset: 0, value: canvasItem.value });",
          },
          {
            description: "Удаляет из массива первый элемент и возвращает его",
            dataText: ".shift();",
          },
          {
            description: "Добавляет элемент в начало массива:",
            dataText: '.unshift("Яблоко");',
          },
          {
            description:
              "позволяет превратить строку в массив, разбив ее по разделителю s",
            dataText: '.split(", ", 2);',
          },
          {
            description:
              "берет массив и склеивает его в строку, используя str как разделитель",
            dataText: '.join(";");',
          },
          {
            description: "значение с индексом 1 удалено",
            dataText: "delete arr[1];",
          },
          {
            description: " начиная с позиции 1, удалить 1 элемент",
            dataText: ".splice(1, 1);",
          },
          {
            description:
              "удалить 3 первых элемента и добавить другие вместо них",
            dataText: '.splice(0, 3, "Мы", "изучаем")',
          },
          {
            description: "удалить 2 первых элемента",
            dataText: ".splice(0, 2);",
          },
          {
            description:
              'с позиции 2 // удалить 0 // вставить "сложный", "язык"',
            dataText: '.splice(2, 0, "сложный", "язык");',
          },
          {
            description:
              "начиная с позиции индексом ‐1 (перед последним элементом) // удалить 0 элементов, // затем вставить числа 3 и 4",
            dataText: ".splice(‐1, 0, 3, 4);",
          },
          {
            description:
              "копирует участок массива от begin до end, не включая end.Исходный массив при этом не меняется.",
            dataText: ".slice(begin, end)",
          },
          {
            description: "элементы 1, 2 (не включая 3)",
            dataText: ".slice(1, 3);",
          },
          {
            description: "копировать от 2‐го элемента с конца и дальше",
            dataText: ".slice(‐2); ",
          },
          { description: "скопируется весь массив", dataText: ".slice();" },
          {
            description: "",
            dataText:
              "function compareNumeric(a, b) {if (a > b) return 1;if (a < b) return ‐1;} .sort(compareNumeric); ",
          },
          { description: "", dataText: ".reverse();" },
          { description: "соединяет массивы", dataText: ".concat(3, 4);" },

          {
            description: "вернет false, не все положительные",
            dataText:
              "function isPositive(number) {return number > 0;} .every(isPositive)",
          },
          {
            description: "вернет true, есть хоть одно положительное",
            dataText:
              "function isPositive(number) {return number > 0;} .some(isPositive)",
          },
          {
            description:
              "copy – это объект, в который нужно копировать, он назван dst . Для упрощения доступа к нему можно указать его прямо в объявлении функции:",
            dataText:
              "function copy(dst) {for (var i = 1; i <arguments.length; i++) { var arg = arguments[i]; for (var key in arg) { dst[key] = arg[key]; } } return dst;}",
          },
          {
            description:
              "Метод reduce используется для вычисления на основе массива какого‑либо единого значения,иначе говорят «для свёртки массива».Он применяет функцию callback по очереди к каждому элементу массива слева направо, сохраняя при этом промежуточный результат.Аргументы функции callback(previousValue,currentItem, index, arr) :previousValue – последний результат вызова функции, он же «промежуточный результат».currentItem – текущий элемент массива, элементы перебираются по очереди слева‑направо.index – номер текущего элемента.arr – обрабатываемый массив.Например, в качестве «свёртки» мы хотим получить сумму всех элементов массива.",
            dataText:
              "var arr = [1, 2, 3, 4, 5]// для каждого элемента массива запустить функцию,// промежуточный результат передавать первым аргументом далее var result =arr.reduce(function (sum, current) {return sum + current;}, 0);alert(result); // 15",
          },
          {
            description: "если не указана width, то width = 200",
            dataText:
              'function showWarning(width, height, title, contents){width = width || 200; title = title || "Предупреждение"; } ',
          },
        ],
        [
          { title: "Koordinate" },
          {
            dataText: "",
            description:
              "https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect",
          },
          {
            dataText: "clientX  clientY",
            description: "координаты курсора мыши oтносительно окна браузера",
          },
          {
            dataText: "pageX pageY",
            description: "координаты курсора мыши oтносительно документа",
          },
          {
            dataText: ".getBoundingClientRect()",
            description:
              "возвращает размер элемента и его позицию относительно viewport (часть страницы, показанная на экране, и которую мы видим).",
          },
          {
            dataText: "top/bottom ",
            description:
              "– Y-координата верхней/нижней границы прямоугольника,",
          },
          {
            dataText: "left/right ",
            description: "– X-координата левой/правой границы прямоугольника.",
          },
          {
            dataText: "left top",
            description: "координаты верхнего левого угла",
          },
          {
            dataText: "right = x + width  bottom = y + height",
            description: "координаты правого нижнего",
          },
          {
            dataText:
              'let message = document.createElement("div"); let coords = elem.getBoundingClientRect();  message.style.left = coords.left + "px";	message.style.top = coords.bottom + "px";',
            description: "",
          },
          { dataText: "", description: "Координаты события" },
          {
            dataText:
              'let elem = document.querySelector("#elem");window.addEventListener("mousemove", function (event) {	elem.innerHTML = event.pageX + ":" + event.pageY;	}); ',
            description: "",
          },

          {
            dataText: ".offsetLeft; .offsetTop; ",
            description:
              "расстояние от верхнего края (offsetTop) или левого края (offsetLeft) текущего элемента до ближайшего родительского элемента (или до самого body, если родительских элементов нет).",
          },
        ],
        [
          { title: "1,2,3 ..." },
          {
            dataText: "Math.max.apply(null, Array);",
            description: "максимального элемента в числовом массиве",
          },
          { dataText: "access = age > 14 ? true : false;" },
          {
            dataText:
              "var age = prompt('возраст?', 18); var message = (age < 3) ? 'Здравствуй, малыш!' : (age < 18) ? 'Привет!' : (age < 100) ? 'Здравствуйте!' : 'Какой необычный возраст!' ; alert( message );",
          },
          {
            description: "рекурсия",
            dataText:
              "function sumTo(n) { if (n == 1) return 1; return n + sumTo(n ‐ 1); } alert( sumTo(100) );",
          },

          {
            description: "Преобразование к числу",
            dataText: 'var s = "12.34"; alert( +s ); ',
          },
          { description: "Округляет вниз", dataText: "Math.floor(3.1)" },
          {
            description: "Округляет вверхalert( Math.round(3.1) ); // 3",
            dataText: " Math.ceil(3.1) ",
          },
          {
            description: "Округляет до ближайшего целого",
            dataText: "Math.round(3.1)",
          },
          {
            description: "математические методы",
            dataText:
              "page 110 Math.max(a, b, c...) Math.min(a, b, c...) Math.random() toLocaleString()",
          },
        ],
        [
          { title: "Zeile" },
          {
            description: "",
            dataText:
              '"https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String"',
          },
          {
            description:
              "Оператор typeof возвращает строку, указывающую тип значения операнда.",
            dataText: 'typeof "blubber"',
          },
          { description: "Длина", dataText: "length;" },
          { description: "Доступ к символам", dataText: "charAt(позиция);" },
          { description: "Доступ к символам", dataText: "str[0];" },
          { description: "Смена регистра", dataText: "toLowerCase();" },
          { description: "Смена регистра", dataText: "toUpperCase();" },
          {
            description:
              "проверяет с учётом регистра, содержит ли строка заданную подстроку, и возвращает, соответственно true или false.",
            dataText: ".includes(word);",
          },
          {
            description: "Индекс первого вхождения «й» с начала строки ",
            dataText: ".indexOf('й')",
          },
          {
            description:
              "возвращает позицию, на которой находится подстрока или ‐1 , если ничего не найдено",
            dataText: 'str.indexOf("id", начальная_позиция))',
          },
          {
            description:
              ".substring(start, end) возвращает подстроку с позиции start до, но не включая end",
            dataText: ".substring(0,1);",
          },
          {
            description:
              ".substr(start [, length]) Первый аргумент имеет такой же смысл, как и в substring , а второй содержит не конечную позицию, а количество символов.",
            dataText: ".substr(2,4);",
          },
          {
            description:
              ".slice(start [, end]) Возвращает часть строки от позиции start до, но не включая, позиции end .Смысл параметров – такой же как в substring",
            dataText: ".slice(start [, end])",
          },
          {
            description:
              "slice Отрицательные значения отсчитываются от конца строки",
            dataText: ".slice(‐2); ",
          },
          {
            description:
              "substring(start, end) работают с отрицательными и выходящими за границу строки аргументами",
            dataText: ".substring(‐2); ",
          },
          {
            description:
              "str1.localeCompare(str2) возвращает ‐1 , если str1 < str2 , 1 , если str1> str2 и 0 , если они равны.",
            dataText: '.localeCompare("Яблони"); ',
          },
        ],

        [
          { title: "Objekt" },
          {
            description: "",
            dataText: 'var person = {}; person.name = "Вася"; person.age = 25;',
          },
          { description: "удаление", dataText: "delete person.age;" },
          {
            description: " ",
            dataText:
              'var menuSetup = {width: 300,height: 200,title: "Menu"}; ',
          },
          { description: "in проверка наличия", dataText: '"test" in obj ; ' },
          {
            description: "Доступ к свойству через переменную",
            dataText:
              'var person = {}; person.age = 25; var key = "age"; person[key]; person["age"]',
          },
          {
            description: "цикл по ключам",
            dataText:
              'var user = {name: "Вася",surname: "Петров",user.age = 25;}for (var prop in user) {alert(prop); // name, surname, age}',
          },
          {
            description: "Клонирование объектов",
            dataText:
              'var user = {name: "Вася",age: 30};var clone = {}; // новый пустой объект// скопируем в него все свойства user for (var key in user) {clone[key] = user[key];}// теперь clone ‐ полностью независимая копия clone.name = "Петя"; // поменяли данные в clone alert(user.name); // по‐прежнему "Вася"',
          },
          {
            description:
              "метод копирует все перечислимые собственные свойства из одного или нескольких исходных объектов в целевой объект . Он возвращает измененный целевой объект.",
            dataText:
              "const target = { a: 1, b: 2 };const source = { b: 4, c: 5 };const returnedTarget = Object.assign(target, source); ",
          },
          {
            description: "delete удаляет свойство из объекта",
            dataText: "delete user.name;",
          },
          {
            description:
              "Опциональная цепочка ?. останавливает вычисление и возвращает undefined, если значение перед ?. равно undefined или null.",
            dataText: "user?.address?.street",
          },
          {
            description: "проверка наличия свойства",
            dataText: 'if("address" in User ){console.log(User.address);}; ',
          },
          {
            description: "перебор всех свойств объеков",
            dataText: "for (var key in User) {console.log(prop);}",
          },
          {
            description: "функция конструктор",
            dataText:
              'function UserInfo(name, age) {// неявно создается новый объект this{}//this.name = name;this.age = age// return this; неявно} console.log(new UserInfo("bill", 20)); ',
          },
        ],
        [
          { title: "Ereignisse" },
          {
            description: "",
            dataText: ".mousedown = (event) => {};",
          },
          {
            description: "",
            dataText: ".onblur = (event) => {}; ",
          },
          {
            description: "",
            dataText: ".onclick = (event) => {}; ",
          },
          {
            description: "",
            dataText: ".onfocus = (event) => {};",
          },
          {
            description: "",
            dataText: ".oninput = (event) => {};",
          },
          {
            description: "",
            dataText: ".onmouseenter = (event) => {};",
          },
          {
            description: "",
            dataText: ".onmouseleave = (event) => {};",
          },
          {
            description:
              "вызывается для элемента, когда указательное устройство (обычно мышь) перемещается, когда активная точка курсора находится внутри него.",
            dataText: ".onmousemove = (event) => {};",
          },
          {
            description:
              "возникает, Elementкогда указательное устройство (обычно мышь) используется для перемещения курсора таким образом, чтобы он больше не находился внутри элемента или одного из его дочерних элементов.",
            dataText: ".onmouseout = (event) => {};",
          },
          {
            description: "",
            dataText: ".onmouseover = (event) => {};",
          },
          {
            description:
              "при отпускании кнопки на указательном устройстве (например, мыши или трекпаде), когда указатель находится внутри него.",
            dataText: ".onmouseup = (event) => {};",
          },
          {
            description:
              "const mousewheel = (e, id) => {var delta = e.deltaY || e.detail || e.wheelDelta;if (delta > 0) {} else {}}",
            dataText: ".onwheel = (event) => {};",
          },
          {
            description: "",
            dataText: ".onscroll = (event) => {};",
          },
        ],

        [
          { title: "Class" },
          {
            description: "",
            dataText:
              "class Car {constructor(brand, color) {this.brand = brand;this.color = color;}start() {}stop() {}static discount() {}}",
          },

          {
            description:
              "cetter позволяет добавить свойство, которого изначально нет в классе.",
            dataText: "set rating(value){this.score = value.toUpperCase();}",
          },
          {
            description: "getter позволяет взять значение этого свойства",
            dataText: "get rating(){return this.score}",
          },
          {
            description:
              "дочерние классы полностью наследуют методы родителя и еще ожно добавить свои методы",
            dataText: "class HibridCar extends Car {",
          },
        ],
        [
          { title: "AsyncAwait" },
          {
            description: "Promise",
            dataText:
              'function sleep(time) {return new Promise((resolve, reject) => {	if (time < 1000) { reject("слишком мало поспал") } setTimeout(() => resolve(`поспал ${time}`), time)})}   sleep(1500).then(res => {console.log(res);	return sleep(1000)}).then(res => {console.log(res);return sleep(500)}).then(res => {console.log(res);}).catch(err => {console.log("ошибка", err);})',
          },
          {
            description: "async/await",
            dataText:
              'const getGitData = async () => {try {	const responce = await fetch("https://api.github.com/users/vasilymur");	const data = await responce.json();console.log(data);} catch (err) {console.log("err", err);}} getGitData()',
          },
          {
            description: "async/await",
            dataText:
              'const getUserVideo = async () => {try {const response = await navigator.mediaDevices.getUserMedia({ video: true });video.srcObject = response;} catch (err) {console.log("err", err);}}getUserVideo();',
          },
        ],
        [
          { title: "DragDrop" },
          {
            dataText:
              'let dragged = null; const source = document.getElementById("draggable"); source.ondragstart = (event) => {dragged = event.target; e.dataTransfer.dropEffect = "move" e.dataTransfer.effectAllowed = "move" e.dataTransfer.setData("item", id)};',
            description:
              '<p id="source" draggable="true"></p> https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/drop_event',
          },

          {
            dataText:
              'const dragoverHandler = (e) => {if (e.preventDefault) e.preventDefault();e.dataTransfer.dropEffect = "move";return false;}',
            description:
              "https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/drop_event",
          },
          {
            dataText:
              "const leaveHandler = (e) => {if (e.preventDefault) e.preventDefault();}",
            description:
              "https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/drop_event",
          },
          {
            dataText:
              'const onDrop = (e) => {if (e.stopPropagation)e.stopPropagation(); dragged.parentNode.removeChild(dragged);e.target.appendChild(dragged);   var Data = e.dataTransfer.getData("item");}',
            description:
              "https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/drop_event",
          },
        ],
      ],
      dataVue: [
        [
          { title: "Common" },
          {
            dataText: 'import Tab from "@/components/Tab.vue";',
            description: "",
          },
          { dataText: "var  = ref('');", description: "" },
          { dataText: "import { ref, onMounted } from 'vue'", description: "" },
          { dataText: "onMounted(() => {})", description: "" },
          {
            dataText: "transition(mode='easy-in-out' name='opentab')",
            description: "transition",
          },
          {
            dataText:
              ".opentab-enter-from {}.opentab-enter-to {}.opentab-leave-from {}.opentab-leave-to {}",
            description: "transition классы",
          },

          {
            dataText: 'v-html= " "',
            description:
              "содержимое будет вставляться как обычный HTML и не будет компилироваться или обрабатываться как шаблоны Vue.",
          },
          {
            dataText: 'v-show = " "',
            description:
              "Отображает элемент по условию, выполняя переключение у элемента CSS-свойства display в зависимости от истинности указанного выражения.Директива запускает анимации перехода при изменении состояния.",
          },
          {
            dataText: 'v-if= " "',
            description:
              "При переключении элемент и все содержащиеся в нём директивы / компоненты будут уничтожены и созданы заново.",
          },
          {
            dataText: "v-else",
            description:
              "предыдущий элемент должен иметь директиву v-if или v-else-if.Обозначает «блок else» для v-if или цепочки v-if/v-else-if.",
          },
          {
            dataText: "v-else-if",
            description:
              "Обозначает «блок else if» для v-if. Можно использовать для создания цепочек условий.",
          },
          { dataText: 'v-for="item in items" :key="item.id"', description: "" },
          {
            dataText: '@click="" ',
            description:
              "Прикрепляет обработчик события к элементу. Тип события определяется аргументом. .stop — вызывает event.stopPropagation()..prevent — вызывает event.preventDefault()..capture — отслеживает событие в режиме capture..self — вызывает обработчик только если событие произошло именно на этом элементе..{ keyAlias } — вызывает обработчик только при нажатии определённой клавиши..once — вызывает обработчик события только один раз..left — вызывает обработчик только по нажатию левой кнопки мыши..right — вызывает обработчик только по нажатию правой кнопки мыши..middle — вызывает обработчик только по нажатию средней кнопки мыши..passive — добавляет обработчик события DOM с опцией { passive: true }.",
          },
          {
            description:
              "Динамически привязывает один или несколько атрибутов или входных параметров компонента к выражению. .camel — преобразование имён атрибутов из kebab-case в camelCase..prop — форсирует установку привязки как свойством DOM. 3.2+.attr — форсирует установку привязки атрибутом DOM.",
            dataText: ':class="{ red: isRed }"',
          },
          { dataText: 'v-model=" "', description: "" },
          {
            dataText: "v-slot",
            description:
              "Обозначение именованного слота или слота, который получает входные параметры.",
          },
          {
            dataText: "v-pre",
            description:
              "Пропускает компиляцию для элемента и всех его потомков. Можно использовать для отображения необработанных тегов фигурных скобок. Пропуск большого количества элементов без директив на них также может ускорить компиляцию.",
          },
          {
            dataText: "v-cloak",
            description:
              "Директива остаётся на элементе, пока связанный с ним экземпляр компонента не завершит компиляцию. В сочетании с CSS-правилом [v-cloak] { display: none } позволяет скрывать нескомпилированные шаблоны до тех пор, пока не будет готов экземпляр компонента.",
          },
          {
            dataText: "v-once",
            description:
              "Отрисовывает один раз элемент или компонент. При последующих обновлениях данных и перерисовках элемент/компонент и все его потомки будут считаться статичными и пропускаться.",
          },
          {
            dataText: 'v-memo="[valueA, valueB]"',
            description:
              "Директива ожидает массив фиксированной длины зависимых значений, которые станут использоваться для сравнения при мемоизации. Если каждое значение массива осталось таким же, как при последней отрисовке, то обновление всего поддерева будет пропущено.",
          },
        ],
        [
          { title: ":class,:style" },
          {
            dataText: ':class="{(focused == true) ? "_is-light" : "" }" ',
            description: "",
          },
          {
            dataText: ':class="{ active: isActive }" ',
            description:
              "наличие класса active на элементе будет определяться истинностью значения свойства isActive.",
          },
          { dataText: ':class="classObject"', description: " " },
          {
            dataText:
              'computed: {classObject() {return { active: this.isActive && !this.error,"text-danger": this.error && this.error.type === "fatal"}}} ',
            description: " ",
          },
          { dataText: ':class="[activeClass, errorClass]', description: " " },

          {
            dataText:
              ':style="{ color: activeColor, fontSize: fontSize + "px" }"',
            description: " ",
          },
          {
            dataText: ':style="{backgroundColor: backGround}"',
            description: " ",
          },
        ],
        [
          { title: "ссылка на tag/custom directive/slot" },

          {
            dataText: " ",
            description: "ссылка на конкретный tag. аналог this",
          },
          { dataText: "input(type='text' ref='some')", description: "" },
          { dataText: "const some = ref(null)", description: "" },

          {
            dataText: " ",
            description: "custom directive прописывается в main.js",
          },
          {
            dataText:
              "app.directive('copy', {mounted(el) {el.addEventListener('click', (e) => {    });},}) ",
            description: "",
          },
          {
            dataText:
              "app.directive('blur', { updated(el, binding) { if (binding.value) { el.blur(); el.classList.add('_is-light'); } }, })",
            description: " ",
          },
        ],
        [
          { title: "Props" },
          { dataText: "", description: "В родителе" },

          {
            dataText:
              "Button(text = 'beispiele mischen' @someEvent = 'someEvent') ",
            description: "",
          },
          {
            dataText: "const someEvent = (data) => {console.log(data);}",
            description: "",
          },

          { dataText: "", description: "В потомке" },
          {
            dataText:
              "const props = defineProps({text: {type: String , required: false }}) ",
            description: "",
          },

          {
            dataText: "const emit = defineEmits(['someEvent']) ",
            description: "",
          },
          {
            dataText:
              "const HendleEventInput = () => { if (inputValue.value == 'test') { emit('anwortPositiv', data) } }",
            description: "",
          },
          { dataText: "", description: "" },
          { dataText: "", description: "работа с props" },
          {
            dataText:
              "const props = defineProps({item: {type: Array , required: false},}) ",
            description: "заходит на компонент",
          },
          {
            dataText:
              "import {  ref, onMounted, toRaw } from 'vue';var content = ref([]); onMounted(() => {content.value = toRaw(props.item)}) ",
            description:
              "на входе превращаем его в массив, с которым можно работать",
          },
          {
            dataText:
              ".tab__line(v-for='el in content' :key='index' ) p(v-for= 'foo in el' : key='index' ) {{ foo }}",
            description: "теперь можно выводить данные",
          },
        ],
        [
          { title: "Input" },
          {
            dataText:
              "TestInput(v-model='age') import TestInput from '@/components/TestInput.vue'; const age = ref('fff')",
            description: "В родителе",
          },
          {
            dataText:
              "input(type = 'text' @input = '$emit('update:modelValue', $event.target.value)' :value = 'modelValue') const props = defineProps({modelValue: {type: String,required: false}})",
            description: "В потомке",
          },
        ],
        [
          { title: "PINIA" },
          {
            dataText:
              "import { createPinia } from 'pinia'; const pinia = createPinia(); .use(pinia)",
            description: "инициализация в index.js",
          },
          {
            dataText: "import Stell from './../modules/stellen-vue/Stell.vue';",
            description: "",
          },
          {
            dataText:
              "[...document.querySelectorAll('.stell')].forEach((cell) => { createApp(Stell).use(createPinia()).mount(cell);",
            description:
              "здесь на каждый тег.stell накидывается экземпляр vue в котором уже есть доступ к PINIA",
          },

          {
            dataText: "",
            description:
              "делаем папку store отдельный файл в папке store, например taskStell.js",
          },
          {
            dataText:
              "import { defineStore } from 'pinia';export const useTask = defineStore('taskLager', {state: () => {return {', ",
          },

          {
            dataText:
              "export const useTaskSalut = defineStore('taskSalut', { state: () => ({ isActiveSalut: 'notActive', staat: [{ titleItem: 'Токарь', gehaltItem: '80', }, { titleItem: 'Токарь', gehaltItem: '80', },], isVisible: true, }, }), }); ]",
            description: "",
          },
          {
            dataText: "",
            description:
              "здесь isActiveSalut прописана как реактивная. можно менять ее значение в компонентах и она будет реакивно обновляться в хранилище. по новому значению можно что-то делать в других компонентах.",
          },

          {
            dataText: "import { useTaskSalut } from '../store/taskSalut'",
            description: "",
          },
          { dataText: "import { storeToRefs } from 'pinia'", description: "" },
          { dataText: "const store = useTaskSalut();", description: "" },
          {
            dataText: "const { isActiveSalut } = storeToRefs(store)",
            description: "",
          },
          {
            dataText:
              "import { useTask } from '@/store/taskLager' const store = useTask();",
          },
        ],
        [
          { title: "изображение" },
          {
            dataText: "",
            description:
              "делаем в assets папку img. в ней создаем файл img.js.туда же забрасываем картинки.",
          },
          {
            dataText: "import urlImgSalut from './salut.gif';",
            description: "",
          },
          {
            dataText: "import urlImgSalut1 from './salut1.gif';",
            description: "",
          },
          {
            dataText: "export { urlImgSalut, urlImgSalut1 };",
            description: "",
          },

          { dataText: "", description: "потом используем в компонентах." },
          {
            dataText: "import * as images from '@/assets/img/img.js'",
            description: "",
          },
          { dataText: "img(: src = 'images.urlImgSalut')", description: "" },

          {
            dataText: "import * as images from '@/assets/img/img.js'",
            description:
              "если нужно создать изображение и добавить его на страницу например к какому то тэгу some.value,который создан через ссылку input(type='text' ref='some')const some = ref(null).а потом например удалить через время",
          },
          {
            dataText: "const salut = document.createElement('img')",
            description: "",
          },
          {
            dataText: "salut.setAttribute('src', images.urlImgSalut)",
            description: "",
          },
          { dataText: "salut.classList.add('salut')", description: "" },
          {
            dataText: "some.value.closest('.plaza__line').append(salut)",
            description: "",
          },
          {
            dataText: "setTimeout(() => { salut.remove() }, 1000);",
            description: "",
          },
        ],
      ],
    };
  },
});
