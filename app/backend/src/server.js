const express = require('express');
const cors = require('cors');
const productsRouter = require('./routes/products');

const app = express();

app.use(cors());
app.use(express.json());

app.use(productsRouter);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor de produtos ouvindo em http://localhost:${PORT}`);
});
