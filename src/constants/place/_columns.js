import BASE from '@v/place/_base';
import CONVERSIONS from '@v/place/_conversions';

// Match the column variables from the framework if redeclaring from defaults (e.g $large-columns, $medium-columns, $small-columns)
export default {
	SEP: BASE.SEP,
	COL_SEP: BASE.FRAC_SEP,
	COLUMN_CLASS_PREFIX: 'col',
	OFFSET_CLASS_PREFIX: 'os',
	COUNT: {
		LARGE: 12,
		MEDIUM: 9,
		SMALL: 4
	},
	FRACTIONS: CONVERSIONS.BASE
};