module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testPathIgnorePatterns: ['/node_modules/'],
  coverageDirectory: './dist/coverage',
  coveragePathIgnorePatterns: ['/node_modules/'],
  slowTestThreshold: 10,
  setupFilesAfterEnv: ["@relmify/jest-fp-ts"]
};