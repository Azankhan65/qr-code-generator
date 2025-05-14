document.getElementById("url-form").addEventListener("submit", function(e) {
    e.preventDefault();

    // Get the URL input value
    const url = document.getElementById("url-input").value;

    // Check if the input is empty
    if (!url) {
        alert("Please enter a URL");
        return;
    }

    // Get the QR Code image element
    const qrCodeImg = document.getElementById("qr-code");

    // Call the API to generate the QR code
    fetch(`/api/generate-qr?url=${encodeURIComponent(url)}`)
        .then(res => res.json())  // Parse the response as JSON
        .then(data => {
            if (data.qr_code) {
                // Set the source of the QR code image to the generated base64
                qrCodeImg.src = `data:image/png;base64,${data.qr_code}`;
                qrCodeImg.style.display = "block";  // Show the QR code
            } else {
                alert("Error generating QR code");
            }
        })
        .catch(() => alert("Error connecting to server"));

    // Initially hide the QR code image until it's generated
    qrCodeImg.style.display = "none";
});
