
class Container{
    constructor(){
        this.products = []
    }
    static idCount = 1;

    save(newProduct){    //save(Object): Number - Recibe un objeto, devuelve el id asignado.
        newProduct.id = this.idCount;
        this.products.push(newProduct)
        this.idCount++;
        return newProduct.id;      
    }

    getById(idParameter){ //getById(Number): Object - Recibe un id y devuelve el objeto con ese id, o null si no está.
        const productFind = this.products.find(e => e.id == idParameter);
        if (productFind != undefined) return productFind;
        else return {error: 'Product not found'};
    }

    getAll() {      // getAll(): Object[] - Devuelve un array con los objetos presentes en el array.
        return this.products
      } 
     
    
    deleteById(idParameter){ //deleteById(Number): void - Elimina del archivo el objeto con el id buscado.
        const productFindIndex = this.products.findIndex(e => e.id == idParameter);
        this.products.splice(productFindIndex,1)  
    }

    updateById(idParameter, updateProduct){ //updateById(Number): Actualiza un producto segun su id}
        const productFindIndex = this.products.findIndex(e => e.id == idParameter);

        if (productFindIndex != undefined) {
            const newProduct = updateProduct;
            newProduct.id = idParameter;
            this.products[productFindIndex] = newProduct
            return(newProduct);
        }
        else return({error: 'Product not found'});

    }

}
module.exports = Container