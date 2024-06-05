import express from 'express';

const host = process.env.HOST ?? 'localhost';
const port = process.env.PORT ? Number(process.env.PORT) : 3000;

const app = express();

app.get('/api/infoText', (req, res) => {
  res.send({ textToDisplay: 'Info text' });
});

app.listen(port, host, () => {
  console.log(`[ ready ] http://${host}:${port}`);
});
