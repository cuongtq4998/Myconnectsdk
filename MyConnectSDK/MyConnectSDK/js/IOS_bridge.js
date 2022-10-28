console.log('Test Log');

webkit.messageHandlers.gatewaySdk.postMessage({ someProp: "some value" })

function getMethods() {
    console.log('getMethods()_______');
    return "Test function"
}

function showDate(date) {
    console.log('showDate()_______', date);
    return "showDate() function"
}
