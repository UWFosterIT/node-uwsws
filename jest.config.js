export default {
  roots: [
    '<rootDir>',
  ],
  testMatch: [
    '**/__tests__/**/*.+(ts|tsx|js|mts)',
    '**/?(*.)+(spec|test).+(ts|tsx|js)',
  ],
  testEnvironment: 'node',

  transformIgnorePatterns: [
    '<rootDir>/node_modules/(?!(got|p-cancelable|@szmarczak|lowercase-keys|@sindresorhus|form-data-encoder|ts-custom-error|cacheable-request|normalize-url|responselike|mimic-response|cacheable-lookup)/)',
  ],
  testPathIgnorePatterns: [
    'config.ts',
    'config-sample.ts',
  ],
  extensionsToTreatAsEsm: ['.ts'],
  globals: {
    'ts-jest': {
      useESM: true,
    },
  },
  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.js$': '$1',
  },
};
