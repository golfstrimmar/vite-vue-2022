<template lang='pug'>
section(v-if= "AuthStore.user !== null ")
	p Willkommen, 
		h2 {{ AuthStore.user.name }}
	p Ihre E-mail: 
		span {{ AuthStore.user.email }}
	.tabel
		.result(v-if="!!AuthStore.user.Artikel")
			h3 Artikel 
			.result__content
				.result__unit(v-for="item in AuthStore.user.Artikel " :key="index") 
					span {{item.zeit}}
					span {{item.stoppuhr}}
					span {{item.count}}
					span {{item.countAll}}
		.result(v-if="!!AuthStore.user.Personal")
			h3 Personal 
			.result__content
				.result__unit(v-for="item in AuthStore.user.Personal " :key="index") 
					span {{item.zeit}}
					span {{item.stoppuhr}}
					span {{item.count}}
					span {{item.countAll}}
		.result(v-if="!!AuthStore.user.Interrogativ")
			h3 Interrogativ
			.result__content
				.result__unit(v-for="item in AuthStore.user.Interrogativ " :key="index") 
					span {{item.zeit}}
					span {{item.stoppuhr}}
					span {{item.count}}
					span {{item.countAll}}
		.result(v-if="!!AuthStore.user.Reflexiv ")
			h3 Reflexiv 
			.result__content
				.result__unit(v-for="item in AuthStore.user.Reflexiv " :key="index") 
					span {{item.zeit}}
					span {{item.stoppuhr}}
					span {{item.count}}
					span {{item.countAll}}
		.result(v-if="!!AuthStore.user.Possessiv")
			h3 Possessiv 
			.result__content
				.result__unit(v-for="item in AuthStore.user.Possessiv" :key="index") 
					span {{item.zeit}}
					span {{item.stoppuhr}}
					span {{item.count}}
					span {{item.countAll}}
		//- p Personal 
		//- .result(v-for="item in AuthStore.user.Personal" :key="index") 
		//- 	h4 {{item.zeit}}
		//- 	h4 {{item.stoppuhr}}
		//- 	h4 {{item.count}}
		//- p Interrogativ
		//- .result(v-for="item in AuthStore.user.Interrogativ" :key="index") 
		//- 	h4 {{item.zeit}}
		//- 	h4 {{item.stoppuhr}}
		//- 	h4 {{item.count}}
		//- p Reflexiv
		//- .result(v-for="item in AuthStore.user.Reflexiv" :key="index") 
		//- 	h4 {{item.zeit}}
		//- 	h4 {{item.stoppuhr}}
		//- 	h4 {{item.count}}
		//- p Possessiv
		//- .result(v-for="item in AuthStore.user.Possessiv" :key="index") 
		//- 	h4 {{item.zeit}}
		//- 	h4 {{item.stoppuhr}}
		//- 	h4 {{item.count}}


</template>

<script setup>

import { useAuthStore } from '../store/authent';
const AuthStore = useAuthStore();

</script>
<style lang='scss' scoped>
h2 {
	display: inline-block;
	font-size: 16px;
}

p {
	span {
		font-family: "RR", sans-serif;
		font-size: 12px;
		font-weight: 800;
		color: #5d4037;
		text-transform: uppercase;
		line-height: 1.5;
	}
}

.tabel {
	display: inline-flex;
	flex-direction: column;
	margin: 20px 0 0 0;
}

.result {
	display: grid;
	grid-template-columns: 127px 1fr;
	border-bottom: 2px solid $brown-7;
	box-shadow: 1px 1px 4px #666;
	border-radius: 3px;
	border-collapse: collapse;

	h3 {
		display: inline-block;
		font-size: 14px;
		line-height: 1.5;
		background-color: $brown-5;
		color: #fff;
		text-shadow: none;
		padding: 2px 5px;
	}

	&__content {}

	&__unit {
		font-family: "Roboto-Regular", sans-serif;
		font-weight: 400;
		font-size: 16px;
		text-transform: none;
		padding: 2px;
		align-items: center;
		display: grid;
		grid-template-columns: repeat(4, max-content);
		background-color: #fff;
		height: 100%;

		&:last-child span {
			border-bottom: none;
		}


		span {
			font-size: 12px;
			min-width: 100px;
			text-align: center;
			border-right: 1px solid #ededed;
			border-bottom: 1px solid #ededed;
		}
	}
}
</style>
