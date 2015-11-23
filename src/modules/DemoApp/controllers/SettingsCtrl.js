/**
 * @ngdoc controller
 * @name DemoApp.controller:SettingsCtrl
 *
 * @requires $scope
 *
 * @description
 *
 * The controller of the Settings view
 *
 */
angular.module('DemoApp').controller('SettingsCtrl', function ($scope, Current){
  'use strict';


  // ===================== INITIALIZATION ================= //

  // set the settings model
  $scope.settings = Current.settings;



});