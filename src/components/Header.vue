<template lang="pug">
header.header
	.header-top
		.header-top-left
			.header-top-search
				SvgIcon(name='header-search' )
			.header-top-mobile-menu( @click="isOpenedMobileMenu = !isOpenedMobileMenu" )
				SvgIcon(name='Menu' )
		.header-logo Avion
		.header-top-right
			.header-top-right__cart
				SvgIcon(name='header-cart' )
				span.header-top-right__count(v-if="CartStore.cart.length") {{ CartStore.cart.length }}
			.header-top-right__user
				SvgIcon(name='header-user' )
	.header-menu
		router-link.header-menu__link(:to='element.path' v-for='(element, i) in menu' :key='i') {{ element.name }}
	.header-menu-mobile(v-if="isOpenedMobileMenu")
		router-link.header-menu__link(:to='element.path' v-for='(element, i) in menu' :key='i') {{ element.name }}
</template>

<script setup>
import { ref } from 'vue';
import SvgIcon from './SvgIcon.vue'
import { useCartStore } from "@/store/cart.js";

const CartStore = useCartStore()

const isOpenedMobileMenu = ref(false)
const menu = [
	{
		name: 'Plant posts',
		path: '/plant'
	}, {
		name: 'Ceramics',
		path: '/ceramics'
	}
	, {
		name: 'Tables',
		path: '/tables'
	}
]
</script>

<style lang="scss" scoped>
.header {
	height: 132px;
	background: $white;
	margin: 0 20px;

	&-logo {
		@include Text-Style;

		&:hover {
			@include hover;
		}
	}

	&-top {
		display: flex;
		align-items: center;
		justify-content: space-between;
		height: 70px;
		border-bottom: rgba(0, 0, 0, 0.1) 1px solid;

		&-search,
		&-right__cart,
		&-right__user,
		&-mobile-menu {
			position: relative;

			svg {
				width: 16px;
				height: 16px;

				&:hover {
					cursor: pointer;
				}
			}
		}

		&-right {
			display: flex;
			align-items: center;
			column-gap: 16px;
			position: relative;

			&__count {
				position: absolute;
				font-size: 14px;
				line-height: 1;
				color: $white;
				top: -3px;
				right: -17px;
				left: auto;
				background: $dusk;
				width: 18px;
				height: 18px;
				border-radius: 100%;
				@include flex-center;
			}
		}

		&-mobile-menu {
			display: none;
		}
	}

	&-menu {
		height: 62px;
		@include flex-center;
		column-gap: 62px;

		&-mobile {
			display: none;
		}

		&__link {
			@include Text-Style-2;

			&:hover {
				@include hover;
			}
		}
	}
}

@media (max-width: 767px) {
	.header {
		height: 70px;
		margin: 0 24px;

		&-logo {
			order: 1;

			&:hover {
				@include hover;
			}
		}

		&-top {
			height: 70px;
			border-bottom: none;

			&-left {
				order: 2;
				@include flex-aligne-center;
				column-gap: 24px;
			}

			&-mobile-menu {
				display: flex;
				justify-content: flex-end;
			}
		}

		&-top-right {
			display: none;
		}

		&-menu {
			display: none;
			height: 0;

			&-mobile {
				position: absolute;
				background: $white;
				top: 70px;
				width: calc(100% - 48px);
				height: max-content;
				z-index: 100;
				padding: 24px;
				border: 1px solid $dusk;
				@include flex-column;
				row-gap: 20px;

				.header-menu__link {
					text-align: right;
				}
			}
		}
	}
}
</style>
