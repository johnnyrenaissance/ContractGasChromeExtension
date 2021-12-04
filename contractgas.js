var gasvalue = "";

chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
        id: 'gassearch',
        title: "Estimate Gas Price",
        contexts: ["page"]
    });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
    chrome.tabs.sendMessage(tab.id, { text: 'report_back' }, calculate);
});


function calculate(domContent) {
    window.open("https://contractgas.nftprojectadvisor.com/?gasused=" + domContent, '_blank');
}