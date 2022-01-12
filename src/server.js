import { renderToStringAsync } from "./renderToStringAsync";
import * as Express from "express";
import * as path from "path";
import * as React from "react";
import { App } from "./App";

const app = Express();

app.use("/static", Express.static(path.join(__dirname, "../dist-client/")));

app.get("/", (req, res, next) => {
    renderToStringAsync(<App />).then((html) => {
        res.statusCode = 200;
        res.setHeader("Content-type", "text/html");

        res.send(`<!DOCTYPE html><html>
    <head>
        <meta charset="utf-8" />
    </head>
    <body>
        <div id="root">${html}</div>

        <script src="static/runtime.js"></script>
        <script src="static/framework.js"></script>
        <!-- Uncomment this to load the chunk so it can be imported synchronously. -->
        <script src="static/MyChunk.js"></script>
        <script src="static/main.js"></script>
    </body>
</html>`);
    }, next);
});

app.listen(8080);
