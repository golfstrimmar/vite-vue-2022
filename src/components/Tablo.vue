<template lang='pug'>
.block__buttons(v-if="AuthStore.isAuthenticated")
	Button( text='Mischen'   @click = "handlerClick(Data)"  svg='arrow-repeat')
	Button( text='Start'  @click='start'    svg='sport')
	Button( text='Stop'   @click='stop'    svg='stopwatch')
	Button( text='Reset'   @click='reset'    )
	.tablo
		span.zeit Anzahl der richtigen Antworten:  
			span {{ count }}
		span.zeit Sie haben für das Training ausgegeben:   
			span {{ formattedTime }}

</template>
<script setup>
import { ref } from 'vue';
import Button from '@/components/Button.vue';





</script>
<style lang='scss' scoped></style>
