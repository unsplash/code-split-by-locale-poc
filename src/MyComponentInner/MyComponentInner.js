import * as React from "react";
import * as Lang from "./lang";

import { timeout } from "../timeout";
import { createUseMemoizedTask } from "../wrapPromise";
import { memoizeTask } from "../memoizeTask";

const useMemoizedTask = createUseMemoizedTask(
    memoizeTask((locale) =>
        timeout(1000).then(() => Lang.getTranslations(locale))
    )
);

const useTranslations = () => {
    const locale = "en-US";
    return useMemoizedTask(locale);
};

const MyComponentInner = () => {
    const t = useTranslations();

    return <div>{t.title()}</div>;
};

console.log("after MyComponentInner");

export default MyComponentInner;
