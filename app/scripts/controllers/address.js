'use strict';

/**
 * @ngdoc function
 * @name addressBookApp.controller:AddressCtrl
 * @description
 * # AddressCtrl
 * Controller of the addressBookApp
 */
angular.module('addressBookApp')
  .controller('AddressCtrl', function ($scope, $state, $stateParams, AddressService, CountryService) {
    $scope.countriesList = CountryService.getCountries();
    if($stateParams.id != undefined) {
      $scope.address = AddressService.getAddressById($stateParams.id);
    }
    $scope.addAddress = function() {
      AddressService.saveAddress($scope.address);
      $state.go('home');
    }
    $scope.updateAddress = function() {
      AddressService.updateAddress($scope.address);
      $state.go('home');
    }
    $scope.deleteAddress = function() {
      AddressService.deleteAddress($scope.address);
    }
  });
