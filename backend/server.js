const express = require('express');
const app = express();
app.use(express.json());

const { listings, bookings } = require('./models');

// Получить список объектов
app.get('/api/listings', (req, res) => {
  res.json(listings);
});

// Забронировать объект
app.post('/api/book', (req, res) => {
  const booking = req.body;
  bookings.push(booking);
  res.json({ status: 'success', booking });
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
