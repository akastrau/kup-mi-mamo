import Ember from 'ember';

export default Ember.Controller.extend({
    sortProperties: ['timestamp'],
    sortAscending: true, // sorts vehicles by timestamp
    noErrors: null,
    noFilledForm: null,
    actions: {
        publishVehicle : function() {
        var newVehicle = this.store.createRecord('vehicle', 
        {
            mark: this.get('mark'),
            place: this.get('place'),
            timestamp: new Date().getTime()
        });
        
        if (this.get('place') == "" || this.get('mark') == "" || this.get('place') == undefined || this.get('mark') == undefined)
        {
             this.set("noFilledForm", true);
        }
        else 
        {
            newVehicle.save();
            this.set("noErrors", true);
        }
        
        }
    }
    
    
    });
