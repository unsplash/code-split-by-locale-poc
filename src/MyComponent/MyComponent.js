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

    const [state, setState] = React.useState(false);

    React.useEffect(() => {
        setTimeout(() => {
            // This will show loading view again ❌
            // setState(true);

            // This won't show loading view again ✅
            // https://github.com/acdlite/rfcs/blob/first-class-promises/text/0000-first-class-support-for-promises.md#example-use-in-client-components-and-hooks
            React.startTransition(() => {
                setState(true);
            });
        }, 2000);
    });

    return (
        <>
            <div>{t.title()}</div>
            {state && <MyComponentInner />}
        </>
    );
};

console.log("after MyComponent");

export default MyComponent;
