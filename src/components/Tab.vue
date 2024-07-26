<template lang='pug'>
p {{ storeArtikle }}
//- .tab(v-for="item in Rubrik" :key="index")
//- 	h2.tab__title {{item}}
//- 	.tab__hidden
//- 		.tab__line(v-for="item in storeArtikle.der" :key="index")
//- 			h3 {{ item.title }}
//- 			p {{ item.text1 }}
//- 			p {{ item.text2 }}

</template>
<script setup>
import { reactive, ref, } from 'vue';
import { useTaskArtikle } from "@/store/taskStore"
const storeArtikle = useTaskArtikle();
var Rubrik = reactive([])


// Rubrik = storeArtikle.map((el) => {
// 	return el.rubrik
// })


</script>
<style lang='scss' scoped></style>
