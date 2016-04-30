import Ember from 'ember';

export default Ember.Controller.extend({
    sortProperties: ['timestamp'],
    sortAscending: true, // sorts vehicles by timestamp
    noErrors: null,
    noFilledForm: null,
    actions:
    {
    validatePlace: function() {
      console.log("It works! Put some logic here :)");
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
