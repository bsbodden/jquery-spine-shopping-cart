// Create the Item model.
var Item = Spine.Model.setup("Item", ["name", "pid", "price", "quantity"]);

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
        this.save();
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
        this.save();
    },
    // 
    label: function() {
        return (this.name + " - $" + this.price);
    }
    
});
