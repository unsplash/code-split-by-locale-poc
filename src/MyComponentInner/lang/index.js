import * as enUS from "./en-US";
import * as esES from "./es-ES";

/**
 * @param {"en-US" | "es-ES"} locale
 */
export const getTranslations = (locale) => {
    const v = __CLIENT__ ? __LANG__ : locale;
    // On the server, `DefinePlugin` would convert this to:
    // switch (false ? __LANG__ : locale) {
    // which would then be converted to
    // switch (locale) {

    // On the client `DefinePlugin` would convert this to:
    // switch (true ? 'en-US' : locale)
    // which would then be converted to
    // switch ('en-US') {

    // dead code elimination + tree shaking takes care of the rest

    if (v === "en-US") {
        return enUS;
    } else if (v === "es-ES") {
        return esES;
    }
};
