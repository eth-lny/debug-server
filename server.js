const express = require('express');
const morgan = require('morgan')('dev');
const cors = require('cors');
const app = express();
const port = 8080;

app.use(cors({ origin: 'http://localhost:4200' }));
app.use(morgan)
app.use((req, res, next) => {
  console.log('--- Request Info ---');
  console.log(`Method: ${req.method}`);
  console.log(`URL: ${req.url}`);
  console.log(`Authorization: ${req.headers['authorization'] || 'N/A'}`);
  console.log('Headers:', JSON.stringify(req.headers, null, 2));
  console.log('Body:', JSON.stringify(req.body, null, 2));
  console.log('--------------------');
  res.send('Request logged');
});

app.listen(port, () => {
  console.log(`Debugging server listening at http://localhost:${port}`);
});