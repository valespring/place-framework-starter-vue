// Import SCSS variables from the framework's export system
import * as scssVariables from '@scss/_variables-export.scss';

// Define types for SCSS variables
interface ScssVariables {
  [key: string]: string | number;
}

interface QuickGridWidths {
  full: number;
  half: number;
  third: number;
  quarter: number;
  fifth: number;
}

// Helper function to get SCSS variable with fallback
export const getScssVar = (key: string, fallback: string | number | null = null): string | number | null => 
  (scssVariables as ScssVariables)[key] || fallback;

// Destructure and export individual constants with proper typing
export const {
  'grid-row-identifier': GRID_ROW_IDENTIFIER,
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
  'quick-grid-widths': QUICK_GRID_WIDTHS
} = scssVariables as ScssVariables & {
  'grid-row-identifier': string;
  'grid-column-identifier': string;
  'grid-offset-identifier': string;
  'css-grid-identifier': string;
  'grid-pattern-separator': string;
  'grid-flex-modifier': string;
  'grid-flex-flush-modifier': string;
  'grid-ltr-modifier': string;
  'grid-rtl-modifier': string;
  'grid-full-modifier': string;
  'grid-gap-modifier': string;
  'wrapper-name': string;
  'viewport-x-large-identifier': string;
  'viewport-large-identifier': string;
  'viewport-medium-identifier': string;
  'viewport-small-identifier': string;
  'large-columns': number;
  'medium-columns': number;
  'small-columns': number;
  'quick-grid-widths': QuickGridWidths;
};

// Export both the raw object and the individual variables
export default scssVariables as ScssVariables;

// TODO: Revisit programmatic approach later to avoid manual key-value mapping
// The goal is to automatically generate exports from SCSS without manual destructuring