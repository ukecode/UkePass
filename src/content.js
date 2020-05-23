

function getPassword(e) {
    console.log(e.target.value);

}

let password = document.getElementsByTagName("input");
password = Object.values(password);


password.map((e) => {
    e.addEventListener("keyup", getPassword);
});

console.log('Ukepass --- origin: content')

/**
 * Receiving popup message
 */

chrome.runtime.onMessage.addListener(receiver);

// A message is received

function receiver(request, sender, sendResponse) {
    console.log(request.message);
}