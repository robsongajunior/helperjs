/**
* check if the function it was running in the browser
*/
let isBrowser = () => typeof window !== 'undefined' && ('document' in window && 'navigator' in window);
