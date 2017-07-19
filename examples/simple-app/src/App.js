import React from "react"
import { Provider } from "mobx-react";
import {MobxIntlProvider, LocaleStore} from "mobx-react-intl"
import {addLocaleData} from "react-intl";
import Home from "./Home"
import en from "./translations/en"
import de from "./translations/de"

import enLocale from 'react-intl/locale-data/en';
import deLocale from 'react-intl/locale-data/de';
addLocaleData([...deLocale, ...enLocale]);

// Internationalization
const localeStore = new LocaleStore("en", {en, de});

const store = {
    locale: localeStore,
};

export default () => <div>
    <Provider {...store}>
        <MobxIntlProvider>
            <Home />
        </MobxIntlProvider>
    </Provider>
</div>;
