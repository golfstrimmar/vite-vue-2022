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
				.footer-menu-column
					span.router-menu-title Join our mailing list
					JoinForm(bgInput='dark' colorButton='white').footer-suscribe
			.footer-bottom
				span.footer-bottom__copy Copyright 2022 Avion LTD
				.footer-soc
					a(href="#!").footer-soc__link
						img(src='/public/svg/in.svg'  alt='img') 
					a(href="#!").footer-soc__link
						img(src='/public/svg/fb.svg'  alt='img')
					a(href="#!").footer-soc__link
						img(src='/public/svg/insta.svg'  alt='img')
					a(href="#!").footer-soc__link
						img(src='/public/svg/scipe.svg'  alt='img')
					a(href="#!").footer-soc__link
						img(src='/public/svg/twitter.svg'  alt='img')
					a(href="#!").footer-soc__link
						img(src='/public/svg/pinterest.svg'  alt='img')
</template>

<script setup>
import JoinForm from '@/components/JoinForm.vue'
</script>

<style scoped lang="scss">
.footer {
	background: $dark-primary;

	&-body {}

	&-top {
		display: grid;
		grid-template-columns: repeat(3, max-content) 1fr;
		column-gap: 109px;
		row-gap: 30px;
		padding: 58px 0 48px;
	}


	&-menu-column {
		@include flex-column;
		row-gap: 12px;

		&:last-child {
			max-width: 627px;
			width: 100%;
			justify-self: self-end;
		}

		.router-menu-title {
			text-align: left;
			@include Text-Style-6;
		}

		.footer-menu__link {
			text-align: left;
			@include Text-Style-7;

			&:hover {
				color: lighten($primary, 40%);
			}
		}
	}

	&-bottom {
		@include flex-aligne-center;
		justify-content: space-between;
		padding: 24px 0;
		border-top: 1px solid $primary;

		&__copy {
			text-align: left;
			@include Text-Style-7;
		}
	}

	&-soc {
		@include flex-aligne-center;
		column-gap: 24px;
	}

	.join__form {
		margin: 16px 0 0 0;

	}
}

@media (min-width: 768px) and (max-width: 1100px) {
	.footer {
		&-top {
			grid-template-columns: repeat(3, 1fr);
			column-gap: 109px;
			row-gap: 30px;
			padding: 58px 0 48px;
		}

		&-menu-column {
			&:last-child {
				max-width: 627px;
				width: 100%;
				justify-self: self-start;
				grid-column: 1/5;
			}
		}
	}
}

@media (max-width: 767px) {
	.footer {
		&-top {
			grid-template-columns: 1fr;
			justify-items: center;
			column-gap: 0px;
			row-gap: 30px;
			padding: 38px 0 28px;
		}

		.router-menu-title,
		.footer-menu__link {
			text-align: center;

		}

		&-menu-column {
			&:last-child {
				max-width: 627px;
				width: 100%;
				justify-self: center;
			}
		}

		.footer-bottom {
			@include flex-column;
			align-items: center;
			justify-content: center;
			row-gap: 20px;
		}

		.footer-soc {}
	}
}
</style>
 