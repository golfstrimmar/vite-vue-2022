<template lang="pug">
.plaza
	//- .plaza__title
	//- 	h2 Plaza
	.plaza__top 
		p Bitte füllen Sie die leeren Felder aus 
		p Es sieht so aus -
		p 
			span die richtige Antwort 
			span die falsche Antwort 

	//- button(type="button" @click='Button($event)').btn.btn-success.but-wave Überprüfen
</template>

<script setup>

const Button = (event) => {
	let target = event.target.closest(".but-wave");
	let mValue = Math.max(target.clientWidth, target.clientHeight),
		addDiv = document.createElement("div"),
		rect = target.getBoundingClientRect();
	addDiv.classList.add("addDiv");
	addDiv.style.width = addDiv.style.height = mValue + "px";
	addDiv.style.left = event.clientX - rect.left - mValue / 2 + "px";
	addDiv.style.top = event.clientY - rect.top - mValue / 2 + "px";

	target.closest(".but-wave").append(addDiv);
	setTimeout(() => {
		addDiv.remove();
	}, 3000);
}


</script>

<style lang="scss" scoped>
.plaza {

	&__top {
		margin: 20px 0 20px 0;

		p {
			margin: 15px 0 0 0;

			&:nth-child(3) {
				display: grid;
				grid-template-columns: repeat(auto-fill, 160px);
				gap: 5px 5px;
			}


		}

		span {
			padding: 5px 10px;
			border-radius: 5px;

			&:nth-child(1) {
				box-shadow: inset 0 0 5px rgba(252, 253, 253, 0.884) !important;
				background: $green-2 !important;
				color: $green-8;
			}

			&:nth-child(2) {
				background: $deep-orange-1 !important;
				box-shadow: inset 0 0 5px rgba(252, 253, 253, 0.884) !important;
				color: $deep-orange-13;
			}
		}
	}

	&__line {
		margin: 5px 0 10px 0;

		span {
			line-height: 1.3;
		}
	}
}
</style>
