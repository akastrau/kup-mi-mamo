import Ember from 'ember';

export default Ember.Controller.extend({
    sortProperties: ['timestamp'],
    sortAscending: true, // sorts vehicles by timestamp
    noErrors: null,
    noFilledForm: null,
    // actions: {
    //     publishVehicle : function() {
    //     var inputPlace = this.get('mark');
    //     var inputMark = this.get('place');
    //     var newVehicle = this.store.createRecord('vehicle', 
    //     {
    //         mark: inputMark,
    //         place: inputPlace,
    //         timestamp: new Date().getTime()
    //     });
        
       
    //     if (inputMark.trim() === "" || inputPlace.trim() === ""  || inputPlace === undefined || inputMark === undefined)
    //     {
    //          this.set("noFilledForm", true);
             
    //     }
    //     else 
    //     {
    //         newVehicle.save();
    //         this.set("place", '');
    //         this.set("mark", '');
    //         this.set("noErrors", true);
            
    //     }
        
    //     }
    // },
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
    // }
    });
