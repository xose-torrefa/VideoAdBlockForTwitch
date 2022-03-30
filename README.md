# VideoAdBlockForTwitch

Swaps Twitch video ads for an ad-free stream between 1080p and 480p quality and then automatically switches back to original quality once the ad is done.

This is all done locally, so no VPN's, Proxies or third party websites.

You must remove any Twitch related user-scripts or other Twitch specific ad block extensions to prevent conflicts. You can use this extension with uBlock Origin though (Without user-scripts installed).

Some people are worried by the permissions requested by the extension. We ask for various URL permissions. These URL's are either Twitch based ad trackers or Twitch based ad serving URL's, we need the permission for these URL's, to be able to block them inside the background.js file (For Firefox), on Chrome we do this via the block_rules.json file. For this to happen we need WebRequest/WebRequest Blocking for Firefox and declarativeNetRequest for Chrome. We also request the Storage permission, this allows you to click on the extension icon and set settings, like blocking the "Blocking ads" message. To be able to do this, we need the storage permission to save your choice. You can see this in action in the content.js file and the popup.js file of each extension. Please read through all the opensource files to see that this is strictly all we use it for. This extension was made to protect your privacy, not abuse it. Thanks!</br></br>

Changelog:

4.9.1:</br>
Fixed rate-limit issue and cleaned up code.</br>

4.9:</br>
Cleaned up formatting and added a better UI for first install information. UI will only show on first install.</br>

4.8:</br>
Remove auto showing of options on install/update. (Users think it's a spammy ad due to the way focus is taken on Chrome).</br>

4.6:</br>
Extension will now auto show options on first install/update.</br>


