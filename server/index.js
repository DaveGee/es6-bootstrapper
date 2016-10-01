import express from 'express';
import bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.json({ res: 'Hello World '});
})

app.post('/', (req, res) => res.json({ yourRequest: req.body }));

app.listen(3000, function () {
  console.log('app bootstrapped on port 3000!');
})
