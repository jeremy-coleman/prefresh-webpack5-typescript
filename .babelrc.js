module.exports = {
	presets: [
		'@babel/preset-env',
		["@babel/preset-typescript", {
			allowDeclareFields: true,
			isTSX: true,
			jsxPragma: "h",
			allExtensions:true
		}]
	],
	plugins: [
		'@prefresh/babel-plugin',
		[
			'@babel/plugin-transform-react-jsx',
			{
				pragma: 'h',
				pragmaFrag: 'Fragment'
			}
		]
	]
};


// extensions: [".ts", ".tsx", ".js", ".jsx", ".mjs", ".json"],
// plugins: [
//   ["@babel/plugin-transform-typescript", { isTSX: true }],
//   //["@babel/plugin-transform-typescript"],
//   ["@babel/plugin-proposal-decorators", { legacy: true }],
//   ["@babel/plugin-syntax-object-rest-spread"],
//   ["@babel/plugin-proposal-class-properties", { loose: true }],
//   ["@babel/transform-react-jsx", {
// 	useBuiltIns: true,
// 	runtime: "automatic",
// 	useSpread: true,
// 	importSource: "preact"
//   }],
//   ["@babel/plugin-transform-modules-commonjs"],
//   [
// 	"module-resolver",
// 	{
// 	  root: ["./src"],
// 	  extensions: [".ts", ".tsx", ".js", ".jsx", ".mjs", ".json"],
// 	},
//   ],