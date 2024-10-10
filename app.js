const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000; // Use the PORT environment variable or default to 3000

// Dummy data for available seats
let economySeats = 50;
let firstClassSeats = 20;
let businessSeats = 30;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Function to generate a random ticket number
function generateTicketNumber() {
  return Math.floor(100000 + Math.random() * 900000);
}

// Endpoint for booking economy class tickets
app.post('/economy', (req, res) => {
  const { passengerName, contact, destination } = req.body;

  if (economySeats > 0) {
    economySeats--;
    const ticketNumber = generateTicketNumber();
    const response = {
      passenger: { name: passengerName, contact: contact, destination: destination },
      ticketNumber: ticketNumber,
      message: 'Economy class ticket booked successfully'
    };
    res.status(200).json(response);
  } else {
    res.status(400).json({ message: 'No available seats in economy class' });
  }
});

app.get('/all', (req, res) => {

  const response = [
      {'class': 'business', 'ticketNumber': 'EMR00007'},
      {'class': 'First', 'ticketNumber': 'EMR00006'},
      {'class': 'Economy', 'ticketNumber': 'EMR00005'}
    ];
  res.status(200).json(response);

});

// Endpoint for booking first class tickets
app.post('/first-class', (req, res) => {
  const { passengerName, contact, destination } = req.body;

  if (firstClassSeats > 0) {
    firstClassSeats--;
    const ticketNumber = generateTicketNumber();
    const response = {
      passenger: { name: passengerName, contact: contact, destination: destination },
      ticketNumber: ticketNumber,
      message: 'First class ticket booked successfully'
    };
    res.status(200).json(response);
  } else {
    res.status(400).json({ message: 'No available seats in first class' });
  }
});

// Endpoint for booking business class tickets
app.post('/business', (req, res) => {
  const { passengerName, contact, destination } = req.body;

  if (businessSeats > 0) {
    businessSeats--;
    const ticketNumber = generateTicketNumber();
    const response = {
      passenger: { name: passengerName, contact: contact, destination: destination },
      ticketNumber: ticketNumber,
      message: 'Business class ticket booked successfully'
    };
    res.status(200).json(response);
  } else {
    res.status(400).json({ message: 'No available seats in business class' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

