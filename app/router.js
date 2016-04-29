import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('list');
  this.route('new');
  this.route('about');
  this.route('changelog');
});

export default Router;
