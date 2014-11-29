'use strict';

/**
 * @ngdoc overview
 * @name test3App
 * @description
 * # test3App
 *
 * Main module of the application.
 */

angular.module('test3App', [
    'ngAnimate',
    'ngResource',
    'ui.router'
  ]).config(function ($stateProvider, $urlRouterProvider) {
    console.log($stateProvider);

    $stateProvider
      .state('test', {
            url: '/test'
        })
      .state('main', {
        url: '/state',
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        onEnter: function(){
            console.log('entering main state');
        }
      })
      .state('about', {
        url: '/about',
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      });
    $urlRouterProvider.otherwise('/');
   // $locationProvider.html5Mode(true);
  });
