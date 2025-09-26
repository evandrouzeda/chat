document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('executeTask').addEventListener('click', function() {
        const leadName = document.getElementById('leadName').value;
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            console.log("Nome do Lead", leadName)
            chrome.tabs.sendMessage(tabs[0].id, {leadName: leadName}, function(response) {
                console.log(response);
            });
        });
    });
});