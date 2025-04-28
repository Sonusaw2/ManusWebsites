async function sendMessage() {
  const inputField = document.getElementById("user-input");
  const chatBox = document.getElementById("chat-box");
  const userText = inputField.value;

  if (!userText) return; // No empty messages

  // Show user's message
  chatBox.innerHTML += `<div><b>You:</b> ${userText}</div>`;

  // Send the message to your backend API
  const response = await fetch("https://YOUR-NGROK-URL/chat", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ prompt: userText })
  });

  const data = await response.json();

  // Show AI's response
  chatBox.innerHTML += `<div><b>Manus:</b> ${data.response}</div>`;

  inputField.value = ""; // Clear input box
  chatBox.scrollTop = chatBox.scrollHeight; // Scroll down
}