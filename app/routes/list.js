import Ember from 'ember';

export default Ember.Route.extend({
    
    
    actions: 
    {
        loading: function () {
            alert("Loading...  ");
        },
    }
    model : function() {
        return this.store.findAll('vehicle');
    }
});
