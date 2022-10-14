import * as React from "react";
import MyComponentInner from "../MyComponentInner/MyComponentInner";
import * as Lang from "./lang";
import { createUseMemoizedTask } from "../wrapPromise";

import { timeout } from "../timeout";
import { memoizeTask } from "../memoizeTask";

const useMemoizedTask = createUseMemoizedTask(
    // TODO: globalThis.__LOCALE__
    // TODO: how would this work on the server though?? there's no single locale
    memoizeTask(() => timeout(1000).then(() => Lang.getTranslations("en-US")))
);

const MyComponent = () => {
    const t = useMemoizedTask();

    return (
        <>
            <div>{t.title()}</div>
            <MyComponentInner />
        </>
    );
};

console.log("after MyComponent");

export default MyComponent;
