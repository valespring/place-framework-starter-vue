import BASE from './_base';
import VIEWPORTS from './_viewports';

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