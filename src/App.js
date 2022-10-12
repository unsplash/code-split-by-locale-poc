import { Suspense } from "react";
import * as React from "react";

const MyComponentLazy = React.lazy(() =>
    import(/* webpackChunkName: "MyChunk" */ `./MyComponent/MyComponent`)
);

export const App = () => (
    <Suspense fallback={<div>Loading…</div>}>
        <MyComponentLazy />
    </Suspense>
);
