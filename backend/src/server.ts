import express from 'express';

const app = express();
const PORT = 8123;

app.get('/', (req, res) => res.send('Requisição funcionando perfeitamente!'));

app.listen(PORT, () => {
  console.log("Servidor funcionando!");
});