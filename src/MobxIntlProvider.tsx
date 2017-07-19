import React from "react";
import { LocaleStore } from "./LocaleStore";
import {inject, observer} from "mobx-react";
import {IntlProvider} from "react-intl"

const MobxIntlProviderChild =  ({locale, children}: {locale: LocaleStore, children: any}) => {
    const loc = locale.value;
    const messages = locale.messages;
    return <IntlProvider key={loc} defaultLocale="de" locale={loc} messages={messages}>
        {children}
    </IntlProvider>
}

export const MobxIntlProvider = inject("locale")(observer(MobxIntlProviderChild));
