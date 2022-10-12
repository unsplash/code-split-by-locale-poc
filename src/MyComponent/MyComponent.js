import * as React from "react";
import MyComponentInner from "../MyComponentInner/MyComponentInner";
import * as Lang from "./lang";

const MyComponent = () => {
    const t = Lang.getTranslations("en-US");

    return (
        <>
            <div>{t.title()}</div>
            <MyComponentInner />
        </>
    );
};

console.log("after MyComponent");

export default MyComponent;
