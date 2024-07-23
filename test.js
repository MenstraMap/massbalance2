const express = require('express');
const axios = require('axios');

const app = express();
const port = 3000;

// Replace with your Supabase details
const supabaseUrl = 'https://jmjkclbiybinmgvsnxgw.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImptamtjbGJpeWJpbm1ndnNueGd3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTMxNDUyNjAsImV4cCI6MjAyODcyMTI2MH0.ZJ62pYIZuvJJn_EBAxeLrBxPjAAjdWU-Ah4ccHMn1nw';
app.get('/data', async (req, res) => {
  try {
    const response = await axios.get(supabaseUrl, {
      headers: {
        apikey: supabaseApiKey,
        Authorization: `Bearer ${supabaseApiKey}`
      }
    });
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error retrieving data');
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
