describe("ShoppingCart", function() {
	var cart;

	beforeEach(function() {
		cart_fixture = $('<div id="theCart"></div>')
		cart = ShoppingCart.init();
		cart.clear();
	});

	describe("a new cart", function() {

		it("should be empty", function() {
			expect(cart.isEmpty()).toBeTruthy();
		});

		it("should total $0.0", function() {
			expect(cart.total()).toEqual(0.0);
		});
		
		// it("should contain only one item after adding an item", function() {
		// 	cart.drop();
		// 	expect(cart.itemsCount()).toEqual(1);
		// });
		// 
		// it("should total to the pricing on the single item after adding an item", function() {
		// 	cart.add("001", 25.99);
		// 	expect(cart.total()).toEqual(25.99);
		// });

	});

	// describe("a shopping cart with one item", function() {
	// 
	// 	beforeEach(function() {
	// 		cart.add("001", 25.99);
	// 	});
	// 
	// 	it("should not be empty", function() {
	// 		expect(cart.isEmpty()).toBeFalsy();
	// 	});
	// 
	// 	it("should become empty after removing its single item", function() {
	// 		cart.decrease("001");
	// 		expect(cart.isEmpty()).toBeTruthy();
	// 	});
	// 
	// 	it("should return the quantity of 1 for its single item", function() {
	// 		expect(cart.itemsCount()).toEqual(1);
	// 	});
	// 	
	// 	it("should return the quantity of N+1 for the product after increasing the quantity of its single item by N", function() {
	// 		cart.increase("001", 5);
	// 		expect(cart.quantityFor("001")).toEqual(6);
	// 	});
	// 	
	// 	it("should return the quantity of 1 after increasing the quantity of its single item by N", function() {
	// 		cart.increase("001", 5);
	// 		expect(cart.itemsCount()).toEqual(1);
	// 	});
	// 	
	// 	it("should total to the price of its single items times its quantity", function() {
	// 		cart.increase("001", 5);
	// 		expect(cart.total()).toEqual(6*25.99);
	// 	});
	// });
	// 
	// describe("a car with multiple items and varied quantities", function() {
	// 
	// 	beforeEach(function() {
	// 		cart.add("001", 25.99, 4);
	// 		cart.add("002", 13.33, 5);
	// 		cart.add("003", 5.50, 6);
	// 	});
	// 
	// 	it("should return the number of all the items added", function() {
	// 		expect(cart.itemsCount()).toEqual(3);
	// 	});
	// 	
	// 	it("should return the individual quantities for the items added", function() {
	// 		expect(cart.quantityFor("001")).toEqual(4);
	// 		expect(cart.quantityFor("002")).toEqual(5);
	// 		expect(cart.quantityFor("003")).toEqual(6);
	// 	});
	// 	
	// 	it("should total to the sum of all items times their quantities", function() {
	// 		expect(cart.total()).toEqual((25.99*4)+(13.33*5)+(5.50*6));
	// 	});
	// 
	// });
});