import * as enUS from "./en-US";
import * as esES from "./es-ES";

/**
 * @param {"en-US" | "es-ES"} locale
 */
export const getTranslations = (locale) => {
    // On the server, `DefinePlugin` would convert this to:
    // switch (false ? __LANG__ : locale) {
    // which would then be converted to
    // switch (locale) {

    // On the client `DefinePlugin` would convert this to:
    // switch (true ? 'en-US' : locale)
    // which would then be converted to
    // switch ('en-US') {

    // dead code elimination + tree shaking takes care of the rest

    if ((__CLIENT__ ? __LANG__ : locale) === "en-US") {
        return enUS;
    } else if ((__CLIENT__ ? __LANG__ : locale) === "es-ES") {
        return esES;
    }
};
