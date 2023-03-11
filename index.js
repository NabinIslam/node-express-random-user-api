const express = require('express');
const userRouter = require('./routes/v1/users.route.js');

const app = express();

const port = process.env.PORT || 5000;

app.use(express.json());
app.use('/api/v1/user', userRouter);

app.get('/', async (req, res) => {
  res.send('<center><h1>Random user api server is running</h1></center>');
});

app.listen(port, () => {
  console.log(`Server is running on port:${port}, http://localhost:${port}`);
});
