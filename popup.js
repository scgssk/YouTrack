chrome.storage.local.get(["bookmarks"], (result) => {
  const bookmarks = result.bookmarks || [];
  const latest = bookmarks[bookmarks.length - 1];
  const latestDiv = document.getElementById("latest");
  const othersDiv = document.getElementById("others");

  if (latest) {
    latestDiv.innerHTML = `
      <p><strong>${latest.title}</strong></p>
      <a href="${latest.url}" target="_blank">
        <button>Continue at ${latest.time}s</button>
      </a>
    `;
  } else {
    latestDiv.innerHTML = "<p>No saved videos yet.</p>";
  }

  if (bookmarks.length > 1) {
    const others = bookmarks.slice(0, -1).reverse();
    othersDiv.innerHTML = others.map(b =>
      `<a href="${b.url}" target="_blank">${b.title} @ ${b.time}s</a>`
    ).join("");
  } else {
    othersDiv.innerHTML = "<p>No other videos saved.</p>";
  }
});
document.getElementById("clear").addEventListener("click", () => {
  if (confirm("Are you sure you want to clear all saved bookmarks?")) {
    chrome.storage.local.set({ bookmarks: [] }, () => {
      location.reload(); // Reload popup to show empty state
    });
  }
});
