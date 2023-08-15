<template lang="pug">
section(id='footer').footer.rel
	.container
		.footer-body
			.footer-top
				.footer-menu-column
					span.router-menu-title Menu
					router-link(to='/').footer-menu__link New arrivals
					router-link(to='/').footer-menu__link Best sellers
					router-link(to='/').footer-menu__link Recently viewed
					router-link(to='/').footer-menu__link Popular this week
					router-link(to='/').footer-menu__link All products
				.footer-menu-column
					span.router-menu-title Categories
					router-link(to='/').footer-menu__link Crockery
					router-link(to='/').footer-menu__link Furniture
					router-link(to='/').footer-menu__link Homeware
					router-link(to='/').footer-menu__link Plant pots
					router-link(to='/').footer-menu__link Chairs
					router-link(to='/').footer-menu__link Crockery
				.footer-menu-column
					span.router-menu-title Our company
					router-link(to='/').footer-menu__link About us
					router-link(to='/').footer-menu__link Vacancies
					router-link(to='/').footer-menu__link Contact us
					router-link(to='/').footer-menu__link Privacy
					router-link(to='/').footer-menu__link Returns policy
				JoinForm(bgInput='dark' colorButton='white').footer-suscribe
</template>

<script setup>
import JoinForm from '@/components/JoinForm.vue'
</script>

<style scoped lang="scss">
.footer {
	background: var(--dark-primary, #2A254B);

	&-body {
		padding: 58px 0 0;
	}

	&-top {
		display: grid;
		grid-template-columns: repeat(3, max-content) 627px;
		column-gap: 109px;
		row-gap: 30px;
	}


	&-menu-column {
		@include flex-column;
		row-gap: 12px;

		.router-menu-title {
			@include Playfair;
			color: var(--white, #FFF);
			font-size: 16px;
			font-weight: 400;
		}

		.footer-menu__link {
			color: var(--white, #FFF);
			font-size: 14px;
			font-weight: 400;
			@include hover;
		}
	}

	&-suscribe {}
}
</style>
