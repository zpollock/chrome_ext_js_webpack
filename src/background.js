init = (tab) => {
  const {id, url} = tab;
  console.log("Hello background console");

  chrome.scripting.executeScript(
    {
      target: {tabId: id},
      files: ['./dist/content-bundle.js']
    }
  )
}

chrome.action.onClicked.addListener(tab => { 
  init(tab)
});
