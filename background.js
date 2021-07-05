function poopifyRyan() {
  let re = /((R|r)yan)/g;
  let re2 = /((S|s)wift)/g;
  let element = document.querySelectorAll('p,span,div,li,h1,h2,h3,h4,h5,h6');
  for (let i = 0; i < element.length; i++) {
    element[i].innerHTML = element[i].innerHTML.replace(re, "💩")
    element[i].innerHTML = element[i].innerHTML.replace(re2, "🦈")
  }
}

chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: poopifyRyan
  });
});