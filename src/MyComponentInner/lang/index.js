/**
 * @param {"en-US" | "es-ES"} lang
 */
export const getTranslations = (lang) => {
    switch (lang) {
        case "en-US":
            return import("./en-US");
        case "es-ES":
            return import("./es-ES");
    }
};
