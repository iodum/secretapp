import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  year: DS.attr(),
  pantone_value: DS.attr()
});
