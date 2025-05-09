const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

// Hardcoded correct PIN
const correctPin = '1234';

app.use(bodyParser.json());
app.use(express.static(__dirname)); // Serves HTML/CSS/JS

app.post('/verify-pin', (req, res) => {
  const { pin } = req.body;
  if (pin === correctPin) {
    res.json({ success: true });
  } else {
    res.json({ success: false });
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
