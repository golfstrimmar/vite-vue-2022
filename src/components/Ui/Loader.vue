<template lang="pug">
.loader-wrap
	.loader
</template>

<script setup>
</script>

<style lang="scss" scoped>

.loader-wrap{
	position: relative;
	width: 50px;
	height: 50px;
	margin: 40px auto -40px ;
}


$colors: rgb(177, 36, 118) rgb(36, 177, 99) rgb(36, 109, 177) rgb(177, 151, 36);
$size: 2.5em;
$thickness: 0.5em;

// Calculated variables.
$lat: calc(($size - $thickness) / 2);
$offset: $lat - $thickness;

.loader {
	position: relative;
	width: $size;
	height: $size;
	transform: rotate(165deg
	);

&:before,
&:after {
	content: '';
	position: absolute;
	top: 50%;
	left: 50%;
	display: block;
	width: $thickness;
	height: $thickness;
	border-radius: calc($thickness / 2);
	transform: translate(-50%, -50%);
}

&:before {
	animation: before .5s infinite;
}

&:after {
	animation: after .5s infinite;
}
}

@keyframes before {
	0% {
		width: $thickness;
		box-shadow:
			$lat (
			-$offset) nth($colors, 1),
			(-$lat) $offset nth($colors, 3
		);
}

35% {
	width: $size;
	box-shadow:
		0 (-$offset) nth($colors, 1),
		0 $offset nth($colors, 3);
}

70% {
	width: $thickness;
	box-shadow:
		(-$lat) (-$offset) nth($colors, 1),
		$lat $offset nth($colors, 3);
}

100% {
	box-shadow:
		$lat (
		-$offset) nth($colors, 1),
		(-$lat) $offset nth($colors, 3
	);
}
}

@keyframes after {
	0% {
		height: $thickness;
		box-shadow:
			$offset $lat nth($colors, 2),
			(-$offset) (-$lat) nth($colors, 4);
	}

	35% {
		height: $size;
		box-shadow:
			$offset 0 nth($colors, 2),
			(-$offset) 0 nth($colors, 4);
	}

	70% {
		height: $thickness;
		box-shadow:
			$offset (
			-$lat) nth($colors, 2),
			(-$offset) $lat nth($colors, 4
		);
}

100% {
	box-shadow:
		$offset $lat nth($colors, 2),
		(-$offset) (-$lat) nth($colors, 4);
}
}

.loader {
	position: absolute;
	top: calc(50% - ($size / 2));
	left: calc(50% - ($size / 2));
}
</style>
