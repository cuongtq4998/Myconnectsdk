//
//  ViewController.swift
//  MyConnectSDK
//
//  Created by Quoc Cuong on 27/10/2022.
//

import UIKit
import WebKit

class ViewController: UIViewController {
    private var wkWebView: WKWebView!

    override func viewDidLoad() {
        super.viewDidLoad()
        setupWKWebview()
        loadPage()
    }
    
    override func viewWillDisappear(_ animated: Bool) {
        super.viewWillDisappear(animated)
        cancelObserve()
    }
}

extension ViewController {
    private func setupWKWebview() {
        self.wkWebView = WKWebView(frame: self.view.bounds, configuration: self.getWKWebViewConfiguration())
        self.view.addSubview(self.wkWebView)
    }
    
    private func loadPage() {
        if let url = Bundle.main.url(forResource: "index", withExtension: "html") {
            // Create javaScriptController.
            let javaScriptController = WKJavaScriptController(name: "gatewaySdk", target: self, bridgeProtocol: JavaScriptInterface.self)
            // Assign javaScriptController.
            wkWebView.javaScriptController = javaScriptController
            wkWebView.prepareForJavaScriptController() // Call prepareForJavaScriptController before
            
            wkWebView.loadFileURL(url, allowingReadAccessTo: url)
            wkWebView.navigationDelegate = self
        }
    }
    
    private func getWKWebViewConfiguration() -> WKWebViewConfiguration {
        let contentController = WKUserContentController()
        let configuration = WKWebViewConfiguration()

        // register listen postmessage from webkit
        contentController.add(self, name: "gatewaySdk") // test success receive from sdk

        configuration.userContentController = contentController
        configuration.preferences = WKPreferences()
        if #available(iOS 14, *){
            configuration.defaultWebpagePreferences.allowsContentJavaScript = true
        }else{
            configuration.preferences.javaScriptEnabled = true
        }
        
        return configuration
    }
    
    func cancelObserve(){
        wkWebView.configuration.userContentController.removeScriptMessageHandler(forName: "gatewaySdk")
    }
    
    private func showUser(data: String) {
        let userDescription = "\(data)"
        let alertController = UIAlertController(title: "MiniApp", message: userDescription, preferredStyle: .alert)
        alertController.addAction(UIAlertAction(title: "OK", style: .default))
        present(alertController, animated: true)
    }
}

extension ViewController: WKNavigationDelegate, UIWebViewDelegate, WKScriptMessageHandler, WKUIDelegate {
    func webView(_ webView: WKWebView, didFinish navigation: WKNavigation!) {
        let jsSource = "getMethods()"
        webView.evaluateJavaScript(jsSource) { (result, error) in
            print(result, error)
        }
    }

    func userContentController(_ userContentController: WKUserContentController, didReceive message: WKScriptMessage) {
        if let data = message.body as? String {
            showUser(data: data)
        }
    }
}

extension WKUserContentController {
    func injectScript(from file: String, in bundle: Bundle, type: String, directory: String) {
        guard let javascriptPath = bundle.path(forResource: file, ofType: type, inDirectory: directory) else {
            return
            
        }
        if let javascriptSource = try? String(contentsOfFile: javascriptPath) {
            let userScript = WKUserScript(source: javascriptSource, injectionTime: .atDocumentStart, forMainFrameOnly: true)
            addUserScript(userScript)
        }
    }
}


//=======
// Create protocol.
// '@objc' keyword is required. because method call is based on ObjC.
@objc protocol JavaScriptInterface {
    func onSubmit(_ dictonary: [String: AnyObject])
    func onSubmit(_ dictonary: [String: AnyObject], clear: JSBool)
    func onSubmit(_ email: String, firstName: String, lastName: String, address1: String, address2: String, zipCode: JSInt, phoneNumber: String)
    func onCancel()
//    var isSubmitted: JSBool { get }
    @objc optional func getErrorMessages(codes: [JSInt]) -> [String]
    
    func getMethods() -> String
}

// Implement protocol.
extension ViewController: JavaScriptInterface {
    func onSubmit(_ dictonary: [String: AnyObject]) {
        NSLog("onSubmit \(dictonary)")
    }

    func onSubmit(_ dictonary: [String: AnyObject], clear: JSBool) {
        NSLog("onSubmit \(dictonary)")
        if clear.value {
            wkWebView.evaluateJavaScript("clearAll()", completionHandler: nil)
        }
    }

    func onSubmit(_ email: String, firstName: String, lastName: String, address1: String, address2: String, zipCode: JSInt, phoneNumber: String) {
        NSLog("onSubmit \(email), \(firstName), \(lastName), \(address1), \(address2), \(zipCode.value), \(phoneNumber)")
    }

    func onCancel() {
        NSLog("onCancel")
    }

//    var isSubmitted: JSBool { JSBool(_isSubmitted) }

    func getErrorMessages(codes: [JSInt]) -> [String] {
        codes.map { "message\($0)" }
    }
    
    func getMethods() -> String {
        return "Test Neeeeee!!!"
    }
}

