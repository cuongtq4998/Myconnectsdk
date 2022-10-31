

// Miniapp to SDK == interface comunication SDK vs Miniapp
var globalCallBack;
function requestUserHostApp(callback){
    globalCallBack = callback
    getUserName()
}

// SDK to Native
// 'gatewaySdk': key cho IOS native liten
// 'iosUserHandler': meta data(input)
function getUserName() {
    webkit.messageHandlers.gatewaySdk.postMessage('iosUserHandler')
}

// Native to SDK
// 'userName': input native truyền vào
function userNameResponse(userName){
    globalCallBack(userName)
}

//  UI Miniapp to SDK
function displayUsername() {
    console.log('vào 1');
    requestUserHostApp( function(name){
        console.log('vào 2', name);
        document.getElementById('lbltipAddedComment').innerHTML = name ;
    })
}
