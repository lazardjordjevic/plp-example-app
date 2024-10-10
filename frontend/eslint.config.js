import { fixupConfigRules } from "@eslint/compat";
import { FlatCompat } from "@eslint/eslintrc";
import typescriptPlugin from "@typescript-eslint/eslint-plugin";
import typescriptParser from "@typescript-eslint/parser";
import * as tsResolver from "eslint-import-resolver-typescript";
import importXPlugin from "eslint-plugin-import-x";
import jsxA11yPlugin from "eslint-plugin-jsx-a11y";
import prettierPlugin from "eslint-plugin-prettier";
import reactHooksPlugin from "eslint-plugin-react-hooks";
import simpleImportSortPlugin from "eslint-plugin-simple-import-sort";
import sonarjsPlugin from "eslint-plugin-sonarjs";

const files = [
	"./*.{js,mjs,cjs,jsx,ts,tsx}",
	"./src/**/*.{js,mjs,cjs,jsx,ts,tsx}",
];

// This exports an object so that it can be used in the eslint.config.js array.
export default [
	{
		files: [
			"./*.{js,mjs,cjs,jsx,ts,tsx}",
			"./src/**/*.{js,mjs,cjs,jsx,ts,tsx}",
		],
		plugins: {
			"@typescript-eslint": typescriptPlugin,
			"import-x": importXPlugin,
			"jsx-a11y": jsxA11yPlugin,
			prettier: prettierPlugin,
			"react-hooks": reactHooksPlugin,
			"simple-import-sort": simpleImportSortPlugin,
			sonarjs: sonarjsPlugin,
		},
		settings: {
			"import-x/resolver": {
				name: "tsResolver",
				// options: { someConfig: value },
				resolver: tsResolver,
			},
		},
		ignores: [
			"**/.eslintcache",
			"**/.eslintrc.json",
			"**/.next/**",
			"**/.prettierignore",
			"**/.prettierrc.json",
			"**/.tsbuildinfo",
			"**/.vercel/**",
			"**/coverage/**",
			"**/node_modules/**",
			"**/package.json",
			"**/project.json",
			"**/tsconfig.json",
			"**/vitest.config.ts",
		],
		languageOptions: {
			parser: typescriptParser,
		},
		rules: {
			// Recommended
			useLiteralKeys: "off",
			noArrayIndexKey: "off",
			"constructor-super": "error",
			"for-direction": "error",
			"getter-return": "error",
			"no-async-promise-executor": "error",
			"no-case-declarations": "error",
			"no-class-assign": "error",
			"no-compare-neg-zero": "error",
			"no-cond-assign": "error",
			"no-const-assign": "error",
			"no-constant-binary-expression": "error",
			"no-constant-condition": "error",
			"no-control-regex": "error",
			"no-debugger": "error",
			"no-delete-var": "error",
			"no-dupe-args": "error",
			"no-dupe-class-members": "error",
			"no-dupe-else-if": "error",
			"no-dupe-keys": "error",
			"no-duplicate-case": "error",
			"no-empty": "error",
			"no-empty-character-class": "error",
			"no-empty-pattern": "error",
			"no-empty-static-block": "error",
			"no-ex-assign": "error",
			"no-extra-boolean-cast": "error",
			"no-fallthrough": "error",
			"no-func-assign": "error",
			"no-global-assign": "error",
			"no-import-assign": "error",
			"no-invalid-regexp": "error",
			"no-irregular-whitespace": "error",
			"no-loss-of-precision": "error",
			"no-misleading-character-class": "error",
			"no-new-native-nonconstructor": "error",
			"no-nonoctal-decimal-escape": "error",
			"no-obj-calls": "error",
			"no-octal": "error",
			"no-prototype-builtins": "error",
			"no-redeclare": "error",
			"no-regex-spaces": "error",
			"no-self-assign": "error",
			"no-setter-return": "error",
			"no-shadow-restricted-names": "error",
			"no-sparse-arrays": "error",
			"no-this-before-super": "error",
			"no-unexpected-multiline": "error",
			"no-unreachable": "error",
			"no-unsafe-finally": "error",
			"no-unsafe-negation": "error",
			"no-unsafe-optional-chaining": "error",
			"no-unused-labels": "error",
			"no-unused-private-class-members": "error",
			"no-useless-backreference": "error",
			"no-useless-catch": "error",
			"no-useless-escape": "error",
			"no-with": "error",
			"require-yield": "error",
			"use-isnan": "error",
			"valid-typeof": "error",

			// Import
			// Warnings
			"import-x/export": ["error"],
			"import-x/no-empty-named-blocks": ["error"],
			"import-x/no-extraneous-dependencies": ["off"],
			"import-x/no-mutable-exports": ["off"],
			"import-x/no-named-as-default": ["error"],
			"import-x/no-named-as-default-member": ["error"],
			"import-x/no-rename-default": ["warn"],
			"import-x/no-unresolved": ["error"],
			"import-x/no-unused-modules": ["warn"],
			// Module Systems
			"import-x/no-amd": ["error"],
			"import-x/no-commonjs": ["error"],
			"import-x/no-import-module-exports": ["off"],
			"import-x/no-nodejs-modules": ["off"],
			"import-x/unambiguous": ["off"],
			// Static Analysis
			"import-x/default": ["error"],
			"import-x/named": ["error"],
			"import-x/namespace": ["error"],
			"import-x/no-absolute-path": ["error"],
			"import-x/no-cycle": ["error"],
			"import-x/no-dynamic-require": ["error"],
			"import-x/no-internal-modules": ["off"],
			"import-x/no-relative-packages": ["error"],
			"import-x/no-relative-parent-imports": ["error"],
			"import-x/no-restricted-paths": ["off"],
			"import-x/no-self-import": ["error"],
			"import-x/no-useless-path-segments": ["error"],
			"import-x/no-webpack-loader-syntax": ["error"],
			// Style Guide
			"import-x/consistent-type-specifier-style": ["error", "prefer-top-level"],
			"import-x/dynamic-import-chunkname": ["off"],
			"import-x/exports-last": ["off"],
			"import-x/extensions": ["off"],
			"import-x/first": ["error"],
			"import-x/group-exports": ["off"],
			"import-x/max-dependencies": ["off"],
			"import-x/newline-after-import": ["error"],
			"import-x/no-anonymous-default-export": ["off"],
			"import-x/no-default-export": ["off"],
			"import-x/no-duplicates": ["error"],
			"import-x/no-named-default": ["error"],
			"import-x/no-named-export": ["off"],
			"import-x/no-namespace": ["off"],
			"import-x/no-unassigned-import": ["off"],
			"import-x/order": ["off"],
			"import-x/prefer-default-export": ["off"],

			// headless-commerce
			"no-console": "error",
			curly: "error",
			"no-undef": "off",
			"no-unused-vars": "off",
			// "@typescript-eslint/no-explicit-any": "error",
			"@typescript-eslint/no-unused-vars": "error",
			"@typescript-eslint/consistent-type-imports": [
				"error",
				{
					prefer: "type-imports",
					fixStyle: "separate-type-imports",
				},
			],
			"prettier/prettier": [
				"error",
				{
					endOfLine: "auto",
				},
			],
			"simple-import-sort/exports": ["error"],
			"simple-import-sort/imports": ["error"],
		},
	},
];
