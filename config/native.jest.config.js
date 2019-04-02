module.exports = {
	coverageDirectory: 'coverageNative',
	preset: 'react-native',
	rootDir: '../',
	collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!src/**/*.d.ts'
	],
	testMatch: [
		'<rootDir>/__tests__/**/*.{js,jsx,ts,tsx}',
		'<rootDir>/__tests__//**/?(*.)(spec|test).{js,jsx,ts,tsx}'
	],
	browser: false,
	moduleFileExtensions: [
		'ios.js',
		'android.js',
		'js',
		'json',
		'jsx',
		'node'
	],
};
