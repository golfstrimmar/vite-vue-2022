# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar)

// ----------pinia----------------
// import { useTaskArtikle } from "@/store/taskStore"
// const stateArtikle = useTaskArtikle();
// var Rubriks = reactive([])
// Rubriks = stateArtikle.Artikle

// --------------------------
(v-for="el in item.content" :key="index")

@input='HendleEventInput()'  
@focus="focusHandler()"  
@blur="blurHandler()"  
:class="[(inputValue == Antwort) ? '_is-active' : '_is-falsch',(focused == true) ? '_is-light' : '' ]"
v-if="Antwort !== undefined"

input(type='text' v-model.trim='inputValue' ref="some" :class="[(focused == true) ? '_is-light' : '']" @focus="focusHandler" @input="$emit('update:inputValue', $event.target.value)" @Vertig="$emit('Vertig', inputValue)" )
