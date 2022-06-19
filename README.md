### README

This repo is to show how ESLint crashes when parsing query.ts due to a syntax error.
What happens is that @graphql-eslint is used as a processor to extract GraphQL template strings.
@graphql-eslint uses @graph-tools/graphql-tag-pluck, which in turn uses @babel/parser.

@babel/parser throws an error when it sees the syntax error. The error propagates all the way up to ESLint.

```SHELL
> npm run lint 2>&1

> @graphql-eslint/example-graphql-config-code-file-ts@0.0.1 lint
> eslint --ext graphql,js,ts .


Oops! Something went wrong! :(

ESLint: 8.18.0

SyntaxError: Missing initializer in const declaration. (4:13)
    at instantiate (.../graphql-config-code-file-ts/node_modules/@babel/parser/lib/index.js:72:32)
    at constructor (.../graphql-config-code-file-ts/node_modules/@babel/parser/lib/index.js:358:12)
    at Object.raise (.../graphql-config-code-file-ts/node_modules/@babel/parser/lib/index.js:3341:19)
    at Object.parseVar (.../graphql-config-code-file-ts/node_modules/@babel/parser/lib/index.js:15378:16)
    at Object.parseVarStatement (.../graphql-config-code-file-ts/node_modules/@babel/parser/lib/index.js:15171:10)
    at Object.parseVarStatement (.../graphql-config-code-file-ts/node_modules/@babel/parser/lib/index.js:10318:31)
    at Object.parseStatementContent (.../graphql-config-code-file-ts/node_modules/@babel/parser/lib/index.js:14713:21)
    at Object.parseStatementContent (.../graphql-config-code-file-ts/node_modules/@babel/parser/lib/index.js:10359:18)
    at Object.parseStatement (.../graphql-config-code-file-ts/node_modules/@babel/parser/lib/index.js:14638:17)
    at Object.parseBlockOrModuleBlockBody (.../graphql-config-code-file-ts/node_modules/@babel/parser/lib/index.js:15281:25)
```
