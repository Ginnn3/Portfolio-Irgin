const text =
  "Saya merupakan freshgraduate dari Universitas Mercu Buana, S1 Teknik Informatika.\nSaat ini saya berdomisili di Kota Tangerang, dekat kawasan Alam Sutera.";
const target = document.getElementById("typing-text");

function typeWriterLoop() {
  let index = 0;
  target.innerHTML = "";

  function typeWriter() {
    if (index < text.length) {
      const currentChar =
        text.charAt(index) === "\n" ? "<br>" : text.charAt(index);
      target.innerHTML += currentChar;
      index++;
      setTimeout(typeWriter, 10);
    } else {
      setTimeout(typeWriterLoop, 3000);
    }
  }

  typeWriter();
}
typeWriterLoop();
