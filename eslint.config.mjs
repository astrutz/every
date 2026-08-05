// @ts-check
import { defineConfig } from 'eslint/config';
import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import angular from 'angular-eslint';
import perfectionist from 'eslint-plugin-perfectionist';
import { customGroups, groups } from './tools/eslint/perfectionist-sort-classes.mjs';

export default defineConfig([
  {
    files: ['**/*.ts'],
    extends: [
      eslint.configs.recommended,
      tseslint.configs.recommended,
      tseslint.configs.stylistic,
      angular.configs.tsRecommended,
    ],
    processor: angular.processInlineTemplates,
    plugins: {
      perfectionist,
    },
    rules: {
      '@angular-eslint/component-selector': [
        'error',
        {
          type: 'element',
          prefix: ['every', 'plantu', 'eurovision', 'eloglicko'],
          style: 'kebab-case',
        },
      ],
      'perfectionist/sort-classes': [
        'warn',
        {
          type: 'natural', // A->Z je (Unter-)Gruppe; 'unsorted' = Quellreihenfolge behalten
          order: 'asc',
          // verhindert, dass Deps INNERHALB computed/effect/linkedSignal die Sortierung erzwingen
          ignoreCallbackDependenciesPatterns: ['^computed$', '^effect$', '^linkedSignal$'],
          customGroups,
          groups,
        },
      ],
    },
  },
  {
    files: ['**/*.html'],
    extends: [angular.configs.templateRecommended, angular.configs.templateAccessibility],
    rules: {},
  },
]);
