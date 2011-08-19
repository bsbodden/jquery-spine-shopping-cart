jQuery(function($){
    window.CartItem = Spine.Controller.create({ 
        proxied: ["render", "add", "remove", "updateQty"],
        
        // 
        init: function(){
            var cartItem = this;
            
            this.item.bind("update", this.updateQty);
            
            $('.add', this.el).live('click', function(e) { 
                cartItem.add(); 
                e.preventDefault(); 
            });
            
            $('.remove', this.el).live('click', function(e) { 
                cartItem.remove(); 
                e.preventDefault(); 
            });
        },
        
        render: function(){
            this.el = ($("#cartItem").tmpl(this.item));
            
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
            $('#qty', this.el)
                .text(this.item.quantity)
                .effect("highlight", {}, 1500);
        }
    });
})