<template>
	<component :is="el" :class="containerClasses" v-bind="$attrs">
		<slot />
	</component>
</template>


<script lang="js">
	import { defineComponent } from 'vue';
	import { PROPS, generateRowClasses } from '@place-framework/place-framework';

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
				this.containerClasses = generateRowClasses(this.viewports, {
					flex: this.flex,
					flush: this.flush,
					rtl: this.rtl
				});
			}
		}
	});
</script>