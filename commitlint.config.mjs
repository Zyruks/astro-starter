/**
 * @type {import('@commitlint/types').UserConfig}
 */
export default {
  extends: ['@commitlint/config-conventional'],
  rules: {
    // No limit on commit message body length.
    'body-max-length': [2, 'always', Infinity],

    // No limit on the length of individual lines in the body.
    'body-max-line-length': [2, 'always', Infinity],

    // Body must start with a blank line.
    'body-leading-blank': [2, 'always'],

    // No minimum length for the body.
    'body-min-length': [2, 'always', 0],

    // Footer must start with a blank line.
    'footer-leading-blank': [2, 'always'],

    // No limit on footer length.
    'footer-max-length': [2, 'always', Infinity],

    // No limit on the length of individual lines in the footer.
    'footer-max-line-length': [2, 'always', Infinity],

    // No minimum length for the footer.
    'footer-min-length': [2, 'always', 0],

    // Header must be at least 14 characters long.
    'header-min-length': [2, 'always', 14],

    // Header must be no longer than 72 characters.
    'header-max-length': [2, 'always', 72],

    // Scope must be in lower-case.
    'scope-case': [2, 'always', 'lower-case'],

    // Subject must be in sentence-case, start-case, pascal-case, or upper-case.
    'subject-case': [2, 'always', ['lower-case', 'sentence-case', 'start-case', 'pascal-case', 'upper-case']],

    // Subject must not end with a period.
    'subject-full-stop': [2, 'never', '.'],

    // No minimum length for the subject.
    'subject-min-length': [2, 'always', 0],
  },
};
