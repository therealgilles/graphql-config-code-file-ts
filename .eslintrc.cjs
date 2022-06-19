module.exports = {
  root: true,
  overrides: [
    {
      files: ['*.js', '*.ts', '*.cjs'],
      parser: '@typescript-eslint/parser',
      processor: '@graphql-eslint/graphql',
      extends: ['eslint:recommended'],
      parserOptions: {
        ecmaVersion: 2020,
        requireConfigFile: true,
        sourceType: 'module',
        tsconfigRootDir: __dirname,
        project: ['./tsconfig.json'],
      },
      env: {
        es6: true,
      },
      plugins: ['@typescript-eslint'],
      extends: ['plugin:prettier/recommended', 'prettier', 'plugin:json/recommended'],
      settings: {
        'import/resolver': {
          node: { extensions: ['.js', '.ts', '.cjs'] },
        },
      },
    },
    {
      files: ['*.graphql'],
      parser: '@graphql-eslint/eslint-plugin',
      plugins: ['@graphql-eslint'],
      extends: 'plugin:@graphql-eslint/operations-recommended',
      rules: {
        'prettier/prettier': 'error',
        '@graphql-eslint/known-type-names': 'error',
        '@graphql-eslint/require-id-when-available': 'off',
        '@graphql-eslint/no-anonymous-operations': 'error',
        '@graphql-eslint/naming-convention': [
          'error',
          {
            OperationDefinition: {
              style: 'PascalCase',
              forbiddenPrefixes: ['Query', 'Mutation', 'Subscription', 'Get'],
              forbiddenSuffixes: ['Query', 'Mutation', 'Subscription'],
            },
          },
        ],
      },
      parserOptions: {
        operations: ['./src/**/*.graphql'],
      },
    },
    {
      // See https://github.com/dotansimha/graphql-eslint/issues/88
      files: ['*document.graphql'],
      rules: {
        'prettier/prettier': 'off', // need to turn off prettier for now due to an eslint issue
      },
    },
  ],
}
