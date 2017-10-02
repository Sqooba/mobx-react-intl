import * as React from "react";
import { LocaleStore } from "./LocaleStore";
import {inject, observer} from "mobx-react";
import {IntlProvider} from "react-intl"

const MobxIntlProviderChild =  ({locale, children, defaultLocale}: {locale: LocaleStore, children: any, defaultLocale?:String}) => {
    const loc = locale.value;
    const messages = locale.messages;
    return <IntlProvider key={loc} defaultLocale={defaultLocale} locale={loc} messages={messages}>
        {children}
    </IntlProvider>
}

MobxIntlProviderChild.defaultProps = {
    defaultLocale: "en"
}

export const MobxIntlProvider = inject("locale")(observer(MobxIntlProviderChild));
