module.exports = {
  coverageDirectory: 'coverage-native',
  preset: 'react-native',
  rootDir: '../',
  collectCoverageFrom: ['src/**/*.{native.js,native.jsx,native.ts,native.tsx}', '!src/**/*.d.ts'],
  testMatch: [
    '<rootDir>/__tests__/**/*.{native.js,native.jsx,native.ts,native.tsx}',
    '<rootDir>/__tests__/**/?(*.)(spec|test).{native.js,native.jsx,native.ts,native.tsx}',
  ],
  browser: false,
  moduleFileExtensions: ['native.js', 'ios.js', 'android.js', 'js', 'json', 'jsx', 'node'],
}
