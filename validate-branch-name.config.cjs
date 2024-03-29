module.exports = {
  pattern: '^(main|develop){1}$|^(feature|fix|hotfix|release|chore)/.+$',
  errorMsg:
    "Branch name does not follow the required naming convention. For main branches, use 'main' or 'develop'. For task-related branches, use the format 'taskType/username/description', where 'taskType' is one of 'feature', 'fix', 'hotfix', 'release', 'username' is your username, and 'description' is a brief description of the task. For example, 'feature/zyruks/add-login-feature'.",
};

/**
 * @reference
 * https://github.com/Zyruks/astro-starter/blob/main/docs/code-quality-tools/validate-branch-name.md
 */
