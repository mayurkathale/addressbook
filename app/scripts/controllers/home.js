'use strict';

/**
 * @ngdoc function
 * @name addressBookApp.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the addressBookApp
 */
angular.module('addressBookApp')
  .controller('HomeCtrl', function ($scope, $stateParams, AddressService, CountryService) {
    $scope.filterVar = "";
    $scope.filterType = "";
    CountryService.getCountries();
    $scope.addresses = {};
    $scope.addresses = AddressService.getAddressList();
    $scope.filterType = "";
    $scope.filterText = "";
    $scope.displayFilterText ="";
    var displayFilterTextMapping = {"":"All",
      "fname":"Name",
      "email":"Email",
      "country":"Country"};

    $scope.deleteAddressById = function(id) {
      AddressService.deleteAddressById(id);
    };
    $scope.setFilterType = function(type){
      $scope.filterType = type;
      filterValueSetter();
    };
    $scope.$watch('filterText',function(){
      filterValueSetter();
    });

    var filterValueSetter = function() {
      if($scope.filterType == "") {
        $scope.filterVar = $scope.filterText;
      }
      else {
        var tempType = {};
        tempType[$scope.filterType] = $scope.filterText;
        $scope.filterVar = tempType;
        console.log($scope.filterVar);
      }
      $scope.displayFilterText = displayFilterTextMapping[$scope.filterType];
    }
  });
