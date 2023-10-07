<template lang="pug">
ul.text
	li
		h3 Nominativ
		span ein
		span eine
		span ein
		span kein
		span der
		span die
		span das
		span die
	li
		h3 Dativ
		span einem
		span einer
		span einem
		span keinem
		span dem
		span der
		span dem
		span den
	li
		h3 Accusativ
		span einen
		span eine
		span ein
		span kein
		span den
		span die
		span das
		span die
	li
		h3 Genitiv
		span eines
		span einer
		span eines
		span keiner
		span des
		span der
		span des
		span der
</template>

<script setup>
// components: {},
// props: {},
// data: () => ({}),
// methods: {},
</script>

<style lang="scss" scoped>
.text {
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
	column-gap: 20px;


	li {
		display: grid;
		grid-template-columns: 1fr;
		row-gap: 10px;
		font-family: 'HouschkaPro-Bold', sans-serif;
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

			font-size: 18px;
			color: $light-blue-1;
		}

	}
}
</style>
