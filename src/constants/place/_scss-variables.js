// Import SCSS variables from the framework's export system
import * as scssVariables from '@scss/_variables-export.scss';

// Helper function to get SCSS variable with fallback
export const getScssVar = (key, fallback = null) => scssVariables[key] || fallback;

// Destructure and export individual constants
export const { 'grid-row-identifier': GRID_ROW_IDENTIFIER,
	'grid-column-identifier': GRID_COLUMN_IDENTIFIER,
	'grid-offset-identifier': GRID_OFFSET_IDENTIFIER,
	'css-grid-identifier': CSS_GRID_IDENTIFIER,
	'grid-pattern-separator': GRID_PATTERN_SEPARATOR,
	'grid-flex-modifier': GRID_FLEX_MODIFIER,
	'grid-flex-flush-modifier': GRID_FLEX_FLUSH_MODIFIER,
	'grid-ltr-modifier': GRID_LTR_MODIFIER,
	'grid-rtl-modifier': GRID_RTL_MODIFIER,
	'grid-full-modifier': GRID_FULL_MODIFIER,
	'grid-gap-modifier': GRID_GAP_MODIFIER,
	'wrapper-name': WRAPPER_NAME,
	'viewport-x-large-identifier': VIEWPORT_X_LARGE_IDENTIFIER,
	'viewport-large-identifier': VIEWPORT_LARGE_IDENTIFIER,
	'viewport-medium-identifier': VIEWPORT_MEDIUM_IDENTIFIER,
	'viewport-small-identifier': VIEWPORT_SMALL_IDENTIFIER,
	'large-columns': LARGE_COLUMNS,
	'medium-columns': MEDIUM_COLUMNS,
	'small-columns': SMALL_COLUMNS,
	'quick-grid-widths': QUICK_GRID_WIDTHS } = scssVariables;

// Export both the raw object and the individual variables
export default scssVariables;

// TODO: Revisit programmatic approach later to avoid manual key-value mapping
// The goal is to automatically generate exports from SCSS without manual destructuring