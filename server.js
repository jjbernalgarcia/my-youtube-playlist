const express = require('express');

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.static('public'))
app.use(express.static('files'));

app.listen(PORT, () => {
  console.log('Server is running at:',PORT);
});

