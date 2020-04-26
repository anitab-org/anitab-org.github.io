module.exports = {
  verbose: true,
  setupFilesAfterEnv: ['./src/setupTests.js'],
  transform: {
    '^.+\\.js$': 'babel-jest',
    '^.+\\.css$': 'jest-transform-css',
    '\\.(jpg|jpeg|png|gif|webp|svg)$': 'jest-transform-file'
  }
};
