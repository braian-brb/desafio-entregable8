
const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;
const server = app.listen(PORT, () => {
    console.log(`Listing in port ${server.address().port}`);
});
server.on('error', error => console.log(`Error in server ${error}`));


const { Router } = express;
const router = Router();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/static', express.static(__dirname + '/public'))

const Container = require('./container.js')

const container = new Container();

//GET '/api/products' -> devuelve todos los products.
router.get('/products',(req, res) => { res.send(container.getAll()) })

//GET '/api/products/:id' -> devuelve un producto según su id.
router.get('/products/:id',(req, res) =>{ res.send(container.getById(req.params.id)) })

//POST '/api/products' -> recibe y agrega un producto, y lo devuelve con su id asignado.
router.post('/products', (req, res) =>{ res.send(container.save(req.body)) })

//PUT '/api/products/:id' -> recibe y actualiza un producto según su id.
router.put('/products/:id', (req, res) => { res.send(container.updateById(req.params.id, req.body));   })

//DELETE '/api/products/:id' -> elimina un producto según su id.
router.delete('/products/:id', (req, res) => {  res.send(container.deleteById(req.params.id))   })



app.use('/api', router);
