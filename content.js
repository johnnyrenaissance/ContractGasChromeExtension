// Listen for messages
chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse) {
    // If the received message has the expected format...
    if (msg.text === 'report_back') {
        var gasNode = document.getElementById('ContentPlaceHolder1_spanGasUsedByTxn');
        gasvalue = gasNode.textContent.split('(')[0].replace(' ', '');
        // Call the specified callback, passing
        // the web-page's DOM content as argument
        sendResponse(gasvalue);
    }
});