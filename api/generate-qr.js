const QRCode = require('qrcode');

module.exports = async (req, res) => {
  const { url } = req.query;

  if (!url) {
    return res.status(400).json({ error: 'URL is required' });
  }

  try {
    const qrCode = await QRCode.toDataURL(url);
    res.status(200).json({ qr_code: qrCode.split(',')[1] });
  } catch (err) {
    res.status(500).json({ error: 'Failed to generate QR code' });
  }
};
