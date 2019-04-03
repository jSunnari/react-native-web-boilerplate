module.exports = {
  rootDir: '../',
  coverageDirectory: 'coverage-web',
  collectCoverageFrom: ['src/**/*.{web.js,web.jsx,web.ts,web.tsx}', '!src/**/*.d.ts'],
  resolver: 'jest-pnp-resolver',
  setupFiles: ['react-app-polyfill/jsdom'],
  testMatch: [
    '<rootDir>__tests__/**/*.{web.js,web.jsx,web.ts,web.tsx}',
    '<rootDir>/__tests__/**/?(*.)(spec|test).{web.js,web.jsx,web.ts,web.tsx}',
  ],
  testEnvironment: 'jsdom',
  testURL: 'http://localhost',
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest',
    '^.+\\.css$': '<rootDir>/web/config/jest/cssTransform.js',
    '^(?!.*\\.(js|jsx|ts|tsx|css|json)$)': '<rootDir>/web/config/jest/fileTransform.js',
  },
  transformIgnorePatterns: [
    '[/\\\\]node_modules[/\\\\].+\\.(js|jsx|ts|tsx)$',
    '^.+\\.module\\.(css|sass|scss)$',
  ],
  moduleNameMapper: {
    '^react-native$': 'react-native-web',
    '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',
  },
  moduleFileExtensions: [
    'web.js',
    'js',
    'web.ts',
    'ts',
    'web.tsx',
    'tsx',
    'json',
    'web.jsx',
    'jsx',
    'node',
  ],
  watchPlugins: [
    '/Users/Jonas/Projects/labb/kabetest/node_modules/jest-watch-typeahead/filename.js',
    '/Users/Jonas/Projects/labb/kabetest/node_modules/jest-watch-typeahead/testname.js',
  ],
}
