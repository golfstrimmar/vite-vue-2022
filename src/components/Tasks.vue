<template lang="pug">
.container 

</template>

<script setup>
import { useTaskStore } from "../store/taskStore"
const taskStore = useTaskStore();

</script>

<style lang="scss" scoped>
li {
	@include flex-aligne-center;
	column-gap: 10px;
}

.demo-card-wide.mdl-card {
	width: 512px;
}

.demo-card-wide>.mdl-card__title {
	color: #fff;
	height: 176px;
	background: $deep-purple-2;
}

.demo-card-wide>.mdl-card__menu {
	color: #fff;
}
</style>