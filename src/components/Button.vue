<template lang='pug'>
button.but-wave(type = "button" v-button :class="(props.item && props.item.isOpen == true  ) ? '_is-active' : '' "  )  {{ props.text }}
	SvgIcon(:name='props.svg' v-if="props.svg ")
</template>
<script setup>
import SvgIcon from '@/components/SvgIcon.vue'
const props = defineProps({
	item: {
		type: Object,
		required: false
	},
	text: {
		type: String,
		required: false
	},
	svg: {
		type: String,
		required: false
	}
})

</script>
<style lang='scss' scoped>
button {
	font-size: 13px;
	color: #666565;
	text-shadow: 0px -1px 1px #bdb5b4,
		1px 1px 1px white;
	cursor: pointer;
	border-radius: 3px;
	display: inline-block;
	outline: none;
	box-shadow: 0px 8px 10px 0px rgba(0, 0, 0, 0.3), inset 0px 4px 1px 1px white, inset 0px -3px 1px 1px rgba(204, 198, 197, 0.5);
	transition: all 0.2s linear;
	background-image: -webkit-linear-gradient(top, #f4f1ee, #fff);
	position: relative;
	line-height: 1;


	svg {
		color: #666565;
		width: 15px;
		height: 15px;
		transition: all 0.2s linear;
		margin: -3px 0 0px 7px;
	}

	&._is-active {
		color: #eb2f2f;
		text-shadow: 0px 0px 6px #eb2f2f;
	}

	&:hover {
		color: #f1bbbb;
		text-shadow: 0px 0px 6px #f1bbbb;

		svg {
			color: #f1bbbb;
		}
	}
}
</style>