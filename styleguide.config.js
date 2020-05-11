const path = require('path')
const vueLoader = require('vue-loader')

module.exports = {
	// set your styleguidist configuration here
	title: 'My custom components',
	template: {
		head: {
			links: [
				{
					href: "https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900",
					rel: 'stylesheet'
				},
				{
					href: "https://cdn.jsdelivr.net/npm/@mdi/font@latest/css/materialdesignicons.min.css",
					rel: 'stylesheet'
				}
			]
		}
	},
	require: [
		path.join(__dirname, 'config/global.requires.js'),
		path.join(__dirname, 'config/global.styles.scss')	
	],
	renderRootJsx: path.join(__dirname, 'config/styleguide.root.js'),
	// components: 'src/components/**/[A-Z]*.vue',
	// defaultExample: true,
	// sections: [
	//   {
	//     name: 'First Section',
	//     components: 'src/components/**/[A-Z]*.vue'
	//   }
	// ],
	// webpackConfig: {
	//   // custom config goes here
	// },	
	usageMode: 'collapse',
	exampleMode: 'collapse',
}
