/**
 * @type {import('@commitlint/types').UserConfig}
 */
export default {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'body-max-length': [2, 'always', Infinity],
    'body-max-line-length': [2, 'always', Infinity],
    'body-leading-blank': [2, 'always'],
    'body-min-length': [2, 'always', 0],
    'footer-leading-blank': [2, 'always'],
    'footer-max-length': [2, 'always', Infinity],
    'footer-max-line-length': [2, 'always', Infinity],
    'footer-min-length': [2, 'always', 0],
    'header-min-length': [2, 'always', 14],
    'header-max-length': [2, 'always', 72],
    'scope-case': [2, 'always', 'lower-case'],
    'subject-case': [
      2,
      'always',
      ['lower-case', 'sentence-case', 'start-case', 'pascal-case', 'upper-case'],
    ],
    'subject-full-stop': [2, 'never', '.'],
    'subject-min-length': [2, 'always', 0],
  },
};

/**
 * @reference
 * https://github.com/Zyruks/astro-starter/blob/main/docs/code-quality-tools/commitlint.md
 */
