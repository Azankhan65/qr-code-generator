    document.getElementById("url-form").addEventListener("submit", function(e) {
        e.preventDefault();

        // Get the URL input value
        const url = document.getElementById("url-input").value;

        // Check if the input is empty
        if (!url) {
            alert("Please enter a URL");
            return;
        }

        // Generate the QR Code (this would be linked to the server-side logic)
        const qrCodeImg = document.getElementById("qr-code");
fetch(`/generate-qr?url=${encodeURIComponent(url)}`)
  .then(res => res.json())
  .then(data => {
    if (data.qr_code) {
      qrCodeImg.src = `data:image/png;base64,${data.qr_code}`;
      qrCodeImg.style.display = "block";
    } else {
      alert("Error generating QR code");
    }
  })
  .catch(() => alert("Error connecting to server"));
        qrCodeImg.style.display = "block";
    });


