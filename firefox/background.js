//Show options page on first install.
function handleInstalled(details) {
    if (details.reason == 'install') {
        chrome.runtime.openOptionsPage();
    }
}

chrome.runtime.onInstalled.addListener(handleInstalled);

function blockURL(requestDetails) {
  return {
    cancel: true
  };
}

chrome.webRequest.onBeforeRequest.addListener(
  blockURL,
  {urls: ["https://*.amazon-adsystem.com/*","https://cdn.krxd.net/*","https://script.ioam.de/iam.js","https://edge.quantserve.com/quant.js","https://ddacn6pr5v0tl.cloudfront.net/*","https://d2v02itv0y9u9t.cloudfront.net/dist/1.0.5/v6s.js","https://*.imrworldwide.com/*","https://countess.twitch.tv/*","https://*.scorecardresearch.com/*","https://www.googletagservices.com/tag/js/gpt.js","*://*.branch.io/*","*://comscore.com/*"]},
  ["blocking"]
);













