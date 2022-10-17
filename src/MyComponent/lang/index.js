/**
 * @param {"en-US" | "es-ES"} lang
 */
export const getTranslations = (lang) => {
    switch (lang) {
        case "en-US":
            // Signal to the bundler that we want to bundle this module but we
            // want to import it lazily (unlike `require`).
            import("./en-US");
            // On the client-side: read the pre-loaded module
            // On the server-side: load the module
            return __webpack_require__(require.resolveWeak("./en-US"));
        case "es-ES":
            import("./es-ES");
            return __webpack_require__(require.resolveWeak("./es-ES"));
    }
};
