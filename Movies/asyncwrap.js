// asyncwraps.js - JS to wrap chrome.runtime callbacks, etc.
// (C) 2021 Richard Stam, SigmaFxDx Software
// zellwk.com/blog/converting-callbacks-to-promises/
// github.com/KeithHenry/chromeExtensionAsync

function asyncTimeout(timeout) {
    return new Promise(resolve => setTimeout(resolve, timeout));
}

//chrome.tabs.executeScript(tabId?: number, details: extensionTypes.InjectDetails, 
// callback: function)  -&-  (result: any[]) => {...}
async function asyncExecuteScript(tabId, details) {
    var result = await getExecuteScriptPromise(tabId, details)
        .then((result) => {return result;})
        .catch((ex) => {logRuntimeException("asyncExecuteScript = " + ex.message);});
    return result;   
}
const getExecuteScriptPromise = (...args) => {
    return new Promise((resolve, reject) => {
        chrome.tabs.executeScript(...args, () => {
            let lastError = chrome.runtime.lastError;
            if (lastError) return reject(lastError);
            resolve(true);
        });
    });
}

//chrome.tabs.get(tabId: number, callback: function) -&- (tab: Tab) => {...}
async function asyncGetTab(tabId) {
    var result = await getTabPromise(tabId).then((tabObj) => {return tabObj;})
        .catch((ex) => {logRuntimeException("asyncGetTab = " + ex.message);});
    return result;
}
const getTabPromise = (...args) => {
    return new Promise((resolve, reject) => {
        chrome.tabs.get(...args, (tabObj, data) => {
            let lastError = chrome.runtime.lastError;
            if (lastError) return reject(lastError);
            resolve(data = tabObj);
        });
    });
}
/*
//tabs.remove(tabIds: number | number[], callback: function) -&- () => {...}
async function asyncRemoveTab(tabId) {
    var result = await removeTabPromise(tabId).then(() => {return true;})
        .catch((ex) => {logRuntimeException("asyncRemoveTab = " + ex.message);});
    return result;
}
const removeTabPromise = (...args) => {
    return new Promise((resolve, reject) => {
        chrome.tabs.remove(...args, () => {
            let lastError = chrome.runtime.lastError;
            if (lastError) return reject(lastError);
            resolve(true);
        });
    })
}
*/
//chrome.tabs.query(queryInfo: object, callback: function) -&- (result: Tab[]) => {...}
async function asyncGetActiveTab() {
    var result = await getActiveTabPromise().then((activeTabObj) => activeTabObj)
        .catch((ex) => {logRuntimeException("asyncGetActiveTab = " + ex.message);});
    return result;
}
const getActiveTabPromise = () => {
    return new Promise((resolve, reject) => {
        chrome.tabs.query(
            {active: true, currentWindow: true}, 
            (tabs, data) => { 
                let lastError = chrome.runtime.lastError;
                if (lastError) return reject(lastError);
                resolve(data = tabs[0]); 
            });
    })
}

/*
//zellwk.com/blog/converting-callbacks-to-promises/
const readFilePromise = (...args) => {
  return new Promise((resolve, reject) => {
    fs.readFile(...args, (err, data) => {
      if (err) return reject(err)
      resolve(data)
    })
  })
}
*/

