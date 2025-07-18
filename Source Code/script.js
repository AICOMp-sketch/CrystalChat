const sendBtn = document.getElementById("sendBtn");
const chatInput = document.getElementById("chatInput");
const chatBody = document.getElementById("chatBody");

sendBtn.addEventListener("click", () => {
  const msg = chatInput.value.trim();
  if (msg !== "") {
    addMessage(msg, "right");
    setTimeout(() => {
      addMessage("This is a sample response.", "left");
    }, 800);
    chatInput.value = "";
  }
});

function addMessage(text, side) {
  const message = document.createElement("div");
  message.className = `message ${side}`;
  message.textContent = text;
  chatBody.appendChild(message);
  chatBody.scrollTop = chatBody.scrollHeight;
}