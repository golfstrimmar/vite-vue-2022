<template lang="pug">
header.header
	.header-top
		.header-top-search
			img(src='svg/header-search.svg' alt='search')

		router-link.header-logo(to='/') Avion
		.header-top-right
			.header-top-right__cart
				router-link(to='/cart')
					img(src='/public/svg/header-cart.svg' alt='')
			.header-top-right__user
				router-link(to='user')
					img(src='/public/svg/header-user.svg' alt='')
	.header-menu
		router-link.header-menu__link(:to='element.path' v-for='(element, i) in menu' :key='i')
			| {{ element.name }}
</template>

<script setup>
import { ref } from 'vue';
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
	background: white;
        margin: 0 20px;
	&-logo {
		
		font-family: var(--playfair);
		font-size: 24px;
		font-style: normal;
		font-weight: 400;
		line-height: normal;
		text-align: center;
	}

	&-top {
		display: flex;
		align-items: center;
		justify-content: space-between;
		height: 70px;
		border-bottom: rgba(0, 0, 0, 0.10) 1px solid;
	}

	&-top-right {
		display: flex;
		align-items: center;
		column-gap: 16px;
	}

	&-menu {
		height: 62px;
		@include flex-center;
		column-gap: 62px;

		&__link {

			&:hover {
				text-decoration: underline;
			}
		}
	}
}</style>
