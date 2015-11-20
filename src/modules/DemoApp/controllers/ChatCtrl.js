/**
 * @ngdoc controller
 * @name DemoApp.controller:ChatCtrl
 *
 * @requires $scope
 *
 * @description
 *
 * The controller of the Chat view
 *
 */
angular.module('DemoApp').controller('ChatCtrl', function ($scope){
  'use strict';


  // ===================== EXPOSED METHODS ================= //






  // ===================== INITIALIZATION ================= //


  var listeners = [

    $scope.$on('socket:message', function (ev, data) {
      console.log('message!', data);
    }),

    // detach all listeners when destroying the scope
    $scope.$on('$destroy', function (ev) {
      angular.forEach(listeners, function (detach) {
        detach();
      });
    })

  ];


});