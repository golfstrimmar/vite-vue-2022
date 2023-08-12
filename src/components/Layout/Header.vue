<template>
	<header class="header">
		<div class="header-top">
			<div class="header-top-search">
				<img src="svg/header-search.svg" alt="search">
			</div>
			<a href="#!" class="header-logo">Avion</a>
			<div class="header-top-right">
				<div class="header-top-right__cart">
					<a href="!#">
						<img src="/public/svg/header-cart.svg" alt="">
					</a>
				</div>
				<div class="header-top-right__user">
					<a href="!#">
						<img src="/public/svg/header-user.svg" alt="">
					</a>
				</div>
			</div>
		</div>
		<div class="header-menu  ">
			<a
			class="header-menu__link" 
			:href="element.path"
			v-for="(element, i) in menu" :key="i"
			>{{element.name}}
			</a>

		</div>
	</header>
</template>

<script setup>
import{ref}from 'vue';
const menu=[
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

	&-logo {
		color: #22202E;
		font-family: 'Playfair Display', serif;
		font-size: 24px;
		font-style: normal;
		font-weight: 400;
		line-height: normal;
		text-align: center;
	}
&-top{
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

	&-menu{
		height: 62px;
		display: flex;
		justify-content: center;
		align-items: center;
		column-gap: 62px;
		&__link{
			
			&:hover{
				text-decoration: underline;
			}
		}
	}
}
</style>
