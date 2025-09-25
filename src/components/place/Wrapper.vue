<template>
	<component :is="el" class="wrapper" v-bind="$attrs">
		<slot />
	</component>
</template>


<script>
	export default {
		name: 'Wrapper',
		props: {
			el: {
				type: String,
				default: 'div'
			}
		}
	};
</script>