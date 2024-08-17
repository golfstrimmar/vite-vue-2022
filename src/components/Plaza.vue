<template lang='pug'>
.plaza
	table(v-for="item in Slot.reverse()" :key="item.id")
		thead
			tr
				th(colspan='7') {{item.title}}
			tr
				th(colspan='1')
				th(v-if= "item.erste")
					.big 
						p(v-for="i in item.erste" :key="item.id") {{i}}
				th(v-if= "item.zweite")
					.big 
						p(v-for="i in item.zweite" :key="item.id") {{i}}
				th(v-if= "item.drite" :colspan='item.driteLength') 
					.big
						p(v-for="i in item.drite" :key="item.id") {{i}}
				th(v-if= "item.vierte")
					.big 
						p(v-for="i in item.vierte" :key="item.id") {{i}}
		tbody
			tr
				td(v-for="i in item.bodyNom" :key="item.id") {{i}}

			tr
				td(v-for="i in item.bodyDat" :key="item.id") {{i}}
			tr
				td(v-for="i in item.bodyAkk" :key="item.id") {{i}}
			tr
				td(v-for="i in item.bodyGen" :key="item.id") {{i}}
</template>
<script setup>
import { ref, computed, onMounted, toRaw } from 'vue';
var drite = ref(0); var content = ref([]);
const props = defineProps({ Slot: { type: Array, required: false } })

onMounted(() => {
	content.value = toRaw(props.Slot.reverse())
	content.value.forEach(car => {
		if (car.driteLength) {
			drite.value = car.driteLength
			console.log(drite.value);
		}
	})
})


</script>

<style lang='scss' scoped>
.plaza {
	display: grid;
	grid-auto-flow: column;
	column-gap: 20px;
	row-gap: 15px;
	grid-template-columns: repeat(auto-fill, 400px);

	table {
		margin: 5px 0;
		background-color: #fff;
		border: 2px solid $brown-7;
		box-shadow: 1px 1px 4px #666;
		border-radius: 3px;
		border-collapse: collapse;
		border-spacing: 0;

		text-align: center;
		font-family: "Roboto-Regular", sans-serif;
		font-weight: 400;
		font-size: 16px;
		text-transform: none;
		min-width: 256px;
	}

	thead {
		display: table-header-group;
		vertical-align: middle;
		unicode-bidi: isolate;
		border-color: inherit;
	}

	tr {
		display: table-row;
		vertical-align: inherit;
		unicode-bidi: isolate;
		border-color: inherit;
	}

	table th:first-child {
		border-left: none;
	}

	table th {
		border: 1px solid rgba(255, 255, 255, 0.25);
		text-align: center;
		vertical-align: middle;
		background-color: $brown-5;
		color: #fff;
		padding: 1px 3px;

		& p {
			font-size: 16px;
		}
	}

	tbody {
		display: table-row-group;
		vertical-align: middle;
		unicode-bidi: isolate;
		border-color: inherit;
	}

	table td {
		display: table-cell;
		vertical-align: inherit;
		unicode-bidi: isolate;
	}

	table td {
		border-top: 1px solid #ededed;
		border-right: 0 solid #ededed;
		border-bottom: 0 solid #ededed;
		border-left: 1px solid #ededed;
		color: #202020;
		padding: 1px 3px;
		line-height: 1.5rem;
		font-size: 14px;
		text-align: center;
	}

	tbody tr td:first-child {
		font-size: 14px;
		text-align: center;
		font-weight: 600;
	}

	.big {
		display: flex;
		column-gap: 4px;
		justify-content: center;
		border: none;
		padding: 3px 0;
	}
}

@media (min-width: 768px) and (max-width: 1199px) {}

@media (max-width: 767px) {
	table th p {
		font-size: 14px;
	}

	.big {
		flex-direction: column;

		p {
			font-size: 14px;
		}
	}

	.plaza {
		grid-auto-flow: row;
		column-gap: 0px;
		row-gap: 15px;
		grid-template-columns: minmax(100px, max-content);
	}

	table th {}

	table td {
		b {
			font-size: 12px;
		}
	}
}
</style>