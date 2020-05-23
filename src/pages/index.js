
/**
 * communication between index.js and content
 */

let message = 'hello im a popup' 
let msg = {
    from: 'popup',
    message
}
    // A tab has be selected for the message to be sent
let params = {
      active: true,
      currentWindow: true
}

// Now we've got the tabs
function gotTabs(tabs) {
      // The first tab is the one you are on
      chrome.tabs.sendMessage(tabs[0].id, msg);//, messageBack);
    }

let clickEvent = document.getElementById('hello')

clickEvent.addEventListener('click',()=>{

     // This searches for the active tabs in the current window

     chrome.tabs.query(params, gotTabs);
     
    });