import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";

const eslintConfig = defineConfig([
  ...nextVitals,
  {
    rules: {
      // carried over from the previous .eslintrc.json
      "@next/next/no-img-element": "off",
      "@next/next/no-html-link-for-pages": "off",
      // React Compiler rules added in eslint-config-next 16. They flag existing
      // patterns (the next-themes `mounted` guard, fetch-on-mount, reading slider
      // refs during render), so they are reported as warnings until refactored.
      "react-hooks/set-state-in-effect": "warn",
      "react-hooks/purity": "warn",
      "react-hooks/refs": "warn",
    },
  },
  globalIgnores([".next/**", "out/**", "build/**", "next-env.d.ts"]),
]);

export default eslintConfig;
