export const useScss = {
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
        dataText: `aspect-ratio: 1.5/1;
      width: 100%;
      height: auto;`,
      },
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
        description: "автоматически создает равные колонки по размеру контента",
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
        description: " элемент может сжиматься меньше, чем исходный размер ",
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
        description: "Описывает чётные строки HTML таблицы: 2, 4, 6, и т. д.",
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
};
