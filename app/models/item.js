// Create the Item model.
var Item = Spine.Model.sub();
Item.configure("Item", "name", "pid", "price", "quantity");

// Persist model between page reloads.
Item.extend(Spine.Model.Local);

// Instance methods
Item.include({
    //
    total: function() {
        return (this.price * this.quantity);
    },
    //
    increase: function(quantity) {
        quantity = (typeof(quantity) != 'undefined') ? quantity : 1;
        this.quantity = this.quantity + quantity;
		this.trigger("quantityChanged");
    },
    //
    decrease: function(quantity) {
        quantity = (typeof(quantity) != 'undefined') ? quantity : 1;
        if (this.quantity >= quantity) {
            this.quantity = this.quantity - quantity;
        }
        else {
            this.quantity = 0;
        }
		this.trigger("quantityChanged");
    },
    // 
    label: function() {
        return (this.name + " - $" + this.price);
    }
    
});
