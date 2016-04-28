import Ember from 'ember';

export default Ember.Route.extend({
    actions: {
          willTransition: function() {
            this.controller.set('noErrors').clear();
            this.controller.set('noFilledForm').clear();
          }
        },
    model : function() 
    {
       
    }
    
});
