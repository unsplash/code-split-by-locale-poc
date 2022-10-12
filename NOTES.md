Run webpack multiple times, once for each locale

-   `DefinePlugin` to inline the locale string
-   dead code elimination + tree shaking takes care of the rest

Running webpack multiple times:

-   https://github.com/webpack/webpack/tree/main/examples/multi-compiler
-   in parallel: https://github.com/trivago/parallel-webpack
-   As an optimization, could we run the build once, duplicate the result
    and then find/replace? Inspired by
    https://github.com/privatenumber/webpack-localize-assets-plugin

For tree shaking to work we'd probably need to define a `sideEffects` glob in `package.json`, and potentially some "pure" comments on function definitions.

See other TODO comments
