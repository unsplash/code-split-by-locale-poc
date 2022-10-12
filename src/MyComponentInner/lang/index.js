// TODO: check why namespace imports don't tree shake
import { title as titleEnUs } from "./en-US";
import { title as titleEsEs } from "./es-ES";

// TODO: do we need this pure comment?
/**
 * @param {"en-US" | "es-ES"} locale
 */
export const getTranslations = /*#__PURE__*/ (locale) => {
    // On the server, `DefinePlugin` would convert this to:
    // switch (false ? __LANG__ : locale) {
    // which would then be converted to
    // switch (locale) {

    // On the client `DefinePlugin` would convert this to:
    // switch (true ? 'en-US' : locale)
    // which would then be converted to
    // switch ('en-US') {

    // dead code elimination + tree shaking takes care of the rest

    switch (__CLIENT__ ? __LANG__ : locale) {
        case "en-US":
            return { title: titleEnUs };
        case "es-ES":
            return { title: titleEsEs };
    }
};
