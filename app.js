const express = require('express');
const fs = require('fs/promises'); // Use fs.promises for promise-based file operations
const app = express();
const port = 3000;

// Define an endpoint to get all cafes
app.get('/cafes', async (req, res) => {
  try {
    const data = await fs.readFile('cafes.json', 'utf8');
    const cafes = JSON.parse(data);
    res.json(cafes);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Define an endpoint to get cafes based on parameters
app.get('/cafes/search', async (req, res) => {
  try {
    const data = await fs.readFile('cafes.json', 'utf8');
    const cafes = JSON.parse(data);

    const { wifi, powerOutlets, vibes } = req.query;

    // Filter cafes based on parameters
    const filteredCafes = cafes.filter(cafe => {
      return (
        (wifi === undefined || cafe.wifi.toString() === wifi) &&
        (powerOutlets === undefined || cafe.powerOutlets.toString() === powerOutlets) &&
        (vibes === undefined || cafe.vibes.toLowerCase() === vibes.toLowerCase())
      );
    });

    res.json(filteredCafes);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
