// This file is ran as a background script
console.log("Hello from background script!")


// Listen to any messages passed from react.
chrome.runtime.onMessage.addListener((request) => {
    console.log("Message received in background.js!", request);
});