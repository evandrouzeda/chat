chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.action === "downloadHTML") {
      chrome.downloads.download({
        url: "data:text/html;charset=utf-8," + encodeURIComponent(request.html),
        filename: request.filename + ".html"
      });
    }
  }
);