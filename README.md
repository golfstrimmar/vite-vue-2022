# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar)

// else if (CanvasOffset + 60 < e.clientX && e.clientX < CanvasOffset + 90) {
// Offset = 2
// canvasItems.push({ id: Index, Offset: Offset, value: Text.value })

// } else if (CanvasOffset + 90 < e.clientX && e.clientX < CanvasOffset + 120) {
// Offset = 3
// canvasItems.push({ id: Index, Offset: Offset, value: Text.value })

// } else if (CanvasOffset + 120 < e.clientX && e.clientX < CanvasOffset + 150) {
// Offset = 4
// canvasItems.push({ id: Index, Offset: Offset, value: Text.value })

// } else if (CanvasOffset + 150 < e.clientX && e.clientX < CanvasOffset + 180) {
// Offset = 5
// canvasItems.push({ id: Index, Offset: Offset, value: Text.value })

// } else if (CanvasOffset + 180 < e.clientX && e.clientX < CanvasOffset + 210) {
// Offset = 6
// canvasItems.push({ id: Index, Offset: Offset, value: Text.value })

// } else if (CanvasOffset + 210 < e.clientX && e.clientX < CanvasOffset + 240) {
// Offset = 7
// canvasItems.push({ id: Index, Offset: Offset, value: Text.value })

// } else if (CanvasOffset + 240 < e.clientX && e.clientX < CanvasOffset + 270) {
// Offset = 8
// canvasItems.push({ id: Index, Offset: Offset, value: Text.value })

// } else if (CanvasOffset + 270 < e.clientX && e.clientX < CanvasOffset + 300) {
// Offset = 9
// canvasItems.push({ id: Index, Offset: Offset, value: Text.value })
// }

//- transition-group
//- textarea.canvas( v-for="element in canvasItems.value" :key="element.id" @dragover='dragoverHandler' @drop='dropHandler')

const cleanScss = (cell) => {
if (cell.value == '.container') {
lastElScss.value = ''
} else if (cell.value == '.imgs') {
lastElScss.value = ''
} else if (cell.value == '.imgs') {
lastElScss.value = ''
} else if (cell.value == 'use(xlink:href="#flag")') {
lastElScss.value = ''
} else {
lastElScss.value = cell.value + "{" + "}" + "\n";
}

    somethingScss.value = somethingScss.value + lastElScss.value;

};

dropLineas.value.forEach((cell) => { cleanScss(cell) });
