function handleInstalled(details) {
    if (details.reason == 'install' || details.reason == 'update') {
        chrome.runtime.openOptionsPage();
    }
}

chrome.runtime.onInstalled.addListener(handleInstalled);











