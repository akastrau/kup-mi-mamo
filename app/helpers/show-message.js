import Ember from 'ember';

export function showMessage(params/*, hash*/) {
  return params[0];
}

export default Ember.Helper.helper(showMessage);
