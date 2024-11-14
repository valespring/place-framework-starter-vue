<template>
	<component :is="el" class="container" v-bind="$attrs">
		<slot />
	</component>
</template>


<script lang="js">
	import { defineComponent } from 'vue';
	import {  PROPS } from '@v/place';

	export default defineComponent({
		name: 'Wrapper',
		props: {
			...PROPS
		}
	});
</script>