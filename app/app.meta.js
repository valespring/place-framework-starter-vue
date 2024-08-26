const APP_PATH = require('./app.path');
const META_CONFIG = require('./app.meta.config')(APP_PATH);

module.exports = {
	description: {
		name: 'description', content: META_CONFIG.DESCRIPTION
	},
	keyword: {
		name: 'keywords', content: META_CONFIG.KEYWORDS
	},
	'og:title': {
		property: 'og:title', content: META_CONFIG.TITLE
	},
	'og:description': {
		property: 'og:description',
		content: META_CONFIG.DESCRIPTION
	},
	'og:type': {
		property: 'og:type', content: META_CONFIG.TYPE
	},
	'og:url': {
		property: 'og:url', content: META_CONFIG.URL
	},
	'og:image': {
		property: 'og:image', content: META_CONFIG.IMAGE
	},
	'twitter:card': {
		name: 'twitter:card', content: META_CONFIG.TWITTER_CARD
	},
	'twitter:title': {
		name: 'twitter:title', content: META_CONFIG.TITLE
	},
	'twitter:description': {
		name: 'twitter:description',
		content: META_CONFIG.DESCRIPTION
	},
	'twitter:image': {
		name: 'twitter:image', content: META_CONFIG.IMAGE
	}
};
