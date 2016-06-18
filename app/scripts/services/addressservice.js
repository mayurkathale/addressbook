'use strict';

/**
 * @ngdoc service
 * @name addressBookApp.AddressService
 * @description
 * # AddressService
 * Service in the addressBookApp.
 */
angular.module('addressBookApp')
  .service('AddressService', function (localStorageService) {
    var addresses = [{
      'id': 1,
      'fname' : 'Mayur',
      'lname' : 'Kathale',
      'email' : 'mayur.kathale@gmail.com',
      'country' : 'India'
    },{
      'id': 2,
      'fname' : 'Aditi',
      'lname' : 'Sharma',
      'email' : 'aditi.sharma@gmail.com',
      'country' : 'Haiti'
    },
      {
        'id': 3,
        'fname' : 'Shahid',
        'lname' : 'Kapoor',
        'email' : 'adit.kathale@gmail.com',
        'country' : 'Poland'
      },
      {
        'id': 4,
        'fname' : 'Pooja',
        'lname' : 'Kat',
        'email' : 'puja.kat@gmail.com',
        'country' : 'India'
      },
      {
        'id': 5,
        'fname' : 'Jane',
        'lname' : 'Doe',
        'email' : 'jane.doe@gmail.com',
        'country' : 'Austria'
      },
      {
        'id': 6,
        'fname' : 'Jonny',
        'lname' : 'Walker',
        'email' : 'jon.walker@gmail.com',
        'country' : 'Brazil'
      },
      {
        'id': 7,
        'fname' : 'Walter',
        'lname' : 'White',
        'email' : 'walt.w@gmail.com',
        'country' : 'Mauritius'
      }];
    if(localStorageService.get('key')==null) {
      localStorageService.set('key', {'addresses': addresses, 'id':addresses.length+1});
    }
    addresses = localStorageService.get('key');
    var id = addresses.id;
    var storedAddresses = addresses.addresses;

    this.getAddressList = function() {
      return storedAddresses;
    };
    this.saveAddress = function(address) {
      address.id = id;
      id++;
      storedAddresses.push(address);
      localStorageService.set('key', {'addresses': storedAddresses, 'id':id});
    };
    this.updateAddress = function(address) {
      storedAddresses.forEach(function(value, index) {
        if(value.id == address.id){
          value.fname = address.fname;
          value.lname = address.lname;
          value.email = address.email;
          value.country = address.country;
          localStorageService.set('key', {'addresses': storedAddresses, 'id':id});
        }
      });
    };
    this.deleteAddress = function(address) {
      return storedAddresses;
    };
    this.getAddressById = function(id) {

        var found = false;
        for(var i = 0; i < storedAddresses.length; i++) {
          if(storedAddresses[i].id == id) {
            return storedAddresses[i];
          }
        }
        if(!found) {
          return {};
        }
    };
    this.deleteAddressById = function(id){
      var index = -1;
      for(var i = 0; i < storedAddresses.length; i++) {
        if(storedAddresses[i].id == id) {
          index = i;
        }
      }
      if(index != -1) {
        storedAddresses = removeByAttr(storedAddresses, 'id', id);
        localStorageService.set('key', {'addresses': storedAddresses, 'id':id});
      }
    };

    var removeByAttr = function(arr, attr, value){
      var i = arr.length;
      while(i--){
        if( arr[i]
          && arr[i].hasOwnProperty(attr)
          && (arguments.length > 2 && arr[i][attr] === value ) ){

          arr.splice(i,1);

        }
      }
      return arr;
    }
  });
