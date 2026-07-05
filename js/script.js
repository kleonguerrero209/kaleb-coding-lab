const greeting  = document.getElementById("greeting");

greeting.textContent = "Welcome back, Kaleb";

const today = new Date();

const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
};

document.getElementById("date").textContent =
today.toLocaleDateString("en-US", options);

function updateClock() {

    const now = new Date();

    document.getElementById("clock").textContent = 
    now.toLocaleTimeString()
}

updateClock();

setInterval(updateClock, 1000);

const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
})