// Just messages now (no href links here)
const messages = [
  "🚨 Stop working! The fridge light mystery still isn’t solved.",
  "😜 Instagram reels > assignments.",
  "🔥 Someone is fighting on Twitter right now. Go check!",
  "👀 Reddit wants your opinion nobody asked for.",
  "🎬 YouTube has exactly what you didn’t know you wanted to watch."
];

// Create alarm to trigger every 10 minutes
chrome.runtime.onInstalled.addListener(() => {
  chrome.alarms.create("reminder", { delayInMinutes: 1, periodInMinutes: 10 });
});

// Show notification when alarm fires
chrome.alarms.onAlarm.addListener((alarm) => {
  if (alarm.name === "reminder") {
    const message = messages[Math.floor(Math.random() * messages.length)];
    chrome.notifications.create(
      {
        type: "basic",
        iconUrl: "logo.png",
        title: "😈 Anti-Productivity Reminder",
        message: message,
        priority: 2
      },
      (id) => {
        // Auto-clear notification after 10 seconds
        setTimeout(() => {
          chrome.notifications.clear(id);
        }, 10000);
      }
    );
  }
});
