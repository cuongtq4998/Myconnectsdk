# Myconnectsdk
[![FPTPlay](https://fptplay.vn/images/logo-2.png)](https://fptplay.vn/)
# MiniApp SDK for IOS
Provides a set of tools and capabilities to show mini app in IOS Applications. The SDK offers features like fetching, caching and displaying of mini app. For instructions on implementing in an IOS application, see the [User Guide]()

## What is Mini App?
Here are some [Guides for the Mini App](https://www.w3.org/TR/mini-app-white-paper/#what-is-miniapp )

## App Management
Provides a set of tools and capabilities to manage MiniApp SDK in IOS Applications
### 1.MAP SDK
To be connected and to interact with SDK mini app , Client should be defined method the same as SDK.

[Note]() : Client must inject javascript file into html
 ``` 
    // be must inject .js file into index.html
    contentController.injectScript(from: "IOS_bridge", in: Bundle.main, type: "js", directory: "js")
```
### How to Test the Sample SDK
### How to test
1.Run IOS Applications
2.WKWebView load resources of MiniApp
```
    if let url = Bundle.main.url(forResource: "index", withExtension: "html") {
        wkWebView.loadFileURL(url, allowingReadAccessTo: url)
    }
```
3.Call method of  SDK of MiniApp to be defined in javascript file [IOS_bridge.js](https://github.com/cuongtq4998/Myconnectsdk/blob/develop/inject_jsfile/MyConnectSDK/MyConnectSDK/js/IOS_bridge.js)
```  
    func webView(_ webView: WKWebView, didFinish navigation: WKNavigation!) {
        let jsSource = "getMethods()" // func getMethods() in IOS_bridge.js file  
        webView.evaluateJavaScript(jsSource) { (result, error) in
            print(result, error)
        }
    }
```
5.Then application is running and connected to Mini App SDK , data will be passed in javascript file [IOS_bridge.js](https://github.com/cuongtq4998/Myconnectsdk/blob/develop/inject_jsfile/MyConnectSDK/MyConnectSDK/js/IOS_bridge.js)
6.You can debug webView , see the [Guides](https://blog.vuplex.com/debugging-webviews)

### 2.Management App

### 3.Storage

