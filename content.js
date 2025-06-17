(function () {
  let lastState = null;

  const saveBookmark = () => {
    const video = document.querySelector("video");
    if (!video || !video.paused) return;

    const time = Math.floor(video.currentTime);
    const title = document.title.replace(" - YouTube", "");
    const url = window.location.href.split("&")[0] + `&t=${time}s`;
    const timestamp = new Date().toISOString();

    chrome.storage.local.get(["bookmarks"], (result) => {
      const bookmarks = result.bookmarks || [];
      bookmarks.push({ title, url, time, saved_at: timestamp });
      chrome.storage.local.set({ bookmarks });
    });
  };

  setInterval(() => {
    const video = document.querySelector("video");
    if (video && video.paused && lastState !== "paused") {
      saveBookmark();
      lastState = "paused";
    }
    if (video && !video.paused && lastState !== "playing") {
      lastState = "playing";
    }
  }, 1000);
})();
