import * as Lang from "./lang";

const MyComponent = () => {
    const t = Lang.getTranslations("en-US");

    return t.title();
};

console.log("after MyComponent");

export default MyComponent;
