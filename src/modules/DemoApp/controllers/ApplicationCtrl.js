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
angular.module('DemoApp').controller('ApplicationCtrl', function ($scope, $state, ChatSocket){
  'use strict';



  $scope.messages = [];
  $scope.unreadMsgFlag = false;




  var listeners = [

    $scope.$on('NEW_MESSAGE', function (ev, data) {
      data.date = new Date();
      $scope.messages.push(data);

      if ($state.current.name !== 'app.chat') {
        $scope.unreadMsgFlag = true;
      }
    }),

    // detach all listeners when destroying the scope
    $scope.$on('$destroy', /* istanbul ignore next */ function (ev) {
      angular.forEach(listeners, function (detach) {
        detach();
      });
    })

  ];

});