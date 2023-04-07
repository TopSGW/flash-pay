const express = require('express');
const app = express();

const port = 8800;

app.use(express.static('build'));

app.listen(port, console.log(`Server running on ${port}`));