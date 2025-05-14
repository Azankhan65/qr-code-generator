const QRCode = require('qrcode');

module.exports = (req, res) => {
  const url = req.query.url;
  if (!url) {
    return res.status(400).json({ error: 'URL is required' });
  }

  QRCode.toDataURL(url, (err, qrCode) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to generate QR code' });
    }
    res.status(200).json({ qr_code: qrCode.split(',')[1] }); // Send base64 image data
  });
};
