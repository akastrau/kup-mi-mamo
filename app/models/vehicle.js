import Model from 'ember-data/model';
import attr from 'ember-data/attr';

export default Model.extend({
  mark: attr('string'),
  place: attr('string'),
  timestamp: attr('number')
});
