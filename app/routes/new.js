import Ember from 'ember';

export default Ember.Route.extend({
    actions: {
          willTransition: function(transition) {
            this.controller.set('noErrors').clear();
            this.controller.set('noFilledForm').clear();
          }
        },
    model : function() 
    {
       
    }
    
});
