<template lang="pug">
.training
	Button(type='text' text="beispiele mischen" @someEvent="someEvent")
	.plaza__line(v-for="item in TempData " :key="index")
		p {{ item.t0 }}
		Input(:Antwort = 'item.t1'  :reset='reset' ) 
		//- span {{ item.t2 }} 
		Input(:Antwort = 'item.t2'  :reset='reset') 
		//- span {{ item.t4 }}
		Input(:Antwort = 'item.t3' :reset='reset') 
		//- span {{ item.t6 }}
		Input(:Antwort = 'item.t4' :reset='reset') 
		//- span  {{ item.t8 }}
		Input(:Antwort = 'item.t5' :reset='reset') 
		//- span {{ item.t10 }}
		Input(:Antwort = 'item.t6' :reset='reset') 
		//- span {{ item.t12 }}
		Input(:Antwort = 'item.t7' :reset='reset') 
		//- span {{ item.t14 }}
		Input(:Antwort = 'item.t8' :reset='reset') 
		//- span {{ item.t16 }}
		Input(:Antwort = 'item.t9' :reset='reset') 
		//- span {{ item.t18 }}
		Input(:Antwort = 'item.t10' :reset='reset') 
		Input(:Antwort = 'item.t11' :reset='reset') 
		Input(:Antwort = 'item.t12' :reset='reset') 
		Input(:Antwort = 'item.t13' :reset='reset') 
		Input(:Antwort = 'item.t14' :reset='reset') 
		Input(:Antwort = 'item.t15' :reset='reset') 
		Input(:Antwort = 'item.t16' :reset='reset') 
		Input(:Antwort = 'item.t17' :reset='reset') 
		Input(:Antwort = 'item.t18' :reset='reset') 
		Input(:Antwort = 'item.t19' :reset='reset') 
		Input(:Antwort = 'item.t20' :reset='reset') 
		Input(:Antwort = 'item.t21' :reset='reset') 
		Input(:Antwort = 'item.t22' :reset='reset') 
		Input(:Antwort = 'item.t23' :reset='reset') 
		Input(:Antwort = 'item.t24' :reset='reset') 
		Input(:Antwort = 'item.t25' :reset='reset') 
		//- span {{ item.t0 }}
		//- Input(:Antwort = 'item.t1'  @eventChange="eventChange") 
		//- span {{ item.t2 }} 
		//- Input(:Antwort = 'item.t3'  @eventChange="eventChange") 
		//- span {{ item.t4 }}
		//- Input(:Antwort = 'item.t5' @eventChange="eventChange") 
		//- span {{ item.t6 }}
		//- Input(:Antwort = 'item.t7' @eventChange="eventChange") 
		//- span  {{ item.t8 }}
		//- Input(:Antwort = 'item.t9' @eventChange="eventChange") 
		//- span {{ item.t10 }}
		//- Input(:Antwort = 'item.t11' @eventChange="eventChange") 
		//- span {{ item.t12 }}

</template>

<script setup>
import { ref, onMounted } from 'vue';
import Input from '@/components/Input.vue';
import Button from '@/components/Button.vue';


const props = defineProps({
	SlotData: {
		type: Object,
		required: false
	}

})

var reset = ref(true)
var TempData = ref([])
var TempData = props.SlotData

const someEvent = (data) => {
	TempData = TempData.sort((a, b) => Math.random() - 0.5);
	reset.value = !reset.value
}

// const eventChange = (data) => {
// 	tempInputValue.value = data;
// }



onMounted(() => {
	TempData = TempData.sort((a, b) => Math.random() - 0.5);
});
</script>

<style scoped>
.plaza__line {
	margin: 0 0 10px 0;
}

.mixButton {
	margin: 0 0 30px 0;
}
</style>
