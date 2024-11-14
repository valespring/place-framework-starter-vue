import BASE from '@v/place/_base';
import VIEWPORTS from '@v/place/_viewports';

export default {
	el: {
		type: String,
		default: BASE.EL
	},
	viewports: {
		type: Array,
		default: [VIEWPORTS.LARGE, VIEWPORTS.MEDIUM, VIEWPORTS.SMALL]
	}
};