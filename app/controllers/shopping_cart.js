jQuery(function($){
    window.ShoppingCart = Spine.Controller.create({
        el: $("#theCart"),
        
        proxied: ["drop", "clear", "removeItem", "total", "updateCartTotal", "removeIfQuantityZero", "addItem"],

        init: function(){
            var cart = this;
            this.items = {};
            $.each(Item.all(), function(){ cart.addItem(this); });
            this.el.droppable({ accept: '.product', drop: this.drop });
            $('#dump', this.el).live('click', function() { cart.clear(); });
        },
        
        // removes all items from the cart
        clear: function() {
            $.each(this.items, function(){ this.destroy(); });
            this.items = {};
            this.updateCartTotal(); 
        },
        
        total: function() {
            var sum = 0.0;
            $.each(this.items, function(){ sum += this.total(); });

            return sum;
        },
        
        isEmpty: function() {
            return this.itemsCount() == 0;
        },
        
        itemsCount: function() {
            var size = 0;
            var items = this.items;
            $.each(items, function(){ if (items.hasOwnProperty(this)) size++; });

            return size;
        },
        
        drop: function(ev, ui){
            var item_dropped = ui.draggable;
            var pid = item_dropped.attr('id');
            var price = item_dropped.attr('price');
            var name = item_dropped.attr('name');

            if (this.items.hasOwnProperty(pid)) {
                this.items[pid].increase();
            }
            else {
                var item = Item.create({name: name, pid: pid, price: price, quantity: 1});
                this.addItem(item);
                $(".items").append(CartItem.init({item: item}).render().el);
            }
        },
        
        render: function(){
            this.el.html($("#shoppingCart").tmpl());
            
            $('#dump').button();

            $.each(this.items, function(){ 
                $(".items").append(CartItem.init({item: this}).render().el);
            });
            
            this.updateCartTotal();
        },
        
        removeItem: function(item){
            $('#item_' + item.pid).effect("puff", {}, "slow", function(){ $(this).remove(); });
        },
        
        updateCartTotal: function(){
            $('#total').text(this.total()).effect("highlight", {}, 1500);
        },
        
        removeIfQuantityZero: function(item){
            if (item.quantity == 0) {
                this.removeItem(item);
                delete this.items[item.pid];
                item.destroy();
            }
        },
        
        addItem: function(item) {
            this.items[item.pid] = item;
            item.bind("change", this.updateCartTotal);
            item.bind("update", this.removeIfQuantityZero);
            item.bind("destroy", this.removeItem);
            item.save();
        }

    });
})