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
    'ui.router'
  ])
  .config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/home");
    $stateProvider
      .state('home', {
        templateUrl: '../views/home.html',
        controller: 'HomeCtrl',
        url: '/home'
      })
      .state('address', {
        templateUrl: '../views/address.html',
        controller: 'AddressCtrl',
        url: '/address'
      })
      .state('address.add', {
        templateUrl: '../views/address.add.html',
        controller: 'AddressCtrl',
        url: '/add'
      })
      .state('address.edit', {
        templateUrl: '../views/address.add.html',
        controller: 'AddressCtrl',
        url: '/edit/:id'
      });
  });
