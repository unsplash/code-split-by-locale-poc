export function wrapPromise(task) {
    let status = "pending";
    let result;
    let suspender;
    return {
        read() {
            if (suspender === undefined) {
                suspender = task().then(
                    (r) => {
                        status = "success";
                        result = r;
                    },
                    (e) => {
                        status = "error";
                        result = e;
                    }
                );
            }
            if (status === "pending") {
                throw suspender;
            } else if (status === "error") {
                throw result;
            } else if (status === "success") {
                return result;
            }
        },
    };
}
