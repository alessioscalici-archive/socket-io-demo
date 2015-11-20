
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


  // solves the ui-router trailing slash problem
  // IMPORTANT: define every state with a trailing slash in the URL path
  /* istanbul ignore next  */
  // $urlRouterProvider.rule(function ($injector, $location) {
  //   var path = $location.url();

  //   // check to see if the path already has a slash where it should be
  //   if (path[path.length - 1] === '/' || path.indexOf('/?') > -1) {
  //     return;
  //   }
  //   if (path.indexOf('?') > -1) {
  //     return path.replace('?', '/?');
  //   }
  //   return path + '/';
  // });


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