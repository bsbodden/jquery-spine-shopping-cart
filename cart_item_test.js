jQuery(function($){
	var item = Item.create({name: "Product 1", pid: "0001" , price: 100.0, quantity: 1});
	var view = CartItem.init({item: item});
	$("#item").html(view.render().el);
});