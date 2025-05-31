// toggle code
const toggle = document.querySelector(".toggle-switch input");
console.log(toggle);
let flag = true;

toggle.addEventListener("click", () => {
  if (flag) {
    document.body.style.backgroundColor = "rgb(13, 13, 13)";
    document.body.style.color = "#FFFFFF";
    flag = false;
  } else {
    document.body.style.backgroundColor = "#fffefefb";
    document.body.style.color = "#000000";
    flag = true;
  }
  console.log(flag);
});

// Sparkling code

const container = document.body; // allow sparkles to animate across full screen


function createSparkle() {
  const sparkle = document.createElement("div");
  sparkle.classList.add("sparkle");

  // Random horizontal position
  sparkle.style.left = `${Math.random() * 100}vw`;
  sparkle.style.top = `${Math.random() * 100}vh`;

  // Optional: Random animation duration
  sparkle.style.animationDuration = `${Math.random() * 2 + 1.5}s`;
    sparkle.style.background = flag
    ? "radial-gradient(circle, rgb(14, 14, 14), transparent)"
    : "radial-gradient(circle, white, transparent)";

  container.appendChild(sparkle);

  // Remove sparkle after animation
  setTimeout(() => {
    sparkle.remove();
  }, 5000);
}

// Create sparkles at an interval
setInterval(createSparkle,70); // every 150ms

const toggleBtn = document.getElementById("toggle-theme-btn");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
  toggleBtn.textContent = document.body.classList.contains("dark-theme") ? "🌞" : "🌙";
});
