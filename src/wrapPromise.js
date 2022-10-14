export function createUseMemoizedTask(memoizedTask) {
    let status = "pending";
    let result;

    return () => {
        const suspender = memoizedTask().then(
            (r) => {
                status = "success";
                result = r;
            },
            (e) => {
                status = "error";
                result = e;
            }
        );

        if (status === "pending") {
            throw suspender;
        } else if (status === "error") {
            throw result;
        } else if (status === "success") {
            return result;
        }
    };
}
