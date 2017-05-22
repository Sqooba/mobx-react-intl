# Internationalization with mobx and react-intl

## I18n mobx store

`./translations/LocaleStore.js` is a mobx store that contains the locale data and persists the 
locale to the browser locale storage. 


## Intl Provider

`./translations/MobxIntlProvider.js`: Creates the I18n provider for mobx. Note that it relies on `IntlProvider` from `react-intl`. 

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

