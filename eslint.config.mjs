import globals from 'globals';

import js from '@eslint/js';
import ts from 'typescript-eslint';
import { globalIgnores, defineConfig } from 'eslint/config';

import reactPlugin from 'eslint-plugin-react';
import stylisticPlugin from '@stylistic/eslint-plugin';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import reactRefreshPlugin from 'eslint-plugin-react-refresh';
import noForOfArrayPlugin from 'eslint-plugin-no-for-of-array';

export default defineConfig([
  globalIgnores([
    'dist',
    'node_modules',
    '**/*.d.ts',
  ]),
  js.configs.recommended,
  ...ts.configs.recommended,
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    settings: {
      react: {
        version: 'detect'
      }
    },
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.browser,
        ...globals.es2015
      },
      ecmaVersion: 'latest',
      sourceType: 'module',
      parser: ts.parser,
      parserOptions: {
        project: [
          './tsconfig.app.json',
          './tsconfig.node.json'
        ],
        tsconfigRootDir: import.meta.dirname,
        ecmaFeatures: {
          jsx: true
        }
      }
    },
    plugins: {
      'react': reactPlugin,
      '@stylistic': stylisticPlugin,
      '@typescript-eslint': tsPlugin,
      'no-for-of-array': noForOfArrayPlugin,
    },
    extends: [
      reactHooksPlugin.configs['recommended-latest'],
      reactRefreshPlugin.configs.vite,
    ],
    rules: {
      ...stylisticPlugin.configs.customize({
        indent: 4,
        quotes: 'single',
        semi: true,
        jsx: true,
        arrowParens: true,
        braceStyle: '1tbs',
        blockSpacing: true,
        quoteProps: 'as-needed',
        commaDangle: 'never'
      }).rules,
      '@stylistic/semi': ['error', 'always'],
      '@stylistic/quote-props': ['warn', 'as-needed'],
      '@stylistic/arrow-parens': ['error', 'always'],
      '@stylistic/jsx-first-prop-new-line': ['error', 'multiline-multiprop'], // props 여러 개일 때 줄 바꿈
      '@stylistic/multiline-ternary': ['error', 'always-multiline', { 'ignoreJSX': true }], // 삼항 연산자 사용 시, 여러 줄이면 바꿈
      
      'react/self-closing-comp': [ // <div></div> 금지 <div /> 사용
        'error', { 'component': true, 'html': true }
      ],
      'react/jsx-uses-vars': 'error',
      'react/jsx-boolean-value': ['error', 'never'], // JSX disabled={true} -> disabled 
      'react/react-in-jsx-scope': 'off', // JSX 에서 import React 필수 선언 X
      'react/jsx-no-target-blank': 'error', // _blank 사용 시, rel='noopener noreferrer' 사용

      'no-for-of-array/no-for-of-array': 'error',
      'no-implicit-coercion': 'error',
      'no-trailing-spaces': 'off',
      'no-var': 'error', // var 사용 금지 (https://eslint.org/docs/latest/rules/no-unused-vars)
      'no-empty-function': 'off', // *@typescript-eslint/no-empty-function
      'no-unused-vars': 'off', // *@typescript-eslint/no-unused-vars
      'no-unused-expressions': 'off', // *@typescript-eslint/no-unused-expressions
      'no-duplicate-imports': 'error', // 중복 import 금지 (https://eslint.org/docs/latest/rules/no-duplicate-imports)

      curly: ['error', 'all'], // 모든 제어문에 중괄호 사용 (https://eslint.org/docs/latest/rules/curly)
      eqeqeq: ['error', 'always', { null: 'ignore' }], // 항상 === 사용, null만 예외
      'arrow-body-style': ['error', 'as-needed'], // 함수 사용 시, 블록 설정 (https://eslint.org/docs/latest/rules/arrow-body-style)

      '@typescript-eslint/no-empty-function': 'error', // 빈 함수 선언 금지 (https://typescript-eslint.io/rules/no-empty-function/)
      '@typescript-eslint/no-unused-vars': 'error', // 사용하지 않는 변수 경고 (https://eslint.org/docs/latest/rules/no-unused-vars)
      '@typescript-eslint/no-inferrable-types': 'warn', // 추론 가능한 Type 에 Type 직접 지정 X (https://typescript-eslint.io/rules/no-inferrable-types/)
      '@typescript-eslint/array-type': [
        // 기본 타입(string, number)은 T[] / 복잡한 타입은 Array<T> (https://typescript-eslint.io/rules/array-type/)
        'error', { default: 'array-simple' }
      ],
      '@typescript-eslint/no-empty-interface': 'error', // 빈 Interface 금지 (https://typescript-eslint.io/rules/no-empty-interface/)
      '@typescript-eslint/no-empty-object-type' : 'error', // 빈 객체 Type 금지 (https://typescript-eslint.io/rules/no-empty-object-type/)
      '@typescript-eslint/no-unused-expressions': 'error', // 아무 효과 없는 불필요한 코드 금지 (https://typescript-eslint.io/rules/no-unused-expressions/)
      '@typescript-eslint/no-explicit-any': 'warn', // any Type 금지 (https://typescript-eslint.io/rules/no-explicit-any)
      '@typescript-eslint/no-require-imports': 'warn', // require 사용 시, 경고 (https://typescript-eslint.io/rules/no-require-imports/)
      '@typescript-eslint/naming-convention': [ // 네이밍 컨벤션 https://typescript-eslint.io/rules/naming-convention/
        'error',
        { format: ['camelCase', 'UPPER_CASE', 'PascalCase'], selector: 'variable', leadingUnderscore: 'allow' },
        { format: ['camelCase', 'PascalCase'], selector: 'function' },
        { format: ['PascalCase'], selector: 'interface', },
        { format: ['PascalCase'], selector: 'interface', custom: { regex: '^I[A-Z]', match: false } },
        { format: ['PascalCase'], selector: 'typeAlias' },
      ]
    }
  }
]);