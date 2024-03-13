
# Lint-Staged Configuration Explained 🛠️

Lint-staged is a powerful tool that runs linters and formatters on staged files in git. By applying code quality checks before a commit is allowed, it ensures that only code adhering to the project's standards gets committed, significantly improving code quality and consistency.

## Why Lint-Staged? 🤔

- **Efficiency**: Focuses on staged files, reducing the time to run checks.
- **Prevent Errors**: Catches and fixes errors early in the development process.
- **Automation**: Streamlines the workflow by automating code quality checks.

## Our Lint-Staged Configuration 🔧

We have configured lint-staged in our project to ensure that every commit meets our coding standards and is free of errors. Here's our configuration explained:

```json
{
  "src/**/*.{js,ts,jsx,tsx,astro}": ["astro check", "prettier --write", "eslint --fix"]
}
```

### Key Configuration Details 🗝️

- **`src/**/*.{js,ts,jsx,tsx,astro}`**: This pattern matches JavaScript, TypeScript, JSX, TSX, and Astro files in the `src` directory, ensuring that our linters and formatters only run on relevant files.

- **Commands Executed**:
  - **`astro check`**: Validates Astro files for syntax errors, ensuring the files are correct before committing. More about Astro [here.](https://docs.astro.build/en/reference/cli-reference/#astro-check)
  - **`prettier --write`**: Automatically formats the staged files according to our Prettier configuration, ensuring code style consistency. More about [Prettier](https://prettier.io/docs/en/cli.html#--check)
  - **`eslint --fix`**: Runs ESLint with the `--fix` option to automatically correct any linting errors in the staged files, further ensuring code quality. More About [Eslint](https://eslint.org/docs/latest/use/command-line-interface#--fix)

## Benefits of Our Setup 🎉

By using lint-staged with this configuration, we ensure that our codebase remains clean, consistent, and free from errors that could slip through the cracks. It significantly streamlines our development workflow, allowing us to focus on feature development rather than fixing commits after the fact.

## Conclusion 🏁

Lint-staged is an essential part of our development workflow, ensuring that our commits are of high quality and adhere to our project standards. This setup not only improves our code quality but also saves time by automating routine checks and fixes.
