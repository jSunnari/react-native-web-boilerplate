module.exports = {
	coverageDirectory: 'coverageNative',
	preset: 'react-native',
	rootDir: '../',
	collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!src/**/*.d.ts'
	],
	testMatch: [
		'<rootDir>/__tests__/native/**/*.{js,jsx,ts,tsx}',
		'<rootDir>/__tests__/native//**/?(*.)(spec|test).{js,jsx,ts,tsx}'
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
