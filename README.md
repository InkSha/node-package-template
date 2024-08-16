# Node Package Template

The repository is my develop node package template.

## Develop

The project use [`typescript`](https://www.typescriptlang.org/) develop the package.

```shell
# you can custom you package manage tool.
# install project all deps
pnpm install

# running the project
pnpm dev
```

## Build

The project use [`rollup`](https://rollupjs.org/) build the package.

```shell
pnpm build
```

Build dir default is `<ProjectName>/dist/`.

## Release

Use [`semantic-release`](https://semantic-release.gitbook.io/) and Github Actions publish the package.

Need goto github repository setting add env variable.

| variable | comment |
| :------: | :-----: |
| GITHUB_TOKEN | access you account |
| NPM_TOKEN | access you npm account |
