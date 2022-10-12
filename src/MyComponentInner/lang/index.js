/**
 * @param {"en-US" | "es-ES"} lang
 */
export const getTranslations = (lang) => {
    switch (lang) {
        case "en-US":
            import("./en-US");
            return __webpack_require__(require.resolveWeak("./en-US"));
        case "es-ES":
            import("./es-ES");
            return __webpack_require__(require.resolveWeak("./es-ES"));
    }
};
