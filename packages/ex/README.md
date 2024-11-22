# `@flt-ui/ex`

## Installation

To install `@flt-ui/ex`, run the following command:

```sh
$ npm install @flt-ui/ex --save-dev
```

## Usage

Extend `@flt-ui/ex` and any additional configurations in your `eslint.config.mjs`:

```mjs
import * as tailwindcss from "@flt-ui/eslint-config-tailwindcss";
import * as ex from "@flt-ui/ex";

const config = ex.config(
  /**
   * Allows you to "extend" a set of configs similar to `extends` from the
   * classic configs.
   *
   * Example:
   *
   * export default ex.config({
   *   extends: tailwindcss.extends,
   *   name: '@flt-ui/eslint-config/tailwindcss',
   *   files: tailwindcss.files,
   *   rules: {
   *     ...tailwindcss.rules,
   *   },
   * });
   *
   * Expands to:
   *
   * export default [
   *   ...tailwindcss.extends,
   *   {
   *     name: '@flt-ui/eslint-config/tailwindcss',
   *     files: tailwindcss.files,
   *     rules: {
   *       ...tailwindcss.rules,
   *     },
   *   },
   * ];
   */
  {
    extends: tailwindcss.extends,
    name: "@flt-ui/eslint-config/tailwindcss",
    files: tailwindcss.files,
    rules: {
      ...tailwindcss.rules,
    },
  },
);

export default config;
```
