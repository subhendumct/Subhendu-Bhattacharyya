// Tab Navigation Function
function showTab(tabId) {
    const tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => tab.classList.remove('active'));
    document.getElementById(tabId).classList.add('active');
}

// Set default tab to "About Me"
document.addEventListener("DOMContentLoaded", () => {
    showTab('about');
});

// Sparkle Effect
document.addEventListener("mousemove", (e) => {
    const sparkle = document.createElement("div");
    sparkle.classList.add("sparkle");
    sparkle.style.left = `${e.clientX}px`;
    sparkle.style.top = `${e.clientY}px`;
    document.body.appendChild(sparkle);
    setTimeout(() => sparkle.remove(), 500);
});

// Mousemove Color Change Effect
document.addEventListener("mousemove", (event) => {
    const x = event.clientX / window.innerWidth;
    const y = event.clientY / window.innerHeight;
    document.body.style.backgroundColor = `rgba(${200 + x * 55}, ${150 + y * 55}, ${255 - x * 100}, 0.8)`;
});
