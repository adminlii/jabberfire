import DS from 'ember-data';

export default DS.Model.extend({
  'user_id': DS.attr('number'),
  'firstname': DS.attr('string'),
  'lastname': DS.attr('string'),
  'email': DS.attr('string'),
  'username': DS.attr('string'),
  'employee_id': DS.attr('string'),
  'status': DS.attr('string'),
  'roles': DS.hasMany('role', { async:false }),
  'departments': DS.hasMany('department', { async:false }),
  'messages': DS.hasMany('message', { async:true })
});

