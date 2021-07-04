//Show options page on first install.
function handleInstalled(details) {
    if (details.reason == 'install') {
        chrome.runtime.openOptionsPage();
    }
}

chrome.runtime.onInstalled.addListener(handleInstalled);











