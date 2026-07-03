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

function updateCLock(){

    const now = new Date();

    document.getElementById("clock").textContent = 
    now.toLocaleTimeString()
}

updateCLock();

setInterval(updateCLock,1000);