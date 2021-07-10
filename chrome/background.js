//Show options and install message on first install only.
//Keep window focused as false.
function handleInstalled(details) {
    if (details.reason == 'install') {
        let createData = {
            focused: false,
            type: "popup",
            url: "popup/install.html",
            width: 365,
            height: 750,
        };
        let creating = chrome.windows.create(createData);
    }
}

chrome.runtime.onInstalled.addListener(handleInstalled);