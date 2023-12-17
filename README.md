# CIS-1962 ESLint config

To use our config in a plain Node.js project:

```js
// .eslintrc.js

/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  extends: ['@cis-1962/eslint-config/node'],
};
```

For a TypeScript project:

```js
// .eslintrc.js

/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  extends: ['@cis-1962/eslint-config/typescript'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: true,
  },
};
```

For a React (with TypeScript) project:

```js
// .eslintrc.js

/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  extends: ['@cis-1962/eslint-config/react'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: true,
  },
};
```
