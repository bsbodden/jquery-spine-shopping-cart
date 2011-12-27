jQuery(function($){
    window.CartItem = Spine.Controller.create({ 
        proxied: ["render", "add", "remove", "updateQty"],
        
        // 
        init: function(){
            var cartItem = this;
            
            this.item.bind("update", this.updateQty);
            
            $('#item_' + this.item.pid + ' .add').live('click', function(e) { 
                cartItem.add(); 
                e.preventDefault(); 
            });
            
            $('#item_' + this.item.pid + ' .remove').live('click', function(e) { 
                cartItem.remove(); 
                e.preventDefault(); 
            });
        },
        
        render: function(){
            this.el = $.mustache($("#cartItem").html(), this.item);
            
            return this;
        },
    
        // event handlers
        add: function(e) {
            this.item.increase();
            this.updateQty();
        },
            
        remove: function(e) {
            this.item.decrease();
            this.updateQty();
        },
    
        // ui methods
        updateQty: function(e) {
            $('#item_' + this.item.pid + ' #qty')
                .text(this.item.quantity)
                .effect("highlight", {}, 1500);
        }
    });
})