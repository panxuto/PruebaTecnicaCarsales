const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = 3000;
const API_URL = 'https://rickandmortyapi.com/api';

app.use(cors());

app.get('/episodes', async (req, res) => {
  try {
    const response = await axios.get(`${API_URL}/episode`);
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error fetching episodes');
  }
});

app.listen(PORT, () => console.log(`BFF running on http://localhost:${PORT}`));
