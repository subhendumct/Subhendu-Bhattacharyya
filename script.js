// Tab Navigation Function
function showTab(tabId) {
    const tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => tab.classList.remove('active'));
    document.getElementById(tabId).classList.add('active');
}

// Set default tab on page load
document.addEventListener("DOMContentLoaded", () => {
    showTab('about');
});

window.onload = function() {
    createSparkleEffect();
};

function createSparkleEffect() {
    const sparkleContainer = document.querySelector('.sparkle-container');

    // Check if the container exists
    if (!sparkleContainer) {
        console.error('Sparkle container not found');
        return;
    }

    sparkleContainer.addEventListener('mousemove', (event) => {
        const sparkles = document.querySelectorAll('.sparkle');
        if (!sparkles || sparkles.length === 0) {
            console.error('No sparkles found');
            return;
        }

        // Generate a sparkle at the cursor position
        const sparkle = sparkles?.[0];
        if (sparkle) {
            sparkle.style.left = `${event.clientX}px`;
            sparkle.style.top = `${event.clientY}px`;
            sparkle.classList.add('active');
        }
    });
}
// Add sparkle effect for both mousemove and touchmove events
document.addEventListener("mousemove", createSparkleEffect);
document.addEventListener("touchmove", createSparkleEffect);


function showTab(tabId) {
    const tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => tab.classList.remove('active'));
    document.getElementById(tabId).classList.add('active');
}

// Set the default tab on page load
document.addEventListener("DOMContentLoaded", () => {
    showTab('about');
});


