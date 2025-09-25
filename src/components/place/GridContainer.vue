<template>
	<component :is="el" :class="containerClasses" v-bind="$attrs">
		<slot />
	</component>
</template>


<script lang="js">
	import { defineComponent } from 'vue';
	import { PROPS, generateGridClasses } from '@place-framework/place-framework';

	export default defineComponent({
		name: 'GridContainer',
		props: {
			cols: {
				type: Array,
				default: []
			},
			spaced: {
				type: Boolean,
				default: false
			}, ...PROPS
		},
		data() {
			return {
				containerClasses: null
			}
		},
		mounted () {
			this.setContainerClasses();
		},
		methods: {
			setContainerClasses() {
				this.containerClasses = generateGridClasses(this.viewports, this.cols, {
					spaced: this.spaced
				});
			}
		}
	});
</script>