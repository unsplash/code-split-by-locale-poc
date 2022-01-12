/**
 * https://stackoverflow.com/questions/72858719/react-ssr-with-custom-html
 * https://github.com/facebook/react/issues/24232
 */
import { pipe } from "fp-ts/function";
import ReactDOMServer from "react-dom/server";
import { Writable } from "stream";

import * as O from "fp-ts/Option";

class HtmlWritable extends Writable {
    chunks = [];
    html = "";

    getHtml() {
        return this.html;
    }

    _write(chunk, _encoding, callback) {
        this.chunks.push(chunk);
        callback();
    }

    _final(callback) {
        this.html = Buffer.concat(this.chunks).toString();
        callback();
    }
}

/**
 * Like `renderToString` but asynchronous. Unlike `renderToString`, this will wait for all
 * `<Suspense>` boundaries to resolve.
 *
 * In the future we may consider streaming the response, however this needs more thought as it could
 * have significant implications for HTML caching.
 * https://github.com/reactwg/react-18/discussions/37
 * https://linear.app/unsplash/issue/UNS-1654/investigate-streaming-ssr-with-suspense
 */
export const renderToStringAsync = (children) =>
    new Promise((resolve, reject) => {
        const writable = new HtmlWritable();

        let error = O.none;
        const stream = ReactDOMServer.renderToPipeableStream(children, {
            onAllReady() {
                pipe(
                    error,
                    O.match(() => {
                        stream.pipe(writable);
                    }, reject)
                );
            },
            onError(_error) {
                error = O.some(_error);
            },
        });

        writable.on("finish", () => {
            const html = writable.getHtml();
            resolve(html);
        });
    });
