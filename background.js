
var APPSPOT_URL_PATTERN = /^https?:\/\/chromiumcodereview\.appspot\.com/;
var APP_REDIRECT_URL_PATTERN = /^https?:\/\/codereview\.chromium\.org\/((\d+)|login(#.*)?|user\/[^\/]+)?\/?$/;
var LEGACY_REDIRECT_URL_PATTERN = /^https:\/\/codereview.chromium.org\/static\/app\/#\/issue\/(\d+)?\/?$/;

var CHROMIUM_URL = "https://codereview.chromium.org";
var APP_URL = "https://codereview.chromium.org/static/app/";

chrome.webNavigation.onBeforeNavigate.addListener(function(details) {
    var url = details.url;
    if (url.match(APPSPOT_URL_PATTERN)) {
        var url = url.replace(APPSPOT_URL_PATTERN, CHROMIUM_URL);
        chrome.tabs.update(details.tabId, {url:url});
        return;
    }
    var match = url.match(APP_REDIRECT_URL_PATTERN);
    if (!match)
        match = url.match(LEGACY_REDIRECT_URL_PATTERN);
    if (!match)
        return;
    var url = APP_URL + (match[1] || "");
    chrome.tabs.update(details.tabId, {url:url});
}, {
    url: [
        {hostEquals: "chromiumcodereview.appspot.com"},
        {hostEquals: "codereview.chromium.org"},
    ]
});
