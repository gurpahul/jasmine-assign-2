describe("Shoppingcart", () => {

    it("to add a item in the shopping cart", function(){
        const cart = new Shoppingcart();

        const apple = {
            upc: 1212,
            selfNumber: 1

        }

        const peach = {
            upc: 2343,
            selfNumber: 2
        }
        const mango = {
            upc: 5678,
            selfNumber: 4
        }
        const grapes  = {
            upc: 4343,
            selfNumber: 7
        }
        const pineapple = {
            upc: 4512,
            selfNumber: 8
        }

        cart.scan("apple")
        expect(cart.fetch()).toEqual(["apple"])

        cart.scan("peach")
        expect(cart.fetch()).toEqual(["apple","peach"])


    })
    it("Should allow only 5 items to add in kart", function(){
        const cart = new Shoppingcart();
        cart.scan("apple")
        cart.scan("mango")
        cart.scan("peach")
        cart.scan("pineapple")
        cart.scan("grapes")
        cart.scan("jelly")

        expect(cart.scan("jelly")).toBe("Cart is full")
            
    })
    it("Should remove a item from the cart and shows message when try to remove from empty cart", function(){
        const cart = new Shoppingcart();
        cart.scan("apple")
        cart.scan("grape")
        cart.remove()
        expect(cart.fetch()).toEqual(["apple"])
    })

    it("If useer try to remove item from empty cart it shows a message",function(){
        const cart = new Shoppingcart();
        expect(cart.fetch()).toBe("cart is empty")
    })
  


    
   
    

})