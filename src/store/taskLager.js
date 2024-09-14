import { ref } from "vue";
import { defineStore } from "pinia";

export const useTask = defineStore("taskLager", {
  state: () => {
    return {
      dataScss: [
        [
          { title: "Allgemein" },
          { dataText: "text-align: center;" },
          {
            dataText: `display: grid;
place-items: center;`,
            description:
              "выровнять текст по центру блока со всех сторон (и горизонтально, и вертикально)",
          },

          { dataText: "margin: 0 0 0 0;" },
          { dataText: "margin: 0 auto;" },
          { dataText: "padding: 0 0 0 0;" },
          { dataText: "width:  ;" },
          { dataText: "max-width:  ;" },
          { dataText: "height:  ;" },
          { dataText: "min-height: ;" },
          { dataText: "color:  ;" },
          { dataText: "font-size:  px;" },
          { dataText: "font-weight: 600;" },
          { dataText: "opacity:  ;" },
          { i: 10, dataText: "border: 3px solid ;" },
          { i: 10, dataText: "outline: 1px solid ;" },
          { i: 10, dataText: "border-radius: 10px;" },
          { i: 10, dataText: "border-top-left-radius: 10px;" },
          {
            dataText:
              "box-shadow: 0px 8px 10px 0px rgba(0, 0, 0, .3), inset 0px 4px 1px 1px white, inset 0px -3px 1px 1px rgba(204, 198, 197, .5);",
          },
          {
            dataText: "text-shadow: 0px 8px 10px rgba(0, 0, 0, .3);",
          },
          {
            dataText: "white-spase: nowrap;",
          },
          { i: 10, dataText: "background: rgba(0,0,0,.75);" },
          { dataText: "overflow: hidden;" },
          { dataText: "overflow: scroll;" },

          { dataText: "display: block;" },
          { dataText: "display: inline-block;" },
          { dataText: "display: none;" },

          { dataText: "cursor: pointer;" },

          { i: 10, dataText: "transition: all 0.2s;" },
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
          { dataText: "display: grid;" },
          { i: 2, dataText: "grid-template-columns: 100px 1fr;" },
          {
            i: 2,
            dataText:
              "grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));",
          },
          { i: 12, dataText: " minmax(150px, 1fr)" },
          { i: 12, dataText: "grid-template-columns: repeat(3, 200px);" },
          {
            i: 2,
            dataText: "grid-template-columns: repeat(auto-fill, 200px);",
          },
          {
            i: 2,
            dataText: "grid-template-columns: minmax(100px, max-content);",
          },

          {
            i: 2,
            dataText:
              "grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));",
          },
          { i: 4, dataText: "grid-column: 1/3;" },
          { i: 4, dataText: "grid-row: 1/3;" },
          {
            dataText: "grid-column: 1/-1;",
            description:
              "переводит блок на первую позицию и блок занимает всю ширину",
          },
          { i: 2, dataText: "column-gap: 5px;" },
          { i: 2, dataText: "row-gap: 15px;" },
          { i: 2, dataText: "gap: 37px 36px;" },
          { i: 3, dataText: "grid-auto-flow: row;" },
          {
            i: 4,
            dataText: "grid-auto-flow: column;",
            description:
              "автоматически создает равные колонки по размеру контента",
          },

          {
            i: 6,
            dataText: "grid-auto-rows: max-content;",
            description: "прижимает к верху",
          },
          { i: 7, dataText: 'grid-template-areas: "a b c e" "a d c e";' },
          { i: 8, dataText: "._a{grid-area: a;}" },
          { i: 8, dataText: "._b{ grid-area: b;}" },
        ],

        [
          { title: "Flex" },
          { i: 15, dataText: "display: flex;" },

          { i: 17, dataText: "flex-direction: column;" },
          { i: 17, dataText: "flex: 0 1 100%;" },
          {
            i: 17,
            dataText: "flex-grow: 0; ",
            description:
              " элемент не может расти/растягиваться больше, чем исходный размер ",
          },
          {
            i: 17,
            dataText: "flex-shrink: 1; ",
            description:
              " элемент может сжиматься меньше, чем исходный размер ",
          },
          {
            i: 17,
            dataText: "flex-basis: auto; ",
            description:
              " исходный размер равен auto, то есть равен просто ширине элемента, но ширина элемента не задана, поэтому по содержимому ",
          },
          { i: 17, dataText: "flex-wrap: nowrap;" },
          { title: "justify" },
          { i: 18, dataText: "justify-content: center;" },
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
          { title: "align" },
          { i: 18, dataText: "align-items: center;" },
          { i: 17, dataText: "align-items: flex-start;" },
          { i: 16, dataText: "align-items: flex-end;" },
          { i: 17, dataText: "align-items: self-start;" },
          { i: 17, dataText: "align-items: self-start;" },

          { i: 17, dataText: "align-items: self-start;" },
          { title: "Position" },
          { i: 11, dataText: "position: relative; " },
          { i: 11, dataText: "position: absolute;" },
          { i: 11, dataText: "position: fixed;" },
          { i: 11, dataText: "z-index: ;" },
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
        [
          { title: "Pseudo" },
          {
            dataText: "https://developer.mozilla.org/ru/docs/Web/CSS/:hover",
          },
          {
            dataText:
              '&::after{\n  content: "";\n  position: absolute;\n  background- color: ;\n  width: ;\n  height: ;\n  top: 0;\n  left: 0;\n  }',
          },
          {
            dataText:
              '&::before{\n  content: "";\n  position: absolute;\n  background- color: ;\n  width: ;\n  height: ;\n  top: 0;\n  left: 0;\n  }',
          },

          { dataText: "&:first-child{ }; ", description: "" },
          { dataText: "&:first-of-type{ }; ", description: "" },
          { dataText: "&:focus{ }; ", description: "" },
          { dataText: "&:hover{ };", description: "" },
          { dataText: "&:last-child{ };", description: "" },
          {
            dataText: "li:not(:has(svg)) {}",
            description: "стили для <li>, которые НЕ содержат <svg>",
          },
          { dataText: "input:not([type='range'])", description: "" },
          { dataText: "&:has(svg) {};", description: "" },
          {
            dataText: ":where(span svg) {};",
            description:
              "выбирает все элементы <svg>, находящиеся внутри <span>.пишется отдельно. не относится к какому-то селектору.",
          },
          {
            dataText: "&:last-of-type{ };",
            description:
              "Выбирает , являющийся последним элементом среди элементов своего типа среди своих соседей",
          },
          {
            dataText: "&:not(p){ };",
            description: "Он находит элементы, не соответствующие селектору. ",
          },
          {
            dataText:
              ":root { --main - color: hotpink;	--pane - padding: 5px 42px;};",
            description: "полезно для объявления CSS Переменных:",
          },
          {
            dataText: "&:nth-last-of-type(4n){ };",
            description:
              "Выбирает каждый четвёртый элемент <p> среди любой группы соседних элементов,	отсчёт начинается с последнего элемента",
          },

          {
            dataText: "&:has(+ p){}; ",
            description:
              "только для тегов < h1 >, следом за которыми идёт тег < p > ",
          },
          {
            dataText: "&:nth-child(2n){ }; ",
            description:
              "Описывает чётные строки HTML таблицы: 2, 4, 6, и т. д.",
          },
          {
            dataText: "&:nth-child(2n+1){ }; ",
            description: "Описывает нечётные строки : 1, 3, 5, и т. д.",
          },
          { dataText: "&:nth-child( ){ };", description: "" },
          {
            dataText: "&:nth-child(5n){ };",
            description: "Описывает элементы с номерами 5, 10, 15, и т. д.",
          },
          {
            dataText: "&:nth-child(3n+4){ };",
            description: "Описывает элементы с номерами 4, 7, 10, 13, и т. д.",
          },
          {
            dataText: "&:nth-child(-n+3){ };",
            description:
              "Описывает первые три элемента среди группы соседних элементов.",
          },
          {
            dataText: "p:nth-child(0n+1){ };",
            description:
              "Описывает каждый элемент <p>, являющийся первым среди группы соседних элементов.",
          },
          {
            dataText: "&:nth-last-child(-n + 3){ };",
            description: "последние 3 потомка",
          },
          { title: "Table" },
        ],
      ],
      dataJs: [
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
            dataText: "typeof timeTaken",
            description:
              "используется для определения типа значения или переменной. Он возвращает строку, описывающую тип переданного ему операнда.",
          },
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
          { dataText: "for (let i = 0; i < .length; i++) {    }" },
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
          { title: "Suchen" },
          { dataText: "let = document.querySelector('');" },
          { dataText: 'let head = .querySelectorAll(" ");' },
          { dataText: '.closest("")' },
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
          { title: "Числа" },
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
          { title: "Array" },
          { dataText: ".forEach((cell) => { }); " },
          { dataText: ".indexOf(0)" },
          { dataText: ".find((item) => item.id == id)" },
          {
            dataText: "Object.values(obj)",
            description:
              "делает из объекта массивб содержащий значение каждого элемента",
          },
          {
            dataText: "Object.keys(obj)",
            description:
              "делает из объекта массивб содержащий ключ каждого элемента",
          },
          {
            dataText: "Object.entries(obj)",
            description:
              "Преобразование объекта в массив пар [ключ, значение]: [['a', 1], ['b', 2], ['c', 3]]",
          },
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
              "Таким образом, весь код:означает, что для каждого элемента массива item создается новый объект, который копирует все свойства исходного элемента и добавляет или заменяет свойство sortOrder, значение которого определяется как позиция item.title в массиве orderArray. Новый массив, созданный с помощью map, будет содержать такие обновленные объекты.Array.map(item => {...}):map — это метод массива, который принимает функцию обратного вызова и вызывает эту функцию для каждого элемента массива. В результате работы map создается новый массив, в котором каждый элемент — это результат выполнения переданной функции.item => {...} — это стрелочная функция, которая принимаем элемент массива как аргумент item и возвращает новый объект.({ ...item, sortOrder: orderArray.indexOf(item.title) }):{ ...item, sortOrder: ... } — это создание нового объекта с использованием оператора распространения (...). Он копирует все свойства объекта item в новый объект.sortOrder: orderArray.indexOf(item.title) — добавляет новое свойство sortOrder в этот объект. Значением этого свойства является индекс (indexOf) элемента item.title в массиве orderArray.Весь этот код заключен в круглые скобки (...) для того, чтобы JavaScript воспринимал его как выражение, возвращающее объект. Без скобок, фигурные скобки {} будут интерпретироваться как блок кода, а не как объект.",
            dataText: `пример map
              .map(item => ({ ...item, sortOrder: orderArray.indexOf(item.title) }));`,
          },
          {
            description:
              "Этот код на JavaScript сортирует массив объектов content в соответствии с порядком элементов в массиве orderArray. Изначальный массив content:Этот массив содержит объекты, каждый из которых имеет свойство title.Массив orderArray:Это массив строк, определяющий желаемый порядок сортировки для объектов из массива content.Использование map:Код проходит по каждому объекту в массиве content с помощью map и создает новый массив объектов. В каждый объект добавляется новое свойство sortOrder, которое содержит индекс (indexOf) элемента title из orderArray.Например, для объекта { title: 'Dativ' } sortOrder будет равно 1, потому что 'Dativ' находится на втором месте в orderArray.Сортировка (sort):Новый массив, возвращаемый map, сортируется с помощью функции sort.Функция sort сравнивает значения sortOrder у двух объектов a и b и сортирует их в порядке возрастания.Результат:После сортировки массив sortSlot будет содержать объекты из content в порядке, соответствующем порядку строк в orderArra ",
            dataText: `sort();  в соответствии с порядком элементов в массиве orderArray
            const content = [{ title: 'Dativ' }, { title: 'Nominativ Ersatz' }, { title: 'Dativ Ersatz' }, { title: 'Akkusativ Ersatz' }, { title: 'Nominativ' }, { title: 'Genitiv Ersatz' }, { title: 'Genitiv' }, { title: 'Plural' }, { title: 'Singular' }, { title: 'Akkusativ' }];

const orderArray = ['Nominativ', 'Dativ', 'Akkusativ', 'Genitiv', 'Nominativ Ersatz', 'Dativ Ersatz', 'Akkusativ Ersatz', 'Genitiv Ersatz', 'Singular', 'Plural'];

var sortSlot = content
	.map(item => ({ ...item, sortOrder: orderArray.indexOf(item.title) }))
	.sort((a, b) => a.sortOrder - b.sortOrder)
console.log(sortSlot);`,
          },
          {
            description:
              "функция сравнения — это () => Math.random() - 0.5. Она генерирует случайное число в диапазоне от -0.5 до 0.5, случайным образом меняя порядок элементов в массиве. ",
            dataText: `случайный sort();
const handlerClick = (Data) => {
  Data.sort(() => Math.random() - 0.5);
}
            ;`,
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
            dataText:
              "function compareNumeric(a, b) {if (a > b) return 1;if (a < b) return ‐1;} .sort(compareNumeric); ",
          },
          { dataText: ".reverse();" },
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
            link: "https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect",
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
          },
          { title: "Координаты события" },
          {
            dataText:
              'let elem = document.querySelector("#elem");window.addEventListener("mousemove", function (event) {	elem.innerHTML = event.pageX + ":" + event.pageY;	}); ',
          },

          {
            dataText: ".offsetLeft; .offsetTop; ",
            description:
              "расстояние от верхнего края (offsetTop) или левого края (offsetLeft) текущего элемента до ближайшего родительского элемента (или до самого body, если родительских элементов нет).",
          },
          { title: "Строки" },
          {
            link: "https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String",
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
              "позволяет превратить строку в массив, разбив ее по разделителю s",
            dataText: '.split(", ", 2);',
          },
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
          { title: "Примеры работы со строками" },
          {
            description: "извлекает часть строки до символа @",
            dataText: `const email = "example@domain.com";
const index = email.indexOf('@');
const username = email.substring(0, index);
console.log(username); // "example" `,
          },
          {
            description:
              " Форматирование даты и времени по умолчанию для текущей локали",
            dataText: `const date = new Date();
const formattedDate = date.toLocaleString();
console.log(formattedDate); // Например: "22.08.2024, 15:45:30" (для русской локали)
`,
          },
          {
            description:
              " Форматирование даты и времени с указанием конкретной локали и параметров:",
            dataText: `const date = new Date();
// Форматирование с указанием локали и опций
const formattedDate = date.toLocaleString('en-US', {
  weekday: 'long', // Полное название дня недели
  year: 'numeric', // Полное отображение года
  month: 'long', // Полное название месяца
  day: 'numeric', // Число месяца
  hour: '2-digit', // Часы в 2-значном формате
  minute: '2-digit', // Минуты в 2-значном формате
  second: '2-digit' // Секунды в 2-значном формате
});
console.log(formattedDate); // Например: "Thursday, August 22, 2024, 03:45:30 PM"
`,
          },
          {
            description:
              " количество секунд в удобочитаемый формат часов, минут и секунд, ",
            dataText:
              "function formatTime(seconds) {const hours = Math.floor(seconds / 3600); // 1 час = 3600 секундconst minutes = Math.floor((seconds % 3600) / 60); // 1 минута = 60 секундconst remainingSeconds = seconds % 60;return `${hours}ч ${minutes}м ${remainingSeconds}с`;}// Пример использованиconst totalSeconds = 7265; // Пример: 7265 секундconst formattedTime = formatTime(totalSeconds);console.log(formattedTime); // '2ч 1м 5с'",
          },
          {
            description:
              " количество секунд в удобочитаемый формат часов, минут и секунд,всегда отображались как двухзначные числа ",
            dataText:
              "const hours = String(Math.floor(seconds / 3600)).padStart(2, '0');const minutes = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');const remainingSeconds = String(seconds % 60).padStart(2, '0');return `${hours}ч ${minutes}м ${remainingSeconds}с`;",
          },
        ],

        [
          { title: "Objekt" },
          {
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
            dataText: ".mousedown = (event) => {};",
          },
          {
            dataText: ".onblur = (event) => {}; ",
          },
          {
            dataText: ".onclick = (event) => {}; ",
          },
          {
            dataText: ".onfocus = (event) => {};",
          },
          {
            dataText: ".oninput = (event) => {};",
          },
          {
            dataText: ".onmouseenter = (event) => {};",
          },
          {
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
            dataText: ".onscroll = (event) => {};",
          },
        ],
        [
          { title: "DragDrop" },
          {
            dataText:
              'let dragged = null; const source = document.getElementById("draggable"); source.ondragstart = (event) => {dragged = event.target; e.dataTransfer.dropEffect = "move" e.dataTransfer.effectAllowed = "move" e.dataTransfer.setData("item", id)};',
            description: '<p id="source" draggable="true"></p> ',
            link: "https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/drop_event",
          },

          {
            dataText:
              'const dragoverHandler = (e) => {if (e.preventDefault) e.preventDefault();e.dataTransfer.dropEffect = "move";return false;}',
            link: "https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/drop_event",
          },
          {
            dataText:
              "const leaveHandler = (e) => {if (e.preventDefault) e.preventDefault();}",
            link: "https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/drop_event",
          },
          {
            dataText:
              'const onDrop = (e) => {if (e.stopPropagation)e.stopPropagation(); dragged.parentNode.removeChild(dragged);e.target.appendChild(dragged);   var Data = e.dataTransfer.getData("item");}',
            link: "https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/drop_event",
          },
          { title: "Class" },
          {
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
          { title: "FORM js" },
          {
            dataText: `form(action="#" name="send-form").send#send-form
      .send__linia.input-field
            input#firstname(type='text' name='text1' value='' placeholder=' Denzel Washington')
            label.text-field__label(for='text1') *обычный инпут text
            span *поле обязательное для заполнения
      .send__linia.input-field
            input#email(type='email' name='text1' value='' placeholder=' Denzel Washington')
            label.text-field__label(for='text1') *обычный инпут email
            span *поле обязательное для заполнения
      .send__linia.input-field
            input#tel(type='tel' name='text1' value='' placeholder=' Denzel Washington')
            label.text-field__label(for='text1') *обычный инпут tel
            span *поле обязательное для заполнения
      .send__linia
            p Оценка:
            fildset.fildset-rating
                  .fildset-rating__items
                        input(type="radio" id="rating5" name='rating' value='5' )
                        label(for="rating5")
                              svg
                                    use(xlink:href='#star-empty')  
                        input(type="radio" id="rating4" name='rating' value='4' )
                        label(for="rating4")
                              svg
                                    use(xlink:href='#star-empty') 
                        input(type="radio" id="rating3" name='rating' value='3' )
                        label(for="rating3") 
                              svg
                                    use(xlink:href='#star-empty') 
                        input(type="radio" id="rating2" name='rating' value='2' )
                        label(for="rating2") 
                              svg
                                    use(xlink:href='#star-empty') 
                        input(type="radio" id="rating1" name='rating' value='1' )
                        label(for="rating1") 
                              svg
                                    use(xlink:href='#star-empty')
      .send__linia.textarea-field
            textarea#textarea4(name="textarea4" row='20' placeholder="Введите текст" )
            label(for='textarea4') textarea

      .send__linia.select
            input(type="hidden" name="formtown")
            button(type="button").dropdown-button
                  span Москва
                  svg.icon
                        use(xlink:href='#arrow-down')
            ul.dropdown-list
                  .dropdown-list-wrap
                        li.dropdown-list__item(data-value='Notes') Ростов-на-Дону
                        li.dropdown-list__item(data-value='Notes') Mосква
                        li.dropdown-list__item(data-value='Photo') Санкт Петербург
                        li.dropdown-list__item(data-value='Dictionary') Сан Франциско

      .send__linia.send__linia--check
            .fildset-checkbox
                  .form-check
                        input#55(type='checkbox' name="agry")
                        label(for='55') Согласен с  правилами публикации отзывов
      button.btn.btn-success.but-wave(type='submit') submit
//- form.form
//-       input(name='example_button' type='button' value='Лайкнуть статью')
//-       input(name='example_color' type='color' value='#55cc77')
//-       input(name='example_date' type='date')
//-       input(name='example_datetime-local' type='datetime-local')
//-       input(name='example_email' type='email')
//-       input(name='example_file' type='file')
//-       input(name='example_hidden' type='hidden' value='48784')
//-       input(name='example_image' type='image' src='/images/button_image.png' width='130' height='42')
//-       input(name='example_month' type='month')
//-       input(name='example_number' type='number')
//-       input(name='example_password' type='password')
//-       input(name='example_reset' type='reset' value='Очистить поля')
//-       input(name='example_tel' type='tel')
//-       input(name='example_time' type='time')
//-       input(name='example_url' type='url')
//-       input(name='example_week' type='week')`,
            description: "",

            link: "https://codepen.io/viktor-yushin/pen/KKjQwNW",
          },
          { title: "Promise js" },
          {
            dataText: `function doSomethingPromise(data) {
    return new Promise((resolve, reject) => {
        doSomething(data, (error, result) => {
            if (error) {
                reject(error);
            } else {
                resolve(result);
            }
        });
    });
}

// Использование
doSomethingPromise("некоторые данные")
    .then(result => console.log(result))
    .catch(error => console.error(error));`,

            description: `Промисификация в JavaScript — это процесс преобразования функций, использующих колбэки (т.е. функций, которые принимают колбэк в качестве аргумента), в функции, возвращающие промисы. Это делает код более читаемым и управляемым, особенно при работе с асинхронными операциями.
            Типичная функция, использующая колбэк, может выглядеть так:
            function doSomething(data, callback) {
    // Имитация асинхронной операции
    setTimeout(() => {
        if (data) {
            callback(null, "Успех!");
        } else {
            callback("Ошибка: данные не предоставлены", null);
        }
    }, 1000);
}
Вы можете преобразовать приведённую выше функцию в основанную на промисах двумя способами: вручную или с помощью util.promisify (в Node.js).
            `,
          },
          {
            dataText: `const util = require('util');
const doSomethingPromise = util.promisify(doSomething);

// Использование
doSomethingPromise("некоторые данные")
    .then(result => console.log(result))
    .catch(error => console.error(error));`,

            description: `Node.js предоставляет встроенный модуль util, который позволяет легко преобразовывать функции, использующие колбэки, в функции, использующие промисы.`,
          },
        ],
        [
          {
            title: "REGULAR EXPRESSION",
            description: `Регулярные выражения (RegExp) в JavaScript используются для поиска и работы с текстовыми строками на основе определенных шаблонов. Вот основные моменты, которые нужно знать о регулярных выражениях в JavaScript:
Основные синтаксисы:
/pattern/flags — базовый синтаксис регулярного выражения.
pattern — шаблон для поиска.
flags — флаги, которые изменяют поведение поиска.
`,
          },
          {
            title: "Примеры:",
          },
          {
            dataText: `const regex = /cat/g;
const str = "cat, caterpillar, concat";
console.log(str.match(regex)); // ["cat", "cat"]
`,
            description:
              "глобальный поиск, т.е. ищет все совпадения, а не только первое.",
          },
          {
            dataText: `const regex = /cat/i;
const str = "Cat, caterpillar, Concat";
console.log(str.match(regex)); // ["Cat"]
`,
            description:
              "Выполняет поиск без учета регистра, то есть a и A будут считаться равными.",
          },
          {
            dataText: `const regex = /^cat/m;
const str = "dog\ncat\nbird";
console.log(str.match(regex)); // ["cat"]

`,
            description:
              "Многострочный режим. В этом режиме символы ^ и $ соответствуют началу и концу каждой строки (между символами новой строки \n), а не только начала и конца всей строки.",
          },
          {
            dataText: `const regex = /cat.*dog/s;
const str = "cat\nis a dog";
console.log(str.match(regex)); // ["cat\nis a dog"]

`,
            description:
              "Включает режим dotAll, в котором символ . будет соответствовать любому символу, включая символы новой строки (\n). Без этого флага . не будет захватывать символ новой строки.",
          },
          {
            dataText:
              "const regex = /\u{1F60D}/u; const str = 'I love JavaScript Unicode'; console.log(str.match(regex)); // ['Unicode']",
            description:
              "Включает поддержку Unicode, позволяя использовать Unicode-коды символов  и корректно обрабатывать кодовые точки, которые занимают более одного 16-битного значения (суррогатные пары).",
          },
          {
            dataText: `const regex = /cat/y;
regex.lastIndex = 4;
const str = "dog cat catdog";
console.log(regex.exec(str)); // ["cat"]

`,
            description:
              "Включает режим 'привязки' (sticky). В этом режиме поиск будет выполняться только в текущей позиции строки, на которую указывает свойство lastIndex регулярного выражения. Если на этой позиции совпадение не найдено, дальнейший поиск не выполняется.",
          },
          {
            dataText: `const text = "This is a test (with some content inside).";
const regex = /\(([^)]+)\)/;
const match = text.match(regex);
if (match) {
  console.log(match[1]); // "with some content inside"
}

`,
            description: "Извлечение содержимого скобок",
          },
          {
            dataText: `const text = "Hello, World! 123";
const cleanedText = text.replace(/[^a-zA-Z]/g, '');
console.log(cleanedText); // "HelloWorld"

`,
            description: "Удаление всех неалфавитных символов из строки",
          },
          {
            dataText: `const str = "apple, banana   orange,grape";
const regex = /[\s,]+/;
const fruits = str.split(regex);
console.log(fruits); // ["apple", "banana", "orange", "grape"]

`,
            description:
              "Разбиение строки по любому числу пробелов или запятых",
          },
          {
            dataText: `const text = "Счет: 100$, скидка: 20%, итог: 80$.";
const regex = /\d+/g;
const numbers = text.match(regex);
console.log(numbers); // ["100", "20", "80"]

`,
            description: "Извлечение чисел из строки",
          },
          {
            dataText: `const html = "<div><p>This is a paragraph.</p></div>";
const regex = /<p>(.*?)<\/p>/;
const match = html.match(regex);
if (match) {
  console.log(match[1]); // "This is a paragraph."
}

`,
            description: "Извлечение текста между HTML-тегами",
          },
          {
            dataText: `const regex = /^\+7\(\d{3}\)\d{3}-\d{2}-\d{2}$/;
console.log(regex.test("+7(999)123-45-67")); // true
console.log(regex.test("79991234567")); // false

`,
            description:
              "Проверка, является ли строка номером телефона в формате +7(999)123-45-67",
          },
          {
            dataText: `const date = "2024-08-20";
const regex = /(\d{4})-(\d{2})-(\d{2})/;
const formattedDate = date.replace(regex, '$3/$2/$1');
console.log(formattedDate); // "20/08/2024"


`,
            description: ". Замена формата даты с YYYY-MM-DD на DD/MM/YYYY",
          },
          {
            dataText: `const text = "Hello world, This is a Test.";
const regex = /\b[A-Z][a-z]*\b/g;
const capitalWords = text.match(regex);
console.log(capitalWords); // ["Hello", "This", "Test"]
`,
            description: "Поиск слов, начинающихся с заглавной буквы",
          },
          {
            dataText: `const url = "https://www.example.com/path?query=123";
const regex = /^https?:\/\/(www\.)?([a-zA-Z0-9.-]+)\//;
const match = url.match(regex);
if (match) {
  console.log(match[2]); // "example.com"
}

`,
            description: "Извлечение доменного имени из URL",
          },
          {
            dataText: `const regex = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
console.log(regex.test("192.168.0.1")); // true
console.log(regex.test("999.999.999.999")); // false
`,
            description: "Проверка, является ли строка валидным IP-адресом",
          },
          {
            dataText: `const text = "Контакты: john.doe@example.com, jane_doe123@domain.co.uk";
const regex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g;
const emails = text.match(regex);
console.log(emails); // ["john.doe@example.com", "jane_doe123@domain.co.uk"]

`,
            description: "Поиск и замена всех email-адресов в тексте",
          },
          {
            title: "Флаги:",
          },
          {
            dataText: `g`,
            description:
              "глобальный поиск, т.е. ищет все совпадения, а не только первое.",
          },
          {
            dataText: `i`,
            description: "(ignore case) — регистронезависимый поиск.",
          },
          {
            dataText: `m`,
            description: `(multiline) — многострочный режим, ^ и $ соответствуют началу и концу строки соответственно.`,
          },
          {
            dataText: `s`,
            description: `(dotAll) — позволяет символу . соответствовать любому символу, включая символы новой строки.`,
          },
          {
            dataText: `u`,
            description: `(unicode) — включает поддержку символов Unicode.`,
          },
          {
            dataText: `y`,
            description: `(sticky) — поиск с учётом текущей позиции в строке (привязка).`,
          },
          {
            title: `конструкции: `,
          },
          {
            title: `1. Мета-символы`,
          },
          {
            dataText: `/c.t/`,
            description: `соответствует "cat", "cot", "cut". 
            . — Любой одиночный символ, кроме символа новой строки \n.`,
          },
          {
            dataText: `/\d/`,
            description: `соответствует "1", "2", "9". 
            \d — Любая цифра, эквивалентно [0-9].`,
          },
          {
            dataText: `/\D/`,
            description: `/\D/ соответствует "a", "b", "!". 
            \D — Любой символ, который не является цифрой, эквивалентно [^0-9].`,
          },
          {
            dataText: `/\w/`,
            description: `соответствует "a", "9", "_". 
            \w — Любая цифра, буква или подчеркивание, эквивалентно [a-zA-Z0-9_].`,
          },
          {
            dataText: `/\W/`,
            description: `соответствует "!", "#", " ".
            \W — Любой символ, который не является буквой, цифрой или подчеркиванием, эквивалентно [^a-zA-Z0-9_].`,
          },
          {
            dataText: `/\s/`,
            description: `соответствует пробелу, табуляции, новой строке. 
            \s — Любой пробельный символ (пробел, табуляция, новая строка и т.д.).`,
          },
          {
            dataText: `/\S/`,
            description: `соответствует "a", "9", "!". 
            \S — Любой символ, кроме пробельного.`,
          },
          {
            dataText: "/\bcat\b/",
            description: `соответствует "cat" в "cat dog", но не в "caterpillar". 
            \b — Граница слова (между словом и пробелом или началом/концом строки).`,
          },
          {
            dataText: `/\Bcat\B/`,
            description: `соответствует "caterpillar", но не "cat" в "cat dog". 
            \B — Не граница слова.`,
          },
          {
            title: `2. Якоря`,
          },
          {
            dataText: `/^cat/`,
            description: `соответствует "cat" в "cat dog", но не в "dog cat".
            ^ — Начало строки.
            `,
          },
          {
            dataText: `/cat$/`,
            description: `соответствует "cat" в "dog cat", но не в "cat dog". 
            $ — Конец строки.`,
          },
          {
            title: `3. Квантификаторы`,
          },

          {
            dataText: `/ca*t/`,
            description: `соответствует "ct", "cat", "caat".
            * — 0 или более раз
            `,
          },
          {
            dataText: `/ca+t/`,
            description: `соответствует "cat", "caat", но не "ct".
            + — 1 или более раз
            `,
          },
          {
            dataText: `/ca?t/`,
            description: `соответствует "ct" и "cat", но не "caat".
            ? — 0 или 1 раз.
            `,
          },
          {
            dataText: `/a{3}/`,
            description: ` соответствует "aaa".
            {n} — Ровно n раз.
            `,
          },
          {
            dataText: `/a{2,}/`,
            description: `соответствует "aa", "aaa", "aaaa".
            {n,} — n или более раз.
            `,
          },
          {
            dataText: `/a{2,4}/`,
            description: `соответствует "aa", "aaa", "aaaa", но не "a" или "aaaaa".
            {n,m} — От n до m раз.
            `,
          },
          {
            title: `4. Группировка и альтернативы`,
          },
          {
            dataText: `/(abc)/`,
            description: `соответствует "abc".
            ( ... ) — Группировка символов.
            `,
          },
          {
            dataText: `/a|b/`,
            description: `соответствует "a" или "b".
            | — Логическое "или"
            `,
          },
          {
            title: `5. Наборы и диапазоны`,
          },
          {
            dataText: `/[abc]/`,
            description: `соответствует "a", "b", "c".
            [abc] — Любой из указанных символов.
            `,
          },
          {
            dataText: `/[^abc]/`,
            description: `соответствует "d", "e", "1".
            [^abc] — Любой символ, кроме указанных.
            `,
          },
          {
            dataText: `/[a-z]/`,
            description: `соответствует любой строчной букве.
            [a-z] — Диапазон символов.
            `,
          },
          {
            dataText: `/[0-9]/`,
            description: `соответствует любой цифре.
            [0-9] — Диапазон цифр.
            `,
          },
          {
            title: `6. Специальные последовательности`,
          },
          {
            dataText: `/(?:abc)/`,
            description: `соответствует "abc", но не создает захватывающую группу.
            (?: ... ) — Группировка без захвата (non-capturing group).
            `,
          },
          {
            dataText: `/\d(?=px)/`,
            description: `соответствует "2" в "2px", но не "2" в "2em".
            (?= ... ) — Позитивная проверка вперед (positive lookahead)
            `,
          },
          {
            dataText: `/\d(?!px)/`,
            description: `соответствует "2" в "2em", но не "2" в "2px".
            (?! ... ) — Негативная проверка вперед (negative lookahead)
            `,
          },
          {
            dataText: `/(?<=\$)\d+/`,
            description: `соответствует "100" в "$100", но не "100" в "100$".
            (?<= ... ) — Позитивная проверка назад (positive lookbehind).
            `,
          },
          {
            dataText: `/(?<!\$)\d+/`,
            description: `соответствует "100" в "100$", но не "100" в "$100".
            (?<! ... ) — Негативная проверка назад (negative lookbehind)
            `,
          },
          {
            title: `7. Экранирование`,
          },
          {
            dataText: `/\./`,
            description: `соответствует символу точки ".".
            \ — Экранирование специальных символов
            `,
          },
        ],
      ],
      dataVue: [
        [
          { title: "Common" },
          {
            dataText: `import Button from "@/components/Button.vue";
            Button(  @click="clickHandler('Artikel',item)" svg='x-circle'  margin='0')
            `,
          },
          { dataText: "import { ref, onMounted } from 'vue'" },
          { dataText: "var  = ref('');" },
          { dataText: "const  =   ;" },
          { dataText: "var  =   ;" },
          { dataText: "const = () => {};" },
          { dataText: "@  =' ' " },
          { dataText: "onMounted(() => {})" },

          { dataText: 'v-for="item in items" :key="index"' },
          { dataText: ".value" },
          {
            dataText: '@click="handlerClick" ',
            description:
              "Прикрепляет обработчик события к элементу. Тип события определяется аргументом. .stop — вызывает event.stopPropagation()..prevent — вызывает event.preventDefault()..capture — отслеживает событие в режиме capture..self — вызывает обработчик только если событие произошло именно на этом элементе..{ keyAlias } — вызывает обработчик только при нажатии определённой клавиши..once — вызывает обработчик события только один раз..left — вызывает обработчик только по нажатию левой кнопки мыши..right — вызывает обработчик только по нажатию правой кнопки мыши..middle — вызывает обработчик только по нажатию средней кнопки мыши..passive — добавляет обработчик события DOM с опцией { passive: true }.",
          },
          { dataText: "const handlerClick = () => {};" },
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
            dataText: "isAuthenticated: (state) => !!state.user",
            description:
              "это способ проверить, определено ли свойство user в объекте state и не является ли оно ложным значением (таким как null, undefined, 0, '' и т.д.   дает true или false.  Первое !:Преобразует значение к логическому типу и инвертирует его. Второе !:Снова инвертирует значение, возвращая его в исходный логический тип. ).",
          },
          {
            dataText: `SvgIcon(name='flag')
    import SvgIcon from '@/components/SvgIcon.vue'`,
            description: "SvgIcon",
          },
          {
            dataText: "mes.value = `Hallo, ${data}.\\nSie sind im System!` ;",
            description:
              "Использование \n и CSS: white-space: pre-line;  заставляет браузер отображать переносы строк, заданные с помощью \n, как новые строки.",
          },
          {
            description:
              "гарантирует, что прокрутка произойдет после того, как Vue обновит DOM, что важно, если вы работаете с данными, которые могут изменять элементы на странице и таким образом влиять на прокрутку.",
            dataText: `scrollPosition.value = base.value.getBoundingClientRect().top;
            nextTick(() => {
            window.scrollTo({
            top: scrollPosition.value - 200,
            behavior: 'smooth', // Плавная прокрутка
            });
            });`,
          },
          { title: "Directiven" },
          {
            dataText: 'v-html=" "',
            description:
              "содержимое будет вставляться как обычный HTML и не будет компилироваться или обрабатываться как шаблоны Vue.",
          },
          {
            dataText: 'v-show=" "',
            description:
              "Отображает элемент по условию, выполняя переключение у элемента CSS-свойства display в зависимости от истинности указанного выражения.Директива запускает анимации перехода при изменении состояния.",
          },
          {
            dataText: 'v-if=" "',
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
          { title: ":class" },
          {
            dataText: `:class="[(modelValue !== '') ? '_is-light' : '']"`,
          },
          { dataText: ':class="[activeClass, errorClass]', description: " " },
          {
            dataText: ':class="{ active: isActive }" ',
            description:
              "наличие класса active на элементе будет определяться истинностью значения свойства isActive.",
          },
          { dataText: ':class="classObject"', description: " " },

          { title: "computed" },

          {
            dataText: `--//computed//--
            const count = ref(1)
const plusOne = computed(() => count.value + 1)
console.log(plusOne.value)// 2`,

            description: " ",
          },
          {
            dataText: `--//computed//--
            
            const count = ref(1)
const plusOne = computed({
  get: () => count.value + 1,
  set: val => {
    count.value = val - 1
  }
})
plusOne.value = 1
console.log(count.value) // 0`,

            description:
              "const count = ref(1):Создается реактивная переменная count, значение которой изначально равно 1.const plusOne = computed({ get: () => count.value + 1, set: val => { count.value = val - 1 } }):Создается вычисляемое свойство plusOne с использованием computed, которое имеет два свойства: get и set .get: Это функция, которая определяет, что возвращает вычисляемое свойство. В данном случае она возвращает count.value + 1 .set: Это функция, которая вызывается при изменении значения plusOne. В данном случае она устанавливает значение count.value, равное переданному значению минус 1 (val - 1). plusOne.value = 1:Это устанавливает значение plusOne в 1, что приводит к вызову set-метода.В set-методе val равно 1, поэтому значение count.value устанавливается в 1 - 1, то есть в 0.console.log(count.value):Выводит текущее значение count.value, которое на этот момент равно 0.",
          },
          { title: "watch,watchEffect" },
          {
            dataText: `--//watchEffect//--
            
            const count = ref(0)
watchEffect(() => console.log(count.value))
// -> выведет 0
setTimeout(() => {
  count.value++
  // -> выведет 1
}, 100)`,

            description:
              "watchEffect — это функция Vue, которая автоматически отслеживает все реактивные зависимости внутри переданной функции и повторно выполняет её при изменении этих зависимостей.В данном случае watchEffect будет отслеживать изменения count.value и выводить его значение в консоль при каждом изменении.",
          },

          {
            dataText: `--//наблюдение за геттер-функцией//-- 
const state = reactive({ count: 0 })
watch(
  () => state.count,
  (count, prevCount) => {
    /* ... */
  }
)
// наблюдение за ref-ссылкой
const count = ref(0)
watch(count, (count, prevCount) => {
  /* ... */
})`,

            description: "watch",
          },

          { title: ":style" },
          {
            dataText:
              ':style="{ color: activeColor, fontSize: fontSize + "px" }"',
            description: " ",
          },
          {
            dataText: ':style="{backgroundColor: backGround}"',
            description: " ",
          },
          {
            title: "ссылка на конкретный tag. аналог this",
          },
          { dataText: "ref='some'", description: "" },
          { dataText: "const some = ref(null)", description: "" },

          {
            title: "custom directive прописывается в main.js",
          },
          {
            description: "copy",
            dataText: `.directive("copy", {
    mounted(el) {
      el.addEventListener("click", (e) => {
        let add = document.createElement("textarea");
        document.querySelector("body").appendChild(add);
        add.textContent = el.value;
        add.select();
        navigator.clipboard.writeText(add.textContent);
        el.classList.add("_is-active");
        setTimeout(function () {
          add.remove();
          el.classList.remove("_is-active");
        }, 200);
      });
    },
  })`,
          },
          {
            description: "tool",
            dataText: `.directive("tool", {
    mounted(el) {
      let add = document.createElement("div");

      el.addEventListener("mouseover", (e) => {
        add.innerText = el.getAttribute("data");
        add.classList.add("add");
        document.querySelector("body").appendChild(add);
        // var xPosition = el.offsetLeft;
        // var yPosition = el.offsetTop;
        // console.log(xPosition, yPosition);
        // add.style.left = 0 + "px";
        // add.style.top = 0 + "px";
      });

      el.addEventListener("mouseleave", (e) => {
        add.remove();
      });
    },
  })`,
          },
          {
            dataText:
              "app.directive('blur', { updated(el, binding) { if (binding.value) { el.blur(); el.classList.add('_is-light'); } }, })",
          },
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
          { title: "emit" },
          {
            dataText: `const emit = defineEmits(['lineFertig'])`,
            description: "",
          },
          {
            dataText: `const HendlerClick = () => {
 emit('lineFertig', some.value)
}`,
            description: "",
          },
          { title: "Props" },

          {
            dataText: `Button(text="beispiele mischen" @someEvent="someEvent")
const someEvent = (data) => {
console.log(data);
}`,
            description: "В родителе",
          },
          {
            dataText: `button(type="button" @click="$emit('someEvent',text) , Button($event)").btn.but-wave {{ text }}
const props = defineProps({
text: {
type: String,
required: false
}
})`,
            description: "В потомке",
          },

          { title: "работа с props, toRaw " },
          {
            dataText: `const props = defineProps({item: {type: Array , required: false},})
            import {  ref, onMounted, toRaw } from 'vue';var content = ref([]); 
            onMounted(() => {content.value = toRaw(props.item)})
            `,
            description:
              "на входе превращаем его в массив, который можно только рендерить. при перезагрузке страницы весь код слетает. ",
          },
          {
            title:
              "чтобы не слетал код при перезагрзке страницы при рендеринге props, нужно использовать watchEffect",
          },
          {
            title:
              "этот компонент автоматически отсортирует элементы по указанному порядку.",
          },
          {
            dataText: `var content = reactive([]);
            watchEffect(() => {
	content.value = props.Slot
	const orderArray = ['Nominativ', 'Dativ', 'Akkusativ', 'Genitiv', 'Nominativ Ersatz', 'Dativ Ersatz', 'Akkusativ Ersatz', 'Genitiv Ersatz', 'Singular', 'Plural'];

	sortSlot.value = content.value
		.map(item => ({ ...item, sortOrder: orderArray.indexOf(item.title) }))
		.sort((a, b) => a.sortOrder - b.sortOrder)

}) `,

            description: `Этот код полезен в ситуациях, когда нужно динамически сортировать данные на основе какого-то заранее установленного порядка. С помощью watchEffect Vue автоматически отслеживает изменения пропса и обновляет сортированный список sortSlot, обеспечивая правильное отображение данных в компоненте.
            watchEffect(() => { ... }):

watchEffect — это реактивный эффект в Vue, который автоматически отслеживает все зависимости внутри переданной функции и выполняет её заново при изменении этих зависимостей.
content.value = props.Slot:

Этот код обновляет реактивную переменную content, присваивая ей значение пропса Slot. Это действие происходит каждый раз, когда props.Slot изменяется.
Определение orderArray:

orderArray — это массив строк, определяющий порядок, в котором элементы должны быть отсортированы. Этот порядок будет использоваться для сортировки объектов в content.value.
Сортировка массива:

sortSlot.value = content.value.map(...).sort(...) — здесь происходит два этапа:
map: Каждый объект из content.value копируется в новый объект, в который добавляется новое свойство sortOrder, основанное на позиции item.title в orderArray.
sort: Затем этот массив сортируется по значению sortOrder, что обеспечивает правильный порядок элементов.
Как это работает:
При каждом изменении props.Slot срабатывает watchEffect, и:
content.value обновляется, получая новое значение props.Slot.
Затем создается массив, в котором каждому элементу добавляется поле sortOrder, указывающее позицию его title в orderArray.
Массив сортируется по значению sortOrder.
Наконец, sortSlot.value обновляется отсортированным массивом.

            `,
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
          },
          {
            dataText:
              "[...document.querySelectorAll('.stell')].forEach((cell) => { createApp(Stell).use(createPinia()).mount(cell);",
            description:
              "здесь на каждый тег.stell накидывается экземпляр vue в котором уже есть доступ к PINIA",
          },

          {
            title:
              "делаем папку store отдельный файл в папке store, например taskStell.js",
          },
          {
            dataText:
              "import { defineStore } from 'pinia';export const useTask = defineStore('taskLager', {state: () => {return {dataScss: [],}; },});', ",
          },

          {
            dataText:
              "export const useTaskSalut = defineStore('taskSalut', { state: () => ({ isActiveSalut: 'notActive', staat: [{ titleItem: 'Токарь', gehaltItem: '80', }, { titleItem: 'Токарь', gehaltItem: '80', },], isVisible: true, }, }), }); ]",
          },
          {
            description: "простое использование store",
            dataText:
              "import { useTask } from '@/store/taskLager' const store = useTask();",
          },
          {
            title:
              "здесь isActiveSalut прописана как реактивная. можно менять ее значение в компонентах и она будет реакивно обновляться в хранилище. по новому значению можно что-то делать в других компонентах.",
          },

          {
            dataText: "import { useTaskSalut } from '../store/taskSalut'",
          },
          { dataText: "import { storeToRefs } from 'pinia'", description: "" },
          { dataText: "const store = useTaskSalut();", description: "" },
          {
            dataText: "const { isActiveSalut } = storeToRefs(store)",
          },
        ],
        [
          { title: "изображения" },

          {
            description: "делаем в assets/img/img.js",
            dataText: `import urlImgSalut from "./salut.gif";
import urlFon from "./fon1.jpg";
import urlFonSm from "./fon-sm.jpg";
import spin from "./spin.gif";
export { urlImgSalut, urlFon, urlFonSm, spin };`,
          },
          {
            description: "используем в компонентах",
            dataText: `	img(:src='Imgs.spin' alt='img')

import * as Imgs from '../assets/img/img';`,
          },
          {
            description: "один из вариантов",
            dataText: `import tabel1 from "./penImgs/tabel1.png";
import tabel2 from "./penImgs/tabel2.png";
const listImg = [
  { id: 0, img: tabel1 },
  { id: 1, img: tabel2 },
];
export { listImg };`,
          },

          {
            description:
              "потом используем в компонентах. если нужно создать изображение и добавить его на страницу например к какому то тэгу some.value,который создан через ссылку input(type='text' ref='some')const some = ref(null).а потом например удалить через время",
            dataText: `import * as Imgs from '../assets/img';
var salut, imgSalut;
const handelMO = (img) => {
	Imgs.listImg.forEach(car => {
		if (car.id == img) {
			salut = document.createElement('div')
			salut.classList.add('salut')
			imgSalut = document.createElement('img')
			imgSalut.setAttribute('src', car.img)
			salut.append(imgSalut);
			document.querySelector('body').append(salut);
		}
	})
};
const handelML = () => {
	salut.remove();
};`,
          },
        ],
        [
          {
            title: "firebase database",
          },
          {
            description:
              "делаем в корне файл firebase.js/здесь сразу инициируется storage для храниения изображений",
            dataText: `import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCTr_tR1MbYjHurQgAfdgEntqZQ150rZyA",
  authDomain: "deutsch-d26e4.firebaseapp.com",
  databaseURL:
    "https://deutsch-d26e4-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "deutsch-d26e4",
  storageBucket: "deutsch-d26e4.appspot.com",
  messagingSenderId: "1002823720200",
  appId: "1:1002823720200:web:c70fc15791d9ed502520bd",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);
export { storage, db, auth };
            `,
          },
          {
            description: "забираем коллекцию целиком",
            dataText: `import { db } from "@/composables/firebase.ts";
import { collection, query, onSnapshot, doc, getDoc } from "firebase/firestore";
var Hero = reactive([]);
const SomeColl = query(collection(db, "my-collection"));
onMounted(async () => {
  onSnapshot(SomeColl, (querySnapshot) => {
    querySnapshot.forEach((doc) => {
      Hero.push(doc.data());
    });
  });
});
  `,
          },
          {
            description:
              "если нужно достать один из массивов в коллекци Vorgangspassivs",
            dataText: `import { db } from "@/firebase/config.ts";
import { collection, query, doc,getDoc } from "firebase/firestore";
var TopVorPräsens = reactive([]);
onMounted(async () => {
  try {
    const docSnap = await getDoc(doc(db, "Vorgangspassivs", "Präsens"));
    if (docSnap.exists()) {
      TopVorPräsens.value = docSnap.data()
      TopVorPräsens.value.id = 0;
      TopVorPräsens.value.isOpen = true;
    }
  } catch (e) {
    console.error("Error getting document: ", e);
  }
});`,
          },

          {
            description:
              "ИЗ какого-то массива 'Gegenwart' переправит данные в коллекцию 'KONJUNKTVS2' ",
            dataText: `onMounted(async () => {
  const WerbenRef = collection(db, "KONJUNKTVS2");
  for (const item of Gegenwart) {
    const newDocRef = doc(WerbenRef, 'Gegenwart');
    await setDoc(newDocRef, item);
  }
})
 `,
          },
          {
            description:
              "вызывает коллекции, собирает их в одну и отправляет новую колекцию 'VorWerben' на firebase",

            dataText: `onMounted(async () => {
  const querySnapshot1 = await getDocs(collection(db, "SlotVorgangspassivsPräsens"));
  const querySnapshot2 = await getDocs(collection(db, "SlotVorgangspassivsPräteritum"));
  const querySnapshot3 = await getDocs(collection(db, "SlotVorgangspassivsPerfekt"));
  const querySnapshot4 = await getDocs(collection(db, "SlotVorgangspassivsPlusquamperfekt"));
  const querySnapshot5 = await getDocs(collection(db, "SlotVorgangspassivsFuturum"));
  const documents = [];
  querySnapshot1.forEach((doc) => {
    documents.push({ id: doc.data().text, ...doc.data() });
  });
  querySnapshot2.forEach((doc) => {
    documents.push({ id: doc.data().text, ...doc.data() });
  });
  querySnapshot3.forEach((doc) => {
    documents.push({ id: doc.data().text, ...doc.data() });
  });
  querySnapshot4.forEach((doc) => {
    documents.push({ id: doc.data().text, ...doc.data() });
  });
  querySnapshot5.forEach((doc) => {
    documents.push({ id: doc.data().text, ...doc.data() });
  });
  const WerbenRef = collection(db, "VorWerben");
  for (const item of documents) {
    const newDocRef = doc(WerbenRef, item.id);
    await setDoc(newDocRef, item);
  }
}) `,
          },
          {
            description:
              "вызывает несколько колекций и собирает в один масив XY. потом его можно рендерить",
            dataText: `var XY = ref([]);
          onMounted(async () => {
            const qSq = await getDocs(collection(db, "SlotDataDürfen"));
            const qSw = await getDocs(collection(db, "SlotDataMöchten"));
            const qSe = await getDocs(collection(db, "SlotDataSollen"));
            const qSr = await getDocs(collection(db, "SlotDataWollen"));
            const qSt = await getDocs(collection(db, "SlotDataMögen"));

            qSq.forEach((doc) => {
              XY.value.push(doc.data());
            });
            qSw.forEach((doc) => {
              XY.value.push(doc.data());
            });
            qSe.forEach((doc) => {
              XY.value.push(doc.data());
            });
            qSr.forEach((doc) => {
              XY.value.push(doc.data());
            });
            qSt.forEach((doc) => {
              XY.value.push(doc.data());
            });
          }),

            `,
          },
          {
            title: "компонент достает изображения из storage",
            link: "https://codepen.io/viktor-yushin/pen/WNqYRwv",
          },
          {
            description:
              "использование предыдущего примера для вывода изображений в компоненты",
            link: "https://codepen.io/viktor-yushin/pen/KKjragM",
          },
        ],
        [
          {
            title: "vue validate",
          },
          {
            title: "Form",
            link: "https://stackblitz.com/edit/vitejs-vite-hyhfuw?file=src%2FApp.vue",
          },
          {
            title: "DynamicForm",
            link: "https://stackblitz.com/edit/vee-validate-v4-form-generator-5pek5r?file=src%2FApp.vue",
          },
          {
            title: "custom checkboxes",
            link: "https://stackblitz.com/edit/vee-validate-v4-custom-checkboxes-nsgpvf?file=src%2FApp.vue",
          },

          // {
          //   dataText: `

          //   `,
          //   description: " ",
          // },
        ],
        [
          {
            title: "примеры",
          },
          {
            title: "секундомер",
            link: "https://codepen.io/viktor-yushin/pen/bGPMbbe",
          },
        ],
      ],
    };
  },
});
