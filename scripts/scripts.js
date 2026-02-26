const qrcode = new QRCode(document.getElementById("qrcode"), {
  text: "https://ingg.ar",
  width: 200,
  height: 200,
  colorDark: "#000000",
  colorLight: "#ffffff",
  correctLevel: QRCode.CorrectLevel.H,
});

function generateQR() {
  const text = document.getElementById("text").value;
  if (text.trim() === "") {
    qrcode.clear();
  } else {
    qrcode.makeCode(text);
  }
}
