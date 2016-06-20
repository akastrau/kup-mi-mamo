import Ember from 'ember';

export default Ember.Route.extend({
    // actions:
    // {
    //       willTransition: function(transition) {
    //      //   this.controller.set('vehicle').clear();
    //        // this.controller.set('place').clear();
    //       }
    // },
    model : function() {
       return this.get('store').createRecord('vehicle');
    },

    deactivate : function() {
        this.get('currentModel').destroyRecord();
    }

});
