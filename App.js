const express = require('express');
const m = require('./mongodb');
const app = express();
const cors = require('cors');
app.use(express.json());
app.use(cors());

app.post('/get', async (req, res) => {
  const x = await m.find({});
  if (x) {
    res.send(x);
  }
});

app.get('/get/:value', async (req, res) => {
  const file = req.params.value;
  // Assuming fname is the name of the file including extension
  // You need to provide the correct path where your PPT files are stored
  const filePath = `uploads/${file}`;
  res.download(filePath);
});

app.listen(3100, () => {
  console.log('Server is running on port 3100');
});
