const chatHistory = document.getElementById("chat-history");
const form = document.getElementById("chat-form");
const input = document.getElementById("user-input");


// Add message to UI
function addMessage(text, sender) {
  const msgDiv = document.createElement("div");
  msgDiv.className = sender === "user" ? "user-message" : "bot-message";
  msgDiv.innerHTML = sender === "bot"
    ? `${text}`
    : text;
  chatHistory.appendChild(msgDiv);
  chatHistory.scrollTop = chatHistory.scrollHeight;
}


// Chat form submit
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const userInput = input.value.trim();
  if (!userInput) return;

  addMessage(userInput, "user");
  input.value = "";

  const res = await fetch("http://localhost:5000/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ userInput })
  });

  const data = await res.json();
  console.log(data);
  addMessage(data.response, "bot");
});


const chatIcon = document.getElementById("chat-icon");
const chatBox = document.getElementById("chat-box");

let chatVisible = false;

// Toggle chat window on click
chatIcon.addEventListener("click", () => {
  chatVisible = !chatVisible;
  chatBox.style.display = chatVisible ? "flex" : "none";
});


document.addEventListener("click", (e) => {
    if (!document.getElementById("chatbot-container").contains(e.target) && chatVisible) {
      chatBox.style.display = "none";
      chatVisible = false;
    }
  });
  