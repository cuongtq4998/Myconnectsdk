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
            wkWebView.loadFileURL(url, allowingReadAccessTo: url)
            wkWebView.navigationDelegate = self
        }
    }
    
    private func getWKWebViewConfiguration() -> WKWebViewConfiguration {
        let contentController = WKUserContentController()
        let configuration = WKWebViewConfiguration()
        
        // inject .js file into index.html
        contentController.injectScript(from: "IOS_bridge", in: Bundle.main, type: "js", directory: "js") // test add file .js into index.html
        
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
}

extension ViewController: WKNavigationDelegate, UIWebViewDelegate, WKScriptMessageHandler, WKUIDelegate {
    func webView(_ webView: WKWebView, didFinish navigation: WKNavigation!) {
        
    }

    func userContentController(_ userContentController: WKUserContentController, didReceive message: WKScriptMessage) {
        if let data = message.body as? String, data == "iosUserHandler" {
            let date = Date().description
            let jsSource = "userNameResponse('🫴 USER NAME DATE!!!!! __\(date)__ ')"
            wkWebView.evaluateJavaScript(jsSource) { (result, error) in
                print(result, error)
            }
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
