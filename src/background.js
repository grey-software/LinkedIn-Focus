var port;
var focus = true;

chrome.runtime.onConnect.addListener(function (connectionPort) {
    console.assert(connectionPort.name == "linkedin-infocus");
    port = connectionPort
    if (focus) {
        port.postMessage({ type: "focus" })
    }
});

chrome.browserAction.onClicked.addListener(function () {
    if (!focus) {
        port.postMessage({ type: "focus" })
    } else {
        port.postMessage({ type: "unfocus" })
    }
    focus = !focus;
});