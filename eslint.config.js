// eslint.config.js at the project root
import ParserTypescriptEslint from "@typescript-eslint/parser";
import PluginImport from "eslint-plugin-import";
import PluginJest from "eslint-plugin-jest";
import UIConfig from "ui-config-path";
import globals from "globals";

export default [
  UIConfig,
  {
    files: ["// Specify the files you wish to target with this configuration"],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.es2021,
      },
      parser: ParserTypescriptEslint,
      parserOptions: {
        project: ["./tsconfig.json"],
        tsconfigRootDir: __dirname,
      },
    },
    plugins: {
      import: PluginImport,
      jest: PluginJest,
    },
    rules: {
      "jest/no-deprecated-functions": "off",
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
      "@typescript-eslint/explicit-function-return-type": [
        "error",
        {
          allowExpressions: true,
        },
      ],
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
      "react/react-in-jsx-scope": "off",
      "react/jsx-uses-react": "off",
    },
    settings: {
      "import/resolver": {
        ...PluginImport.configs.typescript.settings["import/resolver"],
        typescript: {
          project: ["tsconfig.json"],
        },
      },
    },
  },
];
