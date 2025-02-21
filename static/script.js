function sendMessage() {
    let message = document.getElementById("message").value;
    if (message.trim() === "") return;

    let chatbox = document.getElementById("chatbox");
    chatbox.innerHTML += `<p><strong>You:</strong> ${message}</p>`;
    document.getElementById("message").value = "";

    fetch("/predict", {
        method: "POST",
        body: JSON.stringify({ message: message }),
        headers: { "Content-Type": "application/json" }
    })
    .then(response => response.json())
    .then(data => {
        chatbox.innerHTML += `<p><strong>Bot:</strong> ${data.answer}</p>`;
        chatbox.scrollTop = chatbox.scrollHeight;
    })
    .catch(error => console.error("Error:", error));
}
