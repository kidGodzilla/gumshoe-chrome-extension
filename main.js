function installWithGumshoe (word) {
  var query = word.selectionText;
  chrome.tabs.create({url: "https://app.gumshoe.io/?code=" + encodeURIComponent(query)});
};

chrome.contextMenus.create({
  id: 'install-with-gumshoe',
  title: "Install with Gumshoe.io",
  contexts: ["selection"],
  onclick: installWithGumshoe
});