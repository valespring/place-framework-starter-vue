const uri = 'https://website.com';

module.exports = (source) => {
	return {
		URL: uri,
		DESCRIPTION: '',
		KEYWORDS: '',
		TITLE: '',
		IMAGE: `${uri}/${source.output}/og.jpg`,
		TYPE: 'website',
		TWITTER_CARD: 'summary'
	};
};
