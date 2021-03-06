/*global Ember */
import Ember from 'ember';
import EmberValidations from 'ember-validations';

export default Ember.ArrayController.extend(Ember.Evented, EmberValidations.Mixin, {
  authenticator: 'simple-auth-authenticator:jwt',
  observeable_options: function(){
    this.trigger('dataDidChange', this.get('multipleSelectValue'));
  }.observes('options.@each'),
  options: function() {
    var self = this;
    var multipleSelectValue = this.get('multipleSelectValue')
    var fucking_array = Ember.A([]);

    if(multipleSelectValue === undefined || multipleSelectValue.length <= 0){
      return this.get('department_list').filter(function(department){return department.get('parent_id') == null});
    }

    var dept = this.get('department_list').find(function(department){return department.get('id') == multipleSelectValue.get('lastObject')});

    if(dept.get('parent_id') == null){
      fucking_array.addObject(dept);
      return fucking_array.addObjects(this.get('department_list').filter(function(department){return department.get('parent_id') == dept.get('id')}));
    }


    var parent = this.get('department_list').find(function(department){
      return department.get('id') == dept.get('parent_id');
    });

    if(parent != null){
      fucking_array.addObject(dept);
    }

    while(parent.get('parent_id') !== null){
      fucking_array.pushObject(parent);
      parent = this.get('department_list').find(function(department){return department.get('id') == parent.get('parent_id')})
    }
    fucking_array.addObject(parent);
    fucking_array.addObject(dept).reverse();

    var fuckity = fucking_array.addObjects(this.get('department_list').filter(function(department){return department.get('parent_id') == dept.get('id')}))
    return fuckity


  }.property('multipleSelectValue.@each', 'department_list', 'department_list.@each'),


  selectedDepartments: Ember.A([]),
  selectedDepartmentsObserver: function(){
    var department_paths = Ember.A([]);

    var selected_departments = this.get('selectedDepartments');
    for(var i = 0; i < selected_departments.length; i++){
      var inner_dept_path = Ember.A([]);
      var dept = selected_departments[i];

      var parent = this.get('department_list').find(function(d){
        return d.get('id') == dept.get('parent_id');
      });

      if(parent != undefined) {
        inner_dept_path.addObject(dept);


        while (parent.get('parent_id') !== null) {
          inner_dept_path.pushObject(parent);
          parent = this.get('department_list').find(function (d) {
            return d.get('id') == parent.get('parent_id')
          })
        }
      }
      inner_dept_path.addObject(parent);
      inner_dept_path.addObject(dept).reverse();

      department_paths.addObject(inner_dept_path);
    }

    selected_departments = Ember.A([]);
    return department_paths;
  }.property('selectedDepartments.@each', 'selectedDepartments'),
  actions: {
    didTouchUpOnAddDepartment: function(){
      var multiple_select_value = this.get('multipleSelectValue');
      var selected_departments = this.get('selectedDepartments');

      if (multiple_select_value !== undefined && multiple_select_value.length > 0){

        var department = this.get('department_list').find(function(department){
          return department.get('id') == multiple_select_value.get('lastObject')
        });

        selected_departments.addObject(department);

        this.set('multipleSelectValue', []);

        $("#department_select").trigger("chosen:updated");
      }
    },
    didTouchUpOnSave: function() {
      var self = this;

      // Set up attributes used
      var selectedDepartments = this.get('selectedDepartments');
      var selectedRole = this.get('selectedRole');
      console.log('00000')
      console.log(selectedDepartments.get('lastObject.id'));

      // Create the local record
      var department = this.get('store').createRecord('department', {
        'name': this.get('name'),
        'description': this.get('description'),
        'id': this.get('department_id'),
        'parent_id': selectedDepartments.get('lastObject.id')
      });

      // Get the role


      // Push the role onto the user


      department.save()
        .then(function () {
          self.transitionToRoute('users');
        })
        .catch(function (err) {
          console.log(err)
        })
        .finally(function () {

        })
    }

  },
  validateInput: function(){
    var self = this;

    var set_status = function(item, selector){
      if(self.get('errors.' + item ) !== undefined && self.get('errors.' + item).length !== 0) {
        selector.removeClass('has-default');
        selector.addClass('has-error');

      } else {
        selector.removeClass('has-error');
        selector.addClass('has-default');
      }
    };

    this.validate().then(function() {
      set_status('firstname', $('#firstname'));
      set_status('lastname', $('#lastname'));
      set_status('email', $('#email'));
    }).catch(function() {
        set_status('firstname', $('#firstname'));
        set_status('lastname', $('#lastname'));
        set_status('email', $('#email'));
      }
    )
  }.observes('firstname', 'lastname', 'email')

});
