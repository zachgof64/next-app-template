
const config = {
  setupFilesAfterEnv: ['./jest.setup.ts'],
  transform: {
    '^.+\\.[t|j]sx?$': 'babel-jest',
  },
  clearMocks: true,
  // Don't look for tests in these directories
  testPathIgnorePatterns: ['./build/', './node_modules/', './.next'],
  // Define where to output the coverage report
  coverageDirectory: './coverage',
  // Define what to include in the coverage report
  collectCoverageFrom: [
    // Collect Coverage from:
    '**/*.js',
    '!**/node_modules/**',
    '!**/build/**',
    '!**/coverage/**',
    '!**/*.config.js',
  ],
  moduleNameMapper: {
    '\\.(scss|css|les)$': 'identity-obj-proxy',
  },
  testEnvironment: 'jsdom',
};

export default config;
