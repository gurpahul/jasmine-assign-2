class Shoppingcart {
    constructor(product,price){
        if (product){
            this.product = product.slice(0,4)
        }else{
            this.product = []
        }
        
       
       }

    scan(values){
     if(this.product.length < 5){
         this.product.push(values)
     }else{
         return "Cart is full"
     }
    }

    remove(){
        if(this.product.length < 1){
            return "Cart is empty"
        }else{
            this.product.pop()
        }
    }

    fetch(){
        return this.product
    }
    discount(){
      
    }

}
