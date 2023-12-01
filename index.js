console.log("Hola Mundo");

class ProductManager {
    static ultId =0
  constructor() {
    this.products = [];
  }

  addProduct(title, description, price, image, code, stock) {
    if ((!title || !description || !price || !image, !code || !stock)) {
        console.log("Todos los campos son obligatorios");
      return
    } 
    if(this.products.some(item => item.code=== code)){
        console.log('El codigo debe ser unico');
        return;

    }
    const newProduct ={
        id: ++ ProductManager.ultId,
        title,
        description,
        price,
        image,
        code,
        stock,
    }
    this.products.push(newProduct)
  }
  getProducts(){
    console.log(this.products);
  }
  getProductsById(id){
    const product= this.products.find(item =>item.id ===id)
    if(!product){
        console.log('PRODUCTO NO ENCONTRADO!👎');
    }else{
        console.log('PRODUCTO ENCONTRADO 👍');
       
    } return product
  }
}

const manager = new ProductManager();


manager.addProduct("Producto Prueba", "Este es un producto prueba", 200, "sin imagen", "abc123", 25)

manager.getProducts()

manager.addProduct("Producto Prueba", "Este es un producto prueba", 200, "sin imagen", "abc123", 25)
manager.getProductsById(1)
manager.getProductsById(19)