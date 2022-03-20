
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
    res.send(req.params.id)
})

//POST '/api/productos' -> recibe y agrega un producto, y lo devuelve con su id asignado.
router.post('/productos', (req, res) =>{
    const nuevoProducto = req.body
    productos.push(nuevoProducto)
    res.send('Post OK')
})

//PUT '/api/productos/:id' -> recibe y actualiza un producto según su id.
router.put('/productos/:id', (req, res) => {
    const pos = req.params.pos
    const palabra = req.body.palabra
     stringFrase = frase.split(' ')

    if (pos > stringFrase.length){
        res.send({error: 'Parametter is out of range'})
        return
    }
    anterior = stringFrase[pos-1]
    stringFrase[pos-1] = palabra
    frase = stringFrase.join(' ')
    res.send({anterior, actualizada: palabra})

})

//DELETE '/api/productos/:id' -> elimina un producto según su id.
app.listen(8080);




app.use('/api', router);
