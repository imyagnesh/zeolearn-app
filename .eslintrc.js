module.exports = {
  extends: 'airbnb',
  parser: 'babel-eslint',
  plugins: ['react', 'jsx-a11y', 'import'],
  env: {
    browser: true,
    node: true,
    jasmine: true,
  },
  rules: {
    'react/jsx-filename-extension': [
      2,
      {
        extensions: ['.js', '.jsx'],
      },
    ],
    'react/forbid-prop-types': [0],
    'react/require-default-props': [0],
    'global-require': [0],
    'no-underscore-dangle': [0],
  },
};
