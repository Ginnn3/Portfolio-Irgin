function sendToWhatsApp() {
  const name = document.getElementById("name").value.trim();
  const message = document.getElementById("message").value.trim();

  if (name === "" || message === "") {
    alert("Please fill in both fields.");
    return;
  }

  const phoneNumber = "6281297694668";
  const text = `Halo, saya ${name}.%0A%0A${message}`;

  const url = `https://wa.me/${phoneNumber}?text=${text}`;
  window.open(url, "_blank");
}
