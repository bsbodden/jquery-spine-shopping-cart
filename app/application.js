jQuery(function($){
	Item.fetch();
	$(".product").draggable({ helper: 'clone', opacity: "0.5" });
	var cart = new ShoppingCart();
	cart.render();
});