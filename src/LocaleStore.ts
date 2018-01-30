import {observable} from 'mobx';
const _formatMessage: any = require("format-message");

const LOCALE = "locale";

export interface IMessageFormat {
  id: string,
  defaultMessage: string,
  description?: string,
}

export class LocaleStore {
    private _locale = observable("");  // the locale value
    private translations: {[key: string]: {[id: string]: string}}

    constructor(defaultLocale: string, translations: {[key: string]: {[id: string]: string}}) {
        this.translations = translations
        if (typeof(Storage) !== "undefined") {
            const storedLocale = localStorage.getItem(LOCALE)
            if(storedLocale && storedLocale in translations) {
                this.value = storedLocale;
            } else {
                this.value = defaultLocale;
            }
        } else {
            this.value = defaultLocale;
        }
    };

    get value(): string {
        return this._locale.get();
    }; 

    set value(value: string) {
        if (typeof(Storage) !== "undefined") {
          localStorage.setItem(LOCALE, value);
        }
        this._locale.set(value); 
    }

    get messages(): {[key: string]: string} {
        return this.translations[this.value]
    }

    formatMessage = (id: string, values?: object): string => {
        if(!(id in this.messages)) {
            console.warn("Id not found in intl list: "+id)
            return id;
        }
        return _formatMessage(this.messages[id], values);
    }

    formatDefinedMessage = (message: IMessageFormat, values?: object): string => {
        if (!this.messages[message.id]) {
            return message.defaultMessage;
        }
        return _formatMessage(this.messages[message.id], values);
    }
}
