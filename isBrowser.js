/**
* check if the function it was running in the browser
*/
let isBrowser = () => {
    return !!(typeof window !== 'undefined' && typeof navigator !== 'undefined' && window.document);
};
