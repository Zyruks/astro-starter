# Branch Naming Convention Enforcement 🌿

Ensuring consistent branch naming conventions in a project is crucial for maintaining organization and clarity, especially in projects with multiple contributors. To enforce these conventions, we use the `validate-branch-name` tool configured with specific rules. Dive into our [configuration file](../../.validate-branch-namerc.json) to see the exact rules we've set up.

## Why Enforce Branch Naming Conventions? 🤔

- **Clarity**: Clear branch names communicate the purpose of the branch at a glance.
- **Organization**: Helps in categorizing branches by type (feature, fix, etc.).
- **Automation**: Simplifies automated processes like CI/CD which may rely on branch naming patterns.

## Our Configuration 🔧

Interested in our setup? Check out our [`validate-branch-namerc.json configuration file`](../../.validate-branch-namerc.json) for a detailed look at the rules we enforce to maintain our project's organization and clarity.

## Automatic Validation with Husky 🐶

Husky is a tool that enhances the Git experience by allowing us to hook into various Git events, such as commits and pushes, to run scripts. We leverage Husky to automatically invoke `validate-branch-name` during the commit process. This ensures that every commit adheres to our branch naming conventions, maintaining consistency and clarity across the project.

When a developer attempts to commit changes, Husky triggers `validate-branch-name` to check the current branch's name against our predefined conventions specified in `validate-branch-namerc.json`. If the branch name does not meet our standards, the commit is blocked, and the developer is prompted to rename the branch accordingly.

This integration is part of our commitment to maintaining a clean and organized codebase, allowing our team to focus on development without worrying about manual enforcement of naming rules.

### Key Details Explained 🗝️

- **`pattern`**: This regex pattern enforces that branch names must either be `main` or `develop` for main branches, or follow a specific format for task-related branches (e.g., `feature/zyruks/add-login-feature`). The format for task branches is `taskType/username/description`.
- **`errorMsg`**: This message is displayed when a branch name does not adhere to the defined pattern, providing clear instructions on the naming convention.

## How to manually use it 🛠️

Run the following command to validate your branch name before pushing:

```bash
npx validate-branch-name
```

This will check the current branch name against the configured pattern and display an error message if it does not comply, preventing the push until the branch name is corrected.

## Examples of Compliant Branch Names 🌟

To help you better understand our branch naming conventions, here are some examples of compliant branch names:

- **Feature Branch**: `feature/zyruks/add-login`
  - Indicates a new feature being added by the user `zyruks`.
- **Bug Fix Branch**: `fix/jdoe/resolve-login-issue`
  - Represents a bug fix related to the login feature by `jdoe`.
- **Hotfix Branch**: `hotfix/jdoe/patch-security-vulnerability`
  - Used for urgent fixes, such as patching a security vulnerability, by `jdoe`.
- **Release Branch**: `release/jdoe/launch-new-version`
  - Used for preparing a new release by `jdoe`.
- **Chore Branch**: `chore/jdoe/update-dependencies`
  - For routine tasks like updating dependencies by `jdoe`.

These examples follow the format `taskType/username/description`, where:
- `taskType` is one of `feature`, `fix`, `hotfix`, `release`, or `chore`.
- `username` is the developer's username.
- `description` is a brief description of the task.


## Learn More 📚

For more information on how to use [validate-branch-name](https://github.com/JsonMa/validate-branch-name) and to explore its full capabilities, check out the official documentation. This resource provides comprehensive guidance on installation, configuration, and usage to help you effectively implement and benefit from enforcing branch naming conventions.

## Conclusion 🎉

Adopting a strict branch naming convention, and enforcing it with `validate-branch-name`, enhances the workflow by ensuring all branch names in the project are descriptive and follow a uniform pattern. This practice not only aids in organization but also enhances the readability and manageability of branches across the project.
