var hostRegex = /^[^:]+:\/\/[^\/]*nextdirect.com/i;
function checkURL(tabId, info, tab) {
	if (info.status === "complete") {
		if (hostRegex.test(tab.url)) {
			chrome.pageAction.show(tabId);
		}
	}
}
chrome.tabs.onUpdated.addListener(checkURL);
