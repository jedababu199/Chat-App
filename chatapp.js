const chatBox = document.getElementById('chat-box');
const userInput = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');
const themeToggle = document.getElementById('theme-toggle');

// Theme Logic
const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'dark') {
    document.body.classList.add('dark-mode');
    themeToggle.innerText = "Light Mode";
}

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    themeToggle.innerText = isDark ? "Light Mode" : "Dark Mode";
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
});

// Chat Logic
function sendMessage() {
    const text = userInput.value.trim();
    if (text === "") return;

    appendMessage(text, 'sent');
    userInput.value = "";

    // Fake reply logic
    setTimeout(() => {
        appendMessage("This Chat App was created by Jed Ababu! Wait for updates. Thank you", 'received');
    }, 1000);
}

function appendMessage(text, type) {
    const msgDiv = document.createElement('div');
    msgDiv.classList.add('message', type);
    msgDiv.innerText = text;
    
    chatBox.appendChild(msgDiv);
    
    // Smooth scroll to bottom
    chatBox.scrollTo({
        top: chatBox.scrollHeight,
        behavior: 'smooth'
    });
}

// Listen for clicks and Enter key
sendBtn.addEventListener('click', sendMessage);
userInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') sendMessage();
});