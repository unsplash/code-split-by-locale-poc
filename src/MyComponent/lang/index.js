import * as enUS from "./en-US";
import * as esES from "./es-ES";

/**
 * @param {"en-US" | "es-ES"} locale
 */
export const getTranslations = (locale) => {
    if ((__CLIENT__ ? __LANG__ : locale) === "en-US") {
        return enUS;
    } else if ((__CLIENT__ ? __LANG__ : locale) === "es-ES") {
        return esES;
    }
};
