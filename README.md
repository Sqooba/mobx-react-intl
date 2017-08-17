# Internationalization with mobx and react-intl

A library to use react-intl along with a mobx store.  

[![npm version](https://badge.fury.io/js/mobx-react-intl.svg)](https://badge.fury.io/js/mobx-react-intl) 
[![CircleCI](https://circleci.com/gh/Sqooba/mobx-react-intl.svg?style=svg)](https://circleci.com/gh/Sqooba/mobx-react-intl)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

## I18n mobx store

`src/LocaleStore.js` is a mobx store that contains the locale data and persists the 
locale to the browser locale storage. 

The store expects the default locale and the translations for all supported locales as argument.

### format-message from the store
It is possible to format messages without using react-mobx by calling the `formatMessage` function from the store. 
This can be especially useful when using localized data in other stores (pass the locale store as a constructor of other stores). 

### LocaleStorage

The selected locale is persisted to the LocalStorage if it exists. 

## Intl Provider

`src/MobxIntlProvider.js`: Creates the I18n provider for mobx. Note that it relies on `IntlProvider` from `react-intl`. 

This component takes the locale store as prop. 

## Using locale data in other stores.

It is possible to also use the i18n without being in the react scope. For example when initializing a 
store that needs locale data, just pass the locale store as a prop. You can see that a `formatMessage` method 
is implemented in the `LocaleStore` for this case. 

## Example

An example of usage is provided in `examples/simple-app`. 

### Run it locally: 
To run this `create-react-app` project, run the following commands (`yarn` can be replaced by `npm`)

```bash
yarn install 
yarn start
```

### Introduction

To have internationalization (i18n) working with react, mobx and react-intl, 
we need to: 

1. Create a store for the i18n data (locale used and locale data)
2. Uhe use a custom provider to provide internationalization from the mobx store. 
3. Inject the provider to UI components.
4. Use the provided code. 

### I18n translations.

We create two files to maintain locale data: 

`./translations/en.js` and `./translations/de.js` provide translations for English and German. 



## Language Switcher

`./Toolbar.js` is the component used to switch from one language to another. 

## Home

`./Home.js` is a UI component that uses i18n to display texts. 


## Application initializer 

In `./App.js` we finally wrap up all components. 

The app is initialized initialized with the Provider and shows the `Home` component. 

