/*jshint strict: false */
/**
 * @ngdoc overview
 * @name DemoApp
 *
 * @description
 * The main app module, it defines application-wide configurations as routes, translations, constants etc.
 *
 * @requires ui.router
 *
 */
angular.module('DemoApp', [
  'ui.router',
  'btford.socket-io',
  'angular-carousel',
  'templates-main'
]);
