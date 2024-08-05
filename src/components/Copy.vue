<template lang='pug'>
.tags__item.item
	.copy(@click='handlerCopy()' ref = 'copy' :class="[(activeItem == true) ? '_is-active' : '']") {{text}}
</template>
<script setup>
import { ref, defineEmits } from 'vue';

const props = defineProps({
	text: {
		type: String,
		required: false
	}
})


let singles = ref([]);
const copy = ref(null);
const activeItem = ref(false);
const emit = defineEmits(['someEvent'])


const handlerCopy = () => {
	activeItem.value = !activeItem.value;
	let add = document.createElement('textarea')
	add.style.cssText = "position: absolute;z-index: -2;max-height: 0; border: none;"
	document.querySelector('body').appendChild(add)

	add.textContent = copy.value.textContent
	add.select();
	document.execCommand('copy');
	emit('someEvent', add.textContent)
	setTimeout(function () { add.remove(); activeItem.value = !activeItem.value; }, 300)

}

</script>
<style lang='scss' scoped>
.copy {
	cursor: pointer;
	background-color: $lime-1;
	padding: 2px;
	outline: 1px solid $lime-3;

	&:hover {
		color: $orange-10;
		background-color: $orange-3;
		@include transition;
	}

	&._is-active {
		background-color: $red-4;
		color: $red-1;
	}
}
</style>
