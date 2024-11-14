<template>
	<component :is="el" :class="containerClasses" v-bind="$attrs">
		<slot />
	</component>
</template>


<script lang="js">
	import { defineComponent } from 'vue';
	import { BASE, ROW, VIEWPORTS, PROPS } from '@v/place';

	export default defineComponent({
		name: 'RowContainer',
		props: {
			flex: {
				type: Boolean,
				default: false
			},
			flush: {
				type: Boolean,
				default: false
			},
			rtl: {
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
				const suffix = this.flush ? ROW.MODIFIERS.FLUSH : this.flex ? ROW.MODIFIERS.FLEX : '';
				const suffixWithDirection = this.rtl ? suffix + ROW.MODIFIERS.RTL : suffix;

				const rowClassArray = this.viewports.map(viewport => {
					return `${ROW.CLASS_PREFIX}${ROW.SEP}${viewport}${suffixWithDirection}`;
				});

				this.containerClasses = rowClassArray.join(' ');
			}
		}
	});
</script>