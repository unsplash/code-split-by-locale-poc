import * as React from "react";
import * as Lang from "./lang";

const MyComponentInner = () => {
    const t = Lang.getTranslations("en-US");

    return <div>{t.title()}</div>;
};

console.log("after MyComponentInner");

export default MyComponentInner;
