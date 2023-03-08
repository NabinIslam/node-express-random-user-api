const express = require('express');

const app = express();

const port = process.env.PORT || 5000;

app.get('/', async (req, res) => res.send('Random user api server is running'));

app.listen(port, ()=>console.log(`Server is running on port:${port}`))
