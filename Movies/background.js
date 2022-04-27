// background.js - JS to handle the m3u8 Sniffer background process
// (C) 2021 Richard Stam, SigmaFxDx Software
console.info("Hello m3u8 Sniffer Background!");

//#region Variables and Functions
var m3u8Count = 0;
var firstM3u8 = "";
var lastM3u8 = "";
var firstUrl = "";
var lastUrl = "";
var tabTallyMap = new Map();
var windowTallyMap = new Map();
var m3u8SniffingEnabled = true;
var m3u8InjectionEnabled = true;

async function webPageInsertM3U8(tabId, tabObj, requestM3u8) {
    if (!m3u8InjectionEnabled) return; // Not Injecting
    if (tabId < 0) return; //Tab was probably closed
    if (!tabObj) tabObj = await asyncGetTab(tabId);
    if (!tabObj) return; //Tab was probably closed
    if (tabId !== tabObj.id) return; // Sanity check
    if (tabObj.discarded) return;
    if (tabObj.status == "unloaded") return;
    if (!tabObj.url.startsWith("http")) return;
    if (tabObj.pendingUrl) return;

    devVerbose("Trace webPageInsertM3U8 tabId = ", tabId);
    devVerbose("webPageInsertM3U8 =", tabId, requestM3u8);
    devVerbose("webPageInsertM3U8 tabObj =", tabObj);
    var tabM3u8Count = 0;
    var tabMapEntry = tabTallyMap.get(tabId);
    if (tabMapEntry) tabM3u8Count = tabMapEntry.m3u8Count;

    // Injecting CSS has limitations (!important won't work)
    // stackoverflow.com/questions/7619095/
    // how-to-inject-css-into-webpage-through-chrome-extension

    // Build the div for the m3u8 <a> tag to be injected
    const webPageDivHTML = `
        <div style="position:fixed;font-size:16px;word-break:break-all;margin:10px;
                top:1px;left:4px;z-index:900;background-color:lightgray;padding:4px;
                border:4px solid cadetblue;color:green;width:97%;">
            m3u8 Sniffer[${tabM3u8Count}]:
            <a target="_blank" href="${requestM3u8}"
                title="Click or right click to open the m3u8 URL">
                <span id="myM3u8DivId">${requestM3u8}</span>
            </a>&nbsp;
            <span id="m3u8CopyButtonId" 
                style="color:white;cursor:pointer;font-size:14px;user-select:none;
                    background-color:darkolivegreen;border-radius:4px;
                    padding:2px 2px 2px 2px;float:right;margin-right:4px;" 
                title="Copy the m3u8 URL to the clipboard">
                &nbsp;Copy&nbsp;
            </span>
        </div>
    `;
    const webPageScriptText = `
        var m3u8InjectedDiv = document.createElement("div");
        m3u8InjectedDiv.id = "myM3u8LayerId";
        m3u8InjectedDiv.innerHTML = \`${webPageDivHTML}\`;
        var m3u8LayerObj = document.getElementById("myM3u8LayerId");
        //console.log("webPageScriptText m3u8LayerObj = ", m3u8LayerObj);
        if (!m3u8LayerObj) document.body.appendChild(m3u8InjectedDiv);
        else m3u8LayerObj.parentNode.replaceChild(m3u8InjectedDiv, m3u8LayerObj);
        var m3u8CopyButtonObj = document.getElementById("m3u8CopyButtonId");
        m3u8CopyButtonObj.addEventListener("mousedown", function(ce) {
            let savPageYOffset = window.pageYOffset;
            let savPageXOffset = window.pageXOffset;
            m3u8CopyButtonObj.style.backgroundColor = "forestgreen";
            let myM3u8DivObj = document.getElementById("myM3u8DivId");
            let m3u8InputObj = document.createElement("input");
            m3u8InputObj.value = myM3u8DivObj.innerText; 
            myM3u8DivObj.appendChild(m3u8InputObj);
            m3u8InputObj.focus(); m3u8InputObj.select();
            document.execCommand('copy');
            m3u8InputObj.parentNode.removeChild(m3u8InputObj);
            //console.log("copyText = ", m3u8InputObj.value);
            window.scrollTo(savPageXOffset, savPageYOffset);
            setTimeout(() => {
                m3u8CopyButtonObj.style.backgroundColor = "darkolivegreen";
            }, 80);
        });
        //console.log("Info - Injection Javascript Executed.");
    `;
    //devVerbose("webPageScriptText = " + webPageScriptText);

    const webPageCodeDetails = { code: webPageScriptText };
    devVerbose("Before Injection...")
    let result = await asyncExecuteScript(tabId, webPageCodeDetails);
    devVerbose("Trace m3u8 Injection done. tabId, result =", tabId, result);
}

// Add sniffed m3u8 to tab and window tally maps (returns tabObj)
async function updateTallylMaps(tabId, requestM3u8) {
    if (tabId < 0) return undefined; //Tab probably has closed.

    var requestTabObj = await asyncGetTab(tabId);
    if (!requestTabObj) return undefined;

    devVerbose("Trace updateTallylMaps tabId =", tabId);
    var activeWindowId = requestTabObj.windowId;
    var requestUrl = requestTabObj.url;
    devVerbose("updateTallylMaps = ", tabId, activeWindowId, requestM3u8);
    devVerbose("updateTallylMaps requestTabObj = ", requestTabObj);

    if (!tabTallyMap.get(tabId)) {
        tabTallyMap.set(tabId, { "windowId": activeWindowId, 
            "m3u8Count": 0, "firstM3u8": "", "lastM3u8": "", 
            "firstUrl": "", "lastUrl": ""
        });
    };
    var tabMapEntry = tabTallyMap.get(tabId);
    tabMapEntry.m3u8Count++;
    tabMapEntry.lastM3u8 = requestM3u8;
    tabMapEntry.lastUrl = requestUrl;
    if (!tabMapEntry.firstM3u8) {
        tabMapEntry.firstM3u8 = requestM3u8;
    }
    if (!tabMapEntry.firstUrl) {
        tabMapEntry.firstUrl = requestUrl;
    }

    if (tabMapEntry.windowId != activeWindowId) {
        devDebug("Trace updateTallylMaps Tab window changed");
        checkTabWindowChanged(tabId, activeWindowId);
    }

    var windowId = tabMapEntry.windowId;
    if (!windowTallyMap.get(windowId)) {
        windowTallyMap.set(windowId, { 
            "m3u8Count": 0, "firstM3u8": "", "lastM3u8": "", 
            "firstUrl": "", "lastUrl": ""
        })
    };
    var windowMapEntry = windowTallyMap.get(windowId);
    windowMapEntry.m3u8Count++;
    windowMapEntry.lastM3u8 = requestM3u8;
    windowMapEntry.lastUrl = requestUrl;
    if (!windowMapEntry.firstM3u8) {
        windowMapEntry.firstM3u8 = requestM3u8;
    }
    if (!windowMapEntry.firstUrl) {
        windowMapEntry.firstUrl = requestUrl;
    }
    
    m3u8Count++; // update globals
    lastM3u8 = requestM3u8;
    lastUrl = requestUrl;
    if (!firstM3u8) firstM3u8 = requestM3u8;
    if (!firstUrl) firstUrl = requestUrl;

    return requestTabObj;
}

function checkTabWindowChanged(tabId, newWindowId) {
    var tabMapEntry = tabTallyMap.get(tabId);
    if (tabMapEntry) {
        devDebug("Trace checkTabWindowChanged =", 
            tabId, tabMapEntry.windowId, newWindowId);
        let prevWindowId = tabMapEntry.windowId;
        tabMapEntry.windowId = newWindowId;
        for (let [id, tabEntry] of tabTallyMap.entries()) {
            if (tabEntry.windowId === prevWindowId) return id;
        }
        removeWindowTally(prevWindowId);
    }
    return undefined;
}

function removeTabTally(tabId) {
    checkTabWindowChanged(tabId, -1);
    var tabMapEntry = tabTallyMap.get(tabId);
    if (!tabMapEntry) return;
    devDebug("Trace removeTabTally tabId =", tabId);
    tabTallyMap.delete(tabId);
    devDebug("removeTabTally Size =", tabTallyMap.size);
    if (tabTallyMap.size < 1 && windowTallyMap.size > 0) {
        devDebug("windowTallyMap Size =", windowTallyMap.size);
        removeAllWindowsTally();
    }
}

function removeWindowTally(windowId) {
    var windowMapEntry = windowTallyMap.get(windowId);
    if (!windowMapEntry) return;
    devDebug("Trace removeWindowTally windowId =", windowId);
    windowTallyMap.delete(windowId);
    devDebug("removeWindowTally Size =", windowTallyMap.size);
    if (windowTallyMap.size < 1) removeAllWindowsTally();
}

function removeAllWindowsTally() {
    devDebug("Trace removeAllWindowsTally");
    m3u8Count = 0;
    windowTallyMap = new Map();
    firstM3u8 = lastM3u8 = firstUrl = lastUrl = "";
}
//#endregion


//#region Event Handlers
document.addEventListener("DOMContentLoaded", function(eventObj) {
    devDebug("Trace DOMContentLoaded eventObj.timeStamp =", eventObj.timeStamp);
    chrome.storage.local.get(["m3u8SniffingEnabled", "m3u8InjectionEnabled"],
        function(result) {
            if (checkLastError("DOMContentLoaded storage.local.get")) return;
            m3u8SniffingEnabled = result.m3u8SniffingEnabled ?? true;
            m3u8InjectionEnabled = result.m3u8InjectionEnabled ?? true;
            devDebug("storage get m3u8SniffingEnabled =", m3u8SniffingEnabled);
            devDebug("storage get m3u8InjectionEnabled =", m3u8InjectionEnabled);
            let iconPath = (m3u8SniffingEnabled) ?
                 "icons/m3uSniffer-on-64px.png" : "icons/m3uSniffer-off-64px.png";
            devDebug("DOMContentLoaded iconPath =", iconPath);  
            chrome.browserAction.setIcon({"path":iconPath});
        }
    );
});

chrome.runtime.onMessage.addListener(
function(message, sender, sendResponse) {
    devVerbose("Trace runtime.onMessage");
    devVerbose("runtime.onMessage =", message, "Sender =" + sender.id);

    if (message.hasOwnProperty("m3u8SniffingEnabled")) {
        m3u8SniffingEnabled = message.m3u8SniffingEnabled;
    }
    chrome.storage.local.set({"m3u8SniffingEnabled": m3u8SniffingEnabled});
    if (message.hasOwnProperty("m3u8InjectionEnabled")) {
        m3u8InjectionEnabled = message.m3u8InjectionEnabled;
    }
    chrome.storage.local.set({"m3u8InjectionEnabled": m3u8InjectionEnabled});

    // Using async to get the active tab here causes the connection 
    // to sendResponse to be lost - need to investigate further...
    // So, get the activeTabId and activeWindowId from the caller for now.
    //var activeTab = await asyncGetActiveTab();
    //var activeTabId = activeTab.id;
    //var activeWindowId = activeTab.windowId;

    var activeTabId = message.activeTabId; 
    var activeWindowId = message.activeWindowId;
    devVerbose("onMessage sendResponse activeTabId =", activeTabId);
    devVerbose("onMessage sendResponse activeWindowId =", activeWindowId);

    var tabMapEntry = tabTallyMap.get(activeTabId);
    var tabM3u8Count = 0, tabFirstM3u8 = "", tabLastM3u8 = "";
    var tabFirstUrl = "", tabLastUrl = "";
    if (tabMapEntry) {
        tabM3u8Count = tabTallyMap.get(activeTabId).m3u8Count;
        tabFirstM3u8 = tabTallyMap.get(activeTabId).firstM3u8;
        tabLastM3u8 = tabTallyMap.get(activeTabId).lastM3u8;
        tabFirstUrl = tabTallyMap.get(activeTabId).firstUrl;
        tabLastUrl = tabTallyMap.get(activeTabId).lastUrl;
    }
    var windowMapEntry = windowTallyMap.get(activeWindowId);
    var windowM3u8Count = 0, windowFirstM3u8 = "";
    var windowLastM3u8 = "", windowFirstUrl = "", windowLastUrl = "";
    if (windowMapEntry) {
        windowM3u8Count = windowTallyMap.get(activeWindowId).m3u8Count;
        windowFirstM3u8 = windowTallyMap.get(activeWindowId).firstM3u8;
        windowLastM3u8 = windowTallyMap.get(activeWindowId).lastM3u8;
        windowFirstUrl = windowTallyMap.get(activeWindowId).firstUrl;
        windowLastUrl = windowTallyMap.get(activeWindowId).lastUrl;
    }

    var responseObject = {
        message : {
            "m3u8SniffingEnabled": m3u8SniffingEnabled,
            "m3u8InjectionEnabled": m3u8InjectionEnabled,
            "senderTabUrl": message.senderTabUrl,
            "activeWindowId": activeWindowId,
            "windowM3u8Count": windowM3u8Count,
            "windowFirstM3u8": windowFirstM3u8,
            "windowLastM3u8": windowLastM3u8,
            "windowFirstUrl": windowFirstUrl,
            "windowLastUrl": windowLastUrl,
            "activeTabId": activeTabId,
            "tabM3u8Count": tabM3u8Count,
            "tabFirstM3u8": tabFirstM3u8,
            "tabLastM3u8": tabLastM3u8,
            "tabFirstUrl": tabFirstUrl,
            "tabLastUrl": tabLastUrl,
            "m3u8Count": m3u8Count,
            "firstM3u8": firstM3u8,
            "lastM3u8": lastM3u8,
            "firstUrl": firstUrl,
            "lastUrl": lastUrl
        },
        sender : "background.js"
    };

    sendResponse(responseObject); 
    checkLastError("onMessage.addListener sendResponse");

    // Keep sendResponse connection for async alive 
    // async not working here, so still using the callback!
    // stackoverflow.com/questions/54126343/how-to-fix-unchecked
    // -runtime-lasterror-the-message-port-closed-before-a-respon
    return true;
});


// Intercept tab navigations activeInfo {tabId, windowId}
chrome.tabs.onActivated.addListener(
function(info) {
    devVerbose("Trace tabs.onActivated  =", info.tabId, info);
    var tabId = info.tabId;
    var windowId = info.windowId;
    if (info.windowId) {
        // windowId has changed; do something here
        devDebug("tabs.onActivated windowId = ", windowId);
        tabMapEntry = tabTallyMap.get(tabId);
        if (tabMapEntry && windowId
                && tabMapEntry.windowId !== windowId) {
            devDebug("Trace onActivated Tab was moved between windows!");
            devDebug("Tab windows =", tabMapEntry.windowId, windowId);
            checkTabWindowChanged(tabId, windowId);
        }
    }
});
 

// Watch for changes to url and discarded
chrome.tabs.onUpdated.addListener(
function(tabId, info, tab) {
    devVerbose("Trace tabs.onUpdated  =", tabId, info, tab);
/*  
    if (info.status == "loading") {
        devDebug("onUpdated loading changeInfo.status = ", info.status);
        devVerbose("onUpdated loading info info =", info);
        devVerbose("onUpdated loading activeTab, tab = ", tabId, tab);
    }
*/
    if (info.url) {
        // tab url has changed; reset its tabTally
        devDebug("Trace onUpdated url info.status =", info.status, info.url);
        devVerbose("onUpdated url info info =", info.windowId, info);
        removeTabTally(tabId, "url changed");
    }
});

chrome.tabs.onRemoved.addListener(
function(tabId, removed) {
    devDebug("Trace tabs.onRemoved tabId =", tabId);
    devVerbose("tabs.onRemoved removed =", removed);
    removeTabTally(tabId);
});

chrome.windows.onRemoved.addListener(
function(windowId) {
    devDebug("Trace windows.onRemoved windowId =", windowId);
    removeWindowTally(windowId);
});

chrome.windows.onFocusChanged.addListener(
function(windowId) {
    if (windowId < 0) return;
    devVerbose("Trace windows.onFocusChanged windowId =", windowId);
    devVerbose("Send Popup Close Message");
    chrome.runtime.sendMessage("ClosePopup", (response) => {
        //checkLastError("windows.onFocusChanged");
        var lastError = chrome.runtime.lastError;
        if (!response) return; // Ignore no connection
        if (lastError) devDebug("Popup Close lastError =", lastError.message);
        devDebug("Popup Close Response =", response);
    });
});
    
// My webRequest.OnBeforeRequest handler
const networkFilters = {
    urls: [
        //"*://*.shidurlive.com/*",
        //"*://*.livenewsnow.com/*"
    ]
};
chrome.webRequest.onBeforeRequest.addListener(
async function (details) {
    if (!m3u8SniffingEnabled) return;
    m3u8Pos = details.url.indexOf(".m3u8");
    if (m3u8Pos > 0) {
        urlAttribPos = details.url.indexOf("?");
        if (m3u8Pos < urlAttribPos || urlAttribPos < 0) {
            let tabId = details.tabId;
            devVerbose("Trace webRequest.onBeforeRequest TabId =", tabId)
            if (tabId < 0) return;
            let requestM3u8 = details.url;
            devVerbose("Last webRequest URL =", requestM3u8);
            devVerbose("Last webRequest details =", details)
            let tabObj = await updateTallylMaps(tabId, requestM3u8);
            if (tabObj) await webPageInsertM3U8(tabId, tabObj, requestM3u8);
            devVerbose("webRequest.onBeforeRequest done.");
        }
    }
}, networkFilters);
//#endregion

