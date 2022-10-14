/**
 * @param {"en-US" | "es-ES"} lang
 */
export const getTranslations = (lang) => {
    return require(`./${lang}`);
};
