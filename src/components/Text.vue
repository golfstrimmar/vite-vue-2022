<template lang="pug">

li
	h3 {{ title }} 
	span(v-for="item in Items" :key='id') {{ item.text }}
	
</template>

<script setup>
const props = defineProps({
	title: { type: String, required: false },
	Items: {
		type: Object,
		required: false
	}

})	
</script>

<style lang="scss" scoped>
li {
	display: grid;
	grid-template-columns: 1fr;
	row-gap: 10px;
	border-radius: 5px;
	background: $blue-13;
	justify-items: center;
	padding: 5px 8px;

	h3 {
		font-weight: bold;
		color: $blue-5;
		background: $blue-2;
		width: 100%;
		border-radius: 5px;
		text-align: center;
	}


	span {
		// font-family: 'HouschkaPro-DemiBold', sans-serif;font-family: 'HouschkaPro-Bold', sans-serif;
		font-family: 'HouschkaPro-Bold', sans-serif;
		font-size: 18px;
		color: $light-blue-1;
	}

}
</style>
