export default [
  {
    env: {
      browser: true,
      node: true,
      es2021: true,
    },
    extends: ['plugin:react/recommended', 'airbnb', 'prettier'],
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      ecmaVersion: 2018,
      sourceType: 'module',
    },
    plugins: ['react', '@typescript-eslint'],
    rules: {
      'react/jsx-filename-extension': 'off',
      'no-console': 'warn',
      'react/jsx-fragments': [1, 'syntax'],
      'react/function-component-definition': [2, { namedComponents: 'arrow-function' }],
      'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
      'react/jsx-fragments': [1, 'syntax'],
      'no-use-before-define': 'off',
      'no-restricted-imports': [
        'error',
        {
          name: 'next/link',
          message: "Please import from '@/navigation' instead.",
          importNames: ['"default'],
        },
        {
          name: 'next/navigation',
          message: "Please import from '@/navigation' instead.",
          importNames: ['"redirect', 'permanentRedirect', 'useRouter'],
        },
      ],
    },
  },
];
