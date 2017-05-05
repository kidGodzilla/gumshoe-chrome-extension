function installWithGumshoe (word) {
  var query = word.selectionText;
  chrome.tabs.create({url: "https://app.gumshoe.io/?code=" + encodeURIComponent(query)});
};

chrome.contextMenus.create({
  id: 'install-with-gumshoe',
  title: "Install with Gumshoe.io",
  onclick: installWithGumshoe,
  contexts: ["selection"]
});

chrome.omnibox.onInputEntered.addListener(function (text) {
  chrome.tabs.getSelected(null, function(tab) {
    var url = 'https://gumshoe.io/?search=' + text;
    chrome.tabs.update(tab.id, { url: url });
  });
});
