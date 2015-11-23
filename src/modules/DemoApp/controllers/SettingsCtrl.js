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


  // ===================== EXPOSED METHODS ================= //




  // ===================== INITIALIZATION ================= //

  $scope.settings = Current.settings;



});