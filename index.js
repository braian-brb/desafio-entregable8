
const express = require('express');
const app = express();

const { Router } = express;
const router = Router();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/static', express.static(__dirname + '/public'))


const productos = [
    {
        title: 'Pinza Bremen',
        price: 3200,
        thumbnail: "url de la foto pinza"
    },
    {
        title: 'Tijeras',
        price: 80,
        thumbnail: "url de la foto tijeras"
    }
]
//GET '/api/productos' -> devuelve todos los productos.
router.get('/productos',(req, res) => {
    res.send(productos)
})
//GET '/api/productos/:id' -> devuelve un producto según su id.
router.get('/productos/:id',(req, res) =>{
    const productFind = productos.find(e => e.id == req.params.id);
    if (productFind != undefined) res.send(productFind);
})

//POST '/api/productos' -> recibe y agrega un producto, y lo devuelve con su id asignado.
router.post('/productos', (req, res) =>{
    const nuevoProducto = req.body
    productos.push(nuevoProducto)
    res.send('Post OK')
})

//PUT '/api/productos/:id' -> recibe y actualiza un producto según su id.
router.put('/productos/:id', (req, res) => {
    const productFind = productos.find(e => e.id == req.params.id);
    if (productFind != undefined) res.send(productFind);
})

//DELETE '/api/productos/:id' -> elimina un producto según su id.
router.delete('/productos/:id', (req, res) => {
    const productFindIndex = productos.findIndex(e => e.id == req.params.id);
    productos.splice(productFindIndex,1)    
    res.send('Delete OK')   
})
app.listen(8080);




app.use('/api', router);
