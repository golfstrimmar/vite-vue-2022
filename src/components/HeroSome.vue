<template lang="pug">
.hero 
	.canvas 
		Result(:v-model="Something" :value='Something')
	Stok(v-model="result"   @click='handelClean' )
	.hero__body
		.hero__column(v-for="item in content" :key="index")
			Copy(:item="i"  @clickcopy='clickcopy' v-for="i in item" :key="index" )

</template>

<script setup>
import { ref, reactive, computed, onMounted, toRaw } from 'vue'
import Button from './Button.vue';
import Copy from './Copy.vue';
import Result from './Result.vue';
import Stok from "@/components/Stok.vue";
var result = ref('');
var Something = ref('');
var lastResult = ref('');
const copy = ref(null);

const props = defineProps({
	content: {
		type: Array,
		required: false
	}
})


// -----------------------------------------
const clickcopy = (data) => {
	result.value = data;
	lastResult.value = data + "\n";
	Something.value = Something.value + lastResult.value;
};


// ----------------------------------------
const handelClean = () => {
	let schneidenIndex = Something.value.indexOf(result.value, 0)
	Something.value = Something.value.substring(0, schneidenIndex);
	result.value = '';
}

</script>

<style lang="scss" scoped>
.hero {
	margin: 10px 0 30px 0;

	&__body {
		grid-template-columns: repeat(auto-fill, 366px);
		grid-template-rows: 1fr;
		column-gap: 5px;
		row-gap: 80px;
	}
}

.accord {
	grid-column: 1/3;
}

.hero__column {
	// max-height: 80vh;
	// overflow-y: scroll;
	display: flex;
	flex-direction: column;
	row-gap: 5px;


	// .copy {
	// 	&:first-child {
	// 		height: 26px;
	// 	}


	// }
}

.stock {
	margin: 10px 0;
	width: 100%;
}
</style>
