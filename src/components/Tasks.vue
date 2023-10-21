<template lang="pug">
.container 
	//- ul
	//- 	li(v-for="user in taskStore.users" :key="id")
	//- 		h4 {{ user.id }}
	//- 		span {{ user.name }}
	//- button.mdl-button.mdl-js-button.mdl-button--raised.mdl-js-ripple-effect.mdl-button--accent
	//- 	| Button
	//- button.mdl-button.mdl-js-button.mdl-button--fab.mdl-button--colored
	//- 	i.material-icons add
	//- .demo-card-wide.mdl-card.mdl-shadow--2dp
	//- 	.mdl-card__title
	//- 		h2.mdl-card__title-text Welcome
	//- 	.mdl-card__supporting-text
	//- 		| Lorem ipsum dolor sit amet, consectetur adipiscing elit.
	//- 		| Mauris sagittis pellentesque lacus eleifend lacinia...
	//- 	.mdl-card__actions.mdl-card--border
	//- 		a.mdl-button.mdl-button--colored.mdl-js-button.mdl-js-ripple-effect
	//- 			| Get Started
	//- 	.mdl-card__menu
	//- 		button.mdl-button.mdl-button--icon.mdl-js-button.mdl-js-ripple-effect
	//- 			i.material-icons share

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