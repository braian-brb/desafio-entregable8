
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


const products = [
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
//GET '/api/products' -> devuelve todos los products.
router.get('/products',(req, res) => {
    res.send(products)
})
//GET '/api/products/:id' -> devuelve un producto según su id.
router.get('/products/:id',(req, res) =>{
    const productFind = products.find(e => e.id == req.params.id);
    if (productFind != undefined) res.send(productFind);
    else res.send({error: 'Product not found'});
})

//POST '/api/products' -> recibe y agrega un producto, y lo devuelve con su id asignado.
router.post('/products', (req, res) =>{
    const newProduct = req.body
    products.push(newProduct)
    res.send('Post OK')
})

//PUT '/api/products/:id' -> recibe y actualiza un producto según su id.
router.put('/products/:id', (req, res) => {
    const productFindIndex = products.findIndex(e => e.id == req.params.id);
    
    if (productFindIndex != undefined) {
        const newProduct = req.body
        products[productFindIndex] = newProduct
        res.send(newProduct);
    }
    else res.send({error: 'Product not found'});
})

//DELETE '/api/products/:id' -> elimina un producto según su id.
router.delete('/products/:id', (req, res) => {
    const productFindIndex = products.findIndex(e => e.id == req.params.id);
    products.splice(productFindIndex,1)    
    res.send('Delete OK')   
})



app.use('/api', router);
