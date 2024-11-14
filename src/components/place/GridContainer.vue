<template>
	<component :is="el" :class="containerClasses" v-bind="$attrs">
		<slot />
	</component>
</template>


<script lang="js">
	import { defineComponent } from 'vue';
	import { BASE, GRID, VIEWPORTS, PROPS } from '@v/place';

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
				const modifierSuffix = this.spaced ? GRID.MODIFIERS.SPACED  : '';

				const gridClassArray = this.cols.map((col, i) => {
					const viewportKey = this.viewports[i];
					const suffix = `${col}${modifierSuffix}`;

					return `${GRID.CLASS_PREFIX}${GRID.SEP}${viewportKey}${GRID.SEP}${suffix}`;
				});

				this.containerClasses = gridClassArray.join(' ');
			}
		}
	});
</script>