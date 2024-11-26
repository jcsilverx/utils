# `eslint-config-testing-library`

## Installation

To install `@flt-ui2/eslint-config-testing-library`, run the following command:

```sh
$ npm install @flt-ui2/eslint-config-testing-library --save-dev
```

## Usage

Extend `@flt-ui2/eslint-config-testing-library` and any additional configurations in your `eslint.config.mjs`:

```mjs
import * as testingLibrary from "@flt-ui2/eslint-config-testing-library";

const config = [
  ...testingLibrary.extends,
  {
    name: "@flt-ui2/eslint-config/testing-library",
    files: testingLibrary.files,
    rules: {
      ...testingLibrary.rules,
    },
  },
];

export default config;
```
