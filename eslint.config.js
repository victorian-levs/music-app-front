import { eslint } from '@siberiacancode/eslint';

export default eslint(
  {
    stylistic: true,
    typescript: true,
    react: true,
    jsx: true
  },
  {
    name: 'frontend/rewrite',
    rules: {
      'style/quotes': ['error', 'single', { allowTemplateLiterals: 'always' }],
      'style/object-curly-spacing': ['error', 'always'],
      'style/max-len': ['error', 120, 2, { ignoreComments: true, ignoreStrings: true, ignoreTemplateLiterals: true }],
      'siberiacancode-react/display-name': 'off',
      'react/no-array-index-key': 'off',
      'no-restricted-syntax': 'off',
      'import/no-named-default': 'error',
      'sort-jsx-props': 'off',
      'perfectionist/sort-imports': [
        'error',
        {
          groups: [
            'type',
            ['type-parent', 'type-sibling', 'type-index'],
            ['builtin', 'external'],
            'type-internal',
            'internal',
            'internal-pages',
            'internal-widgets',
            'internal-features',
            'internal-entities',
            'internal-shared-ui',
            ['parent', 'sibling', 'index'],
            'object',
            'style',
            'side-effect-style',
            'unknown'
          ],
          internalPattern: ['^~/.*', '^@/.*'],
          newlinesBetween: 'never',
          order: 'asc',
          type: 'natural',

          customGroups: [
            {
              groupName: 'internal-pages',
              elementNamePattern: '^(@|~)/pages'
            },
            {
              groupName: 'internal-widgets',
              elementNamePattern: '^(@|~)/widgets'
            },
            {
              groupName: 'internal-features',
              elementNamePattern: '^(@|~)/features'
            },
            {
              groupName: 'internal-entities',
              elementNamePattern: '^(@|~)/entities'
            },
            {
              groupName: 'internal-shared-ui',
              elementNamePattern: '^(@|~)/shared/ui'
            }
          ]
        }
      ],
      'perfectionist/sort-jsx-props': [
        'error',
        {
          type: 'line-length',
          order: 'desc',
          groups: [
            'className',
            'prop'
          ],
          customGroups: [
            {
              groupName: 'className',
              elementNamePattern: '^className$'
            }
          ]
        }
      ],
      'perfectionist/sort-interfaces': [
        'error',
        {
          type: 'line-length',
          order: 'desc'
        }
      ]
    }
  }
);
