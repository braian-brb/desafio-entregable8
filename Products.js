class Products{
    static id = 1;
    static listProducts = [];
    
    constructor(title, price, thumbnail){
        this.title = title;  
        this.price = price;
        this.thumbnail = thumbnail;
    }

    

   
    saveProduct(newProduct){
        
        newProduct.id = id;
        listProducts.push(newProduct)
        id++;
    }

}