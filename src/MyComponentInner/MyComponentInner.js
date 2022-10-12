import * as React from "react";
import * as Lang from "./lang";

const MyComponentInner = ({ locale }) => {
    const t = Lang.getTranslations(locale);

    return <div>{t.title()}</div>;
};

console.log("after MyComponentInner");

export default MyComponentInner;
