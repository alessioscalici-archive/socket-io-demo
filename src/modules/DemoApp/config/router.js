
/**
 * @ngdoc object
 * @name DemoApp.config:route
 *
 * @description
 *
 *    Route configuration. In this file resides the configuration for ui-router states
 *
 * @requires $stateProvider
 * @requires $urlRouterProvider
 *
 */
angular.module('DemoApp').config(function ($stateProvider, $urlRouterProvider) {
  'use strict';


  // default url
  $urlRouterProvider.otherwise('/chat');


  // routes

  $stateProvider

    // this is the parent state of the application.
    .state('app', {
      abstract: true,
      templateUrl: 'modules/DemoApp/templates/index.jade',
      controller: 'ApplicationCtrl'
    })

    // the three children views
    .state('app.chat', {
      url: '/chat',
      templateUrl: 'modules/DemoApp/templates/chat.jade',
      controller: 'ChatCtrl'
    })
    .state('app.carousel', {
      url: '/carousel',
      templateUrl: 'modules/DemoApp/templates/carousel.jade',
      controller: 'CarouselCtrl'
    })
    .state('app.settings', {
      url: '/settings',
      templateUrl: 'modules/DemoApp/templates/settings.jade',
      controller: 'SettingsCtrl'
    })
  ;


});