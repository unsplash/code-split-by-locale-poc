import * as React from "react";
import MyComponentInner from "../MyComponentInner/MyComponentInner";
import * as Lang from "./lang";

const MyComponent = ({ locale }) => {
    const t = Lang.getTranslations(locale);

    return (
        <>
            <div>{t.title()}</div>
            <MyComponentInner locale={locale} />
        </>
    );
};

console.log("after MyComponent");

export default MyComponent;
