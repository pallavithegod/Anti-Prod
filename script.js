document.getElementById("start").addEventListener("click", () => {
  chrome.alarms.create("reminder", { delayInMinutes: 1, periodInMinutes: 2 });
});

document.getElementById("stop").addEventListener("click", () => {
  chrome.alarms.clear("reminder");
});

chrome.alarms.onAlarm.addListener((alarm) => {
  if (alarm.name === "reminder") {
    chrome.notifications.create({
      type: "basic",
      iconUrl: "logo.png",
      title: "🚨 Anti-Productivity Reminder",
      message: "Time to stop working! Open YouTube or scroll Instagram 📱",
      priority: 2
    });
  }
});
