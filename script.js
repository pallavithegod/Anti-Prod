const messages = [
  "🚨 Stop working! Check if your fridge light turns off when the door closes.",
  "😜 Hey! Scroll Instagram, someone might have posted a cat meme!",
  "🎮 Productivity is overrated. Time for one round of Snake?",
  "🍕 Did you know pizza tastes better when you’re procrastinating?",
  "😂 Imagine if you were working instead of reading this…"
];


chrome.runtime.onInstalled.addListener(() => {
  chrome.alarms.create("reminder", { delayInMinutes: 1, periodInMinutes: 10 });
});


chrome.alarms.onAlarm.addListener((alarm) => {
  if (alarm.name === "reminder") {
    const message = messages[Math.floor(Math.random() * messages.length)];
    chrome.notifications.create({
      type: "basic",
      iconUrl: "logo.png",
      title: "😈 Anti-Productivity Reminder",
      message: message,
      priority: 2
    }, (id) => {
      
      setTimeout(() => {
        chrome.notifications.clear(id);
      }, 10000);
    });
  }
});
