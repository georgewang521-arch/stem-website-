const analytics = JSON.parse(localStorage.getItem('stemAnalytics')) || {};

function recordVisit(page) {
  analytics[page] = (analytics[page] || 0) + 1;
  localStorage.setItem('stemAnalytics', JSON.stringify(analytics));
  console.log(`Visited ${page}: ${analytics[page]} times`);
}

document.addEventListener('DOMContentLoaded', () => {
  const page = window.location.pathname.split("/").pop();
  recordVisit(page);
});
