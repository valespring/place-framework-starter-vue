import { QUICK_GRID_WIDTHS } from './_scss-variables';

// Use SCSS-exported fractions instead of hardcoded calculations
const BASE = {
	full: QUICK_GRID_WIDTHS.full,
	half: QUICK_GRID_WIDTHS.half,
	third: QUICK_GRID_WIDTHS.third,
	quarter: QUICK_GRID_WIDTHS.quarter,
	fifth: QUICK_GRID_WIDTHS.fifth
};

export default {
	BASE,
	PLURAL: {
		halves: BASE.half,
		thirds: BASE.third,
		quarters: BASE.quarter,
		fifths: BASE.fifth
	}
};