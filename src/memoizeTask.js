export const memoizeTask = (task) => {
    let promise;
    const newTask = () => {
        if (!promise) {
            promise = task();
        }
        return promise;
    };
    return newTask;
};
