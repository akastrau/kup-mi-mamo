import Ember from 'ember';

export default Ember.Route.extend({
  model : function() {
     return this.get('store').createRecord('announcement');
  },

  deactivate : function() {
      this.get('currentModel').destroyRecord();
  }
});
