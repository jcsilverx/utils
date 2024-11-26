import type { TSESLint } from "@typescript-eslint/utils";

const rules: TSESLint.FlatConfig.Rules = {
  "testing-library/await-async-queries": "error",
  "testing-library/await-async-utils": "error",
  "testing-library/no-await-sync-events": "warn",
  "testing-library/no-await-sync-queries": "warn",
  "testing-library/no-container": "warn",
  "testing-library/no-debugging-utils": "warn",
  "testing-library/no-dom-import": ["warn", "react"],
  "testing-library/no-node-access": "warn",
  "testing-library/no-promise-in-fire-event": "warn",
  "testing-library/no-render-in-lifecycle": "warn",
  "testing-library/no-unnecessary-act": "warn",
  "testing-library/no-wait-for-multiple-assertions": "warn",
  "testing-library/no-wait-for-side-effects": "warn",
  "testing-library/no-wait-for-snapshot": "warn",
  "testing-library/prefer-find-by": "warn",
  "testing-library/prefer-presence-queries": "warn",
  "testing-library/prefer-query-by-disappearance": "warn",
  "testing-library/prefer-screen-queries": "warn",
  "testing-library/prefer-user-event": "warn",
  "testing-library/render-result-naming-convention": "warn",
};

export { rules };
