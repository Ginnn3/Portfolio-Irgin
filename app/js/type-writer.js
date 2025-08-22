const text =
  "\nSaya merupakan freshgraduate dari Universitas Mercu Buana, \nS1 Teknik Informatika. Saat ini saya berdomisili di \nKota Tangerang, dekat kawasan Alam Sutera.";
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
      setTimeout(typeWriterLoop, 10000);
    }
  }

  typeWriter();
}
typeWriterLoop();
