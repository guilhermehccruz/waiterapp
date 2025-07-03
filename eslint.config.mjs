import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import { defineConfig } from 'eslint/config';
import stylistic from '@stylistic/eslint-plugin';


export default defineConfig([
	{
		files: ['**/*.{js,mjs,cjs,ts,mts,cts}'],
		plugins: { js },
		extends: ['js/recommended'],
	},
	{
		files: ['**/*.{js,mjs,cjs,ts,mts,cts}'],
		languageOptions: { globals: globals.node },
	},
	tseslint.configs.recommended,
	stylistic.configs.all,
	{
		plugins: { '@stylistic': stylistic },
		rules: {
			'@stylistic/quotes': [
				'error',
				'single',
			],
			'@stylistic/max-len': [
				'error',
				{ code: 120 },
			],
			'@stylistic/indent': [
				'error',
				'tab',
			],
			'@stylistic/dot-location': [
				'error',
				'property',
			],
			'@stylistic/padded-blocks': [
				'error',
				'never',
			],
			'@stylistic/object-curly-spacing': [
				'error',
				'always',
			],
			'@stylistic/comma-dangle': [
				'error',
				'always-multiline',
			],
			'@stylistic/quote-props': [
				'error',
				'as-needed',
			],
			'@stylistic/object-curly-newline': [
				'error',
				{ multiline: true },
			],
			'@stylistic/space-before-function-paren': [
				'error',
				'never',
			],
			'@stylistic/function-call-argument-newline': [
				'error',
				'consistent',
			],
		},
	},
]);
