<template lang="pug">
.container 
	ul
		li(v-for="user in taskStore.users" :key="id")
			h4 {{ user.id }}
			span {{ user.name }}

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
</style>