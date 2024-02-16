module.exports = {
	globDirectory: 'src/',
	globPatterns: [
		'**/*.{tsx,css,ts,ttf}'
	],
	swDest: 'src/sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};