import * as React from "react";
import * as Lang from "./lang";
import { wrapPromise } from "../wrapPromise";

import { timeout } from "../timeout";

const resource = wrapPromise(
    timeout(1000).then(() => Lang.getTranslations("en-US"))
);

const MyComponentInner = () => {
    const t = resource.read();

    return <div>{t.title()}</div>;
};

console.log("after MyComponentInner");

export default MyComponentInner;
