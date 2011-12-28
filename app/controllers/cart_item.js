jQuery(function($){
    window.CartItem = Spine.Controller.sub({ 
        
        init: function(){
            var cartItem = this;
            
            this.item.bind("quantityChanged", function() { cartItem.updateQty() });
            
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
        },
            
        remove: function(e) {
            this.item.decrease();
        },
    
        // ui methods
        updateQty: function() {
            $('#item_' + this.item.pid + ' #qty')
                .text(this.item.quantity)
                .effect("highlight", {}, 1500);
        }
    });
})