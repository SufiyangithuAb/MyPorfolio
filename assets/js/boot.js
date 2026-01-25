const voice = document.getElementById("welcomeVoice");
const subtitle = document.getElementById("subtitle");
const bootLogs = document.getElementById("bootLogs");
const buttons = document.getElementById("buttons");
const hint = document.getElementById("hint");

let started = false;
let systemReady = false;

/* =========================
   DATA
========================= */

const subtitleText = "Initializing personal system...";
const logs = [
    "Loading core modules...",
    "Mounting logic engine...",
    "Verifying system integrity...",
    "Establishing interface...",
    "System online."
];

/* =========================
   TYPEWRITER
========================= */
function typeText(element, text, speed = 45, callback) {
    let i = 0;
    element.textContent = "";
    const interval = setInterval(() => {
        element.textContent += text[i];
        i++;
        if (i >= text.length) {
            clearInterval(interval);
            if (callback) callback();
        }
    }, speed);
}

/* =========================
   BOOT LOGS
========================= */
function runBootLogs(index = 0) {
    if (index >= logs.length) return;

    setTimeout(() => {
        const line = document.createElement("div");
        line.textContent = "> " + logs[index];
        bootLogs.appendChild(line);
        runBootLogs(index + 1);
    }, 800);
}

/* =========================
   START SYSTEM
========================= */
function startSystem() {
    voice.volume = 0.7;
    voice.play();

    typeText(subtitle, subtitleText, 40, () => {
        runBootLogs();
    });

    voice.onended = unlockSystem;
}

/* =========================
   UNLOCK SYSTEM
========================= */
function unlockSystem() {
    systemReady = true;
    buttons.classList.remove("locked");
    document.body.classList.add("system-ready");
    hint.textContent = "Press Enter or click Explore";
}

/* =========================
   EVENTS
========================= */
window.addEventListener("click", () => {
    if (!started) {
        started = true;
        startSystem();
    }
});

window.addEventListener("keydown", (e) => {
    if (!started && e.key === "Enter") {
        started = true;
        startSystem();
        return;
    }

    if (systemReady && e.key === "Enter") {
        window.location.href = "home.php";
    }
});
