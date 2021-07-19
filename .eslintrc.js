module.exports = {
  rules: {
    'import/no-extraneous-dependencies': 'off',
    'import/prefer-default-export': 'off',
  },
  overrides: [
    {
      files: ['**/src/utils/common/css/**'],
      rules: {
        '@typescript-eslint/no-explicit-any': 0,
        '@typescript-eslint/ban-types': 0,
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
