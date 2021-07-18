// This file is injected as a content script
console.log("Hello from content script!!")


function doStuff(): void {
    console.log("Content script doStuff()");
}

// log a message every 5 seconds
setInterval(function() {
    doStuff();
}, 5000)