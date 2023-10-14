<template lang="pug">
.training
	Button(text="beispiele mischen" @someEvent="someEvent()").mixButton
	.plaza__line(v-for="item in TempData " :key="index")
		span {{ item.t0 }}
		Input(:Antwort = 'item.t1' :inputValue='tempValue') 
		span {{ item.t2 }} 
		Input(:Antwort = 'item.t3' :inputValue='tempValue') 
		span {{ item.t4 }}
		Input(:Antwort = 'item.t5' :inputValue='tempValue') 
		span {{ item.t6 }}
		Input(:Antwort = 'item.t7' :inputValue='tempValue') 
		span  {{ item.t8 }}
		Input(:Antwort = 'item.t9' :inputValue='tempValue') 
		span {{ item.t10 }}
		Input(:Antwort = 'item.t11' :inputValue='tempValue') 
		span {{ item.t12 }}

</template>

<script setup>
import { ref, computed } from 'vue';
import Input from '@/components/Input.vue';
import Button from '@/components/Button.vue';
var tempValue = ref("")
var TempData = ref([])
var TempData = props.SlotData

const props = defineProps({
	SlotData: {
		type: Object,
		required: false
	}

})

const someEvent = () => {
	TempData = TempData.sort((a, b) => Math.random() - 0.5);
	tempValue.value = 'red';
}



// onUpdated(() => {
// 	tempValue.value = '';
// });
</script>

<style scoped>
.plaza__line {
	margin: 0 0 10px 0;
}
</style>
