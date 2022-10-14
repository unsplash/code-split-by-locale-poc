export const memoizeTask = (task) => {
    let promise;
    const newTask = (...params) => {
        if (!promise) {
            promise = task(...params);
        }
        return promise;
    };
    return newTask;
};
