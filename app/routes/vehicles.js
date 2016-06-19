import Ember from 'ember';

export default Ember.Route.extend({
  queryParams: {
    search: {
      refreshModel: true
    }
  },
  model: function(params) {
    return this.store.query('vehicle', {filter: {mark: params} });
  },
  actions: {
      queryParamsDidChange: function() {
        this.refresh();
      }
    }
});
