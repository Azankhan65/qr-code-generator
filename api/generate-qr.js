const express = require('express');
const QRCode = require('qrcode');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('public'));

// Generate QR Code API
app.get('/api/generate-qr', (req, res) => {
  const url = req.query.url;
  if (!url) {
    return res.status(400).send({ error: 'URL is required' });
  }

  QRCode.toDataURL(url, (err, qrCode) => {
    if (err) {
      return res.status(500).send({ error: 'Failed to generate QR code' });
    }
    res.json({ qr_code: qrCode.split(',')[1] }); // Send base64 image data
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
