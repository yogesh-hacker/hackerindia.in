// popup.js - JS to handle the m3u8 Sniffer popup page
// (C) 2021 Richard Stam, SigmaFxDx Software
console.info("Hello m3u8 Sniffer Popup!");

//#region Variables and Functions
const helpButtonId = "helpButton";
const refreshButtonId = "refreshButton";
const sniffingId = "m3u8SniffingEnabled";
const injectingId = "m3u8InjectionEnabled";
const copyFirstButtonId = "copyFirstButton";
const copyLastButtonId = "copyLastButton";
const activeTabRadioId = "activeTabRadio";
const activeWindowRadioId = "activeWindowRadio";
const allWindowsRadioId = "allWindowsRadio";
const firstUrlDivId = "firstUrlDiv";
const firstM3u8DivId = "firstM3u8Div";
const lastUrlDivId = "lastUrlDiv";
const lastM3u8DivId = "lastM3u8Div";
const m3u8CountId = "m3u8CountSpan";

var m3u8SniffingEnabled = true;
var m3u8InjectionEnabled = true;

function responseCallback(responseObject) {
    devDebug("Trace responseCallback");
    devDebug("responseCallback =", responseObject);
    // Check lastError since this is a chrome.runtime callback function
    if (checkLastError("responseCallback")) return;

    m3u8SniffingEnabled = responseObject.message.m3u8SniffingEnabled;
    var sniffingObj = document.getElementById(sniffingId);
    if (sniffingObj) sniffingObj.checked = m3u8SniffingEnabled;

    m3u8InjectionEnabled = responseObject.message.m3u8InjectionEnabled;
    var injectingObj = document.getElementById(injectingId);
    if (injectingObj) injectingObj.checked = m3u8InjectionEnabled;

    var countStr = "";
    var responseFirstM3u8 = "";
    var responseLastM3u8 = "";
    var responseFirstUrl = "";
    var responseLastUrl = "";
    var activeTabRadioObj = document.getElementById(activeTabRadioId);
    if (activeTabRadioObj.checked) {
        countStr = responseObject.message.tabM3u8Count;
        responseFirstM3u8 = responseObject.message.tabFirstM3u8;
        responseLastM3u8 = responseObject.message.tabLastM3u8;
        responseFirstUrl = responseObject.message.tabFirstUrl;
        responseLastUrl = responseObject.message.tabLastUrl;
    } else {
        var activeWindowRadioObj = document.getElementById(activeWindowRadioId);
        if (activeWindowRadioObj.checked) {
            countStr = responseObject.message.windowM3u8Count;
            responseFirstM3u8 = responseObject.message.windowFirstM3u8;
            responseLastM3u8 = responseObject.message.windowLastM3u8;
            responseFirstUrl = responseObject.message.windowFirstUrl;
            responseLastUrl = responseObject.message.windowLastUrl;
        } else {
            countStr = responseObject.message.m3u8Count;
            responseFirstM3u8 = responseObject.message.firstM3u8;
            responseLastM3u8 = responseObject.message.lastM3u8;
            responseFirstUrl = responseObject.message.firstUrl;
            responseLastUrl = responseObject.message.lastUrl;
        }
    }
    countStr = "[" + countStr + "]";
    if (responseFirstM3u8 == "") responseFirstM3u8 = "[none]";
    if (responseLastM3u8 == "") responseLastM3u8 = "[none]";
    if (responseFirstUrl == "") responseFirstUrl = responseObject.message.senderTabUrl;
    if (responseFirstUrl.length > 54) {
        responseFirstUrl = responseFirstUrl.substring(0, 52) + " ...";
    }
    if (responseFirstUrl == "") responseFirstUrl = "[none]";
    if (responseLastUrl == "") responseLastUrl = responseObject.message.senderTabUrl;
    if (responseLastUrl.length > 54) {
        responseLastUrl = responseLastUrl.substring(0, 52) + " ...";
    }
    if (responseLastUrl == "") responseLastUrl = "[none]";

    let firstM3u8DivHTML = `
        <a href="${responseFirstM3u8}" target="_blank">
            <span id="${firstM3u8DivId}" class="m3u8 nobreak">
                ${responseFirstM3u8}
            </span>
        </a>
    `;
    let lastM3u8DivHTML = `
        <a href="${responseLastM3u8}" target="_blank">
            <span id="${lastM3u8DivId}" class="m3u8 nobreak">
                ${responseLastM3u8}
            </span>
        </a>
    `;

    document.getElementById(m3u8CountId).innerText = countStr;
    document.getElementById(firstM3u8DivId).innerHTML = firstM3u8DivHTML;
    document.getElementById(lastM3u8DivId).innerHTML = lastM3u8DivHTML;
    document.getElementById(firstUrlDivId).innerText = responseFirstUrl;
    document.getElementById(lastUrlDivId).innerText = responseLastUrl;
}

async function sendRefreshMessage() {
    devDebug("Trace sendRefreshMessage");

    var activeTabObj = await asyncGetActiveTab();
    if (!activeTabObj) return;
    devDebug("sendRefreshMessage activeTabObj =", activeTabObj);

    var message = {
        "command": "PopUp Refresh Call",
        "activeTabId": activeTabObj.id,
        "tabActiveUrl": activeTabObj.url,
        "senderTabUrl": activeTabObj.url,
        "activeWindowId": activeTabObj.windowId
    }
    devDebug("sendRefreshMessage = ", message);
    chrome.runtime.sendMessage(message, responseCallback);
}

async function sendOptionsMessage() {
    devDebug("Trace sendOptionsMessage");
    
    var activeTabObj = await asyncGetActiveTab();
    if (!activeTabObj) return;
    devDebug("sendOptionsMessage activeTabObj =", activeTabObj);

    var message = {
        "command": "Set Options Call",
        "activeTabId": activeTabObj.id,
        "tabActiveUrl": activeTabObj.url,
        "senderTabUrl": activeTabObj.url,
        "activeWindowId": activeTabObj.windowId,
        "m3u8SniffingEnabled": m3u8SniffingEnabled,
        "m3u8InjectionEnabled": m3u8InjectionEnabled
    }
    devDebug("sendOptionsMessage =", message);
    chrome.runtime.sendMessage(message, responseCallback);

    // Save Option settings to chrome extension storage
    var activeTabRadioObj = document.getElementById(activeTabRadioId);
    chrome.storage.local.set({"activeTabRadio": activeTabRadioObj.checked});
    var activeWindowRadioObj = document.getElementById(activeWindowRadioId);
    chrome.storage.local.set({"activeWindowRadio": activeWindowRadioObj.checked});
    var allWindowsRadioObj = document.getElementById(allWindowsRadioId);
    chrome.storage.local.set({"allWindowsRadio": allWindowsRadioObj.checked});
}

function copyToClipboard(copyText) {
    devDebug("Trace copyToClipboard");
    var inputElement = document.createElement("input");
    if (inputElement) {
        inputElement.value = copyText; 
        document.body.appendChild(inputElement);
        inputElement.focus(); 
        inputElement.select();
        document.execCommand('copy');
        inputElement.parentNode.removeChild(inputElement);
        devDebug("copyToClipboard done =", inputElement.value);
    }
}
//#endregion


//#region Event Handelers
document.addEventListener("DOMContentLoaded", function(eventObj){
    devDebug("Trace DOMContentLoaded eventObj.timeStamp =", eventObj.timeStamp);

    // Restore Option settings from extension storage
    var activeTabRadioObj = document.getElementById(activeTabRadioId);
    var activeWindowRadioObj = document.getElementById(activeWindowRadioId);
    var allWindowsRadioObj = document.getElementById(allWindowsRadioId);
    var sniffingObj = document.getElementById(sniffingId);
    var injectingObj = document.getElementById(injectingId);
    chrome.storage.local.get(
        ['activeTabRadio', 'activeWindowRadio', 'allWindowsRadio',
            "m3u8SniffingEnabled", "m3u8InjectionEnabled"],
        function(result) {
            if (checkLastError("DOMContentLoaded storage.local.get")) return;
            activeTabRadioObj.checked = result.activeTabRadio ?? true;
            activeWindowRadioObj.checked = result.activeWindowRadio  ?? false;
            allWindowsRadioObj.checked = result.allWindowsRadio ?? false;
            sniffingObj.checked = result.m3u8SniffingEnabled ?? true;
            injectingObj.checked = result.m3u8InjectionEnabled ?? true;
            devDebug("activeTabRadioObj.checked = ", activeTabRadioObj.checked);
            devDebug("sniffingObj.checked = ", sniffingObj.checked);
        }
    );
    sendRefreshMessage();

    var helpButtonObj = document.getElementById(helpButtonId);
    helpButtonObj.addEventListener("mousedown", function(eventObj) {
        devDebug("Trace button Help('mousedown')");
        helpButtonObj.classList.add("clicked");
    });
	helpButtonObj.addEventListener("mouseup", function(ce) {
        devDebug("Trace button Help('mouseup')");
        helpButtonObj.classList.remove("clicked");
        chrome.runtime.openOptionsPage();
    });

    var refreshButtonObj = document.getElementById(refreshButtonId);
    refreshButtonObj.addEventListener("mousedown", function(eventObj) {
        devDebug("Trace button Refresh('mousedown')");
        refreshButtonObj.classList.add("clicked");
        sendRefreshMessage();
        setTimeout(() => {refreshButtonObj.classList.remove("clicked");}, 80);        
    });

    var copyFirstButtonObj = document.getElementById(copyFirstButtonId);
    copyFirstButtonObj.addEventListener("mousedown", function(eventObj) {
        devDebug("Trace button Copy First ('mousedown')");
        copyFirstButtonObj.classList.add("clicked");
        var m3u8DivObj = document.getElementById(firstM3u8DivId);
        var copyText = m3u8DivObj.innerText;
        copyToClipboard(copyText);
        setTimeout(() => {copyFirstButtonObj.classList.remove("clicked");}, 80);        
    });
    var copyLastButtonObj = document.getElementById(copyLastButtonId);
    copyLastButtonObj.addEventListener("mousedown", function(eventObj) {
        devDebug("Trace button Copy Last ('mousedown')");
        copyLastButtonObj.classList.add("clicked");
        var m3u8DivObj = document.getElementById(lastM3u8DivId);
        var copyText = m3u8DivObj.innerText;
        copyToClipboard(copyText);
        setTimeout(() => {copyLastButtonObj.classList.remove("clicked");}, 80);        
    });
    
    var sniffingObj = document.getElementById(sniffingId);
	sniffingObj.addEventListener("click", function(eventObj) {
        devDebug("Trace m3u8SniffingEnabled('click') = ", sniffingObj.checked);
        m3u8SniffingEnabled = sniffingObj.checked;
        injectingObj = document.getElementById(injectingId);
        injectingObj.checked = sniffingObj.checked;
        m3u8InjectionEnabled = injectingObj.checked;
        var iconPath = (sniffingObj.checked) ?
            "icons/m3uSniffer-on-64px.png" : "icons/m3uSniffer-off-64px.png";
        chrome.browserAction.setIcon({"path":iconPath});
        sendOptionsMessage();
	});

    var injectingObj = document.getElementById(injectingId);
	injectingObj.addEventListener("click", function(eventObj) {
        devDebug("Trace m3u8InjectionEnabled('click') = ", injectingObj.checked);
        m3u8InjectionEnabled = injectingObj.checked;
        sendOptionsMessage();
	});

    activeTabObj = document.getElementById(activeTabRadioId);
	activeTabObj.addEventListener("click", function(eventObj) {
        devDebug("Trace activeTabRadioId('click') = ", activeTabObj.checked);
        sendOptionsMessage();
	});
    activeWindowObj = document.getElementById(activeWindowRadioId);
	activeWindowObj.addEventListener("click", function(eventObj) {
        devDebug("Trace activeWindowRadioId('click') = ", activeWindowObj.checked);
        sendOptionsMessage();
	});
    allWindowsObj = document.getElementById(allWindowsRadioId);
	allWindowsObj.addEventListener("click", function(eventObj) {
        devDebug("Trace allWindowsRadioId('click') = ", allWindowsObj.checked);
        sendOptionsMessage();
	});

    chrome.runtime.onMessage.addListener(
    function(message, sender, sendResponse) {
        devDebug("Trace runtime.onMessage");
        devDebug("runtime.onMessage =", message, "Sender =" + sender.id);
        if (message === "ClosePopup") window.close();
        sendResponse("OK"); 
    });

});
//#endregion
