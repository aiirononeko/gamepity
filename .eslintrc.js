/** @type {import('eslint').ESLint.ConfigData} */
module.exports = {
  extends: [
    'next/core-web-vitals',
    'plugin:@typescript-eslint/recommended',
    'plugin:tailwindcss/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
    '@typescript-eslint/consistent-type-imports': [
      'error',
      {
        prefer: 'type-imports',
        fixStyle: 'separate-type-imports',
      },
    ],
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_',
      },
    ],
    'object-shorthand': 'error',
    'tailwindcss/no-custom-classname': 'off',
    'react/jsx-curly-brace-presence': 'error',
    'react/self-closing-comp': [
      'error',
      {
        component: true,
        html: false,
      },
    ],
    '@next/next/no-img-element': 'off',
    // '@typescript-eslint/ban-ts-comment': [
    //   'error',
    //   {
    //     'ts-expect-error': 'allow-with-description',
    //     'ts-ignore': false,
    //     'ts-nocheck': false,
    //     'ts-check': false,
    //   },
    // ],
  },
}
