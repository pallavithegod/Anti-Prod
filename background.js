chrome.runtime.onInstalled.addListener(() => {
  chrome.alarms.create("reminder", { periodInMinutes: 10 });
});

chrome.alarms.onAlarm.addListener((alarm) => {
  if (alarm.name === "reminder") {
    chrome.windows.create({
      url: "index.html",
      type: "popup",
      width: 400,
      height: 300
    });
  }
});
