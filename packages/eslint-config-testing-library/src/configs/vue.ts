import type { TSESLint } from "@typescript-eslint/utils";
import { rulesVue } from "../rules";
import testingLibraryPlugin from "eslint-plugin-testing-library";

const _extends: TSESLint.FlatConfig.ConfigArray = [
  testingLibraryPlugin.configs["flat/vue"],
];

const _files: (string | string[])[] = ["**/?(*.)+(spec|test).ts?(x)"];

const _rules: TSESLint.FlatConfig.Rules = {
  ...rulesVue,
};

const _config = {
  extends: _extends,
  files: _files,
  rules: _rules,
};

export {
  _extends as extends,
  _files as files,
  _rules as rules,
  _config as config,
};
