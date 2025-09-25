<template>
	<component :is="el" :class="itemClasses" v-bind="$attrs">
		<slot />
	</component>
</template>


<script>
	import { defineComponent } from 'vue';
	import { PROPS, generateItemClasses } from '@place-framework/place-framework';

	// Cols and Offset from L to S
	export default defineComponent({
		name: 'RowItem',
		props: {
			cols: {
				type: Array,
				default: [3, 2, 2]
			},
			offset: {
				type: Array,
				default: []
			},
			...PROPS
		},
		data() {
			return {
				itemClasses: null
			}
		},
		mounted () {
			this.setItemClasses();
		},
		methods: {
			setItemClasses() {
				this.itemClasses = generateItemClasses(
					this.cols,
					this.offset,
					this.viewports
				);
				console.log('RowItem classes generated:', this.itemClasses);
				console.log('RowItem props:', { cols: this.cols, offset: this.offset, viewports: this.viewports });
			}
		}
	});
</script>