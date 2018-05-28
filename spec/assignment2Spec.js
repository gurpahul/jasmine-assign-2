describe("Shoppingcart", () => {

    it("to add a item in the shopping cart", function(){
        const cart = new Shoppingcart();

        const apple = {
            price: 12,
            selfNumber: 1

        }

        const peach = {
            price: 23,
            selfNumber: 2
        }
        const mango = {
            price: 56,
            selfNumber: 4
        }
        const grapes  = {
            price: 43,
            selfNumber: 7
        }
        const pineapple = {
            price: 45,
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

    it("discount on items", function(){
        const cart = new Shoppingcart();
        cart.scan("apple.price")
        cart.scan("grape.price")
        cart.discount()
        expect(cart.fetch()).toBe("50% discount")
    })
  


    
   
    

})