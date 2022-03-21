class Products{
    static id = 1;
    
    constructor(title, price, thumbnail){
        this.title = title;  
        this.price = price;
        this.thumbnail = thumbnail;
    }

    arrayProducts = [];

   
    saveProduct(newProduct){
        
        newProduct.id = id;
        arrayProducts.push(newProduct)
        id++;
    }

}