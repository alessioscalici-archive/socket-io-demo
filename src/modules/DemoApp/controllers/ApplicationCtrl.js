/**
 * @ngdoc controller
 * @name DemoApp.controller:ApplicationCtrl
 *
 * @requires $scope
 *
 * @description
 *
 * The parent controller of all views. It contains the links to the children views
 *
 */
angular.module('DemoApp').controller('ApplicationCtrl', function ($scope){
  'use strict';





  var listeners = [

    $scope.$on('socket:message', function (ev, data) {
      console.log('APPLICATION!', data);
    }),

    // detach all listeners when destroying the scope
    $scope.$on('$destroy', function (ev) {
      angular.forEach(listeners, function (detach) {
        detach();
      });
    })

  ];

});