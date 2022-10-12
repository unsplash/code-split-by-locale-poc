import * as React from "react";
import MyComponentInner from "../MyComponentInner/MyComponentInner";
import * as Lang from "./lang";
import { wrapPromise } from "../wrapPromise";

import { timeout } from "../timeout";

const resource = wrapPromise(() =>
    // TODO: globalThis.__LOCALE__
    // TODO: how would this work on the server though?? there's no single locale
    timeout(1000).then(() => Lang.getTranslations("en-US"))
);

const MyComponent = () => {
    const t = resource.read();

    return (
        <>
            <div>{t.title()}</div>
            <MyComponentInner />
        </>
    );
};

console.log("after MyComponent");

export default MyComponent;
