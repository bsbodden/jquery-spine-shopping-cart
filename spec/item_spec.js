describe("Item", function() {
	var item;

	beforeEach(function() {
	    item = Item.create({name: "Product 0", pid: "item_0" , price: 100.0, quantity: 1});
	});

	describe("an item", function() {
		
		it("should total its price * quantity", function() {
			expect(item.total()).toEqual(100.0);
		});
		
		it("should return its quantity", function() {
			expect(item.quantity).toEqual(1);
		});
		
		it("should return its product id", function() {
			expect(item.pid).toEqual("item_0");
		});
		
		it("should return its name", function() {
			expect(item.name).toEqual("Product 0");
		});
		
		it("should return its label", function() {
			expect(item.label()).toEqual("Product 0 - $100");
		});
		
		it("should increase the quantity by 1 and return the correct total when invoking increase without params", function() {
			item.increase();
			expect(item.quantity).toEqual(2);
			expect(item.total()).toEqual(200.0);
		});
		
		it("should increase the quantity by N and return the correct total when invoking increase with a value of N", function() {
			item.increase(5);
			expect(item.quantity).toEqual(6);
			expect(item.total()).toEqual(600.0);
		});
		
		it("should decrease the quantity by 1 and return the correct total when invoking decrease without params", function() {
			item.increase();
			expect(item.quantity).toEqual(2);
			expect(item.total()).toEqual(200.0);
		});
		
		it("should decrease the quantity by N and return the correct total when invoking decrease with a value of N", function() {
			item.increase(3);
			item.decrease();
			expect(item.quantity).toEqual(3);
			expect(item.total()).toEqual(300.0);
		});

	});

});