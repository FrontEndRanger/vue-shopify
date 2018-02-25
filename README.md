# vue-shopify

> Shopify theme with Vue.js

## Description

WARNING: NON FUNCTIONNAL FOR NOW, THIS IS A POC

This Shopify theme replaces the liquid templates with your own Vue.js app.

Data is loaded on the first page load to have it accessible to your entire app without needing to make api calls on each page.

The app calls the Shopify server with an alternate template to get data and return a JSON, which is consumed by the app.

### Advantages

- Build a component based app
- i18n app

Big props to [dmccuskey](https://github.com/dmccuskey/shopify-modern) for the inspiration

## Dependencies

[Themekit](https://shopify.github.io/themekit/)

## Getting started

- Rename `config-sample.yml` to `config.yml`
- Update the content of  `config.yml` with your `theme_id`, `store` and `password`

## TODO

- [ ] Mock Shopify API with [json-server](https://github.com/typicode/json-server)
- [ ] Add unit tests
- [ ] i18n

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080 and mock server at localhost:3030
npm run dev

# build for production with minification
npm run build

# upload to your shopify instance
themekit upload

# open your theme
themekit open

# build for production and view the bundle analyzer report
npm run build --report
```

## Contribution

```bash
# run unit tests
npm run unit

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
