import {observable} from 'mobx';
import formatMessage from "format-message";

const LOCALE = "locale";

export class LocaleStore {
    _locale = observable("");  // the locale value
    translations: {[key: string]: {[id: string]: string}} // fixMe: observable

    constructor(defaultLocale: string, translations: {[key: string]: {[id: string]: string}}) {
        this.translations = translations
        if (typeof(Storage) !== "undefined") {
            this._locale.set(localStorage.getItem(LOCALE) || defaultLocale);
        } else {
            this._locale.set(defaultLocale);
        }
    };

    get value():string {
        return this._locale.get();
    }; 

    set value(value: string):void {
        localStorage.setItem(LOCALE, value);
        this._locale.set(value); 
    }

    get messages():{[string]:string} {
        return this.translations[this.value]
    }

    formatMessage = (id:string, values:object) => {
        if(!(id in this.messages)) {
            console.warn("Id not found in intl list: "+id)
            return id;  
        }
        return formatMessage(this.messages[id], this.value); 
    }
}
