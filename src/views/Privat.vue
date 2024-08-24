<template lang='pug'>
section(v-if= "AuthStore.user !== null ")
	.container
		p Willkommen, 
			h2 {{ AuthStore.user.name }}
		p Ihre E-mail: 
			span {{ AuthStore.user.email }}
		h3 Ihre Leistungen:
		.tabel
			.tabel__head
				span Teil
				span Data , Zeit
				span Stoppuhr
				span Richtigen Antworten
			.result(v-if="!!AuthStore.user.Artikel")
				h3 Artikel 
				.result__content
					.result__unit(v-for="item in AuthStore.user.Artikel " :key="index") 
						span {{item.zeit}}
						span {{item.stoppuhr}}
						ProgressCircle(:percent='item.prozent')
						SvgIcon(name='x-circle' @click="clickHandler('Artikel',item)" )
			.result(v-if="!!AuthStore.user.Personal")
				h3 Personal 
				.result__content
					.result__unit(v-for="item in AuthStore.user.Personal " :key="index") 
						span {{item.zeit}}
						span {{item.stoppuhr}}
						ProgressCircle(:percent='item.prozent')
						SvgIcon(name='x-circle' @click="clickHandler('Personal',item)" )
			.result(v-if="!!AuthStore.user.Interrogativ")
				h3 Interrogativ
				.result__content
					.result__unit(v-for="item in AuthStore.user.Interrogativ " :key="index") 
						span {{item.zeit}}
						span {{item.stoppuhr}}
						ProgressCircle(:percent='item.prozent')
						SvgIcon(name='x-circle' @click="clickHandler('Interrogativ',item)" )
			.result(v-if="!!AuthStore.user.Reflexiv ")
				h3 Reflexiv 
				.result__content
					.result__unit(v-for="item in AuthStore.user.Reflexiv " :key="index") 
						span {{item.zeit}}
						span {{item.stoppuhr}}
						ProgressCircle(:percent='item.prozent')
						SvgIcon(name='x-circle' @click="clickHandler('Reflexiv',item)" )
			.result(v-if="!!AuthStore.user.Possessiv")
				h3 Possessiv 
				.result__content
					.result__unit(v-for="item in AuthStore.user.Possessiv" :key="index") 
						span {{item.zeit}}
						span {{item.stoppuhr}}
						ProgressCircle(:percent='item.prozent')
						SvgIcon(name='x-circle' @click="clickHandler('Possessiv',item)" )
	


</template>

<script setup>
import ProgressCircle from "@/components/ProgressCircle.vue";
import { useAuthStore } from '../store/authent';
const AuthStore = useAuthStore();
import SvgIcon from "@/components/SvgIcon.vue";


const clickHandler = (data, item) => {
	AuthStore.delititem(data, item)
};


</script>
<style lang='scss' scoped>
h2 {
	display: inline-block;
	font-size: 16px;
}

h3 {
	font-family: 'MuseoSansCyrl-300', sans-serif;
	font-size: 16px;
	font-weight: 400;
	line-height: 1;

}

p {
	font-family: 'MuseoSansCyrl-300', sans-serif;

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
	margin: 5px 0 0 0;
	background: #fff;
	border: 2px solid $brown-4;
	box-shadow: 1px 1px 4px #666;
	font-family: 'MuseoSansCyrl-300', sans-serif;
	font-size: 14px;
	font-weight: 400;
	border-radius: 5px;
	overflow: hidden;

	&__head {
		display: grid;
		grid-template-columns: 128px 138px 100px 110px;

		span {
			font-family: 'MuseoSansCyrl-300', sans-serif;
			font-size: 14px;
			font-weight: 400;
			text-transform: uppercase;
			line-height: 1;
			border-right: 1px solid #ededed;
			background-color: $brown-5;
			color: #fff;
			text-shadow: none;
			display: grid;
			place-items: center;
			padding: 2px 5px;
			text-align: center;

			&:last-of-type {
				border-right: none;
			}

		}
	}
}

.result {
	display: grid;
	grid-template-columns: 127px 1fr;
	border-bottom: 1px solid $brown-7;
	border-collapse: collapse;

	h3 {
		font-size: 14px;
		display: inline-block;
		text-shadow: none;
		padding: 2px 5px;
		border-right: 1px solid #ededed;
	}

	&__content {
		display: flex;
		flex-direction: column;
	}

	&__unit {

		font-weight: 400;
		font-size: 18px;
		text-transform: none;
		align-items: center;
		align-content: center;
		display: grid;
		grid-template-columns: repeat(5, max-content);
		background-color: #fff;
		height: 100%;
		border-bottom: 1px solid #ededed;

		&:last-child span {
			border-bottom: none;
		}

		svg {
			width: 20px;
			height: 20px;
			color: #5d4037;
			padding: 0 0 0 0;
			margin: 0 5px 0 0;
			transition: all 0.2s;
			cursor: pointer;

			&:hover {
				color: #f44336;
			}
		}

		span {
			height: 100%;
			border-right: 1px solid #ededed;
			font-size: 14px;
			min-width: 100px;
			text-align: center;
			padding: 3px;

		}
	}

	.progress-circle {
		width: 77px;
	}
}
</style>
