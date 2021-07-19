module.exports = {
  rules: {
    'import/no-extraneous-dependencies': 0,
    'import/prefer-default-export': 0,
    '@typescript-eslint/ban-types': 0,
    'react/react-in-jsx-scope': 0,
    'react/jsx-props-no-spreading': 0,
    '@typescript-eslint/no-explicit-any': 0,
  },
  overrides: [
    {
      files: ['**/src/pages/**'],
      rules: {
        'react/jsx-props-no-spreading': 2,
        '@typescript-eslint/no-explicit-any': 0,
      },
    },
  ],
  extends: ['erb', 'prettier'],
  plugins: ['react', 'react-hooks', 'prettier', '@typescript-eslint'],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
    createDefaultProgram: true,
  },
  settings: {
    'import/resolver': {
      // See https://github.com/benmosher/eslint-plugin-import/issues/1396#issuecomment-575727774 for line below
      node: {},
      webpack: {
        config: require.resolve('./.erb/configs/webpack.config.eslint.js'),
      },
    },
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
  },
};
