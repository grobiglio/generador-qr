const qrcode = new QRCode(document.getElementById("qrcode"), {
  text: "https://ingg.ar/enlaces/",
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

// Nueva función para descargar la imagen
function downloadQR() {
  const qrContainer = document.getElementById("qrcode");
  // La librería genera tanto un 'canvas' como un 'img'. Buscamos la imagen.
  const img = qrContainer.querySelector("img");
  
  if (img && img.src) {
    // Creamos un enlace invisible
    const link = document.createElement("a");
    link.href = img.src;
    link.download = "codigo-qr-ingg.png"; // Nombre con el que se bajará el archivo
    
    // Lo añadimos al documento, simulamos el clic y lo eliminamos
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  } else {
    // Por si acaso la imagen aún no se renderizó y solo está el canvas
    const canvas = qrContainer.querySelector("canvas");
    if (canvas) {
      const url = canvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.href = url;
      link.download = "codigo-qr-ingg.png";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  }
}