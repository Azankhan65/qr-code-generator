document.getElementById("url-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const url = document.getElementById("url-input").value;
  const qrCodeImg = document.getElementById("qr-code");

  if (!url) {
    alert("Please enter a URL");
    return;
  }

  fetch(`/api/generate-qr?url=${encodeURIComponent(url)}`)
    .then((res) => res.json())
    .then((data) => {
      if (data.qr_code) {
        qrCodeImg.src = `data:image/png;base64,${data.qr_code}`;
        qrCodeImg.style.display = "block";
      } else {
        alert("Error generating QR code");
      }
    })
    .catch(() => alert("Error connecting to server"));
});
