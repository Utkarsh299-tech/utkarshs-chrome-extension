function reddenPage() {
  document.body.style.backgroundColor = 'red';
  console.log("It works!");
  let h1 = document.getElementsByTagName("h1");
  for (let i = 0; i < h1.length; i++) {
    console.log("This is h1!");
    console.log(h1[i]);
    h1[i].innerHTML = "💩"
  }
}

chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: reddenPage
  });
});