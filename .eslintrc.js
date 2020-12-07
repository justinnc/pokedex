module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/recommended",
    "standard",
    "plugin:prettier/recommended",
    "airbnb",
    "airbnb/hooks",
  ],
  parser: "babel-eslint",
  plugins: ["react"],
  rules: {
    quotes: [2, "double", { avoidEscape: true }],
    "react/jsx-filename-extension": [
      2,
      { extensions: [".js", ".jsx", ".ts", ".tsx"] },
    ],
    "react/react-in-jsx-scope": 0,
    "no-unused-vars": 1,
    "no-var": 2,
    "prefer-const": 1,
    "constructor-super": 2,
    "no-const-assign": 2,
    "no-duplicate-imports": 2,
    "no-this-before-super": 2,
    "no-console": 1,
    "default-case": 1,
    "no-multi-spaces": 1,
    "react/no-find-dom-node": 2,
    "react/no-direct-mutation-state": 1,
    "react/prop-types": 0,
    "react/no-is-mounted": 1,
    "react/no-redundant-should-component-update": 2,
    "react/no-unused-state": 1,
    "react/display-name": 0,
    "comma-dangle": ["off", {}],
    "object-curly-newline": ["error", { multiline: true }],
    "import/no-named-as-default": 0,
  },
};
