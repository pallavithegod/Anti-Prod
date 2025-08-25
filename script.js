// List of distracting messages + links
const distractions = [
  { 
    message: "😜 Instagram is waiting... new reels just dropped!", 
    url: "https://www.instagram.com" 
  },
  { 
    message: "📢 Facebook drama alert: someone probably posted a hot take.", 
    url: "https://www.facebook.com" 
  },
  { 
    message: "🔥 Twitter controversies await you. Don’t miss the chaos!", 
    url: "https://twitter.com/explore" 
  },
  { 
    message: "👀 Reddit wants you to argue with strangers!", 
    url: "https://www.reddit.com" 
  },
  { 
    message: "🎬 YouTube has infinite distractions just for you.", 
    url: "https://www.youtube.com" 
  }
];
chrome.runtime.onInstalled.addListener(() => {
  chrome.alarms.create("reminder", { delayInMinutes: 1, periodInMinutes: 10 });
});
chrome.alarms.onAlarm.addListener((alarm) => {
  if (alarm.name === "reminder") {
    const distraction = distractions[Math.floor(Math.random() * distractions.length)];

    chrome.notifications.create(
      "reminderNotif", 
      {
        type: "basic",
        iconUrl: "logo.png",
        title: "😈 Anti-Productivity Reminder",
        message: distraction.message,
        priority: 2
      },
      (id) => {
        // Auto-clear notification after 10 seconds
        setTimeout(() => {
          chrome.notifications.clear(id);
        }, 10000);
      }
    );
    chrome.storage.local.set({ lastUrl: distraction.url });
  }
});
chrome.notifications.onClicked.addListener(() => {
  chrome.storage.local.get("lastUrl", (data) => {
    if (data.lastUrl) {
      chrome.tabs.create({ url: data.lastUrl });
    }
  });
});
