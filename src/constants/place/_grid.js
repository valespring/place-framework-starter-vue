import BASE from './_base';
import CONVERSIONS from './_conversions';
import {
	GRID_GAP_MODIFIER,
	CSS_GRID_IDENTIFIER
} from './_scss-variables';

export default {
	SEP: BASE.SEP,
	CLASS_PREFIX: CSS_GRID_IDENTIFIER,
	MODIFIERS: {
		SPACED: GRID_GAP_MODIFIER
	},
	FRACTIONS: CONVERSIONS.PLURAL
};