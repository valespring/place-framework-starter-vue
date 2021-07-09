const appInfo = {
	url:'',
	description:'',
	title:'',
	image:`${this.url}/assets/dist/og.jpg`,
};

module.exports = (options) => {
	return {
		// From the webpack command with flag
		mode: {
			development: options.mode !== 'production',
			production: options.mode === 'production'
		},
		metas: {
			'description': { name: 'description', content: appInfo.description },
		    'keyword': { name: 'keywords', content: '' },
		    'og:title': { property: 'og:title', content: appInfo.title },
		    'og:description': { property: 'og:description', content: appInfo.description },
		    'og:type': { property: 'og:type', content: 'website' },
		    'og:url': { property: 'og:url', content: appInfo.url },
		    'og:image': { property: 'og:image', content: appInfo.image },
		    'twitter:card': { name: 'twitter:card', content: 'summary_large_image' },
		    'twitter:title': { name: 'twitter:title', content: appInfo.title },
		    'twitter:description': { name: 'twitter:description', content: appInfo.description },
		    'twitter:image': { name: 'twitter:image', content: appInfo.image }
		}
	}
   
};