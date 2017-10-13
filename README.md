# Internationalization with mobx and react-intl

A library to use react-intl along with a mobx store for the selected locale with typescript support.   

[![npm version](https://badge.fury.io/js/mobx-react-intl.svg)](https://badge.fury.io/js/mobx-react-intl) 
[![CircleCI](https://circleci.com/gh/Sqooba/mobx-react-intl.svg?style=svg)](https://circleci.com/gh/Sqooba/mobx-react-intl)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

## Example

Since an example is worth a thousand words. 

You can see this example running on [Stackblitz](https://stackblitz.com/edit/react-kmgtt3)

```
import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider, inject, observer } from "mobx-react"; 
import { MobxIntlProvider, LocaleStore } from "mobx-react-intl"; 
import {addLocaleData, injectIntl, FormattedMessage} from "react-intl";
import enLocale from 'react-intl/locale-data/en';
import deLocale from 'react-intl/locale-data/de';
addLocaleData([...deLocale, ...enLocale]);


const translations = {
  en: {
    hello: "Hello", 
    world: "World"
  }, 
  de: {
    hello: "Hallo", 
    world: "Wereld"
  }
}

// Internationalization
const localeStore = new LocaleStore("en", translations);

const store = {
    locale: localeStore, // The locale store has to be called locale. 
};

const _Home = ({intl: {formatMessage}, locale}) => <div>
    <h1>{formatMessage({id: "hello"})}</h1>
    <FormattedMessage id="world" />
    <br/>
    <select value={locale.value} onChange={(event) => locale.value = event.target.value}>
        <option value="de">Deutsch</option>
        <option value="en">English</option>
    </select>
</div>
const Home = inject("locale")(injectIntl(observer(_Home)));

const App = () => <div>
    <Provider {...store}> 
        <MobxIntlProvider>
            <Home />
        </MobxIntlProvider>
    </Provider>
</div>;

render(<App />, document.getElementById('root'));
```


## I18n mobx store

`LocaleStore` is a mobx store that contains the locale data and persists the 
locale to the browser LocalStorage (if it exists). 

The store expects the default locale and the translations for all supported locales as arguments.

## Intl Provider

`MobxIntlProvider.js`: Creates the I18n provider for mobx. Note that it relies on `IntlProvider` from `react-intl`. 

This component has the same interface as [`IntlProvider`](https://github.com/yahoo/react-intl/wiki/Components#intlprovider) 
except that the `locale` and `messages` attributes are injected through mobx.  

## Using locale data in other stores.

It is possible to also use the i18n without being in the react scope. For example when initializing a 
store that needs locale data, just pass the locale store as a prop. You can see that a `formatMessage` method 
is implemented in the `LocaleStore` for this case. 

## Example

A running example with some file structure is provided in `examples/simple-app`. 

### Run the example locally: 
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

