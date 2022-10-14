import * as React from "react";
import * as Lang from "./lang";

import { timeout } from "../timeout";
import { createUseMemoizedTask } from "../wrapPromise";
import { memoizeTask } from "../memoizeTask";

const useMemoizedTask = createUseMemoizedTask(
    memoizeTask(() => timeout(1000).then(() => Lang.getTranslations("en-US")))
);

const MyComponentInner = () => {
    const t = useMemoizedTask();

    return <div>{t.title()}</div>;
};

console.log("after MyComponentInner");

export default MyComponentInner;
