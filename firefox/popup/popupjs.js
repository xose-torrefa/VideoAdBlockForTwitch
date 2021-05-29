"use strict";

var onOff = document.querySelector("input[name=checkbox1]");
var fullQuality = document.querySelector("input[name=checkbox2]");
var blockingMessage = document.querySelector("input[name=checkbox3]");

onOff.addEventListener('change', function() {
    saveOptions();
});

fullQuality.addEventListener('change', function() {
    saveOptions();
});

blockingMessage.addEventListener('change', function() {
    saveOptions();
});

function saveOptions() {
    if (document.querySelector("input[name=checkbox1]").checked) {
        browser.storage.sync.set({
            onOffTTV: "true"
        });
    } else {
        browser.storage.sync.set({
            onOffTTV: "false"
        });
    }
    if (document.querySelector("input[name=checkbox2]").checked) {
        browser.storage.sync.set({
            fullQualityTTV: "true"
        });
    } else {
        browser.storage.sync.set({
            fullQualityTTV: "false"
        });
    }
    if (document.querySelector("input[name=checkbox3]").checked) {
        browser.storage.sync.set({
            blockingMessageTTV: "true"
        });
    } else {
        browser.storage.sync.set({
            blockingMessageTTV: "false"
        });
    }
    var sendMessage = browser.tabs.query({
        currentWindow: true,
        active: true
    }).then(sendMessageToTabs).catch(onError);
}

function sendMessageToTabs(tabs) {
    for (let tab of tabs) {
        if (tab.title.includes('Twitch')) {
            browser.tabs.sendMessage(
                tab.id, {
                    greeting: "Settings are changing."
                }
            ).then(response => {
                console.log(response.response);
            }).catch(onError);
        }
    }
}

function onError(error) {
    console.error(`Error: ${error}`);
}

function restoreOptions() {
    var onOff = browser.storage.sync.get('onOffTTV');
    onOff.then((res) => {
        if (res.onOffTTV == "true") {
            document.querySelector("input[name=checkbox1]").checked = true;
        } else if (res.onOffTTV == "false") {
            document.querySelector("input[name=checkbox1]").checked = false;
        }
    });
    var fullQuality = browser.storage.sync.get('fullQualityTTV');
    fullQuality.then((res) => {
        if (res.fullQualityTTV == "true") {
            document.querySelector("input[name=checkbox2]").checked = true;
        } else if (res.fullQualityTTV == "false") {
            document.querySelector("input[name=checkbox2]").checked = false;
        }
    });
    var blockingMessage = browser.storage.sync.get('blockingMessageTTV');
    blockingMessage.then((res) => {
        if (res.blockingMessageTTV == "true") {
            document.querySelector("input[name=checkbox3]").checked = true;
        } else if (res.blockingMessageTTV == "false") {
            document.querySelector("input[name=checkbox3]").checked = false;
        }
    });
}

document.addEventListener('DOMContentLoaded', restoreOptions);