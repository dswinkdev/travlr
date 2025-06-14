// server.js
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors({
  origin: 'http://localhost:4200' // allow your Angular app
}));

const trips = [
  { id: 1, name: 'Trip to Paris', resort: 'Paris Resort', length: '7 days', perPerson: 1500, description: 'A lovely trip to Paris.', image: 'paris.jpg' },
  { id: 2, name: 'Trip to Hawaii', resort: 'Hawaii Resort', length: '10 days', perPerson: 2000, description: 'Sun and beaches.', image: 'hawaii.jpg' }
];

app.get('/api/trips', (req, res) => {
  res.json(trips);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
