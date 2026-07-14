const greeting  = document.getElementById("greeting");

const tasks = [];

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
    now.toLocaleTimeString();
}

updateClock();

setInterval(updateClock, 1000);

const themeToggle = document.getElementById("theme-toggle");

const savedTheme = localStorage.getItem("theme");

if  (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
}

themeToggle.addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
});

const taskInput = document.getElementById("taskInput");


const addTaskButton = document.getElementById("addTaskButton");


const taskList = document.getElementById("taskList");

addTaskButton.addEventListener("click", function () {
    const taskText = taskInput.value.trim();

    if (taskInput.value.trim() === "") {
        return;
}
    tasks.push(taskText)

    const newTask = document.createElement("li");

    newTask.classList.add("mission");
    newTask.textContent = taskText;
    
    newTask.addEventListener("click", function () {
        newTask.classList.toggle("completed");
    });

    taskList.appendChild(newTask);

    taskInput.value = "";
});

const missions = [
    "🟢 Learning JavaScript",
    "🏋️ Olympic Lifting",
    "💻 Study Cybersecurity",
    "🌐 Build KalebOS",
    "📖 Read 10 Pages"
];

const missionList = document.getElementById("mission-list");

function createMission(mission){

    const li = document.createElement("li");

    li.classList.add("mission");
    li.textContent = mission;
    li.addEventListener("click", function(){
        console.log(mission);
        li.classList.toggle("completed");
    });
    missionList.appendChild(li);

}

missions.forEach(function(mission){
    createMission(mission);
});