import React from "react"
import { Provider } from "mobx-react";
import {MobxIntlProvider, LocaleStore} from "mobx-react-intl"
import Home from "./Home"
import en from "./translations/en"
import de from "./translations/de"

// Internationalization
const localeStore = new LocaleStore("de", {en, de});

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
