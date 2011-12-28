jQuery(function($){
	var item = new Item({name: "Product 1", pid: "0001" , price: 100.0, quantity: 1});
	var view = new CartItem({item: item});
	$("#item").html(view.render().el);
});