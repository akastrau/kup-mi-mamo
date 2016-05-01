import Ember from 'ember';

export default Ember.Controller.extend({
    sortProperties: ['timestamp'],
    sortAscending: true, // sorts vehicles by timestamp
    noErrors: null,
    noFilledForm: null,
    actions:
    {
    validatePlace: function() {
      //
      // console.log("It works! Put some logic here :)");
      // Ember.$("#vPlace").addClass("has-error has-feedback");
      // Ember.$("#vState").append('<span class="glyphicon glyphicon-warning-sign form-control-feedback"></span>');
      // Ember.$("#vState").append('<span class="help-block">Place is incorrect!</span>');
      
    }},
  addVehicle: function() {
    if (this.formIsValid()) {
      var vehicle = this.createControllerFromInputs();
      vehicle.save();
      this.resetForm();
      this.set("noErrors", true);
    }
    else  {
        this.set("noFilledForm", true);
        this.set("noErrors", false );
    }
  },
    createControllerFromInputs: function() {
    var inputMark = this.get('mark');
    var inputPlace = this.get('place');
    return this.store.createRecord('vehicle', 
        {
            mark: inputMark,
            place: inputPlace,
            timestamp: new Date().getTime()
        });
  },
  formIsValid: function() {
    var inputMark = this.get('mark');
    var inputPlace = this.get('place');
    if (inputMark === undefined || inputPlace === undefined || inputMark.trim() === "" || inputPlace.trim() === "") {
      return false;
    }
    return true;
  },
  resetForm: function() {
    this.set('mark', '');
    this.set('place', '');
    this.set('noErrors', null);
    this.set('noFilledForm', null);
  }
    });
