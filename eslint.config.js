import { defineConfig } from 'eslint-define-config';

export default defineConfig([
	{
		languageOptions: {
			ecmaVersion: 2021,
			sourceType: 'module',
		},
		files: ['**/*.js'],
	},
]);