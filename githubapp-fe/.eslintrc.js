module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
        jest: true,
    },
    extends: [
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'standard',
        'plugin:prettier/recommended',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ['react', '@typescript-eslint'],
    rules: {
        quotes: 'off',
        'quote-props': 'off',
        eqeqeq: 'off',
        semi: [1, 'always', { omitLastInOneLineBlock: true }],
        'no-unused-expressions': 'off',
        'no-unused-vars': 'warn',
        'no-use-before-define': 'off',
        '@typescript-eslint/no-use-before-define': ['error', { typedefs: false }],
        'prefer-const': 'warn',
        'react/jsx-uses-react': 'off',
        'react/react-in-jsx-scope': 'off',
    },
    globals: {
        JSX: true,
    },
    overrides: [
        {
            files: ['*.json'],
            rules: {
                semi: ['off'],
            },
        },
    ],
};
