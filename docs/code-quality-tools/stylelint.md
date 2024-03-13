# Stylelint Configuration Explained 🛠️

Our project utilizes Stylelint to ensure coding standards and consistency across our styling sheets. This setup aids in maintaining a clean, readable, and maintainable codebase by enforcing predefined styling rules.

## Why Stylelint? 🤔

- **Consistency**: Ensures uniform coding styles are applied across all stylesheets.
- **Automated Checks**: Seamlessly integrates with Continuous Integration (CI) tools for automatic validation.
- **Improves Project Maintenance**: Simplifies code reviews and minimizes styling errors.

## Key Configuration Options 🗝️

- **`extends`**: Incorporates rules from other configurations, allowing us to leverage established styling standards efficiently. We use:
  - `stylelint-config-standard-scss` for SCSS-specific rules. [More info](https://github.com/stylelint-scss/stylelint-config-standard-scss).
  - `stylelint-config-html/astro` for Astro projects compatibility. [More info](https://github.com/ota-meshi/stylelint-config-html).

- **`plugins`**: Extends Stylelint with additional rules or capabilities. Our setup includes:
  - `stylelint-order` to enforce a specific order of properties. [More info](https://github.com/hudochenkov/stylelint-order).
  - `stylelint-config-rational-order-fix/plugin` for a rational order of properties. [More info](https://github.com/constverum/stylelint-config-rational-order).
  - `stylelint-color-format` to enforce a consistent color format. [More info](https://github.com/filipekiss/stylelint-color-format).
  - `stylelint-group-selectors` to enforce grouping of selectors. [More info](https://github.com/ssivanatarajan/stylelint-group-selectors).
  - `stylelint-selector-no-empty` to disallow empty selectors. [More info](https://github.com/ssivanatarajan/stylelint-selector-no-empty).
  - `stylelint-suitcss` for SUITCSS naming conventions. [More info](https://github.com/suitcss/stylelint-suitcss).
  - `stylelint-use-logical-spec` for enforcing logical properties and values. [More info](https://github.com/csstools/stylelint-use-logical).
  - `stylelint-high-performance-animation` to warn about using low-performance animation and transition properties. [More info](https://github.com/kristerkari/stylelint-high-performance-animation).
  - `stylelint-rem-over-px` to encourage the use of rem units over px. [More info](https://github.com/Jordan-Hall/stylelint-use-logical-spec).
  - Additional plugins enhance various aspects of styling, ensuring adherence to best practices and our specific requirements.


## Rules:

### General Rules

- **`color-no-invalid-hex`**: Disallows invalid hex colors to ensure that all hex colors used are valid. [Learn more](https://stylelint.io/user-guide/rules/list/color-no-invalid-hex).
- **`font-family-no-duplicate-names`**: Prevents using the same font family name more than once, reducing confusion and redundancy. [Learn more](https://stylelint.io/user-guide/rules/list/font-family-no-duplicate-names).
- **`font-family-no-missing-generic-family-keyword`**: Ensures that each font family ends with a generic family keyword, enhancing cross-browser compatibility. [Learn more](https://stylelint.io/user-guide/rules/list/font-family-no-missing-generic-family-keyword).
- **`named-grid-areas-no-invalid`**: Checks for invalid names in CSS Grid template areas. [Learn more](https://stylelint.io/user-guide/rules/list/named-grid-areas-no-invalid).
- **`function-calc-no-unspaced-operator`**: Ensures there are no unspaced operators within `calc` functions, which could lead to unexpected results. [Learn more](https://stylelint.io/user-guide/rules/list/function-calc-no-unspaced-operator).
- **`function-linear-gradient-no-nonstandard-direction`**: Prevents nonstandard directions in linear-gradient calls, enforcing consistency. [Learn more](https://stylelint.io/user-guide/rules/list/function-linear-gradient-no-nonstandard-direction).
- **`function-no-unknown`**: Disallows unknown functions, ensuring only standard or custom-defined functions are used. [Learn more](https://stylelint.io/user-guide/rules/list/function-no-unknown).
- **`string-no-newline`**: Prevents strings from being broken across multiple lines. [Learn more](https://stylelint.io/user-guide/rules/list/string-no-newline).
- **`unit-no-unknown`**: Disallows unknown units, which can lead to CSS errors. [Learn more](https://stylelint.io/user-guide/rules/list/unit-no-unknown).
- **`custom-property-no-missing-var-function`**: Ensures that variables are not used without the `var` function, which could lead to invalid properties. [Learn more](https://stylelint.io/user-guide/rules/list/custom-property-no-missing-var-function).
- **`property-no-unknown`**: Ensures that only known CSS properties are used, avoiding typos or the use of non-standard properties. [Learn more](https://stylelint.io/user-guide/rules/list/property-no-unknown).
- **`keyframe-declaration-no-important`**: Disallows `!important` within keyframe declarations to avoid specificity conflicts. [Learn more](https://stylelint.io/user-guide/rules/list/keyframe-declaration-no-important).
- **`keyframe-block-no-duplicate-selectors`**: Ensures selectors within keyframe blocks are not duplicated. [Learn more](https://stylelint.io/user-guide/rules/list/keyframe-block-no-duplicate-selectors).
- **`declaration-block-no-duplicate-custom-properties`**: Prohibits duplicate custom properties within declaration blocks. [Learn more](https://stylelint.io/user-guide/rules/list/declaration-block-no-duplicate-custom-properties).
- **`declaration-block-no-duplicate-properties`**: Disallows duplicate properties within declaration blocks, helping to keep your CSS DRY. [Learn more](https://stylelint.io/user-guide/rules/list/declaration-block-no-duplicate-properties).
- **`declaration-block-no-shorthand-property-overrides`**: Prevents shorthand properties from overriding related longhand properties, avoiding unexpected visual results. [Learn more](https://stylelint.io/user-guide/rules/list/declaration-block-no-shorthand-property-overrides).
- **`block-no-empty`**: Disallows empty blocks to prevent the output of unnecessary or potentially confusing code. [Learn more](https://stylelint.io/user-guide/rules/list/block-no-empty).
- **`selector-pseudo-class-no-unknown`**: Disallows unknown pseudo-class selectors, which could lead to CSS not working as intended. [Learn more](https://stylelint.io/user-guide/rules/list/selector-pseudo-class-no-unknown).
- **`selector-pseudo-element-no-unknown`**: Prohibits the use of unknown pseudo-element selectors. [Learn more](https://stylelint.io/user-guide/rules/list/selector-pseudo-element-no-unknown).
- **`selector-type-no-unknown`**: Forbids the use of unknown type selectors, ensuring selectors target real elements. [Learn more](https://stylelint.io/user-guide/rules/list/selector-type-no-unknown).
- **`media-feature-name-no-unknown`**: Disallows unknown media feature names, preventing errors in media queries. [Learn more](https://stylelint.io/user-guide/rules/list/media-feature-name-no-unknown).
- **`at-rule-no-unknown`**: Prohibits the use of unknown at-rules, which could result in CSS that is ignored by the browser. [Learn more](https://stylelint.io/user-guide/rules/list/at-rule-no-unknown), but note this rule is set to `null` to allow project-specific at-rules.
- **`comment-no-empty`**: Disallows empty comments, which can clutter your stylesheets without adding value. [Learn more](https://stylelint.io/user-guide/rules/list/comment-no-empty).
- **`no-descending-specificity`**: Prevents selectors of lower specificity from coming after overriding selectors of higher specificity. [Learn more](https://stylelint.io/user-guide/rules/list/no-descending-specificity).
- **`no-duplicate-at-import-rules`**: Ensures that `@import` rules are not duplicated in the stylesheet. [Learn more](https://stylelint.io/user-guide/rules/list/no-duplicate-at-import-rules).
- **`no-duplicate-selectors`**: Prohibits the same selector from being used in multiple places, promoting DRY principles. [Learn more](https://stylelint.io/user-guide/rules/list/no-duplicate-selectors).
- **`no-empty-source`**: Prevents the use of empty source files in the project, ensuring that every file contributes to the styles. [Learn more](https://stylelint.io/user-guide/rules/list/no-empty-source).
- **`no-invalid-double-slash-comments`**: Forbids the use of CSS double slash comments (`//`), which are not valid CSS. [Learn more](https://stylelint.io/user-guide/rules/list/no-invalid-double-slash-comments).
- **`no-invalid-position-at-import-rule`**: Ensures `@import` rules are placed at the correct position in the stylesheet, following CSS specifications. [Learn more](https://stylelint.io/user-guide/rules/list/no-invalid-position-at-import-rule).
- **`no-irregular-whitespace`**: Disallows irregular whitespaces that are not visible but can cause issues in editors or during processing. [Learn more](https://stylelint.io/user-guide/rules/list/no-irregular-whitespace).
- **`no-unknown-animations`**: Ensures that animations and keyframes are defined before being used. [Learn more](https://stylelint.io/user-guide/rules/list/no-unknown-animations).



### Specific Rules

- **`alpha-value-notation`**: Specifies how alpha values should be written, enforcing consistency across color definitions. In this configuration, alpha values are preferred as percentages except for properties like `opacity`. [Learn more](https://stylelint.io/user-guide/rules/list/alpha-value-notation).

- **`hue-degree-notation`**: Controls the notation used for hue degrees in color functions, promoting clarity and consistency. This configuration enforces the use of angle notation. [Learn more](https://stylelint.io/user-guide/rules/list/hue-degree-notation).

- **`color-function-notation`**: Dictates the notation of color functions (`rgb`, `rgba`, `hsl`, `hsla`), with this setup enforcing the modern notation (`rgb()`, `hsl()` with alpha channel as a parameter) for improved readability and compactness. [Learn more](https://stylelint.io/user-guide/rules/list/color-function-notation).

- **`color-hex-alpha`**: Specifies whether hexadecimal colors can have an alpha channel. This configuration disallows hex color alpha channels, preferring functional notation for alpha transparency. [Learn more](https://stylelint.io/user-guide/rules/list/color-hex-alpha).

- **`color-hex-length`**: Enforces a specific hex color length, with this setting requiring the long form to ensure clarity and consistency. [Learn more](https://stylelint.io/user-guide/rules/list/color-hex-length).

- **`color-named`**: Controls the use of named colors in stylesheets, with this setup prohibiting them to favor hex, RGB, or HSL values which are more precise. [Learn more](https://stylelint.io/user-guide/rules/list/color-named).

- **`color-no-hex`**: Prohibits the use of hexadecimal colors, although this rule appears to conflict with other color rules unless tailored for specific needs. [Learn more](https://stylelint.io/user-guide/rules/list/color-no-hex).

- **`length-zero-no-unit`**: Requires that zero lengths do not include units, promoting cleaner code and reducing unnecessary characters. [Learn more](https://stylelint.io/user-guide/rules/list/length-zero-no-unit).

- **`font-family-name-quotes`**: Specifies when quotes should be used around font family names, with this configuration requiring quotes where recommended by the specification for consistency and to avoid confusion with generic family keywords. [Learn more](https://stylelint.io/user-guide/rules/list/font-family-name-quotes).

- **`font-weight-notation`**: Controls the notation used for font weights, preferring numeric values for clarity and better compatibility across fonts. [Learn more](https://stylelint.io/user-guide/rules/list/font-weight-notation).

- **`function-url-no-scheme-relative`**: Disallows scheme-relative URLs (`//url`) in `url()` functions to avoid potential issues with mixed content. [Learn more](https://stylelint.io/user-guide/rules/list/function-url-no-scheme-relative).

- **`function-url-quotes`**: Specifies when quotes should be used for URLs in `url()` functions, enforcing a consistent approach across stylesheets. [Learn more](https://stylelint.io/user-guide/rules/list/function-url-quotes).

- **`function-url-scheme-disallowed-list`**: Prevents the use of specified URL schemes in `url()` functions, with this setup disallowing FTP URLs for security reasons. [Learn more](https://stylelint.io/user-guide/rules/list/function-url-scheme-disallowed-list).

- **`keyframes-name-pattern`**: Enforces a specific pattern for keyframe names, promoting naming consistency and clarity. This configuration requires keyframe names to start with `anime-`. [Learn more](https://stylelint.io/user-guide/rules/list/keyframes-name-pattern).

- **`number-max-precision`**: Limits the number of decimal places allowed in numbers, reducing complexity and improving readability. This setup allows up to 4 decimal places. [Learn more](https://stylelint.io/user-guide/rules/list/number-max-precision).

- **`time-min-milliseconds`**: Specifies a minimum time value for transitions and animations, ensuring they are not too fast to be perceptible. This configuration sets the minimum time to 100 milliseconds. [Learn more](https://stylelint.io/user-guide/rules/list/time-min-milliseconds).

- **`unit-disallowed-list`**: Specifies a list of disallowed units to promote consistency and usability across devices. This configuration disallows pixels (`px`) except for specific properties. [Learn more](https://stylelint.io/user-guide/rules/list/unit-disallowed-list).

- **`shorthand-property-no-redundant-values`**: Ensures that shorthand properties do not include redundant values, simplifying the code. [Learn more](https://stylelint.io/user-guide/rules/list/shorthand-property-no-redundant-values).

- **`value-no-vendor-prefix`**: Disallows vendor prefixes for values, relying instead on official CSS properties and values for compatibility. [Learn more](https://stylelint.io/user-guide/rules/list/value-no-vendor-prefix).

- **`property-no-vendor-prefix`**: Prohibits vendor prefixes for properties, encouraging the use of standardized CSS properties. [Learn more](https://stylelint.io/user-guide/rules/list/property-no-vendor-prefix).

- **`declaration-no-important`**: Discourages the use of `!important`, promoting a more maintainable and predictable styling hierarchy. [Learn more](https://stylelint.io/user-guide/rules/list/declaration-no-important).

- **`declaration-block-no-redundant-longhand-properties`**: Prevents the use of longhand properties that can be more efficiently declared using shorthand, simplifying the code and improving readability. [Learn more](https://stylelint.io/user-guide/rules/list/declaration-block-no-redundant-longhand-properties).

- **`declaration-block-single-line-max-declarations`**: Limits the number of declarations allowed in a single line block, enforcing a more readable format. This configuration limits to 1 declaration per line. [Learn more](https://stylelint.io/user-guide/rules/list/declaration-block-single-line-max-declarations).

- **`selector-attribute-quotes`**: Requires quotes around the value of selector attributes for consistency and clarity. [Learn more](https://stylelint.io/user-guide/rules/list/selector-attribute-quotes).

- **`selector-class-pattern`**: Enforces a specific pattern for class selectors, ensuring naming consistency across the stylesheet. This configuration requires class names to consist of lowercase letters only. [Learn more](https://stylelint.io/user-guide/rules/list/selector-class-pattern).

- **`selector-id-pattern`**: Specifies a pattern for ID selectors, promoting a consistent naming convention. [Learn more](https://stylelint.io/user-guide/rules/list/selector-id-pattern).

- **`selector-max-attribute`**: Limits the number of attribute selectors in a selector, ensuring selectors remain simple and efficient. [Learn more](https://stylelint.io/user-guide/rules/list/selector-max-attribute).

- **`selector-max-class`**: Restricts the number of class selectors within a single composite selector, promoting simpler, more maintainable selectors. [Learn more](https://stylelint.io/user-guide/rules/list/selector-max-class).

- **`selector-max-compound-selectors`**: Limits the number of compound selectors in a selector, encouraging simpler, more modular CSS. [Learn more](https://stylelint.io/user-guide/rules/list/selector-max-compound-selectors).

- **`selector-max-id`**: Caps the number of ID selectors in a selector, ideally discouraging their use for styling due to specificity issues. [Learn more](https://stylelint.io/user-guide/rules/list/selector-max-id).

- **`selector-max-pseudo-class`**: Limits the number of pseudo-classes in a selector, ensuring selectors are not overly specific or complex. [Learn more](https://stylelint.io/user-guide/rules/list/selector-max-pseudo-class).

- **`selector-max-specificity`**: Constrains the specificity of selectors, helping to avoid specificity wars and encouraging simpler CSS structure. [Learn more](https://stylelint.io/user-guide/rules/list/selector-max-specificity).

- **`selector-max-type`**: Restricts the number of type selectors in a selector, promoting class-based styling for easier maintenance and reusability. [Learn more](https://stylelint.io/user-guide/rules/list/selector-max-type).

- **`selector-max-universal`**: Limits the use of the universal selector, reducing potential performance issues and unintended styling. [Learn more](https://stylelint.io/user-guide/rules/list/selector-max-universal).

- **`selector-no-qualifying-type`**: Disallows qualifying a selector with a type, promoting simpler, more class-focused selectors. [Learn more](https://stylelint.io/user-guide/rules/list/selector-no-qualifying-type).

- **`selector-no-vendor-prefix`**: Prohibits vendor prefixes for selectors, favoring the use of standardized selectors for broader compatibility. [Learn more](https://stylelint.io/user-guide/rules/list/selector-no-vendor-prefix).

- **`selector-not-notation`**: Specifies the notation for the `:not()` pseudo-class, ensuring consistency and clarity in its usage. [Learn more](https://stylelint.io/user-guide/rules/list/selector-not-notation).

- **`selector-pseudo-element-colon-notation`**: Enforces a specific colon notation for pseudo-elements, promoting consistency across the codebase. [Learn more](https://stylelint.io/user-guide/rules/list/selector-pseudo-element-colon-notation).

- **`media-feature-name-no-vendor-prefix`**: Disallows vendor prefixes for media feature names, relying on standardized media features for compatibility and future-proofing. [Learn more](https://stylelint.io/user-guide/rules/list/media-feature-name-no-vendor-prefix).

- **`at-rule-no-vendor-prefix`**: Prohibits vendor prefixes for at-rules, encouraging the use of standard at-rules across all browsers. [Learn more](https://stylelint.io/user-guide/rules/list/at-rule-no-vendor-prefix).

- **`max-nesting-depth`**: Limits the depth of nesting, encouraging flatter CSS for better readability and maintainability. [Learn more](https://stylelint.io/user-guide/rules/list/max-nesting-depth).

- **`no-irregular-whitespace`**: Disallows irregular whitespaces that are invisible but can cause potential issues in editors or during processing. [Learn more](https://stylelint.io/user-guide/rules/list/no-irregular-whitespace).

- **`no-unknown-animations`**: Ensures referenced animations are defined within the CSS, preventing the use of undefined animations. [Learn more](https://stylelint.io/user-guide/rules/list/no-unknown-animations).


### Plugin-Specific Rules


#### SCSS Rules

- **`scss/dollar-variable-pattern`**: Specifies a regex pattern that all SCSS variables must match, enforcing a consistent naming convention for variables. This rule is set to allow any pattern, aiming for broad applicability. [Learn more](https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/dollar-variable-pattern/README.md).

- **`scss/double-slash-comment-empty-line-before`**: Requires or disallows an empty line before SCSS double slash (`//`) comments, promoting readability and consistency in comment spacing. This configuration requires an empty line except under specific conditions. [Learn more](https://github.com/stylelint-scss/stylelint-scss/tree/master/src/rules/double-slash-comment-empty-line-before).

- **`scss/double-slash-comment-whitespace-inside`**: Ensures there is whitespace inside double slash (`//`) comments for better readability. [Learn more](https://github.com/stylelint-scss/stylelint-scss/tree/master/src/rules/double-slash-comment-inline).

- **`scss/comment-no-empty`**: Disallows empty comments within SCSS files, preventing clutter in the code. [Learn more](https://github.com/stylelint-scss/stylelint-scss/tree/master/src/rules/comment-no-empty).

- **`scss/dollar-variable-empty-line-before`**: Controls the presence of an empty line before SCSS variable declarations to maintain a clean and organized code structure. This configuration requires an empty line except in specific cases like the first nested declaration or after another variable declaration. [Learn more](https://github.com/stylelint-scss/stylelint-scss/tree/master/src/rules/dollar-variable-empty-line-before).

- **`scss/no-duplicate-dollar-variables`**: Prevents declaring the same SCSS variable multiple times within the same scope, avoiding potential conflicts or overrides. [Learn more](https://github.com/stylelint-scss/stylelint-scss/tree/master/src/rules/no-duplicate-dollar-variables).

#### Plugin-Specific Rules

- **`order/properties-order`**: Enforces a specified order for CSS properties within declaration blocks, improving consistency and readability across stylesheets. This rule is highly customizable to match any preferred ordering. [Learn more](https://github.com/hudochenkov/stylelint-order).

- **`plugin/rational-order`**: Part of the `stylelint-config-rational-order` plugin, it enforces a rational ordering of CSS properties to increase code readability and maintainability. The configuration can include options like `border-in-box-model` and `empty-line-between-groups` to tailor the ordering logic. [Learn more](https://github.com/constverum/stylelint-config-rational-order).

- **`color-format/format`**: This rule, coming from the `stylelint-color-format` plugin, allows for specifying the color format (e.g., `hsla`) that should be used in stylesheets, ensuring consistency in color declarations. [Learn more](https://github.com/filipekiss/stylelint-color-format).

- **`plugin/stylelint-group-selectors`**: Facilitates grouping of CSS selectors that have identical rules, reducing repetition and promoting a DRY (Don't Repeat Yourself) approach to styling. [Learn more](https://github.com/ssivanatarajan/stylelint-group-selectors).

- **`plugin/stylelint-selector-no-empty`**: Prevents the use of empty selectors, which can result from typos or incorrect refactoring, ensuring that every selector has associated styles. [Learn more](https://github.com/ssivanatarajan/stylelint-selector-no-empty).

- **`plugin/no-low-performance-animation-properties`**: Warns against using properties in animations and transitions that could lead to poor performance, such as layout thrashing or expensive repaints. The configuration allows ignoring specific properties like `color` and `background-color`. [Learn more](https://github.com/kristerkari/stylelint-high-performance-animation).

### Note:

Each SCSS and plugin-specific rule in this configuration is tailored to enforce a high standard of code quality and consistency within stylesheets, specifically targeting SCSS syntax and leveraging plugins for enhanced linting capabilities. The inclusion of these rules helps ensure that the project's styling is both performant and maintainable, aligning with best practices and coding standards.



## Benefits of Our Setup 🎉

Leveraging Stylelint with these configurations ensures our styling is not only consistent but also adheres to the best practices, enhancing the project's maintainability and quality.

## Conclusion 🏁

Incorporating Stylelint into our project workflow significantly elevates our version control practices. It mandates adherence to our predefined standards for every styling change, contributing to a well-maintained and easily navigable codebase.
