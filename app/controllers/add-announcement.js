import Ember from 'ember';

export default Ember.Controller.extend({
  noErrors: null,
  noFilledForm: null,
  actions:
  {
    validateForm : function() {
      //Put logic here
    }
  },
  formIsValid : function() {
    var Title = this.get('title');
    var SaleType = this.get('saleType');
    var DeliveryType = this.get('deliveryType');
    var Description = this.get('description');
    var ItemType = this.get('itemType');
    var Keywords = this.get('keywords'); //seperated by ","

    if (Title.trim() !== "" || SaleType.trim() !== "" || DeliveryType.trim() !== "" || Description.trim() !== "" ||
        ItemType.trim() !== "" || Keywords.trim() !== "")
        {
          console.log("Validation successful!");
          return true;
        }
    else {
      console.log('Validation failed!');
      return false;
    }
  },
  createRecord : function(){
    var Title = this.get('title');
    var Id = (Math.floor(Math.random() + 1) * 0x1ffff);
    var SaleType = this.get('saleType');
    var DeliveryType = this.get('deliveryType');
    var Description = this.get('description');
    var ItemType = this.get('itemType');
    var Keywords = this.get('keywords'); //seperated by ","

    return this.store.createRecord('announcement',
        {
            title: Title,
            id: Id,
            saleType: SaleType,
            deliveryType: DeliveryType,
            description: Description,
            itemType: ItemType,
            keywords: Keywords
        });
  },
  addAnnouncement : function() {
    if (this.formIsValid()) {
      var announcement = this.createRecord();
      announcement.save();
      this.resetForm();
      this.set('noErrors', true);
    }
    else {
      this.set("noFilledForm", true);
      this.set("noErrors", false );
    }
  },
  resetForm : function() {
    this.set('title', '');
    this.set('saleType', '');
    this.set('deliveryType', '');
    this.set('description', '');
    this.set('itemType', '');
    this.set('keywords', '');
    this.set('noErrors', null);
    this.set('noFilledForm', null);
  }

});
