import js from '@eslint/js';

export default [
  js.configs.recommended,
  {
    files: ['**/*.js', '**/*.mjs', '**/*.cjs'],
    ignores: ['node_modules/', 'build/', '.playwright/', 'test-results/', 'playwright-report/', 'coverage/'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        // Browser + Node globals (adjust if not needed)
        window: 'readonly',
        document: 'readonly',
        console: 'readonly',
        module: 'readonly',
        process: 'readonly',
        require: 'readonly',
        __dirname: 'readonly',
        __filename: 'readonly',
      },
    },
    plugins: {
      import: await import('eslint-plugin-import'),
    },
    rules: {
      // Core
      'no-unused-vars': ['warn', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }],
      'no-console': 'off',
      eqeqeq: ['error', 'always'],

      // Import hygiene
      'import/order': [
        'warn',
        {
          groups: [['builtin', 'external'], 'internal', ['parent', 'sibling', 'index']],
          'newlines-between': 'always',
          alphabetize: { order: 'asc', caseInsensitive: true },
        },
      ],

      // Disable ESLint formatting rules that conflict with Prettier
      'arrow-body-style': 'off',
      'prefer-arrow-callback': 'off',
    },
  },
  {
    rules: {
      // Use Prettier as the formatting source of truth
      ...((await import('eslint-config-prettier')).default?.rules ?? {}),
    },
  },
];
