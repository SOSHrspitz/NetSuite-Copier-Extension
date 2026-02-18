chrome.alarms.create("threeMinuteAlarm", { delayInMinutes: 3 });

chrome.alarms.onAlarm.addListener((alarm) => {
  if (alarm.name === "threeMinuteAlarm") {
    chrome.storage.local.remove("currentOptions");
  }
});