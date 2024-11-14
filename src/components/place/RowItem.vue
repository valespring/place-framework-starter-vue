<template>
	<component :is="el" :class="itemClasses" v-bind="$attrs">
		<slot />
	</component>
</template>


<script lang="js">
	import { defineComponent } from 'vue';
	import { COLUMNS, FRACTIONS, VIEWPORTS, PROPS } from '@v/place';

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
		setup() {
			
		},
		data() {
			return {
				itemClassArray: [],
				itemClasses: null
			}
		},
		mounted () {
			this.setItemClasses();
		},
		methods: {
			equatePercentage(param) {
				return param / 100;
			},
			convertDeclaration(userParam, viewportColumns) {
				// Used in producing either a named fraction or numeric
				const fractionResult = userParam / viewportColumns;
				const isColumnCount = userParam.toString().length === 1;

				const namedConversion = Object.keys(COLUMNS.FRACTIONS).filter((key) => {
					const value = COLUMNS.FRACTIONS[key];
					const result = isColumnCount ? fractionResult : this.equatePercentage(userParam);

					return value === result;
				});
				
				return namedConversion.length ? namedConversion[0] : `${userParam}${COLUMNS.COL_SEP}${viewportColumns}`;
			},
			// TODO: Make a util?
			findViewportColumns(viewportDescriptor) {
				const matchingViewportKey = Object.keys(VIEWPORTS).filter((viewportKey) => {
					return viewportDescriptor === VIEWPORTS[viewportKey];
				});

				if (!matchingViewportKey.length) {
					return;
				}

				const columnsByViewport = matchingViewportKey[0];

				return COLUMNS.COUNT[columnsByViewport];
			},
			createItemClasses(typeArray, prefix) {
				// Match active viewports sequentially
				if (!typeArray.length) {
					return [];
				}

				return typeArray.map((fractionalParam, i) => {
					if (!fractionalParam) {
						return;
					}

					const viewportKey = this.viewports[i];
					const fractionalSuffix = this.convertDeclaration(fractionalParam, this.findViewportColumns(this.viewports[i]));

					return `${prefix}${COLUMNS.SEP}${viewportKey}${COLUMNS.SEP}${fractionalSuffix}`;
				});
			},
			createColumnClasses() {
				return this.createItemClasses(this.cols, COLUMNS.COLUMN_CLASS_PREFIX);
			},
			createOffsetClasses() {
				return this.createItemClasses(this.offset, COLUMNS.OFFSET_CLASS_PREFIX);
			},
			setItemClasses() {
				const itemClassArray = [...this.createColumnClasses(), ...this.createOffsetClasses()];

				this.itemClasses = itemClassArray.join(' ');
			}
		}
	});
</script>