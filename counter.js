const express = require('express');
const app = express();
const port = 9999;

let pageVisitors = 0;

// app.use(express.static('public'));
app.use(express.json());


app.get('/', (req, res) => {
  pageVisitors++;
  res.writeHead(200, { 'Content-Type': 'text/plain' })
  res.write('We have had ' + pageVisitors + ' visitors on this page.')
  res.end()
})

app.listen(port, () => {
  console.log(`Server is running at http://localhost${port}`)
})