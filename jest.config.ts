export default {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    transform: {
      '^.+\\.tsx?$': 'ts-jest',
    },
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    testMatch: ['**/__tests__/**/*.test.(ts|tsx|js|jsx)'],
    setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
  };
  