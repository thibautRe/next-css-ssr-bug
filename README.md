# Next.js CSS SSR submodule bug

## Reproduce the bug

- `npm i`
- `cd ssr-bug-subpackage && npm link && cd .. && npm link ssr-bug-subpackage` : link a local NPM module, so that you can `require()` it in `pages/bug.js`
- `npm run dev`
- Navigate to `localhost:3000`.
