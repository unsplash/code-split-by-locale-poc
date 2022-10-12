import * as enUS from "./en-US";
import * as esES from "./es-ES";

/**
 * @param {"en-US" | "es-ES"} lang
 */
export const getTranslations = (lang) => {
    switch (lang) {
        case "en-US":
            return enUS;
        case "es-ES":
            return esES;
    }
};
