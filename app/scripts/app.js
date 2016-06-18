'use strict';

/**
 * @ngdoc overview
 * @name addressBookApp
 * @description
 * # addressBookApp
 *
 * Main module of the application.
 */
angular
  .module('addressBookApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.router',
    'LocalStorageModule'
  ])
  .config(function ($stateProvider, $urlRouterProvider, localStorageServiceProvider) {
    localStorageServiceProvider
      .setPrefix('addressBook');
    $urlRouterProvider.otherwise("/home");
    $stateProvider
      .state('home', {
        templateUrl: '../app/views/home.html',
        controller: 'HomeCtrl',
        url: '/home'
      })
      .state('address', {
        templateUrl: '../app/views/address.html',
        controller: 'AddressCtrl',
        url: '/address'
      })
      .state('address.add', {
        templateUrl: '../app/views/address.add.html',
        controller: 'AddressCtrl',
        url: '/add'
      })
      .state('address.edit', {
        templateUrl: '../app/views/address.add.html',
        controller: 'AddressCtrl',
        url: '/edit/:id'
      });
  });
