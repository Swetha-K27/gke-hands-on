const express = require('express');
const app = express();
const port = process.env.PORT || 8080;
app.get('/', (req, res) => {
  res.send(`Hellojijue from webapp2! version: ${process.env.VERSION || 'v0.1'}`);
});
app.get('/health', (req, res) => res.status(200).send('OK'));
app.listen(port, () => console.log(`Listening on ${port}`));
