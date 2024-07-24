<template lang='pug'>
.item
	.copy(@click='handlerCopy()' ref = 'copy' :class="[(activeItem == true) ? '_is-active' : '']"
) {{props.text}}

</template>
<script setup>
import { ref } from 'vue'
// В потомке
// button(type = "button" @click = "$emit('someEvent',text) , Button($event)").btn.but - wave { { text } }
const props = defineProps({
	text: {
		type: String,
		required: false
	}
})

let singles = ref([])
const copy = ref(null)
const activeItem = ref(false)

const handlerCopy = () => {
	activeItem.value = !activeItem.value;
	let add = document.createElement('textarea')
	document.querySelector('body').appendChild(add)
	add.innerHTML = copy.value.innerHTML
	add.select();
	document.execCommand('copy');

	setTimeout(function () { add.remove(); activeItem.value = !activeItem.value; }, 2000)
}


</script>
<style lang='scss' scoped>
.copy {
	cursor: pointer;

	&:hover {
		color: $red-5;
		@include transition;
	}

	&._is-active {
		background-color: $red-4;
		color: $red-1;
	}
}
</style>
