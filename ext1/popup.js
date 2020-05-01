var apiKey = 'a1182c21efcaf69675f1423d35783715';

function getCurrentTabUrl(callback) {
    // Query filter to be passed to chrome.tabs.query - see
    var queryInfo = {
        active: true,
        currentWindow: true
    };

    chrome.tabs.query(queryInfo, function (tabs) {
        // chrome.tabs.query invokes the callback with a list of tabs that match the
        // query. When the popup is opened, there is certainly a window and at least
        // one tab, so we can safely assume that |tabs| is a non-empty array.
        // A window can only have one active tab at a time, so the array consists of
        // exactly one tab.
        var tab = tabs[0];

        // A tab is a plain object that provides information about the tab.

        var url = tab.url;

        // tab.url is only available if the "activeTab" permission is declared.
        console.assert(typeof url == 'string', 'tab.url should be a string');

        callback(url);
    });

    // Most methods of the Chrome extension APIs are asynchronous.
}

function getTermInfo(searchTerm, callback, errorCallback) {
    var searchUrl = 'https://api.hatebase.org/v3-0/' + apiKey + '/vocabulary/json/vocabulary=' + encodeURIComponent(searchTerm);
    console.log(searchUrl);
    var x = new XMLHttpRequest();
    x.open('GET', searchUrl);

    //Hatebase API responds with JSON, so let Chrome parse it.
    x.responseType = 'json';
    x.onload = function () {
        // Parse and process the response from Google Image Search.
        var response = x.response;

        if (!response || !response.data) {
            errorCallback('Failed to load url: ' + searchUrl);
            return;
        }

        var firstResult = response;
        var meaning = firstResult.data.datapoint.meaning;

        var width = 500;
        var height = 500;
        console.assert(
            typeof meaning == 'string' && !isNaN(width) && !isNaN(height),
            'Unexpected respose from Hate API!');

        callback(meaning);
    };
    x.onerror = function () {
        errorCallback('Network error.');
    };
    x.send();
}

function renderStatus(statusText) {
    document.getElementById('status').textContent = statusText;
}

document.addEventListener('DOMContentLoaded', function () {
    var searchWord = 'bitch';

    renderStatus('Performing search for "' + searchWord + '"...');

    getTermInfo(searchWord, function (meaning) {

        renderStatus('Search term: "' + searchWord + '" \n' +
            ': ' + meaning);

        var termInfo = document.getElementById('image-result');
        termInfo.src = meaning;
        termInfo.hidden = false;

    }, function (errorMessage) {
        renderStatus('Cannot display info. ' + errorMessage);
    });
});
