require('dotenv').config();
const express = require('express');
const massive = require('massive');
const pc = require('./products_controller');

const app = express();

const {SERVER_PORT, CONNECTION_STRING} = process.env;

app.use(express.json());

massive(CONNECTION_STRING).then(db => {
    app.set('db', db);
    console.log('db connected');
}).catch(err => console.log(err));

//endpoints
app.get('/api/products', pc.getAll);
app.get('/api/products/:id', pc.getOne);
app.put('/api/products/:id', pc.update);
app.post('/api/products', pc.create);
app.delete('/api/products/:id', pc.delete);

app.listen(SERVER_PORT, () => console.log(`Server running on port ${SERVER_PORT}`));