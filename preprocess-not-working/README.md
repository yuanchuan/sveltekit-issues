# Sveltekit issue

> The preprocess breaks after version `1.0.0-next.146`


## Description

This issue is probably caused by https://github.com/sveltejs/kit/pull/2137.
After small investigation I found the error happens only when no cache is
deteced and `vite` tries to rebuild everyting with `config`.

https://github.com/vitejs/vite/blob/fb406ce4c0fe6da3333c9d1c00477b2880d46352/packages/vite/src/node/build.ts#L385-L387

## Workaround for this demo

1. Remove `|>` pipleline operator in `routes/index.svelte`

```js
let title = 'hello world'
```

2. Run dev server to generate cache inside `node_modules/.vite`

```js
npm run dev
```

3. Retore the code

```js
let title = 'hello world' |> uppercase
```
