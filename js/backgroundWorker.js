chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  if (changeInfo.status === "complete" && tab.url.startsWith("https://ucha.se/watch")) {
    chrome.scripting.executeScript({
        target: { tabId: tabId },
        files: ['js/main.js']
    });
  }
});