import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import hasMany from 'ember-data/relationships';

export default Model.extend({
  title: attr('string '),
  id: attr('number'),
  creationDate: attr('string', {
    defaultValue : function() {
      return new Date();
    }
  }),
  saleType: attr('string'),
  deliveryType: attr('string'),
  description: attr('string'),
  itemType: attr('string '),
  keywords: hasMany('keyword')
});
