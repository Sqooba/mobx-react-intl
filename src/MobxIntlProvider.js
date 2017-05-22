import React from "react";
import {inject, observer} from "mobx-react";
import {IntlProvider, addLocaleData} from "react-intl"

import enLocale from 'react-intl/locale-data/en';
import deLocale from 'react-intl/locale-data/de';
addLocaleData([...deLocale, ...enLocale]);

const MobxIntlProviderChild =  ({locale, children}) => {
    const loc = locale.value;
    const messages = locale.messages
    return <IntlProvider key={loc} defaultLocale="de" locale={loc} messages={messages}>
        {children}
    </IntlProvider>
};

export const MobxIntlProvider = inject("locale")(observer(MobxIntlProviderChild));
