import * as enUS from "./en-US";
import * as esES from "./es-ES";

/**
 * @param {"en-US" | "es-ES"} locale
 */
export const getTranslations = (locale) => {
    switch (__CLIENT__ ? __LANG__ : locale) {
        case "en-US":
            return enUS;
        case "es-ES":
            return esES;
    }
};
