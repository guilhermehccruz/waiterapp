import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import {defineConfig} from 'eslint/config';
import stylistic from '@stylistic/eslint-plugin';


export default defineConfig([
    {'files': ['**/*.{js,mjs,cjs,ts,mts,cts}'],
        'plugins': {js},
        'extends': ['js/recommended']},
    {'files': ['**/*.{js,mjs,cjs,ts,mts,cts}'],
        'languageOptions': {'globals': globals.node}},
    tseslint.configs.recommended,
    stylistic.configs.all,
    {
        'plugins': {
            '@stylistic': stylistic
        },
        'rules': {
            '@stylistic/quotes': [
                'error',
                'single'
            ],
            '@stylistic/max-len': [
                'error',
                {'code': 120}
            ]
        }
    }
]);
