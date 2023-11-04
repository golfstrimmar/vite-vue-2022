<template lang="pug">
.training
	Button(type='text' text="beispiele mischen" @someEvent="someEvent" )
	//- Button(type='text' text="focus" @click="elFocus")


	.plaza__line(v-for="item in TempData " :key="index")
		p {{ item.t0 }}
		Input(:Antwort = 'item.t1' :reference='myinput1'  :reset='reset' @anwortPositiv='anwortPositiv') 
		Input(:Antwort = 'item.t2' :reference='myinput2' :reset='reset' @anwortPositiv='anwortPositiv') 
		Input(:Antwort = 'item.t3' :reference='myinput3' :reset='reset' @anwortPositiv='anwortPositiv') 
		Input(:Antwort = 'item.t4' :reset='reset' @anwortPositiv='anwortPositiv') 
		Input(:Antwort = 'item.t5' :reset='reset' @anwortPositiv='anwortPositiv') 
		Input(:Antwort = 'item.t6' :reset='reset' @anwortPositiv='anwortPositiv') 
		Input(:Antwort = 'item.t7' :reset='reset' @anwortPositiv='anwortPositiv') 
		Input(:Antwort = 'item.t8' :reset='reset' @anwortPositiv='anwortPositiv') 
		Input(:Antwort = 'item.t9' :reset='reset' @anwortPositiv='anwortPositiv') 
		Input(:Antwort = 'item.t10' :reset='reset' @anwortPositiv='anwortPositiv') 
		Input(:Antwort = 'item.t11' :reset='reset'  @anwortPositiv='anwortPositiv') 
		Input(:Antwort = 'item.t12' :reset='reset'  @anwortPositiv='anwortPositiv') 
		Input(:Antwort = 'item.t13' :reset='reset'  @anwortPositiv='anwortPositiv') 
		Input(:Antwort = 'item.t14' :reset='reset'  @anwortPositiv='anwortPositiv') 
		Input(:Antwort = 'item.t15' :reset='reset'  @anwortPositiv='anwortPositiv') 
		Input(:Antwort = 'item.t16' :reset='reset'  @anwortPositiv='anwortPositiv') 
		Input(:Antwort = 'item.t17' :reset='reset'  @anwortPositiv='anwortPositiv') 
		Input(:Antwort = 'item.t18' :reset='reset'  @anwortPositiv='anwortPositiv') 
		Input(:Antwort = 'item.t19' :reset='reset'  @anwortPositiv='anwortPositiv') 
		Input(:Antwort = 'item.t20' :reset='reset'  @anwortPositiv='anwortPositiv') 
		Input(:Antwort = 'item.t21' :reset='reset'  @anwortPositiv='anwortPositiv') 
		Input(:Antwort = 'item.t22' :reset='reset'  @anwortPositiv='anwortPositiv') 
		Input(:Antwort = 'item.t23' :reset='reset'  @anwortPositiv='anwortPositiv') 
		Input(:Antwort = 'item.t24' :reset='reset'  @anwortPositiv='anwortPositiv') 
		Input(:Antwort = 'item.t25' :reset='reset'  @anwortPositiv='anwortPositiv') 

</template>

<script setup>
import { ref, watch, onMounted } from 'vue';
import Input from '@/components/Input.vue';
import Button from '@/components/Button.vue';

var reset = ref(true)
var TempData = ref([])
var TempData = props.SlotData


const HendleEventInput = () => {

}

const props = defineProps({
	focusActiv: {
		type: Boolean,
		required: false
	},
	SlotData: {
		type: Object,
		required: false
	}

})




const someEvent = (data) => {
	TempData = TempData.sort((a, b) => Math.random() - 0.5);
	reset.value = !reset.value
}


// watch(() => reset.value, (newvalue, oldvalue) => {
// 	myinput.value.focus()
// });


onMounted(() => {
	TempData = TempData.sort((a, b) => Math.random() - 0.5);
});
</script>

<style scoped>
.plaza__line {
	margin: 0 0 10px 0;
	text-align: left;
}

.mixButton {
	margin: 0 0 30px 0;
}
</style>
