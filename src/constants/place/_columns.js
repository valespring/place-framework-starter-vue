import BASE from './_base';
import CONVERSIONS from './_conversions';
import {
	GRID_COLUMN_IDENTIFIER,
	GRID_OFFSET_IDENTIFIER,
	LARGE_COLUMNS,
	MEDIUM_COLUMNS,
	SMALL_COLUMNS
} from './_scss-variables';

// Match the column variables from the framework if redeclaring from defaults (e.g $large-columns, $medium-columns, $small-columns)
export default {
	SEP: BASE.SEP,
	COL_SEP: BASE.FRAC_SEP,
	COLUMN_CLASS_PREFIX: GRID_COLUMN_IDENTIFIER,
	OFFSET_CLASS_PREFIX: GRID_OFFSET_IDENTIFIER,
	COUNT: {
		LARGE: LARGE_COLUMNS,
		MEDIUM: MEDIUM_COLUMNS,
		SMALL: SMALL_COLUMNS
	},
	FRACTIONS: CONVERSIONS.BASE
};