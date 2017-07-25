import {observable} from 'mobx';
const formatMessage: any = require("format-message");

const LOCALE = "locale";

export class LocaleStore {
    private _locale = observable("");  // the locale value
    private translations: {[key: string]: {[id: string]: string}}

    constructor(defaultLocale: string, translations: {[key: string]: {[id: string]: string}}) {
        this.translations = translations
        if (typeof(Storage) !== "undefined") {
            const storedLocale = localStorage.getItem(LOCALE)
            if(storedLocale && storedLocale in translations) {
                this._locale.set(storedLocale);
            } else {
                this._locale.set(defaultLocale);
            }
        } else {
            this._locale.set(defaultLocale);
        }
    };

    get value(): string {
        return this._locale.get();
    }; 

    set value(value: string) {
        localStorage.setItem(LOCALE, value);
        this._locale.set(value); 
    }

    get messages(): {[key: string]: string} {
        return this.translations[this.value]
    }

    formatMessage = (id: string, values: object) => {
        if(!(id in this.messages)) {
            console.warn("Id not found in intl list: "+id)
            return id;  
        }
        return formatMessage(this.messages[id], this.value); 
    }
}
