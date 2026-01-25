const modal = document.getElementById("moduleModal");
const content = document.getElementById("moduleContent");

const data = {
    quickbuy: `
        <h2>QuickBuy</h2>
        <p>Android shopping app built using Java, XML, and Firebase.</p>
        <ul>
            <li>User authentication</li>
            <li>Product listing flow</li>
            <li>Firebase backend</li>
        </ul>
    `,
    windowschat: `
        <h2>Windows Messaging Platform</h2>
        <p>Desktop messaging system built using C# and .NET.</p>
        <ul>
            <li>User-to-user messaging</li>
            <li>MySQL database integration</li>
            <li>Windows-based UI</li>
        </ul>
    `,
    webchat: `
        <h2>Web Messaging Platform</h2>
        <p>Django-powered messaging web application.</p>
        <ul>
            <li>Backend with Django</li>
            <li>Frontend using HTML, CSS, JS</li>
            <li>MySQL database</li>
        </ul>
    `
};

function openModule(key) {
    content.innerHTML = data[key];
    modal.classList.add("active");
}

function closeModule() {
    modal.classList.remove("active");
}

